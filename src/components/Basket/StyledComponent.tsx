import { Typography, Box, styled, TextField, Button } from "@mui/material";


export const Cartitems = styled(Box)({
    margin: "auto",
    width:'100%',
    marginTop: "40px",
   
    "@media (min-width: 960px)": {
    width: "60%",
   
  },

});

export const Singleitem = styled(Box)({
  boxShadow:
    "rgba(0, 0, 0, 0.10) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  display: "flex",
  borderBottom: "1px solid gray",
  height: "80px",
  alignItems: "center",
  gap: "10px",
  flexDirection: "row",

  "@media (min-width: 600px)": {
    flexDirection: "row",
    alignItems: "center",
  },

});

export const Productdetails = styled(Box)({
  width: "85%",
});
