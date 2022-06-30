import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../store/Cart/CartActions';
import { toast } from 'react-toastify';

export const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const notify = () => {
        toast.success("product added to cart !");
    }
    const handleAddToCart = (product) => {
        dispatch(addToCartAction(product))
        notify()
    }


    return (
        <Grid item xs={2} sm={4} md={3} textAlign={'center'} >
            <Card sx={{ height: '550px' }} >
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
                <Button type='button' variant="contained" style={{ display: 'block', margin: 'auto', backgroundColor: '#112B3C' }} >
                    <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'white', }}>
                        details
                    </Link>
                </Button>
                <Button type='button' variant="contained" sx={{ bottom: 0, m: 2 }}
                    style={{ backgroundColor: '#112B3C' }}
                    onClick={() => {
                        handleAddToCart(product)

                    }}>

                    Add to cart <AddShoppingCartIcon sx={{ ml: 2 }} />
                </Button>
            </Card>
        </Grid >
    )
}
