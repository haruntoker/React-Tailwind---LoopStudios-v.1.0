import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { Flowbite} from 'flowbite-react';

// Speare Components
// import Companies from './components/Companies'
// import Content from "./components/Content";
// import Demo from './components/Demo';









// Import Components From Page
import HomePage from "./pages/HomePage";









// Define the Home component for the root path
const HomePageComp = () =>(
  <Layout>
    <HomePage />
  </Layout>
)







// router
const router = createBrowserRouter([
{path:'/', element: <HomePageComp />}




])










// route
function App() {
  return (
    <Flowbite>
      <div className="min-h-screen">

        <RouterProvider router={router} />

      </div>
    </Flowbite>
  );
}

export default App;
