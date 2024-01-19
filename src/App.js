import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
  // BrowserRouter,
} from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Books />
      </div>
    ),
  },
  {
    path: "/add",
    element: (
      <div>
        <Add />
      </div>
    ),
  },
  {
    path: "/update",
    element: (
      <div>
        <Update />
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
