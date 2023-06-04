import React, { useState } from 'react';
import { Box, Button, Grid, MenuItem, TextField } from '@mui/material';
import gruposJson from '../grupos.json'
import bgImg from '../d7f740aa3e68295a71acac6d7aa50f9b.jpg'
import Form from './Form.jsx'
function Login() {
  const [grupo, setGrupo] = useState({
    nombre: "",
    tipoPago: "",
    ultimoPago: ""
  })
  const [formulario, setFormulario] = useState(false);
  const grupos = [];
  gruposJson.map((item, index) => {
    grupos[index] = {
      nombre: item.nombre,
      pass: item.pass,
      ultimoPago: item.ultimoPago,
      tipoPago: item.tipoPago
    }
    return grupos;
  });
  const handleSelectGrupo = (nombre) => {
    grupos.forEach(item => {
      console.log(nombre)
      if (item.nombre === nombre) {
        setGrupo({
          nombre: item.nombre,
          tipoPago: item.tipoPago,
          ultimoPago: item.ultimoPago,
        })
      }
    })
  }
  return (
    <div style={{
      backgroundImage: `url(${bgImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      maxWidth: '100%',
      width: 'auto',
      height: 'auto'
    }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "500px",
            backgroundColor: "beige",
            padding: "20px",
            borderRadius: "10px"
          }}>
          <Grid
            container
            spacing={3}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                select
                size="small"
                variant="outlined"
                value={grupo.nombre}
                label="Elige tu verdurita:"
                onClick={(event) => {
                  handleSelectGrupo(event.target.textContent)
                }
                }
                sx={{ backgroundColor: "white" }}>
                {grupos.map((item, index) =>
                  <MenuItem
                    value={item.nombre}
                    key={index}
                  >
                    {item.nombre}
                  </MenuItem>
                )}
              </TextField>
            </Grid>
            <Grid item xs={4} alignItems="right" justifyContent="right">
              <Button
                variant={'contained'}
                color="success"
                onClick={() => setFormulario(!formulario)}>
                {!formulario ? 'Show' : 'Hide'}
              </Button>
            </Grid>
            {formulario === true ?
              <>
                <Grid item xs={12}>
                  La fecha de tu pedido {grupo.tipoPago} es {grupo.ultimoPago}.
                </Grid>
                <Grid item xs={12}>
                  <Form grupo={grupo.nombre} />
                </Grid>
              </>
              :
              <></>
            }
            <Grid item xs={12}>
              <a href="https://docs.google.com/spreadsheets/d/1zMYyRkTT9sTBBec_vMZ1JwrZzSE3eEciDwcHV_XtN9c/edit#gid=0">El Eeeeeexcel</a>
            </Grid>
          </Grid>
        </Box>
      </Grid>

    </div>
  );
}
export default Login