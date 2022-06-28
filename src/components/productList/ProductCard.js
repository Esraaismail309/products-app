import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const ProductCard = ({ product }) => {
    return (
        <Grid item xs={2} sm={4} md={4} textAlign={'center'} >
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ height: '500px' }} >
                    <img src={product.image} alt={product.title} height='300px' style={{ width: '50%', objectFit: 'contain' }} />
                    <Typography variant='h6' display="block">
                        {product.title}
                    </Typography>
                    <Typography variant='button' display="block">
                        {product.category}
                    </Typography>
                    <Typography variant='button' display="block">
                        {product.price}
                    </Typography>
                    <Button variant="contained" sx={{ bottom: 0, m: 2 }}>
                        Add to cart <AddShoppingCartIcon sx={{ ml: 2 }} />
                    </Button>
                </Card>
            </Link>
        </Grid >
    )
}
