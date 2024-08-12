import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import ThemeContextProvider from "./ThemeToggle";
import ThemeSwitcher from "./ThemeSwitcher";
function TestGround() {
  return (
    <>
    <div style={{margin: "22px"}}>
      <h1 style={{ marginBottom: "40px" }}>Test the switch</h1>
      <ThemeContextProvider>
        <Container maxWidth="lg" />
        <Paper sx={{ p: 2 }} />
        <Box height={200} p={4} />
        <ThemeSwitcher />
        <Typography variant="h1">Heading</Typography>
        <Card>
          <CardHeader title="Card Title" />
          <CardContent>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              enim quis, incidunt non eum alias earum sapiente deleniti ea
              minima tempora cum nobis, cumque natus dolorum doloribus pariatur!
              Iusto, similique!
            </Typography>
          </CardContent>
        </Card>
        <Divider sx={{ my: 5 }} />
        <Stack direction={"row"} spacing={2} alignItems={"center"} mb={4}>
          <Avatar>Pg</Avatar>
          <Chip color="info" label="chip" />
          <Button>Click Me</Button>
          <Button variant="contained">Click Me</Button>
        </Stack>
        <Box />
        <Paper />
        <Container />
      </ThemeContextProvider>
    </div>
    </>
  );
}

export default TestGround;
