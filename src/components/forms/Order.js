import React from 'react'
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Button, Grid, Typography } from '@mui/material';
import { InputField } from '../../shared/InputField';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const Order = () => {
    let navigate = useNavigate();
    const initialValues = {
        uName: '',
        phone: '',
        address: ''
    }
    const validationSchema = Yup.object({
        uName: Yup.string().required('Your Name Is Required').min(3, 'Your Name at least must have 3 characters'),
        phone: Yup.number().required('Your Phone Is Required'),
        address: Yup.string().required('Your Phone Is Required'),
    })
    const onSubmit = (values) => {
        toast.success('Congrats you confirm the order')
        navigate('/products')
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>{
                    formik => {
                        return (
                            <Form style={{ padding: ' 4rem 0', width: '50%', margin: '6rem auto' }}>
                                <Container >
                                    <Grid className='form' pb={9} container spacing={5} >
                                        <Grid item sm={12} textAlign={'center'}  >
                                            <Typography variant='h4' mb={5} sm={12} md={12} >Confirm order</Typography>
                                        </Grid>
                                        <Grid item sm={10} m={'auto'}  >
                                            <InputField name='uName' label='Your Name' type='text' />
                                        </Grid>
                                        <Grid item sm={10} m={'auto'}  >
                                            <InputField name='phone' label='Your Phone' type='text' />
                                        </Grid>
                                        <Grid item sm={10} m={'auto'}  >
                                            <InputField name='address' label='Your Address' type='text' />
                                        </Grid>
                                        <Grid item sm={8} m={'auto'} md={3}>
                                            <Button
                                                fullWidth
                                                variant='contained'
                                                type='submit'
                                                style={{ backgroundColor: '#112B3C' }}>

                                                Order
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Form>

                        )
                    }

                }

            </Formik>
        </div>
    )
}
