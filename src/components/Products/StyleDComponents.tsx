import { Typography , Box , styled , TextField , Button  } from "@mui/material";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  color: white;
  margin: 0;
  padding: 0;

  }
`
export const Maindiv = styled(Box)({

  width: '100%',
  marginTop: '1rem',

})

export const Upperdiv = styled(Box)({
    // boxShadow: 'rgba(0, 0, 0, 0.10) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    width: '100%',
    height: 'auto',
    margin: 'auto',
    backgroundColor: 'white',   
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignContent: 'center' ,
   

  })
  
  export const Imagebox = styled(Box)({
    height: '210px',
    width: '300px',
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.10) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  })


export const Addbutton = styled(Button)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    overflow: "hidden",
    zIndex: 1,
})

export const Borderbox = styled(Box)({
  position: "absolute",
  content: "''",
  width: "calc(50% - 20px)", 
  height: "calc(30% - 20px)",
  pointerEvents: "none", 
  transition: "width 0.3s ease, height 0.3s ease",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: -1, 
  opacity: 1,
})

export const Borderbottom = styled(Box)({
  height: 3,
  width: 20,
  backgroundColor: "white",
  position: "absolute",
  bottom: '80px' ,
  left: "calc(50% - 9px)",
})

export const Producttitle = styled(Typography)({
  color: 'white',

})


