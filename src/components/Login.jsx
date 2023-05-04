import React, { useState } from 'react';
import { Button, Container, Grid, MenuItem, TextField } from '@mui/material';
import gruposJson from '../grupos.json'
function Login() {
  const [grupo, setGrupo] = useState("")
  // const [formulario, setFormulario] = useState(false);
  let formulario = false;
  const grupos = [];
  gruposJson.map((grupo, index) => {
    grupos[index] = { nombre: grupo.nombre, pass: grupo.pass }
    return grupos;
  });
  function showForm() {
    // setFormulario(true);
    formulario=true
  }
  return (
    <Grid container className="my-5 gradient-form" classes="App.App" sx={{ padding: '5px', alignItems: 'center' }}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          select
          size="small"
          variant="outlined"
          value={grupo}
          label="Elige tu verdurita:"
          onClick={(event) => {
            setGrupo(event.target.textContent)
          }
          }>
          {grupos.map((item, index) =>
            <MenuItem
              value={item.nombre}
              key={index}
            >
              {item.nombre}
            </MenuItem>
          )}
        </TextField>
        <Grid item xs={2}>
          <Button variant={'outlined'} onClick={showForm()}>Show</Button>
        </Grid>
        {formulario===true ?
          <Grid item>
            <p>Aquí diseñaremos el formulario para rellenar el Excel.</p>
            <p>El nombre de tu grupo es: {grupo}</p>
          </Grid> :
          <></>
        }
        <Grid item>
          <a href="https://docs.google.com/spreadsheets/d/1zMYyRkTT9sTBBec_vMZ1JwrZzSE3eEciDwcHV_XtN9c/edit#gid=0">El Eeeeeexcel</a>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Login