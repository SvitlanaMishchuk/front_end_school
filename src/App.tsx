import { lazy, Suspense } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./constants";
import { Header } from "./common/header";

const Trend = lazy(() => import("./pages/trend/Trend"));
const UserProfile = lazy(() => import("./pages/user-profile/UserProfile"));

function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={routes.home} element={<Trend />} />
            <Route path={routes.profile} element={<UserProfile />} />
            <Route path="*" element={<>"404"</>} />
          </Routes>
        </Suspense>
      </Router>
    </Container>
  );
}

export default App;
