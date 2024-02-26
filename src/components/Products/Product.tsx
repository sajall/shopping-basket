    import React, { useState } from "react";
    import {
    Maindiv,
    Upperdiv,
    Addbutton,
    Borderbox,
    Borderbottom,
    Imagebox,
    Producttitle,
    } from "./StyleDComponents";
    import { useDispatch, useSelector } from "react-redux";
    import { ProductItem } from "../../store/interface";
    import { Box, Button, ButtonBase } from "@mui/material";
    import { add } from "../../store/CartSlice";

    const Product: React.FC = () => {
        
    const products = useSelector((state: ProductItem[]) => state);
    const dispatch = useDispatch();

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
        <Maindiv>
            <Upperdiv>
            {products.map((product: ProductItem, i: number) => (
                <Imagebox
                key={product.id}
                style={{
                    backgroundImage: `url(${product.imageUrl})`,
                }}
                >
                <Addbutton
                    disabled={product.added}
                    onClick={() => dispatch(add(product))}
                    style={{
                    backgroundColor: product.added
                        ? "rgba(0, 0, 0, 0.5)"
                        : "rgba(0, 0, 0, 0.5)",
                    }}
                    onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    setHoveredIndex(i);
                    }}
                    onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = product.added
                        ? "rgba(0, 0, 0, 0.5)"
                        : "rgba(0, 0, 0, 0.5)";
                    setHoveredIndex(null);
                    }}
                >
                    <Borderbox
                    style={{
                        border: hoveredIndex === i ? "5px solid white" : "",
                    }}
                    />
                    <Borderbottom />
                    <Producttitle>

                    {product.added ? "Added" : product.title }
                    </Producttitle>
                
                </Addbutton>
                </Imagebox>
            ))}
            </Upperdiv>
        </Maindiv>
        </>
    );
    };

    export default Product;
