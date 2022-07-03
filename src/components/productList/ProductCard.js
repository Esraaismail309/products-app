import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/Cart/CartActions';
import { toast } from 'react-toastify';
import './product.scss'
import { Rating } from '../../shared/Rating';
export const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const notify = () => {
        toast.success("product added to cart !", {
            position: 'bottom-right'
        });
    }
    const handleAddToCart = (product) => {
        dispatch(addToCartAction(product))
        notify()
    }


    return (
        <Grid item xs={2} sm={4} md={3} textAlign={'center'} >
            <Card sx={{ height: '550px' }} style={{ position: 'relative' }} className='card' >
                <img src={product.image} alt={product.title} height='250px' style={{ width: '50%', objectFit: 'contain' }} />
                <Typography variant='h6' display="block">
                    {product.title}
                </Typography>
                <Typography variant='button' display="block">
                    {product.category}
                </Typography>
                <Typography variant='button' display="block">
                    {product.price}
                </Typography>
                <Box sx={{ mx: 'auto', textAlign: 'center', ml: '4rem', }}>
                    <Rating value={product.rating.rate} />
                </Box>
                <Button type='button' variant="contained" className='cardBtn' style={{ bottom: '10%' }} >
                    <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'white', }}>
                        details
                    </Link>
                </Button>
                <Button type='button' variant="contained" style={{ bottom: '0%' }}
                    className='cardBtn' onClick={() => {
                        handleAddToCart(product)

                    }}>
                    Add to cart <AddShoppingCartIcon sx={{ ml: 2 }} />
                </Button>
            </Card>
        </Grid >
    )
}
