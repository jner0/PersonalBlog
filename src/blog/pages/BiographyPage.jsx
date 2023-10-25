import { Box, Container, Grid, Typography } from "@mui/material";
// Importa el hook useTheme de Material-UI
import { useTheme } from "@mui/material/styles";
import { NavBar } from "../components";
import { Exchange1, Exchange2, family4, familyAll } from "../../assets";

export const BiographyPage = () => {
  const theme = useTheme();
  const dynamicPadding = theme.breakpoints.values.md ? "10px" : "30px";

  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "250px",
          backgroundColor: "secondary.main",
          padding: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "white", textAlign: "center", fontWeight: 1000 }}
        >
          Quién es Nemecio Rodríguez
        </Typography>
      </Grid>

      <Container fixed sx={{ marginTop: "20px" }}>
        <Box pr={{ xs: 2, sm: 4, md: 20 }} pl={{ xs: 2, sm: 4, md: 20 }}>
          <div style={{ textAlign: "center" }} className="font">
            <p>
              Nací en el año 1995 en la ciudad de Chone, Manabí. Al día de hoy
              vivo en Quito, capital del Ecuador.
            </p>
            <p>
              Tuve una infancia bonita, crecí en un hogar rodeado de las
              personas más importantes que son mi papá, Edwin Rodríguez, mi
              mamá, Laura Loor, mi abuelita, Ena Molina (Mamita Ena), mi
              hermana, Doménica Rodríguez y finalmente nuestra mascota, Fidel.
            </p>
            <p>
              Durante mi etapa escolar logré conocer a mis amigos mas cercanos,
              incluso en la actualidad a pesar de haber conocido más personas y
              hecho más amigos, a ellos los considero mis mejores amigos.
            </p>

            {/* Fotos familia */}
            <Box
              pb={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={family4}
                alt="family4"
                style={{
                  width: "70%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>

            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={familyAll}
                alt="familyAll"
                style={{
                  width: "70%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>

            <p>
              A mis 17 años tuve la oportunidad de realizar un intercambio
              estudiantil por un año en Estados Unidos, en la ciudad de Bend en
              el estado de Oregon. Esta sin duda ha sido una de las experiencias
              mas gratificantes y en las que pude obtener anécdotas y
              conocimientos que me han ayudado y me siguen ayudando hasta el día
              de hoy, tanto en mi vida personal como profesional.
            </p>

            {/* Fotos Intercambio */}
            <Box
              pb={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={Exchange1}
                alt="familyAll"
                style={{
                  width: "70%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={Exchange2}
                alt="familyAll"
                style={{
                  width: "70%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>

            <p>
              En el año 2014 empiezan mis estudios universitarios y la etapa en
              la que sin saberlo en ese momento iba a influir en mis propósitos,
              pasiones, metas y demás objetivos que tengo en la actualidad.
              Empiezo mi carrera como Ingeniero en electrónica y Redes de
              Información en la Universidad de las Américas.
            </p>
            <p>
              Durante todo este tiempo, y en la actualidad he vivido en la
              ciudad de Quito en un hogar conformado por tíos y primos con los
              cuales siempre estaré agradecido por todo el apoyo que me han
              brindado en este tiempo.
            </p>

            {/* Fotos */}

            <p>
              A finales de mi carrera universitaria conseguí mi primer trabajo
              "serio" ya que anteriormente había realizado pasantías en un par
              de empresas. Trabajé en un lugar llamado Centro Ecuatoriano
              Norteamericano, el cuál ofrece cursos de Inglés. Yo me encontraba
              en el área de TI de esta empresa, dando soporte técnico y
              realizando otras activadades.
            </p>
            <p>
              La verdad no era algo que me gustara hacer (lo que me di cuenta al
              pasar algunos años), pero durante este periodo, una amiga que
              conocí en este trabajo me incentivó a estudiar programación.
              Recuerdo pensar en ese momento las clases de las diferentes ramas
              de esta materia que tuve en la universidad y comentar que era algo
              que no me gustaba.
            </p>
            <p>
              Sin embargo, al encontrarme sin ningún propósito en este tiempo y
              un poco desesperado por encontrar una nueva ruta en mi vida,
              decidí darme una oportunidad, nunca pensé lo mucho que iba a
              cambiar mi vida para bien encontrar esa motivación de
              perfeccionarme en algo y seguir aprendiendo. Actualmente, como
              cuenta la historia de Alejandro Magno, decidí quemar todos los
              barcos para evitar cualquier posibilidad de retirada o abandono.
            </p>
            <p>
              Encontré lo que me gusta hacer y lo que deseo realizar por mucho
              tiempo. Actualmente sigo esforzándome para cumplir mis objetivos,
              sigo trabajándo en mi para ser una mejor persona, agradezco cada
              día por lo que tengo, especialmente por mi familia y sigo buscando
              la manera de poder ayudar y dejar mi huella en este mundo.
            </p>
          </div>
        </Box>
      </Container>
    </>
  );
};
