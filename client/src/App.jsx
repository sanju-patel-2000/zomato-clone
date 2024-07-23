import React from "react";
import Home from "./pages/Home";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}

export default App;
