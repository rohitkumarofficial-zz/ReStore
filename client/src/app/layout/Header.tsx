import { ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { NavLink } from 'react-router-dom'
interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const leftLinks = [
    { title: 'Catelog', path: '/catelog' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
]

const rightLinks = [
    { title: 'Login', path: '/login' },
    { title: 'Register', path: '/register' }
]


export default function Header ({ darkMode, handleThemeChange }: Props) {
    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6' >
                        <NavLink to='/' className='navLink'> RE-STORE</NavLink>
                    </Typography>
                    <Tooltip title={darkMode ? 'Light Mode' : 'DarkMode'} arrow>
                        <Switch checked={darkMode} onChange={handleThemeChange} />
                    </Tooltip>
                </Box>


                <List sx={{ display: 'flex' }}>
                    {leftLinks.map(({ title, path }, index) => (
                        <ListItem key={index + title}>
                            <NavLink to={path} className='navLink'> {title.toUpperCase()} </NavLink>
                        </ListItem>
                    ))}
                </List>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton size='large' sx={{ color: 'inherit' }}>
                        <Badge badgeContent={4} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }, index) => (
                            <ListItem key={index + title}>
                                <NavLink to={path} className={'navLink'}> {title.toUpperCase()} </NavLink>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
