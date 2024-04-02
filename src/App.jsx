import React, { Fragment, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";
import Contact from "./pages/Contact";
const Layout = React.lazy(() => import("./components/Layout"));
const Loading = React.lazy(() => import("./tabs/Loading"));
const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Provider store={Store}>
      <Fragment>
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Loading />}>
                  <Contact />
                </Suspense>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
};

export default App;
