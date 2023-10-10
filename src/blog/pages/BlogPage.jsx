import { Container } from "@mui/material";
import { Header, NavBar } from "../components";

export const BlogPage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Container fixed>
        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
      </Container>
    </>
  );
};
