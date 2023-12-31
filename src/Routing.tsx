import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home/Home.tsx"));
const About = lazy(() => import("./pages/About/About"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={"loading..."}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={"loading..."}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={"loading..."}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Suspense fallback={"loading..."}>
              <Portfolio />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default Routing;
