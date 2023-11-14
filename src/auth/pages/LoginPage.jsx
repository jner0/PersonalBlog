import { Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { startLogin } from "../../store";

const formData = {
  correo: "",
  password: "",
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { correo, password, onInputChange } = useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();

    // console.log({ email, password });
    dispatch(startLogin({ correo, password }));
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: { sm: 450 },
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>

        <form
          onSubmit={onSubmit}
          className="animate__animated animate__fadeIn animate__faster"
        >
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@gmail.com"
                fullWidth
                name="correo"
                value={correo}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  //   disabled={isAuthenticating}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" href={"/"} fullWidth>
                  Regresar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
