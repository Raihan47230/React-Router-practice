import { Link } from "react-router-dom";

const Header = () => {
     return (
          <div>
               <nav className="">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>about</Link>
                    <Link to='/contact'>contact</Link>
                    <Link to='/Blog'>Blog</Link>
               </nav>
          </div>
     );
};

export default Header;

                    //    <link to='/'>Home</link>
                    // <link to='/about'>about</link>
                    // <link to='/contact'>contact</link>
                    // <link to='/Blog'>Blog</link>