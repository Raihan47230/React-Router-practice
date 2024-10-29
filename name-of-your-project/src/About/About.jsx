import { useLoaderData } from "react-router-dom";


const About = () => {
     const todo =useLoaderData()
     return (
          <div>
               
             
                    <h1>Todo:{todo.lenght}</h1>
               Hello !! About page . This is about page.........
            
          </div>
     );
};

export default About;