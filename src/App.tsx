import { BrowserRouter } from "react-router-dom";
import "./App.module.css";
import { Header, Footer } from "./pages/public";
import { AppRouter } from "./router/router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
