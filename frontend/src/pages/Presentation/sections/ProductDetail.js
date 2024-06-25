import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from "@mui/material/Card";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Breadcrumbs from "examples/Breadcrumbs";
import routes from "routes";
import footerRoutes from "footer.routes";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgImage from "assets/images/bg-presentation-renault-2.jpg";
import Container from "@mui/material/Container";
import MKTypography from "components/MKTypography";
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import MKBadge from "components/MKBadge";
import LogoSVG from "assets/images/kode_logo.svg";
import abstract from "assets/images/abstract.svg";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CenteredBlogCardEquip from "examples/Cards/BlogCards/CenteredBlogCardEquip";
import Pagination from '@mui/material/Pagination';
import axios from 'axios';

const publi = "Todos nuestros vehículos están en stock, por ello garantizamos entrega en 30 días";

function ProductDetail() {
    const isMobile = useMediaQuery('(max-width:600px)');
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [mostrarLogo, setMostrarLogo] = useState(false);
    const horarios = ["Mañana", "Tarde", "Noche"]; // Ejemplo de horarios
    const provinces = ["Provincia 1", "Provincia 2", "Provincia 3"]; // Ejemplo de provincias
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        email: '',
        modelo: '',
        horario: '',
        provincia: ''
      });


    
    // Estado para almacenar la página actual
    const [currentPage, setCurrentPage] = useState(1);

    // Función para cambiar de página
    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const obtenerDetallesProducto = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/productos/${id}/`);
                if (!response.ok) {
                    throw new Error('No se pudieron cargar los detalles del producto');
                }
                const data = await response.json();
                setProducto(data.producto);
            } catch (error) {
                console.error('Error al obtener los detalles del producto:', error);
            }
        };

        obtenerDetallesProducto();
    }, [id]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMostrarLogo(true);
        }, 3000); // Cambia a mostrar el logo después de 2 segundos

        return () => clearTimeout(timeout);
    }, []);

    if (!producto) {
        return <div>No encontrado...</div>;
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
    };

    // Array para almacenar las URLs de las imágenes del coche
    const carImages = [];

    // Generar las URLs de las imágenes y agregarlas al array
    for (let i = 0; i <= 8; i++) {
        const imageUrl = require(`assets/images/${producto.product_id}/${producto.product_id}-${i}.jpeg`);
        carImages.push(imageUrl);
    }

    const matrix = JSON.parse(producto.Caracteristicas);
    const carColor = matrix[0][0];
    const tapizeria = matrix[0][1];

    const matrix_ad = JSON.parse(producto.Caracteristicas_Ad);

    const matrix_Equipamiento = JSON.parse(producto.Equipamiento);

    // Define el número de tarjetas por página
    const cardsPerPage = 1;

    // Calcula el número total de páginas
    const totalPages = Math.ceil(matrix_Equipamiento[0].length / cardsPerPage);

    // Calcula el índice inicial y final de las tarjetas en la página actual
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    // Filtra las tarjetas para mostrar solo las de la página actual
    const visibleCards = matrix_Equipamiento[0].slice(startIndex, endIndex);
    

    
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:8000/api/contact_form/', formData);
          alert('Mensaje enviado exitosamente');
          setFormData({
            nombre: '',
            telefono: '',
            email: '',
            modelo: '',
            horario: '',
            provincia: ''
          });
        } catch (error) {
          console.error('Error:', error);
          alert('Error al enviar el mensaje');
        }
      };

      
    
    return (
        <>
            <DefaultNavbar
                routes={routes}
                action={{
                    type: "external",
                    route: "https://www.creative-tim.com/product/material-kit-react",
                    label: "contactanos",
                    color: "info",
                }}
                sticky
            />
            <MKBox
                minHeight="40vh"
                width="100%"
                sx={{
                    backgroundImage: `url(${abstract})`,
                    backgroundColor: "#1a1a1a",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Container>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} lg={7}>
                            {mostrarLogo ? (
                                <>
                                    <MKTypography
                                        variant="h1"
                                        color="white"
                                        mt={10}
                                        mb={1}
                                        fontFamily="MONTSERRAT"
                                    >
                                        ÚNETE A LA REVOLUCIÓN
                                    </MKTypography>
                                    <MKTypography
                                        variant="h4"
                                        color="white"
                                        mt={0}
                                        mb={1}
                                        fontFamily="MONTSERRAT"
                                        fontWeight={400}
                                    >
                                        #KodeCarsMarket
                                    </MKTypography>
                                </>
                            ) : (
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%", // Ajusta la altura del contenedor para que el logo esté centrado verticalmente
                                    marginTop: "20px", // Agrega un margen superior para bajar el logo
                                }}>
                                    <img
                                        src={LogoSVG}
                                        alt="Logo"
                                        style={{
                                            width: "300px", // ajusta el tamaño del logo
                                            height: "auto",
                                            //filter: "invert(1)", // cambia el color del logo a negro
                                        }}
                                    />
                                </div>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </MKBox>
            <Box sx={{ flexGrow: 1, p: 4, mt: -15 }}>
                <Grid container spacing={3} sx={{ mt: -3 }}>
                    <Grid xs={12} sm={3}>
                        <Box sx={{ p: 0, mx: { lg: 1 }, mb: 0 }} ml={-2}>
                            <MKBox component="section" bgColor="transparent" py={0}>
                                {!isMobile ? (
                                    <Breadcrumbs
                                        sx={{ p: 0, mt: 0 }}
                                        routes={[
                                            { label: "Home", route: "/" },
                                            { label: producto.Modelo },
                                        ]}
                                    />
                                ) : null}
                            </MKBox>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={9}></Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, p: 4, mt: -4 }}>
                <Grid container spacing={3}>
                    <Grid xs={12} sm={3}>
                        <Card sx={{ p: 0, mx: { lg: 1 }, mb: 2, pl: 2 }}>
                            <Box p={2} justifyContent="center" alignItems="center">











                                

                            <Accordion sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ mb: 0, ml: -2 }} // Anula el margin-bottom para eliminar el separador
    >
        <MKTypography variant="h5" sx={{ color: '#344767', fontWeight: 400 }}>
            <h2 style={{ color: '#344767' }}>Contactanos</h2>
        </MKTypography>
    </AccordionSummary>
    <AccordionDetails>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} mt={0} mr={2} justifyContent="center"> {/* Añadido justifyContent="center" para centrar horizontalmente */}
                <Grid item xs={12}>
                    <MKInput
                        fullWidth
                        label="Nombre y Apellidos"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <MKInput
                        fullWidth
                        label="Teléfono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <MKInput
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <MKInput
                        fullWidth
                        disabled
                        label="Modelo"
                        name={producto.Modelo + " " + producto.Version}
                        value={producto.Modelo + " " + producto.Version}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} mt={2} ml={-2} sx={{ textAlign: 'center' }}> {/* Añadido textAlign: 'center' para centrar el botón verticalmente */}
                    <MKButton type="submit" variant="contained" color="info">
                        Enviar
                    </MKButton>
                </Grid>
            </Grid>
        </form>
    </AccordionDetails>
</Accordion>










                            </Box>
                        </Card>
                        <Card sx={{ p: 2, mx: { lg: 1 }, mb: 0 }}>
                            <Box p={2}>
                                <h2 style={{ color: '#344767' }}>Equipamiento</h2>     
                            
                                {matrix_Equipamiento[0].map((elemento, index) => {
                                    const titulo = elemento.label.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()); // Obtiene el título de la sección del acordeón
                                    const items = elemento.items; // Obtiene los ítems dentro de la sección

                                    return (
                                        <Accordion key={index} sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls={`panel${index + 1}-content`}
                                                id={`panel${index + 1}-header`}
                                                sx={{ mb: 0, ml: -2 }} // Anula el margin-bottom para eliminar el separador
                                            >
                                                <MKTypography variant="h5" sx={{ color: '#344767', fontWeight: 400 }}>
                                                    {<h5 style={{ color: '#344767', fontWeight: 400 }}>{titulo}</h5>}
                                                </MKTypography>
                                            </AccordionSummary>
                                            <AccordionDetails >
                                                {items.map((item, itemIndex) => (
                                                    <div key={itemIndex} style={{ marginTop: '10px', marginBottom: '10px' }}>
                                                        <CenteredBlogCardEquip
                                                            image={item.Imagen}
                                                            title={item.Item}
                                                            description="ddd"
                                                        />
                                                    </div>
                                                ))}
                                            </AccordionDetails>
                                        </Accordion>
                                    );
                                })}
                            </Box>
                        </Card>
                        <Card sx={{ p: 0, mx: { lg: 1 }, mt: 2, pl: 2 }}>
                            <Box p={2}>
                                <h2 style={{ color: '#344767' }}>Calcula tu Cuota</h2>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Card sx={{ p: 0, mx: { lg: 1 }, mb: 3,display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#ffd415" }}>
                            <Box p={1}>
                                <h5 style={{ color: '#344767' }}>{publi}</h5>
                            </Box>
                        </Card>
                        <Box p={0}>
                            <Slider {...sliderSettings}>
                                {carImages.map((imageUrl, index) => (
                                    <div key={index} style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <div style={{ width: '100%', maxWidth: '900px', maxHeight: '900px', overflow: 'hidden', borderRadius: '15px' }}>
                                            <div style={{ width: '100%', paddingBottom: '100%', backgroundImage: `url(${imageUrl || bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Box>

                        <Box sx={{mt: 8}}>
                        <MKTypography  variant="caption" fontWeight="light" color="info">
                        Vehículos disponibles en stock, con plazo de entrega a confirmar en el punto de venta. Los precios recomendados incluyen impuestos, transporte y descuentos promocionales, pero excluyen gastos de matriculación y descuentos por financiamiento. La oferta es válida hasta el 30/04/2024. Para obtener información detallada, comunícate con tu Concesionario RENAULT.
                        </MKTypography>

                        
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <Card sx={{ p: 2, mx: { lg: 1 }, mb: 0 }}>
                            <Box p={2}>
                                <Box display="flex" sx={{ mb: 2 }}>
                                    <Box flex={1}>
                                        <h2 style={{ color: '#344767', textAlign: 'left' }}>{producto.Modelo}</h2>
                                    </Box>
                                    <Box flex={1} sx={{ textAlign: 'center' }}>
                                        <MKBadge
                                            badgeContent={<span style={{ fontSize: '1.2rem' }}>{producto.precio} / MES</span>}
                                            variant="contained"
                                            container
                                            size="md"
                                        />
                                    </Box>
                                </Box>

                                <h4 style={{ color: '#344767', fontWeight: 400 }}>{producto.Version}</h4>
                                <Divider variant="middle"  />
                                <Box display="flex" >
                                    <Box flex={1} >
                                        <h5>Color</h5>
                                    </Box>
                                    <Box flex={1} sx={{ textAlign: "center" }}>
                                        <h5 style={{ color: '#344767', fontWeight: 400 }}>{carColor}</h5>
                                    </Box>
                                </Box>
                                <Box display="flex">
                                    <Box flex={1}>
                                        <h5>Tapizeria</h5>
                                    </Box>
                                    <Box flex={1} sx={{ textAlign: "center" }}>
                                        <h5 style={{ color: '#344767', fontWeight: 400 }}>{tapizeria}</h5>
                                    </Box>
                                </Box>
                                {matrix_ad[0].map((elemento, index) => {
                                    const valorObj = Object.values(elemento)[0];
                                    const valorClave = Object.keys(valorObj)[0];
                                    const valorValor = Object.values(valorObj)[0];
                                    return (
                                        <div key={index}>
                                            <Divider variant="middle" />
                                            <Box display="flex">
                                                <Box flex={1}>
                                                    <h5 style={{ textAlign: 'left' }}>{valorClave.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}</h5>
                                                </Box>
                                                <Box flex={1} sx={{ textAlign: 'center' }}>
                                                    <h5 style={{ color: '#344767', fontWeight: 400 }}>{valorValor}</h5>
                                                </Box>
                                            </Box>
                                        </div>
                                    );
                                })}
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ p: 4 }}>
                <Card sx={{ p: 2, mx: { lg: 1 }, mb: 0 }}>
                    <Box p={2}>
                        <h2 style={{ color: '#344767' }}>Calcula tu Cuota</h2>
                    </Box>
                </Card>
            </Box>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default ProductDetail;
