import React, { Component } from 'react'
import ecooJson from '../ecoo.json'
import { Grid, Typography } from '@mui/material';

class Form extends Component {
    render() {
        const ecoo = []
        ecooJson.map((item, index) => {
            let pre = parseFloat(item.precio) / 100
            ecoo[index] = {
                nombre: item.nombre,
                precio: pre
            }
            return ecoo
        })
        console.log(ecoo)
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Typography>Pedidos EcooPan</Typography>
                </Grid>
                {ecoo.map((item) => {
                    return (
                        <Grid container>
                            <Grid item sx={8}>
                                {item.nombre} ({item.precio}€)
                            </Grid>
                            <Grid item sx={4}>

                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>);
    }
}
export default Form