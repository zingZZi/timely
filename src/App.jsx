import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AppProvider from "./providers";
import Calendar from "./pages/calendar/Calendar";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/index/Projects";
import Board from "./pages/board/Board";
import My from "./pages/calendar/my/My";
import Team from "./pages/calendar/team/Team";
import BoardDetail from "./pages/boardDetail/BoardDetail";
import BoardWrite from "./pages/boardWrite/BoardWrite";
import ProjectDetail from "./pages/projects/detail/ProjectDetail";
import NewProject from "./pages/projects/new/NewProject";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { useAuthInit } from "./hooks/useAuthInit";

function App() {
  //새로고침시 유저정보 저장
  useAuthInit();
  return (
    <AppProvider>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="schedule" element={<Calendar />}>
              <Route path="my" element={<My />} />
              <Route path="team" element={<Team />} />
            </Route>
            <Route path="projects" element={<Projects />} />
            <Route path="projects/detail/:id" element={<ProjectDetail />} />
            <Route path="projects/new" element={<NewProject />} />
            <Route path="board" element={<Board />} />
            <Route path="board/detail/:id" element={<BoardDetail />} />
            <Route path="board/write" element={<BoardWrite />} />
          </Route>
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
