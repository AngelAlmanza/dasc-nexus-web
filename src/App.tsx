import { Loading, RoutesWithNotFound } from "@/core/components";
import { PrivateRoutes, PublicRoutes } from "@/core/enums";
import { AuthGuard } from "@/core/guards";
import { store } from "@/core/store/store";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";

const Login = lazy(() => import("@/modules/auth/pages/Login"));
const Dashboard = lazy(() => import("@/modules/dashboard/pages/Dashboard"));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route
              path={PublicRoutes.START}
              element={<Navigate to={PublicRoutes.LOGIN} />}
            />
            <Route
              path={PublicRoutes.LOGIN}
              element={<Login />}
            />
            <Route element={<AuthGuard />}>
              <Route
                path={PrivateRoutes.DASHBOARD}
                element={<Dashboard />}
              />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
