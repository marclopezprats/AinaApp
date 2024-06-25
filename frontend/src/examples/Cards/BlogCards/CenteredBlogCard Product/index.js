import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import Divider from '@mui/material/Divider';
import icon_engine from "assets/images/icon-engine.png";
import icon_gear from "assets/images/icon-gear.png";
import icon_delivery from "assets/images/icon-delivery.png";

function CenteredBlogCardProduct({ image, title, description, action, precio, medio , motor ,cambio,cuota, espec, entrega, modelo2}) {
  
  function dividirTextoEnLineas(texto, palabrasPorLinea) {
    const palabras = texto.split(" ");
    let lineas = [];
    let lineaActual = "";
    palabras.forEach((palabra, index) => {
      lineaActual += palabra + " ";
      if ((index + 1) % palabrasPorLinea === 0 || index === palabras.length - 1) {
        lineas.push(lineaActual.trim());
        lineaActual = "";
      }
    });
    return lineas;
  }

  const palabrasPorLinea = 5; // Número de palabras por línea
  const lineasDescripcion = dividirTextoEnLineas(description, palabrasPorLinea);

  return (
    <Card>
      <MKBox position="relative" mx={0} mt={0} overflow="hidden">
        <div style={{ overflow: 'hidden', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
          <img
            src={image}
            alt={title}
            width="115%"
            style={{ borderRadius: '0', objectFit: 'cover', marginLeft: '-18px' }}
          />
        </div>
      </MKBox>
      <MKBox p={3} mt={-4} textAlign="center" alignItems="center">
    <MKBox mt={1} mb={3} mx={1} display="flex" alignItems="center">
        <MKBox flex={1}  sx={{ textAlign: "left" }}>
            <MKTypography display="inline" variant="h4"style={{ color: '#344767'}} textTransform="capitalize" fontWeight="bold">
                {title.split(" ")[0]}
            </MKTypography>
            <MKTypography  variant="body2" style={{ color: '#344767', fontSize: '75%'}} fontWeight="regular">
                {modelo2}
            </MKTypography>
            <MKBox mt={0} mb={-1} sx={{height: '50px'}}>
            {lineasDescripcion.map((linea, index) => (
              <MKTypography key={index} style={{  fontSize: '65%'}}
              variant="body2" component="p" color="text">
                {linea}
              </MKTypography>
            ))}
            </MKBox>   
           
        </MKBox>
        <MKBox>
        <img
            src={medio}
            width="180%"
            style={{ borderRadius: '0', objectFit: 'cover', marginLeft: '-18px' }}
          />
        </MKBox>
    </MKBox>
    <MKBox flex={1} style={{  display: 'flex', alignItems: 'center' }}>
    <img
        src={icon_delivery}
        width="7%"
        style={{ marginLeft: '10px'}}
    /> 
      <MKTypography variant="caption" component="p" color="text" style={{ fontSize: 'small' }}>
        {entrega}        
      </MKTypography>
    </MKBox>
    <Divider variant="middle"  />
    <MKBox style={{  display: 'flex', alignItems: 'center' }} mt={-1} mb={-1} >
        <MKBox flex={1} style={{  display: 'flex', alignItems: 'center' }}>
        <img
        src={icon_engine}
        width="15%"
        style={{ marginLeft: '10px'}}
    /> 
        <MKTypography style={{ marginLeft: '10px'}} variant="body2" component="p" color="text">
        {motor}                
        </MKTypography>
        
        </MKBox>
        <MKBox flex={1} style={{  display: 'flex', alignItems: 'center' }}>
        <img
        src={icon_gear}
        width="15%"
        style={{ marginLeft: '0px'}}
    /> 
        <MKTypography style={{ marginLeft: '10px'}} variant="body2" component="p" color="text">
        {cambio}                
        </MKTypography>
        
        </MKBox>
    </MKBox>
    <Divider variant="middle"  />


    <MKBox mt={-1} mb={3} mx={1} display="flex" alignItems="center">
    <MKBox flex={1} sx={{ textAlign: "left" }}>
        <h5 style={{ color: '#344767', fontWeight: 400 }}>{precio}</h5>
    </MKBox>
    <MKBox display="flex">
        <MKBox flex={2} sx={{ marginRight: '0px' ,whiteSpace: 'nowrap',textAlign: "center" }}>
            <h4 style={{  color: '#344767' }}>{cuota}</h4>
        </MKBox>
        <MKBox flex={1} mt={1} sx={{ textAlign: "center" }}>
            <h6 mt={2} style={{ color: '#344767', fontWeight: 400 }} >{"/Mes"}</h6>
        </MKBox>
    </MKBox>
</MKBox>
        <MKBox mt={-2} mb={2}>
        <MKTypography variant="caption" component="p" color="text" style={{ fontSize: 'x-small' }}>
            {espec}
        </MKTypography>
        <MKTypography variant="caption" component="p" color="text" style={{ fontSize: 'x-small' }}>
        precio y entrega recomendado sujeto a oferta final 
        </MKTypography>
        </MKBox>

        {action.type === "external" ? (
          <MKButton
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </MKButton>
        ) : (
          <MKButton
            style={{width: '100%'}}
            component={Link}
            to={action.route}
            variant="gradient"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </MKButton>
        )}
      </MKBox>
    </Card>
  );
}

CenteredBlogCardProduct.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default CenteredBlogCardProduct;
