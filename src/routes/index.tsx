import {
  BrowserRouter,
  Routes as RouterDomRoutes,
  Route,
} from "react-router-dom";

import { Home, UserPage } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <RouterDomRoutes>
          <Route path="/" element={Home()} />
          <Route path="/user/:id" element={UserPage()} />
        </RouterDomRoutes>
      </div>
    </BrowserRouter>
  );
};
