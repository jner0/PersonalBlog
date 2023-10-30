import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const ImageBanner = ({ image }) => {
  return (
    <ImageList
      sx={{ width: "100%", height: 250, m: 0 }}
      cols={1}
      rowHeight={250}
    >
      {image ?? (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={"Imagen de la nota"}
            loading="lazy"
          />
        </ImageListItem>
      )}
    </ImageList>
  );
};
