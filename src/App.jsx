
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
       <Route path="/app" element={<Layout />}>
        <Route index  element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      /</Routes>
     
    </div>
  );
}


export default App;
