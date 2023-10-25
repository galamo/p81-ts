import "./App.css";
// import CountryItem from "./ui-components/countryCard";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AboutPage from "./components/pages/about";
import CountriesPage from "./components/pages/country-page";
import { ProductsPage } from "./components/pages/products";

export const routes = [
  {
    path: "/",
    element: <CountriesPage />,
    text: "countries",
    isVisible: true,
  },
  {
    path: "/about",
    element: <AboutPage />,
    text: "about",
    isVisible: true,
  },
  {
    path: "/products",
    element: <ProductsPage />,
    text: "products",
    isVisible: true,
  },
];

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div style={{ position: "absolute", top: "0", left: "40%" }}>
            {routes
              .filter((r) => r.isVisible)
              .map((r: any) => {
                return (
                  <span key={r.path}>
                    <Link to={r.path}> {r.text.toUpperCase()}</Link> |
                  </span>
                );
              })}
          </div>
          <Routes>
            {routes.map((r: any) => {
              return <Route key={r.path} {...r} />;
            })}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
