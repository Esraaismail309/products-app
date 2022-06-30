import { Avatar, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

export const UserProfile = () => {

    const localUser = [JSON.parse(localStorage.getItem('user'))]

    return (
        <div style={{ marginTop: '7rem' }}>
            {localUser ? (
                localUser.map((user, i) => (
                    <Container key={i} >
                        <Grid container>
                            <Grid item sm={10} md={4} >

                                <img src={user.avatar} style={{ width: '100%', borderRadius: '50%' }} alt={user.firstName} />
                            </Grid>
                            <Grid item sm={10} md={6} m={'auto'}>
                                <Typography variant='h2'>Name : {user.firstName}{user.lastName}</Typography>
                                <Typography variant='h5' my={3}>Email : {user.email}</Typography>
                                <Typography variant='h5'>Age : {user.age}</Typography>
                            </Grid>

                        </Grid>
                    </Container>
                ))
            ) : null
            }
        </div >
    )
}
