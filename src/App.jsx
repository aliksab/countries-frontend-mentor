import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from "./page/HomePage";
import Details from "./page/Details";
import NotFound from "./page/NotFound";

function App() {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage countries={countries} setCountries={setCountries} />}/>
          <Route path="/country/:name" element={<Details />} />
          <Route element={<NotFound />} />
        </Routes>       
      </Main>
    </>
  );
}

export default App;
