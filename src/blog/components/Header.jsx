import { Grid, Typography } from "@mui/material";

export const Header = () => {
  return (
    <>
      {/* <div style={{ height: "250px", backgroundColor: "primary.main" }}>
        Hola
      </div> */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "250px", backgroundColor: "primary.main", padding: 4 }}
      >
        <Typography
          variant="h3"
          sx={{ color: "white", textAlign: "center", fontWeight: 1000 }}
        >
          Nemecio Rodríguez
        </Typography>
        <Typography variant="h9" sx={{ color: "white", textAlign: "center" }}>
          Ingeniero en Redes | Desarrollador de Software | Escritor Ocasional
        </Typography>
      </Grid>
    </>
  );
};
