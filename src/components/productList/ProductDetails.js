import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Link, useParams } from 'react-router-dom'
import { CallApi } from './../../api/CallApi'
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';

export const ProductDetails = () => {
    const { id } = useParams()
    const { data, isLoading } = CallApi('product-item', {
        method: 'get',
        url: `https://fakestoreapi.com/products/${id}`
    })
    return (
        <Container sx={{ mt: 15 }}>
            {isLoading ? (<p> Loading ....</p >) :
                <Grid container mt={5}>
                    <Grid item xs={10} sm={5} md={4}  >
                        <img src={data.data.image} alt={data.data.title} width="100%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} ml={5}  >
                        <Typography variant='h2'>
                            {data.data.title}
                        </Typography>
                        <Typography variant='subtitle1' mt={3} display="block">
                            {data.data.description}
                        </Typography>
                        <Typography variant='h6' display="block" my={3}>
                            Category :  {data.data.category}
                        </Typography>
                        <Typography variant='h6' display="block">
                            Price :   {data.data.price}
                        </Typography>
                    </Grid>


                </Grid>
            }
            <Link to={'/products'} style={{ textDecoration: 'none' }} >
                <Button variant="contained" style={{ backgroundColor: '#112B3C' }} sx={{ float: 'right' }}><KeyboardBackspaceSharpIcon />  Back</Button>
            </Link>
        </Container>
    )
}
