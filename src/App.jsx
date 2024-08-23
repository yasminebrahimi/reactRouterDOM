
import { Route, Routes } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div>
<AppNav />
<Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/posts" element={<Posts />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
    </div>
  );
}

export default App;
