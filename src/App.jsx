// Importing necessary components from 'react-router-dom' for routing
import { Route, Routes } from "react-router-dom";
// Importing the stylesheet for the app
import "./App.css";

function App() {
  return (
    <div>
      {/* AppNav component renders the navigation for the app */}
      <AppNav />

      {/* Routes component is used to define the route paths and the components that should render for each path */}
      <Routes>
        {/* Each Route component defines a path and the corresponding component to be rendered */}
        
        {/* Route for the '/home' path, which renders the Home component */}
        <Route path="/home" element={<Home />} />
        
        {/* Route for the '/posts' path, which renders the Posts component */}
        <Route path="/posts" element={<Posts />} />
        
        {/* Route for the '/dashboard' path, which renders the Dashboard component */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

// Exporting the App component as the default export, so it can be imported and used in other files
export default App;
