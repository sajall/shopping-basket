import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem } from "../../store/interface";
import { remove } from "../../store/CartSlice";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Cartitems, Singleitem, Productdetails } from "./StyledComponent";
import DeleteIcon from "@mui/icons-material/Delete";

const Basket: React.FC = () => {
  const products = useSelector((state: ProductItem[]) => state);
  const dispatch = useDispatch();

  return (
    <>
      <Cartitems>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Shopping Basket
        </Typography>
        <Typography component="h2" variant="h6" color={"black"}>
          You have {products.filter((product) => product.added).length} items in
          your basket
        </Typography>

        <Box>
          {products
            .filter((product) => product.added)
            .map((product: ProductItem) => (
              <>
                <Singleitem>
                  {/* 1st  */}
                  <Box
                    component="img"
                    style={{

                      height: "40px",
                      maxWidth: "40px",
                      borderRadius: "50%",
                      // border:'2px solid black'
                     
                    }}
                    alt="The house from the offer."
                    src={product.imageUrl}
                  />
                  {/* 2nd  */}
                  <Productdetails>
                    <Typography color={"black"} style={{ fontWeight: "bold" }}>
                      {product.title}
                    </Typography>
                    <Box style={{display:'flex'}}>
                    <Typography color={"black"}>
                      &pound;{product.price} 
                    </Typography>
                      <Typography component='p' style={{color:'gray'}}>
                      {` — ${product.description}`}

                      </Typography>
                    </Box>
                  </Productdetails>

                  {/* 3rd  */}
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      
                     
                    }}
                  >
                    <DeleteIcon
                    style={{ color: '#434343', cursor:'pointer' }} 
                      onClick={() => dispatch(remove({ id: product.id }))}
                    ></DeleteIcon>
                  </Box>
                </Singleitem>
              </>
            ))}
          <Typography  variant="h5" color={"black"}
          style={{fontWeight:'bold' , textAlign: "right"}}
          >
          Total:&pound;
            {(
              products
                .filter((product) => product.added)
                .reduce((acc, current) => (acc += current.price), 0) / 100
            ).toFixed(2)}
          </Typography>
        </Box>
      </Cartitems>
    </>
  );
};

export default Basket;
