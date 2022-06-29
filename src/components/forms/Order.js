import React from 'react'
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Avatar, Button, Grid, Typography } from '@mui/material';
import { InputField } from '../../shared/InputField';
import { Container } from '@mui/system';
export const Order = () => {
    const initialValues = {
        name: '',
        phone: '',
        address: ''
    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required('Your Name Is Required').min(3, 'Your Name at least must have 3 characters'),
        phone: Yup.number().required('Your Phone Is Required'),
        address: Yup.string().required('Your Phone Is Required'),
    })
    const onSubmit = (values) => {
        localStorage.setItem('user', JSON.stringify(values))
        console.log(values);
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>{
                    formik => {
                        return (
                            <Form style={{ padding: ' 4rem 0' }}>
                                <Container >
                                    <Grid className='form' pb={9} container spacing={5} >
                                        <Grid item sm={12} textAlign={'center'}  >
                                            <Typography variant='h2' mb={5} sm={12} md={12} >Registration Form</Typography>
                                        </Grid>
                                        <Grid item sm={8} m={'auto'} md={5} >
                                            <InputField name='firstName' label='First name' type='text' />
                                        </Grid>
                                        <Grid item sm={8} m={'auto'} md={5} >
                                            <InputField name='lastName' label='Last name' type='text' />
                                        </Grid>
                                        <Grid item sm={8} m={'auto'} md={5}>
                                            <InputField name='email' label='Email' type='text' />
                                        </Grid>
                                        <Grid item sm={8} m={'auto'} md={5}>
                                            <InputField name='age' label='Age' type='number' />
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
