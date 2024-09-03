import { Loading, RoutesWithNotFound } from "@/core/components";
import { PrivateRoutes, PublicRoutes } from "@/core/enums";
import { AuthGuard } from "@/core/guards";
import { store } from "@/core/store/store";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";

// Auth Module
const Login = lazy(() => import("@/modules/auth/pages/Login"));

// Dashboard Module
const Dashboard = lazy(() => import("@/modules/dashboard/pages/Dashboard"));

// Classroom Module
const Classroom = lazy(() => import("@/modules/classrooms/pages/Classroom"));
const ClassroomDetail = lazy(
  () => import("@/modules/classrooms/pages/ClassroomDetail"),
);

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

              <Route
                path={PrivateRoutes.CLASSROOM}
                element={<Classroom />}
              />
              <Route
                path={PrivateRoutes.CLASSROOM_CREATE}
                element={<ClassroomDetail />}
              />
              <Route
                path={`${PrivateRoutes.CLASSROOM_DETAIL}/:id`}
                element={<ClassroomDetail />}
              />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
