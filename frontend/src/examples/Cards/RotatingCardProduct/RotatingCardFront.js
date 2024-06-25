/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
import MKBadge from "components/MKBadge";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function RotatingCardFront({ color, image,  title, description, price, clor }) {
  return (
    <MKBox
      
     
      borderRadius="xl"
      width="100%"
      height="100%"
      position="absolute"
      zIndex={2}
      sx={{
        backgroundImage: ` url(${image})`,
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
        borderRadius: "xl", // Aplica el borde redondeado solo al fondo de la imagen
        backgroundPosition: "-180px -50px", // Mueve el fondo de la imagen 50px a la izquierda y 20px hacia arriba
      }}
    
    >
      
      <MKBox
        position="fixed"
        left={0}
        ml={2}
        p={2}
        bgcolor="transparent"
      >
        <MKBadge
          badgeContent={price}
          variant="contained"
          container
        />
      </MKBox>
      <MKBox 
      
      borderRadius="xl"
      width="100%"
      height="75%"
      bottom={0}
      position="fixed"
      sx={{
        backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 1) 35%, rgba(0, 0, 0, 0) 0%)`,
        backgroundSize: "cover",
        backfaceVisibility: "hidden",

    
      }}></MKBox>
      <MKBox py={12} 
      px={3} 
      textAlign="left"   
      position="fixed"
      bottom={0}
    
      p={2}
      ml={2}
      mr={2}
      lineHeight={1}
      >
        
        <MKTypography variant="h3" color="dark" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="dark" opacity={0.8}>
          {description}
        </MKTypography>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the RotatingCardFront
RotatingCardFront.defaultProps = {
  color: "info",
  icon: "",
};

// Typechecking props for the RotatingCardFront
RotatingCardFront.propTypes = {
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
  image: PropTypes.string.isRequired,
  icon: PropTypes.node,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

export default RotatingCardFront;
