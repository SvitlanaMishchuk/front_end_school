import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { routes } from "./constants";
import { Layout } from "./common/Layout";

const Trend = lazy(() => import("./pages/trend/Trend"));
const UserProfile = lazy(() => import("./pages/user-profile/UserProfile"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={routes.home} element={<Trend />} />
              <Route path={routes.profile} element={<UserProfile />} />
              <Route path="*" element={<>"404"</>} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
