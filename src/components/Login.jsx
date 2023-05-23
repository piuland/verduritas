import React, { useState } from 'react';
import { Box, Button, Grid, MenuItem, TextField } from '@mui/material';
import gruposJson from '../grupos.json'
import bgImg from '../2023-05-05 20.30.55.jpg'
function Login() {
  const [grupo, setGrupo] = useState("")
  const [formulario, setFormulario] = useState(false);
  const grupos = [];
  gruposJson.map((grupo, index) => {
    grupos[index] = { nombre: grupo.nombre, pass: grupo.pass }
    return grupos;
  });
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
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
          maxHeight="500px"
          sx={{
            width: "500px",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // minHeight: "100vh",
            // marginLeft: "20%",
            // marginTop: "20%",
            backgroundColor: "beige",
            padding: "20px",
            borderRadius: "10px"
          }}>
          <Grid 
          container
          spacing={5}>
            <Grid item xs={8}>
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
            <Grid item xs={4}>
              <Button variant={'contained'} color="success" onClick={() => setFormulario(!formulario)}>{!formulario ? 'Show':'Hide' }</Button>
            </Grid>
            {formulario===true ?
              <Grid item>
                El nombre de tu grupo es: {grupo}
              </Grid> :
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