import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Contact, Product } from "./pages";
import Mainlayout from "./layout/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
