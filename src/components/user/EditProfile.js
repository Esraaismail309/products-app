import React, { useState } from 'react'
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Avatar, Button, Grid, Typography } from '@mui/material';
import { InputField } from '../../shared/InputField';
import { Container } from '@mui/system';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from 'react-router-dom';


export const EditProfile = () => {
    const localUser = JSON.parse(localStorage.getItem('user'))
    const [avatarPreview, setAvatarPreview] = useState(localUser.avatar);

    const initialValues = {
        firstName: localUser.firstName,
        lastName: localUser.lastName,
        email: localUser.email,
        age: localUser.age,
        password: localUser.password,
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name Is Required').min(3, 'First Name at least must have 3 characters'),
        lastName: Yup.string().required('Last Name Is Required').min(3, 'First Name at least must have 3 characters'),
        email: Yup.string().required('Email Is Required').email('Email Is Invalid'),
        age: Yup.number().min(18, 'Your age must be greater than 18').required('Your age Is Required'),
        password: Yup.string().required('password Is Required').matches("^[A-z0-9]{8,}$", 'Your password should be Minimum eight characters, at least one letter and one number'),
    })

    const onSubmit = (values) => {
        localStorage.setItem('user', JSON.stringify(values))

    }

    return (
        <div style={{ marginTop: '4rem' }}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>{
                    formik => {
                        return (
                            <Form style={{ padding: ' 4rem 0', width: '50%', margin: 'auto' }}  >
                                <Container >
                                    <Grid className='form' pb={9} container spacing={3} >
                                        <Grid item sm={12} textAlign={'center'}  >
                                            <Typography variant='h4' mb={5} sm={12} md={12} >Edit Profile</Typography>
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
                                        <Grid item sm={8} m={'auto'} md={5}>
                                            <InputField name='password' label='Password' type='password' />
                                        </Grid>
                                        <Grid item md={6} display={'flex'} justifyContent={'center'}>
                                            < Avatar size='md' src={avatarPreview} />
                                            <Button
                                                variant='contained'
                                                component='label'
                                                sx={{ marginLeft: 3 }}
                                                startIcon={<CloudUploadIcon />}>
                                                Choose Avatar
                                                <input
                                                    type='file'
                                                    name='file' accept='image/*' hidden
                                                    onChange={(e) => {
                                                        const fileReader = new FileReader();
                                                        fileReader.onload = () => {
                                                            if (fileReader.readyState === 2) {
                                                                formik.setFieldValue('avatar', fileReader.result);
                                                                setAvatarPreview(fileReader.result);
                                                            }
                                                        };
                                                        fileReader.readAsDataURL(e.target.files[0]);
                                                    }}
                                                />
                                            </Button>
                                        </Grid>
                                        <Grid item sm={8} ml={'auto'} md={5} mt={3} >
                                            <Button
                                                variant='contained'
                                                type='button'
                                                style={{ backgroundColor: '#112B3C', margin: '0 2rem', }}>

                                                <Link to={'/products'} style={{ color: 'white', textDecoration: 'none' }}>cancle</Link>
                                            </Button>
                                            <Button
                                                variant='contained'
                                                type='submit'
                                                style={{ backgroundColor: '#112B3C', }}>
                                                save

                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Form>

                        )
                    }

                }

            </Formik>

        </div >
    )
}
