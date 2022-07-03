import React, { useEffect, useState } from 'react'
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
const pages = ['All products', 'Logout'];
const settings = ['Profile', 'Edit Profile'];
export const Navbar = () => {
    const productCount = useSelector((data) => data.cart?.cartQuantity)
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [profileImg, setProfileImg] = useState("/static/images/avatar/2.jpg")
    const [auth, setAuth] = useState(false)
    const open = Boolean(anchorEl);
    useEffect(() => {
        JSON.parse(localStorage.getItem('user')) ? setAuth(true) : setAuth(false)
        setProfileImg(JSON.parse(localStorage.getItem('user'))?.avatar)
    }, [])
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


    const deletUser = () => {
        localStorage.removeItem('user')
    }


    return (
        <div>{
            auth ? (
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
                                            {page === 'Logout' ? (
                                                <Button
                                                    onClick={() => {
                                                        handleCloseNavMenu();
                                                        deletUser()
                                                    }
                                                    }
                                                >
                                                    <Link to={'/register'} style={{ marginTop: '0.5rem', color: 'black', textDecoration: 'none', display: 'block', mx: 3 }}>
                                                        {page}
                                                    </Link>

                                                </Button>
                                            ) : <Button

                                                onClick={handleCloseNavMenu}
                                            >
                                                <Link to={'/products'} style={{ marginTop: '0.5rem', color: 'black', textDecoration: 'none', display: 'block', mx: 3 }}>
                                                    {page}
                                                </Link>

                                            </Button>}
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
                                            <Button
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                                sx={{ mt: 1, mx: 3, display: 'block' }}>
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
                            {/* //full screen */}
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', mr: 6 }}>
                                <>
                                    {pages.map((page) => (
                                        <div key={page}>
                                            {page === 'Logout' ? (
                                                <Button
                                                    onClick={() => {
                                                        handleCloseNavMenu();
                                                        deletUser()
                                                    }
                                                    }
                                                >
                                                    <Link to={'/register'} style={{ marginTop: '0.5rem', textDecoration: 'none', color: 'white', display: 'block', mx: 3 }}>
                                                        {page}
                                                    </Link>

                                                </Button>
                                            ) : <Button

                                                onClick={handleCloseNavMenu}
                                            >
                                                <Link to={'/products'} style={{ marginTop: '0.5rem', textDecoration: 'none', color: 'white', display: 'block', mx: 3 }}>
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
                            {/* Full screen */}
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar src={profileImg} />
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
                                        <div key={setting}>
                                            <MenuItem onClick={handleCloseUserMenu}>
                                                {setting === 'Profile' ? (
                                                    <Link to={'/userprofile'} style={{ textDecoration: 'none', color: 'black', display: 'block', mx: 3 }}>
                                                        {setting}
                                                    </Link>
                                                ) :
                                                    <Link to={'/editprofile'} style={{ textDecoration: 'none', color: 'black', display: 'block', mx: 3 }}>
                                                        {setting}
                                                    </Link>}
                                            </MenuItem>
                                        </div>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            ) : <AppBar position="fixed" style={{ backgroundColor: '#112B3C' }}>
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
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Link to={'/register'} style={{ color: 'black', textDecoration: 'none' }}>Register</Link>
                                    </Button>
                                </MenuItem>

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
                        {/* //full screen */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', mr: 6 }}>
                            <>
                                <Button
                                    onClick={handleCloseNavMenu}
                                >
                                    <Link to={'/register'} style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
                                </Button>

                            </>
                        </Box>
                        {/* Full screen */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title='profile'>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar src={profileImg} />
                                </IconButton>
                            </Tooltip>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>}
        </div >
    )
}
