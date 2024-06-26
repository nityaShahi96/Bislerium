import { Route, Routes } from "react-router-dom";
import UserLayout from "./Layout/UserLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
