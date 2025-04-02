import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PublicRoutes } from "./router.config";
import { LoadingPage } from "../components/Loading/LoadingPage/LoadingPage";
import { AuthGuard } from "../guards/auth.guard";

const Home = lazy(() =>
  import("../pages/public/Home/Home").then((module) => ({
    default: module.Home,
  }))
);

export const AppRouter = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingPage />}>
      <AnimatePresence mode="wait" initial={true}>
        <Routes location={location} key={location.pathname}>
          {/* Public Routing */}
          {/*  <Route path="/" element={<Navigate to={Private.PRIVATE}/>} /> */}
          <Route path={PublicRoutes.HOME.route} element={<Home />} />

          {/* Private Routing */}
          <Route element={<AuthGuard />}>
            <Route path="" element={<></>} />
          </Route>
          <Route path="*" element={<div> NOT FOUND </div>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};
