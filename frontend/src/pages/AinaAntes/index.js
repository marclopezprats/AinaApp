import * as React from 'react';
import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ResponsiveAppBar from '../AinaHome/NavbarTest';
import { useTranslation } from 'react-i18next';
import AinaCarRentACAR from "assets/images/atencion.webp";

import instalacion1 from "assets/images/instalacio-1.png";
import instalacion2 from "assets/images/instalacio-2.png";
import instalacion3 from "assets/images/instalacio-3.png";
import instalacion4 from "assets/images/instalacio-4.png";
import instalacion5 from "assets/images/instalacio-5.png";
import instalacion6 from "assets/images/instalacio-6.png";
import instalacion7 from "assets/images/instalacio-7.png";
import instalacion8 from "assets/images/instalacio-8.png";
import footerRoutes from "footer.routes";
import Container from '@mui/material/Container';
import Whatsapp from '../AinaHome/whatsapp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import KarveAntes from './karveAntes';

import InfoIcon from '@mui/icons-material/Info';
import Chip from '@mui/material/Chip';

import Footer from '../AinaHome/footer';


const CustomTable = ({ columns, data = [] }) => {
  return (
    <Card sx={{ width: '100%', overflowX: 'auto', margin: '20px', boxShadow: 3 ,marginBottom: '100px', marginTop: '-60px'}}>
      <CardContent>
        <Box sx={{ minWidth: 650,  borderRadius: 1 }}>
          {/* Table Header */}
          <Grid container sx={{ backgroundColor: '#f5f5f5', padding: '8px 0', borderRadius: '12px' }}>
            {columns.map((column, index) => (
              <Grid item xs={12 / columns.length} key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MKTypography variant="subtitle1" align="center" sx={{ fontWeight: 'bold', color: '#333', borderRadius: '12px' }}>
                  {column.headerName}
                </MKTypography>
              </Grid>
            ))}
          </Grid>

          {/* Check if data is empty */}
          {data.length === 0 ? (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
              <InfoIcon sx={{ color: '#ff5722', marginRight: '8px' }} />
              <MKTypography variant="body2" align="center" sx={{ color: 'red' }}>
                No data available
              </MKTypography>
            </Box>
          ) : (
            data.map((row, rowIndex) => (
              <Grid
                container
                key={rowIndex}
                sx={{
                  padding: '8px 0',
                  '&:hover': {
                    backgroundColor: '#f9f9f9',
                    borderRadius: '12px',
                  },
                  display: 'flex',
                  alignItems: 'center',
                }}
                mt={4}
              >
                {columns.map((column, colIndex) => (
                  <Grid item xs={12 / columns.length} key={colIndex} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MKTypography variant="body2" align="center" sx={{ color: '#555' , fontWeight: colIndex === 0 ? 'bold':'regular'}}>
                      {row[column.field] === '' ? (<Chip label="Sin coste" sx={{color:'#FFFFFF',  backgroundColor:"#25D366"}} />) :(row[column.field])}
                    </MKTypography>
                  </Grid>
                ))}
              </Grid>
            ))
          )}
        </Box>
      </CardContent>
    </Card>
  );
};




const columns = [
  { headerName: 'CARGOS POR SERVICIOS / GASTOS ADMINISTRATIVOS', field: 'service' },
  { headerName: 'per 1 día', field: 'perDay' },
  { headerName: 'per 7 días', field: 'perWeek' },
  { headerName: 'máximo per mes comenzado', field: 'perMonth' },
];

const data = [
  { service: 'CONDUCTOR JOVEN. MENORES DE 26 AÑOS', perDay: '12,50 EUR', perWeek: '87,50 EUR', perMonth: '198,44 EUR' },
  { service: 'CONDUCTOR ADICIONAL', perDay: '10,99 EUR', perWeek: '76,93 EUR', perMonth: '96,80 EUR' },
  { service: 'SERVICIO ENTREGA o RECOGIDA CIUDAD', perDay: '36,30 EUR', perWeek: 'Precio de reserva. Servicio de entrega y recogida disponible bajo petición en su oficina Ainacar', perMonth: '' },
  { service: 'SERVICIO ENTREGA o RECOGIDA FUERA CIUDAD (50 KM INCLUIDOS)', perDay: '72,60 EUR', perWeek: 'Precio por servicio (0,80 € km adicional). Servicio de entrega y recogida disponible bajo petición en su oficina Ainacar', perMonth: '' },
  { service: 'SERVICIO DE DEVOLUCION FUERA DEL HORARIO DE OFICINA EN FESTIVO', perDay: '24,20 EUR', perWeek: '36,30 EUR', perMonth: 'Este servicio de entrega y recogida está disponible bajo petición en su oficina Ainacar. Se aplica esta tasa adicional a todas las reservas / alquileres realizados fuera del horario de apertura.' },
  { service: 'REFUELING. SERVICIO DE RELLENAR COMBUSTIBLE', perDay: '24,20 EUR', perWeek: 'Cargo debido a que rellenar de combustible los vehículos requiere el desplazamiento de personal en el vehículo hasta la estación de servicio concertada o implica unos gastos en la gestión, control y mantenimiento de los depósitos de suministro de combustible.', perMonth: '' },
  { service: 'LIMPIEZA ESPECIAL', perDay: 'Según estado', perWeek: 'Tarifa de acuerdo con los valores de limpieza estipulados en el apartado Limpieza de Vehículos en la web www.ainacar.cat.', perMonth: '' },
  { service: 'GESTION ADMINISTRATIVA DE SANSIONS DE TRÁFICO', perDay: '36,30 EUR / sanción', perWeek: 'Se hará el cargo por cada boleto / expediente sancionador emitido por la Autoridad competente en relación al vehículo alquilado y por hechos sucedidos durante la vigencia del contrato de alquiler.', perMonth: '' },
  { service: 'GESTION ADMINISTRATIVA DE DAÑOS A LA VEHÍCULO', perDay: '60,50 EUR / expediente', perWeek: 'En caso de siniestro total, el importe de la tasa administrativa para la gestión de expedientes de daños es de 100,43 EUR.', perMonth: 'Se hará el cargo en el caso presente daños materiales producidos durante la vigencia del contrato de alquiler, cualquiera que sea su grado, la causa e independientemente de haber contratado coberturas adicionales. Sin perjuicio de lo anteriormente mencionado, este cargo no será aplicado respecto de los casos de accidente de circulación en que la responsabilidad sea claramente de otro vehículo, donde el conductor ha reconocido expresamente su responsabilidad a través de la declaración Amistosa accidente , siempre y cuando esté cumplimentada en su totalidad, firmada por ambos conductores, sin palabras, textos o dibujos tachones, ofrezca una versión clara y verídica del accidente y una de las 2 hojas originales se entregue al arrendatario por parte del arrendador, en el momento de la devolución del vehículo.' },
  { service: 'CARGO POR NO ENTREGAR PARTE ACCIDENTE', perDay: '92,12 EUR', perWeek: 'Por accidente', perMonth: '' },
  { service: 'PENALIZACIÓN POR NO DEVOLUCIÓN DE VEHÍCULOS EN ALQUILERES A LARGO PLAZO', perDay: '605,00 EUR / infracción', perWeek: 'En alquileres por períodos superiores a 28 días de alquiler, de no volverse el vehículo en la fecha señalada en el contrato de alquiler o por la superación de más de 100 kilómetros del kilometraje máximo señalado en el contrato de alquiler.', perMonth: '' },
  { service: 'CARGO POR ENTREGA DE VEHÍCULO DE SUSTITUCIÓN.', perDay: '302,50 EUR', perWeek: 'Cargo que deberá pagar el arrendatario si necesita un vehículo de sustitución durante el período de alquiler firmado por contrato, cualquiera que fuese este tiempo, siempre y cuando la necesidad de este vehículo de sustitución venga causada por negligencia del arrendatario y especialmente en caso de llenar el depósito con combustible erróneo o pérdida de llaves del vehículo. Adicionalmente, podría haber cargos de grúas asociadas que serían reclamados por el Departamento de Daños y se facturaría a razón de 1,20 EUR por kilómetro de recorrido desde el lugar donde se encuentre el vehículo hasta la oficina más cercana de Ainacar o el taller concertado más próximo de Ainacar en España.', perMonth: '' },
  { service: 'CARGOS POR ASISTENCIA EN CARRETERA', perDay: 'El coste del cargo de remolque para asistencia en carretera asciende a 1,20 EUR por kilómetro recorrido, hasta un importe máximo de 500 EUR', perWeek: 'Cuando la avería sea solucionada "in situ", sin necesidad de remolcar el vehículo, el cargo por el servicio ascenderá a 40 €. Si la asistencia en carretera viene motivada por un fallo mecánico no imputable a una actuación negligente por parte del arrendatario, el arrendatario no asumirá ningún coste por el servicio de asistencia en carretera. Se facturará al arrendatario un cargo por asistencia en carretera en el caso de que haya una avería en ruedas y / o cristales, y el arrendatario no haya contratado la cobertura WWI (Protección para parabrisas, luces y neumáticos) y se necesitara remolcar el vehículo. Se facturará si respectivamente el arrendatario no ha contratado el WWI o el SCDW, según corresponda, o ha realizado un uso prohibido o negligente del vehículo.', perMonth: '' },
  { service: 'CARGO POR RECOGIDA o DEVOLUCION EN AEROPUERTO', perDay: '24,20 EUR', perWeek: '', perMonth: '' },
  { service: 'CARGO POR RECOGIDA o DEVOLUCION EN PUERTO', perDay: '42,35 EUR', perWeek: '', perMonth: '' },
];


function AinaAntes() {
  const [valorHijo, setValorHijo] = useState('');
  const [appBarHeight, setAppBarHeight] = useState(0);
  const appBarRef = useRef(null);
  const { t, i18n } = useTranslation();

  const [isOpenReservation, setIsOpenReservation] = useState(false);
  const reservationDrawer = () => {
    setIsOpenReservation(!isOpenReservation);
  };

  useEffect(() => {
    if (appBarRef.current) {
      setAppBarHeight(appBarRef.current.clientHeight);
    }
  }, []);

  const manejarCambio = (nuevoValor) => {
    setValorHijo(nuevoValor);
    console.log(nuevoValor);
  };

  /*const isMobileDevice = () => {
    return window.innerWidth <= 1000;
  };*/

  const back = AinaCarRentACAR; // Assuming back is the background image

  const images = [
    instalacion1, instalacion2, instalacion3, instalacion4,
    instalacion5, instalacion6, instalacion7, instalacion8,
  ];

  return (
    <>
      <KarveAntes isOpenReservation={isOpenReservation} reservationDrawer={reservationDrawer} />

      <Box sx={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
        <Whatsapp />
        {/* Barra de navegación */}
        <Box
          ref={appBarRef}
          style={{
            position: 'sticky',
            top: valorHijo ? '15px' : '20px',
            transition: valorHijo ? 'top 1s ease-in' : 'top 0.0s ease-out',
            zIndex: 3,
          }}
        >
          <ResponsiveAppBar reservationDrawer={reservationDrawer} onCambio={manejarCambio} />
        </Box>
        <Box
          sx={{
            minHeight: "69vh",
            width: "100%",
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), white), url(${back})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: `-${appBarHeight}px`,
          }}
        >
          <MKBox
            sx={{
              justifyContent: "bottom",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Container>
              <Grid
                sx={{
                  marginTop: {
                    xs: `${appBarHeight * 2}px`,
                    sm: `${appBarHeight * 2}px`,
                    md: `${appBarHeight * 2}px`,
                    lg: `${appBarHeight}px`,
                  },
                }}
                container
                justifyContent="center"
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  xl={12}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <MKBox sx={{ maxWidth: '100%' }}>
                    <MKTypography
                      color="white"
                      variant="h1"
                      sx={{
                        fontFamily: 'Rodina-Regular',
                        textAlign: 'center',
                        lineHeight: 1,
                        fontSize: {
                          xs: '2.5rem',
                          sm: '3rem',
                          md: '4rem',
                          lg: '5rem',
                        },
                        textShadow: '0px 2px 60px rgba(0, 0, 0, 0.999)',
                      }}
                    >
                      {t('info_antes_de_alquilar')}
                    </MKTypography>
                    <MKTypography
                      color="white"
                      variant="h3"
                      sx={{
                        fontFamily: 'Rodina-Regular',
                        textAlign: 'center',
                        lineHeight: 1.5,
                        fontSize: {
                          xs: '1.5rem',
                          sm: '2rem',
                          md: '2rem',
                          lg: '2.5rem',
                        },
                        textShadow: '0px 2px 60px rgba(0, 0, 0, 0.999)',
                      }}
                    >
                      {t('info_antes_de_alquilar_subtitle')}
                    </MKTypography>
                  </MKBox>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Box>

        <Container sx={{ my: 4}}>
          <MKTypography variant="h4" gutterBottom>
          </MKTypography>
               <CustomTable columns={columns} data={data} />
      
        </Container>

        <MKBox bgColor="info" sx={{ mt: 4}}>
          <MKBox>
            <Suspense fallback={<div>Loading...</div>}>
              <Footer pt={6} px={1} content={footerRoutes} />
            </Suspense>
          </MKBox>
        </MKBox>
      </Box>

      
    </>
  );
}

export default AinaAntes;
