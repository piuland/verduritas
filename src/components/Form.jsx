import React, { Component } from 'react'
import ecooJson from '../ecoo.json'
import { Grid, Typography, Button } from '@mui/material';
// import { AddIcon, RemoveIcon } from '@mui/icons-material';

class Form extends Component {
    render() {
        // const [ecoo, setEcoo] = useState([])
        const ecoo = []
        ecooJson.map((item, index) => {
            let pre = parseFloat(item.precio) / 100
            ecoo[index] = {
                nombre: item.nombre,
                precio: pre,
                cant: 0
            }
            return ecoo
        })
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant={'h6'}>Pedidos EcooPan</Typography>
                </Grid>
                {ecoo.map((item) => {
                    return (
                        <Grid container>
                            <Grid item xs={12} sm={8}>
                                <Typography variant={'subtitle2'} fullWidth>
                                    {item.nombre} ({item.precio}€)
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={1}>
                                <Button
                                    fullWidth
                                    variant={'contained'}
                                    color={'success'}
                                    sx={{
                                        maxWidth: '10px'
                                    }}>
                                    +
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Typography
                                    fullWidth
                                    variant="button"
                                    align={'center'}
                                // display="block"
                                >
                                    {item.cant} uds.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={1}>
                                <Button
                                    fullWidth
                                    variant={'contained'}
                                    color={'success'}>
                                    --
                                </Button>
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>);
    }
}
export default Form