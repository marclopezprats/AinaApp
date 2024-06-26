// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

import logoSVG from "assets/images/LogoAina.svg";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "AinaCar",
    image: logoSVG,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "",
    },
    {
      icon: <TwitterIcon />,
      link: "",
    },
    {
      icon: <TwitterIcon />,
      link: "",
    },
    {
      icon: <YouTubeIcon />,
      link: "",
    },
  ],
  menus: [
    {
      name: "Contacto",
      items: [
        { name: "C/ de Joaquim Costa,50.", href: "" },
        { name: "08206 Sabadell (BCN)", href: "" },
        { name: "Tlf. 937 273 907", href: "" },
      
      ],
    },
    {
      name: "Horario",
      items: [
        { name: "illustrations", href: "" },
        { name: "bits & snippets", href: "" },
        { name: "affiliate program", href: "" },
      ],
    },
    {
      name: "Grupo Ainacar",
      items: [
        { name: "AinaCar Wash", href: "" },
        { name: "AinaCar Protect", href: "" },
        { name: "FAQ. Preguntas frecuentes", href: "" },
        { name: "Aviso Legal", href: "" },
        { name: "Política Gestión de daños", href: "" },
        { name: "Términos y Condiciones Generales", href: "" },
        { name: "Política de provacidad", href: "" },
        { name: "Política de cookies", href: "" },
        { name: "Condiciones generales de contratación", href: "" },
        { name: "Imformación antes de alquiler", href: "" },
      ],
    },
    
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} by{" "}
      <MKTypography
        component="a"
        href=""
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        AinaCar
      </MKTypography>
      .
    </MKTypography>
  ),
};
