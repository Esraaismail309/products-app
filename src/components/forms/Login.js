import React, { useState } from 'react'
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Button, Container, Grid, Typography } from '@mui/material';
import { InputField } from '../../shared/InputField';
import { Link } from 'react-router-dom';
export const Login = () => {

    const initialValues = {
        email: '',
        password: '',
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Email Is Required').email('Email Is Invalid'),
        password: Yup.string().required('password Is Required').matches("^[A-z0-9]{8,}$", 'Your password should be Minimum eight characters, at least one letter and one number'),
    })
    const onSubmit = (values) => {
        // localStorage.setItem('user', JSON.stringify(values))
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
                            <Form style={{ padding: ' 4rem 0', width: '50%', margin: 'auto' }} >
                                <Container >
                                    <Grid className='form' pb={9} container spacing={5} >
                                        <Grid item sm={12} textAlign={'center'}  >
                                            <Typography variant='h3' mb={5} sm={12} md={12} >Login Form</Typography>
                                        </Grid>

                                        <Grid item sm={10} m={'auto'} >
                                            <InputField name='email' label='Email' type='text' />
                                        </Grid>

                                        <Grid item sm={10} m={'auto'} >
                                            <InputField name='password' label='Password' type='password' />
                                        </Grid>


                                        <Grid item sm={8} m={'auto'} md={3}>
                                            <Button
                                                fullWidth
                                                variant='contained'
                                                type='submit'
                                                style={{ backgroundColor: '#112B3C' }}>

                                                Login
                                            </Button>
                                        </Grid>

                                        <Grid item sm={12} textAlign={'center'}  >
                                            <Typography variant='subtitle1' sm={12} md={12} >Don't have account ? <Link to={'/register'} style={{ color: 'black', textDecoration: '' }}> Register</Link></Typography>
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
