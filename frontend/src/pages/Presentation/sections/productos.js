import * as React from 'react';
import { useState, useEffect } from 'react';

import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import RotatingCardProduct from "examples/Cards/RotatingCardProduct"
import RotatingCardFront from "examples/Cards/RotatingCardProduct/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCardProduct/RotatingCardBack";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";
import MKPagination from "components/MKPagination";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import VistaArbol from "pages/Presentation/sections/FiltrosDropdown";
import {Slider, Button, Select } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import CenteredBlogCardProduct from "examples/Cards/BlogCards/CenteredBlogCard Product";

function Productos({ resultadoBusqueda, resetProductos }) {
  console.log(resultadoBusqueda);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;
  const [totalPages, setTotalPages] = useState(1);
  const [productos, setProductos] = useState([]);
  const [parsedData, setParsedData] = useState(null);

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  const obtenerProductos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/productos');
      console.log('Respuesta del backend:', response.data); // Mensaje de depuración
      if (response.data.productos && response.data.productos.length > 0) {
        setProductos(response.data.productos);
        const totalProductos = response.data.productos.length;
        setTotalPages(Math.ceil(totalProductos / productsPerPage));
      } else {
        console.error('La respuesta del backend no contiene productos válidos.');
      }
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  useEffect(() => {
    try {
      if (resultadoBusqueda) {
        console.log('Resultado de búsqueda:', resultadoBusqueda); // Mensaje de depuración
        const parsedResult = JSON.parse(resultadoBusqueda);
        console.log('Resultado de búsqueda parseado:', parsedResult); // Mensaje de depuración
        if (parsedResult && Array.isArray(parsedResult)) {
          setParsedData(parsedResult);
        }
      }
    } catch (error) {
      console.error('Error al analizar el resultado de la búsqueda:', error);
    }
  }, [resultadoBusqueda]);

  useEffect(() => {
    obtenerProductos();
  }, [resetProductos]);


  

  return (
    <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
        <Grid container spacing={3}>
        {productos
          .filter(producto => {
            if (!parsedData || !parsedData.length) {
              console.log('No hay filtros seleccionados'); // Mensaje de depuración
              return true; // Mostrar todos los productos si no hay filtros seleccionados
            }
            return parsedData.every(filter => {
              const key = Object.keys(filter)[0]; // Obtener el nombre del atributo de filtro (Modelo, Motor, Color, etc.)
              console.log('Filtro actual:', filter); // Mensaje de depuración
              console.log('Producto actual:', producto); // Mensaje de depuración
              return !filter[key].length || filter[key].includes(producto[key]);
            });
          })
          .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
          .map(producto => (
            <Grid key={producto.id} lg={3} xs={12} sm={6}>
                
              <CenteredBlogCardProduct
                image={JSON.parse(producto.Portada)[0]['img']}
                title={producto.Modelo}
                description={producto.Version}
                precio = {JSON.parse(producto.Portada)[0]['precio']}
                medio = {JSON.parse(producto.Portada)[0]['medio']} 
                motor = {JSON.parse(producto.Portada)[0]['motor']} 
                cambio = {JSON.parse(producto.Portada)[0]['cambio']}
                cuota = {JSON.parse(producto.Portada)[0]['cuota'].split("/")[0]} 
                espec = {JSON.parse(producto.Portada)[0]['espec']}
                entrega = {JSON.parse(producto.Portada)[0]['entrega']}
                modelo2 = {producto.Modelo_2}
                action={{
                  type: "internal",
                  route: `/productos/${producto.id}`,
                  color: "info",
                  label: "Descúbrelo"
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 6, width: '100%' }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
            variant="contained"
            size="large"
            sx={{
              '& .Mui-selected': {
                backgroundColor: '#344767',
                color: '#fff',
              },
              display: 'inline-block',
            }}
          />
        </Box>
    </Box>
  );
}

export default Productos;
