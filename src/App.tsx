import { lazy, Suspense } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { routes } from "./constants";
import { Header } from "./common/header";

const Trend = lazy(() => import("./pages/trend/Trend"));
const UserProfile = lazy(() => import("./pages/user-profile/UserProfile"));

const queryClient = new QueryClient();

function App() {
  return (
    <Container maxWidth="md">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={routes.home} element={<Trend />} />
              <Route path={routes.profile} element={<UserProfile />} />
              <Route path="*" element={<>"404"</>} />
            </Routes>
          </Suspense>
        </Router>
      </QueryClientProvider>
    </Container>
  );
}

export default App;
