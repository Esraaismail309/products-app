import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'; import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { Cart } from '../components/cart/Cart';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';
const pages = ['All products', 'Login'];
const settings = ['Profile', 'Logout'];
export const Navbar = () => {
    const productCount = useSelector((data) => data.cart?.cartQuantity)
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const img = JSON.parse(localStorage.getItem('user'))?.avatar
    // console.log(img);
    return (
        <div>
            <AppBar position="fixed" style={{ backgroundColor: '#112B3C' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Product App
                        </Typography>


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {/* small device */}
                                {pages.map((page) => (
                                    <div key={page}>
                                        <Link to={'/products'} style={{ my: 2, textDecoration: 'none', color: 'black', display: 'block', mx: 3 }}>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography >{page}</Typography>
                                            </MenuItem>

                                        </Link>
                                        {/* <MenuItem onClick={handleCloseNavMenu}>
                                                <Typography >{page}</Typography>
                                            </MenuItem> */}
                                        <Button
                                            aria-controls={open ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                            sx={{ mt: 1, mx: 3, color: 'black', display: 'block' }}>
                                            <ShoppingCartIcon />
                                            <Badge badgeContent={productCount} color="warning" sx={{ mb: 3.5, ml: 0.5 }} />
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem >
                                                <Cart />
                                            </MenuItem>

                                        </Menu>
                                    </div>
                                ))}
                            </Menu>
                        </Box>
                        <ShoppingBagOutlinedIcon />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Product App
                        </Typography>
                        <ShoppingBagOutlinedIcon />
                        {/* //full screen */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', mr: 6 }}>
                            <>
                                {pages.map((page) => (
                                    <div key={page}>
                                        {page === 'Login' ? (
                                            <Button
                                                onClick={handleCloseNavMenu}
                                            >
                                                <Link to={'/login'} style={{ my: 2, textDecoration: 'none', color: 'white', display: 'block', mx: 3 }}>
                                                    {page}
                                                </Link>

                                            </Button>
                                        ) : <Button

                                            onClick={handleCloseNavMenu}
                                        >
                                            <Link to={'/products'} style={{ my: 2, textDecoration: 'none', color: 'white', display: 'block', mx: 3 }}>
                                                {page}
                                            </Link>

                                        </Button>}

                                    </div>
                                ))}
                                <Button
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{ mt: 1, mx: 3, color: 'white', display: 'block' }}>
                                    <ShoppingCartIcon />
                                    <Badge badgeContent={productCount} color="warning" sx={{ mb: 3.5, ml: 0.5 }} />

                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem >
                                        <Cart />
                                    </MenuItem>

                                </Menu>
                            </>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar src={img ? img : "/static/images/avatar/2.jpg"} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography >{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div >
    )
}
