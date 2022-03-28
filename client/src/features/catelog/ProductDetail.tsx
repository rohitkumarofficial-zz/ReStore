import { Divider, Grid, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import agent from '../../app/api/agent';
import NotFound from '../../app/errors/NotFound';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { Product } from '../../app/models/product';

export default function ProductDetail () {

  let { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    agent.Catelog.details(Number(id))
      .then(product => setProduct(product))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [id])

  if(loading) return <LoadingComponent message='Loading Product...'/>

  if(!product) return <NotFound/>

  return (
    <Grid container spacing={6}>
        <Grid item xs={6}>
            <img src={product.pictureUrl} alt={product.name} style={{width: '100%'}}/>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h4'>{product.name}</Typography>
            <Divider sx={{mb:2}}/>
            <Typography variant='h5' color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{product.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>{product.type}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brand</TableCell>
                  <TableCell>{product.brand}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Quantity in stock</TableCell>
                  <TableCell>{product.quantityInStock}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
    </Grid>
  )
}
