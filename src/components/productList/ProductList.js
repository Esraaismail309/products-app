import { Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard';
import { CallApi } from './../../api/CallApi'
import { Loader } from '../../shared/Loader';
import { Link } from 'react-router-dom'

export const ProductList = () => {
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        JSON.parse(localStorage.getItem('user')) ? setAuth(true) : setAuth(false)
    }, [])


    const { data, isLoading } = CallApi('product-list', {
        method: 'get',
        url: 'https://fakestoreapi.com/products'
    }, {
    })

    return (
        <Container sx={{ mt: 15 }} >
            {
                auth ?
                    (isLoading ? (<Loader />) :
                        <>
                            <Typography variant="h3" my={4}>Products</Typography>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {data.data.map((product) => (
                                    <ProductCard product={product} key={product.id} />

                                ))}
                            </Grid>
                        </>) :
                    <>
                        <Typography variant="h3" my={4}>Sorry, Register first</Typography>
                        <Button variant='contained'><Link to={'/register'} style={{ textDecoration: 'none', color: 'white' }}> Register</Link></Button>
                    </>


            }
        </Container>
    )
}
