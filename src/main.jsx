import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./router/Router";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(

  <QueryClientProvider client={queryClient}>

    <React.StrictMode>

      <RouterProvider router={router} />

    </React.StrictMode>

  </QueryClientProvider>

);