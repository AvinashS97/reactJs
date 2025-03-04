import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createRoutesFromElements, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Movie } from './pages/Movies';
import { Contact } from './pages/Contact';
import AppLayout from './components/layout/AppLayout';
const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout />,
      errorElement
      children: [
        {
          path:"/",
          element: <Home />,
        },
        {
          path:"/about",
          element: <About />,
        },
        {
          path:"/movies",
          element: <Movie />,
        },
        {
          path:"/contact",
          element: <Contact />,
        },
      ]
    },
  ]);

  //? V76: createRoutesFromElements :- 

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element= {<Home />}/>
  //       <Route path="/about" element= {<About />}/>
  //       <Route path="/contact" element= {<Contact />}/>
  //       <Route path="/movie" element= {<Movie />}/>
  //     </Route>
  //   )
  // );

  
  return <RouterProvider router={router} />;
}

export default App;