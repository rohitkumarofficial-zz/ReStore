import { Button, Container, Divider, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    let navigate = useNavigate();
  return (
    <Container component={Paper} sx={{height: 400}}>
        <Typography gutterBottom variant='h3'>
            Page not found
        </Typography>
        <Divider/>
        <Button fullWidth onClick={() => navigate('/catelog')}>Go back to catelog</Button>
    </Container>
  )
}
