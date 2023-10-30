import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { ImageBanner, NavBar } from "../components";
import { SaveAltOutlined, UploadOutlined } from "@mui/icons-material";

export const CreatePost = () => {
  return (
    <>
      <NavBar />
      <Container fixed>
        <Grid justifyContent="flex-end" container>
          <Grid
            container
            sx={{ minHeight: "250px", backgroundColor: "#e7e7e7" }}
          >
            <ImageBanner images={""} />
          </Grid>
          <Grid item>
            <input
              type="file"
              multiple
              //   ref={fileInputRef}
              //   onChange={onFileInputChange}
              style={{ display: "none" }}
            />

            <IconButton
              color="primary"
              //   disabled={isSaving}
              //   onClick={() => fileInputRef.current.click()}
            >
              <UploadOutlined />
            </IconButton>

            <Button
              color="primary"
              sx={{ padding: 2 }}
              //   onClick={onSaveNote}
              //   disabled={isSaving}
            >
              <SaveAltOutlined sx={{ fontSize: 30, mr: 1 }} />
              Guardar
            </Button>
          </Grid>
          <Grid container>
            <TextField
              type="text"
              variant="filled"
              fullWidth
              placeholder="Ingrese un Título"
              label="Titulo"
              sx={{ border: "none", mb: 1 }}
              name="title"
              //   value={title}
              //   onChange={onInputChange}
            />

            <TextField
              type="text"
              variant="filled"
              fullWidth
              multiline
              placeholder="Empiece a escribir aquí..."
              minRows={20}
              name="body"
              //   value={body}
              //   onChange={onInputChange}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
