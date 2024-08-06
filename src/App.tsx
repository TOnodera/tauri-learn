import "@fontsource/inter";
import {
  Box,
  CssBaseline,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TopPage from "./pages/TopPage";
import PostPage from "./pages/PostPage";
import { Book, Home, KeyboardArrowRight } from "@mui/icons-material";

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Grid container sx={{ minHeight: "100vh" }} flexDirection="column">
          <Grid flex={1}>
            <Box>
              <Grid container>
                <Grid xs={2}>
                  <Box>
                    <Typography variant="plain">Menu</Typography>
                    <Divider />
                    <List>
                      <ListItem>
                        <Link to="/" style={{ textDecoration: "none" }}>
                          <ListItemButton>
                            <ListItemDecorator>
                              <Home />
                            </ListItemDecorator>
                            <ListItemContent>Top</ListItemContent>
                            <KeyboardArrowRight />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/post" style={{ textDecoration: "none" }}>
                          <ListItemButton>
                            <ListItemDecorator>
                              <Book />
                            </ListItemDecorator>
                            <ListItemContent>Post</ListItemContent>
                            <KeyboardArrowRight />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    </List>
                  </Box>
                </Grid>
                <Grid xs={10}>
                  <Routes>
                    <Route path="/" element={<TopPage />} />
                    <Route path="/post" element={<PostPage />} />
                  </Routes>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid>footer</Grid>
        </Grid>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
