import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";


function Layout() {
  return (
    <div> <AppNav />
    <Outlet/>
    <Footer style={{marginTop: "5rem"}}> This is Footer seciton </Footer>
    </div>
  ); 
}

export default Layout; 
