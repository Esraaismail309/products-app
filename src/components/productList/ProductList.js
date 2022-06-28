import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { ProductCard } from './ProductCard';
import { CallApi } from './../../api/CallApi'
export const ProductList = () => {


    const { data, error, isLoading } = CallApi('product-list', {
        method: 'get',
        url: 'https://fakestoreapi.com/products'
    }, {
    })
    // console.log(data);

    return (
        <Container >
            {
                isLoading ? (<p>Loading...</p>) :
                    <>
                        <Typography variant="h3" my={4}>Products</Typography>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {data.data.map((product) => (
                                <ProductCard product={product} key={product.id} />

                            ))}
                        </Grid>
                    </>
            }
        </Container>
    )
}
