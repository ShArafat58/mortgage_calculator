import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import SliderSelect from "./components/SliderSelect";
import Tenure from "./components/Tenure";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Grid container spacing={5}>
        <Grid item>
          <SliderSelect/>
          <Tenure/>
        </Grid>
        <Grid item>
          <Results/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
