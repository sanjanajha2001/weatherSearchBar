import React from 'react';
import './App.css'
import { Paper } from "@material-ui/core";
import WeatherComponent from "./component/Weather";

function App() {
  return (

    <Paper className="paper">
      <WeatherComponent />
    </Paper>

  );
}

export default App;
