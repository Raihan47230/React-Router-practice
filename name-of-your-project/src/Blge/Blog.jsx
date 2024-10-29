import { useLoaderData } from "react-router-dom";

const Blog = () => {
     const posts=useLoaderData()
     return (
          <div>
               <p>Poats:{posts.lenght}</p>
               Hello !!! Bloge page!!!!//.........
          </div>
     );
};

export default Blog;