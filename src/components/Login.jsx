import React from 'react';
import {Container, Grid, MenuItem, TextField} from '@mui/material';
function Login () {
  const grupos = [
    {nombre: 'lechuga', pass: ''},
    {nombre: 'borraja', pass: ''},
    {nombre: 'patata', pass: ''},
    {nombre: 'remolacha', pass: ''},
    {nombre: 'berenjena', pass: ''},
    {nombre: 'boniato', pass: ''}
  ];
  return (
    <Container className="my-5 gradient-form">
      <Grid>
        <TextField 
        fullWidth 
        select 
        variant="outlined" 
        label="Elige tu verdurita: ">
          {grupos.map((item) =>
            <MenuItem>{item.nombre}</MenuItem>
          )}   
        </TextField>
        <a href="https://docs.google.com/spreadsheets/d/1zMYyRkTT9sTBBec_vMZ1JwrZzSE3eEciDwcHV_XtN9c/edit#gid=0">El Eeeeeexcel</a>
      </Grid>
    </Container>
  );
}
export default Login