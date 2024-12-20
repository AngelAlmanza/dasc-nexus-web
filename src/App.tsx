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

// Major Module
const Major = lazy(() => import("@/modules/majors/pages/Major"));
const MajorDetail = lazy(() => import("@/modules/majors/pages/MajorDetail"));

// Subject Module
const Subject = lazy(() => import("@/modules/subjects/pages/Subject"));
const SubjectDetail = lazy(
  () => import("@/modules/subjects/pages/SubjectDetail"),
);

// Classroom Module
const Classroom = lazy(() => import("@/modules/classrooms/pages/Classroom"));
const ClassroomDetail = lazy(
  () => import("@/modules/classrooms/pages/ClassroomDetail"),
);

// Student Module
const Student = lazy(() => import("@/modules/students/pages/Student"));
const StudentDetail = lazy(
  () => import("@/modules/students/pages/StudentDetail"),
);

// Teacher Module
const Teacher = lazy(() => import("@/modules/teachers/pages/Teacher"));
const TeacherDetail = lazy(
  () => import("@/modules/teachers/pages/TeacherDetail"),
);

// Teacher Schedule Module
const TeacherSchedule = lazy(
  () => import("@/modules/teacher-schedules/pages/TeacherSchedule"),
);
const TeacherScheduleDetail = lazy(
  () => import("@/modules/teacher-schedules/pages/TeacherScheduleDetail"),
);

// Requests Module
const Request = lazy(() => import("@/modules/requests/pages/Request"));
const RequestDetail = lazy(
  () => import("@/modules/requests/pages/RequestDetail"),
);

// Building Module
// const Building = lazy(() => import("@/modules/buildings/pages/Building"));
// const BuildingDetail = lazy(
//   () => import("@/modules/buildings/pages/BuildingDetail"),
// );

// Plan Module
const Plan = lazy(() => import("@/modules/plans/pages/Plan"));
const PlanDetail = lazy(() => import("@/modules/plans/pages/PlanDetail"));

// Group Module
const Group = lazy(() => import("@/modules/groups/pages/Group"));
const GroupDetail = lazy(() => import("@/modules/groups/pages/GroupDetail"));

// Term Module
const Term = lazy(() => import("@/modules/terms/pages/Term"));
const TermDetail = lazy(() => import("@/modules/terms/pages/TermDetail"));

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
                path={PrivateRoutes.MAJOR}
                element={<Major />}
              />
              <Route
                path={PrivateRoutes.MAJOR_CREATE}
                element={<MajorDetail />}
              />
              <Route
                path={`${PrivateRoutes.MAJOR_DETAIL}/:id`}
                element={<MajorDetail />}
              />

              <Route
                path={PrivateRoutes.SUBJECT}
                element={<Subject />}
              />
              <Route
                path={PrivateRoutes.SUBJECT_CREATE}
                element={<SubjectDetail />}
              />
              <Route
                path={`${PrivateRoutes.SUBJECT_DETAIL}/:id`}
                element={<SubjectDetail />}
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

              <Route
                path={PrivateRoutes.STUDENT}
                element={<Student />}
              />
              <Route
                path={PrivateRoutes.STUDENT_CREATE}
                element={<StudentDetail />}
              />
              <Route
                path={`${PrivateRoutes.STUDENT_DETAIL}/:id`}
                element={<StudentDetail />}
              />

              <Route
                path={PrivateRoutes.TEACHER}
                element={<Teacher />}
              />
              <Route
                path={PrivateRoutes.TEACHER_CREATE}
                element={<TeacherDetail />}
              />
              <Route
                path={`${PrivateRoutes.TEACHER_DETAIL}/:id`}
                element={<TeacherDetail />}
              />

              <Route
                path={PrivateRoutes.TEACHER_SCHEDULE}
                element={<TeacherSchedule />}
              />
              <Route
                path={PrivateRoutes.TEACHER_SCHEDULE_CREATE}
                element={<TeacherScheduleDetail />}
              />
              <Route
                path={`${PrivateRoutes.TEACHER_SCHEDULE_DETAIL}/:id`}
                element={<TeacherScheduleDetail />}
              />

              <Route
                path={PrivateRoutes.REQUEST}
                element={<Request />}
              />
              <Route
                path={PrivateRoutes.REQUEST_CREATE}
                element={<RequestDetail />}
              />
              <Route
                path={`${PrivateRoutes.REQUEST_DETAIL}/:id`}
                element={<RequestDetail />}
              />

              {/* <Route
                path={PrivateRoutes.BUILDING}
                element={<Building />}
              />
              <Route
                path={PrivateRoutes.BUILDING_CREATE}
                element={<BuildingDetail />}
              />
              <Route
                path={`${PrivateRoutes.BUILDING_DETAIL}/:id`}
                element={<BuildingDetail />}
              /> */}

              <Route
                path={PrivateRoutes.PLAN}
                element={<Plan />}
              />
              <Route
                path={PrivateRoutes.PLAN_CREATE}
                element={<PlanDetail />}
              />
              <Route
                path={`${PrivateRoutes.PLAN_DETAIL}/:id`}
                element={<PlanDetail />}
              />

              <Route
                path={PrivateRoutes.GROUP}
                element={<Group />}
              />
              <Route
                path={PrivateRoutes.GROUP_CREATE}
                element={<GroupDetail />}
              />
              <Route
                path={`${PrivateRoutes.GROUP_DETAIL}/:id`}
                element={<GroupDetail />}
              />

              <Route
                path={PrivateRoutes.TERM}
                element={<Term />}
              />
              <Route
                path={PrivateRoutes.TERM_CREATE}
                element={<TermDetail />}
              />
              <Route
                path={`${PrivateRoutes.TERM_DETAIL}/:id`}
                element={<TermDetail />}
              />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
