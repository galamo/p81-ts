import { lazy, useDeferredValue, useTransition } from "react";
import "./App.css";
// import CountryItem from "./ui-components/countryCard";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Suspense } from "react";
import FilterDefferedValue from "./components/pages/filter-deffered-value";

const ReportsLazy = lazy(() => import("./components/pages/reports-page"));
const ProductsPageLazy = lazy(() => import("./components/pages/products"));
const CountriesPageLazy = lazy(() => import("./components/pages/country-page"));
const AboutPageLazy = lazy(() => import("./components/pages/about"));

export const routes = [
  {
    path: "/",
    element: <CountriesPageLazy />,
    text: "countries",
    isVisible: true,
  },
  {
    path: "/about",
    element: <AboutPageLazy />,
    text: "about",
    isVisible: true,
  },
  {
    path: "/products",
    element: <ProductsPageLazy />,
    text: "products",
    isVisible: true,
  },
  {
    path: "/reports",
    element: <ReportsLazy />,
    text: "reports",
    isVisible: true,
  },
  {
    path: "/useDefferedValue",
    element: <FilterDefferedValue />,
    text: "useDefferedValue",
    isVisible: true,
  },
];

type RouteType = (typeof routes)[0];

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div style={{ position: "absolute", top: "0", left: "40%" }}>
            {routes
              .filter((r) => r.isVisible)
              .map((r: RouteType) => {
                return (
                  <span key={r.path}>
                    <Link to={r.path}> {r.text.toUpperCase()}</Link> |
                  </span>
                );
              })}
          </div>
          <Suspense fallback={<h1>Loading....</h1>}>
            <div style={{ marginTop: "50px" }}>
              <Routes>
                {routes.map((r: RouteType) => {
                  return <Route key={r.path} {...r} />;
                })}
              </Routes>
            </div>
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
