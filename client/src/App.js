import './App.css';
import './styles/Variables.css';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const [visits, setVisits] = useState(0);

    useEffect(() => {
        axios
            .get("https://api.counterapi.dev/v2/smartie/smartie-visit-counter/up", {
                params: { t: Date.now() } 
            })
            .then((response) => {
                setVisits(response.data.data.up_count);
            })
            .catch((error) => {
                console.error("Error incrementing visit count:", error);
            });
    }, []);

  return (
      <AppRouter visits={visits} />
  );
}

export default App;
