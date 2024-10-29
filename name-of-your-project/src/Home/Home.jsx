import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
     return (
          <div className="bg-red-600">
               Hello !! Home page . This is Home page.........
               <Header></Header>
               <Outlet></Outlet>
          </div>
     );
};

export default Home;