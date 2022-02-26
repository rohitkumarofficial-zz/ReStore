import { AppBar, Switch, Toolbar, Tooltip, Typography } from '@mui/material'

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header ({ darkMode, handleThemeChange }: Props) {
    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                </Typography>
                <Tooltip title={darkMode ? 'Light Mode' : 'DarkMode'} arrow>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                </Tooltip>

            </Toolbar>
        </AppBar>
    )
}
