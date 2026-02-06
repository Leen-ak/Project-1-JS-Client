//https://mui.com/material-ui/all-components/ 

import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Button
} from "@mui/material";

import "./App.css";

function App() {
  return (<>
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
          INFO-3139 P1 ( L_aboukhalil )
        </Typography>
      </Toolbar >
    </AppBar >
    {/* elevation adds a shadow, component specific */}
    <Paper elevation={4} sx={{ marginTop: "0.5em", padding: "1em" }}>
      <Button variant="contained">Refresh Database</Button>
    </Paper>
  </>);
};

export default App;