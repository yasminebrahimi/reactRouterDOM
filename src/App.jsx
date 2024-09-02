
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home"; 
import Posts from "./pages/Posts"; 
import Dashboard from "./pages/Dashboard"; 
import AppNav from "./components/AppNav"; 
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Payments from "./components/Payments";
import Post from "./components/post";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} /> {/* This is the default route under /app */}
          <Route path="login" element={<Login/>} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="posts" element={<Posts />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />}>
            {/* Nested routes under profile */}
            <Route path="payments" element={<Payments />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;