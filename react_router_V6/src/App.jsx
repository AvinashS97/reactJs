import './App.css';
import { createBrowserRouter } from "react-router-dom";
const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home />
    },
    {
      path:"/about",
      element: <About />
    },
    {
      path:"/serices",
      element: <Services />
    },
    {
      path:"/contact",
      element: <Contact />
    }
  ])
  return <h1> Hello React Router</h1>
}

export default App;