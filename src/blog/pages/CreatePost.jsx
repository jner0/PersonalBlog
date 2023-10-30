import { Box, Button, Grid, IconButton } from "@mui/material";
import { ImageBanner } from "../components";
import { SaveAltOutlined, UploadOutlined } from "@mui/icons-material";

export const CreatePost = () => {
  return (
    <Grid container>
      <Grid container sx={{ minHeight: "250px", backgroundColor: "#e7e7e7" }}>
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
    </Grid>
  );
};
