import {
  BrowserRouter,
  Routes as RouterDomRoutes,
  Route,
} from "react-router-dom";

import { Home } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <RouterDomRoutes>
          <Route path="/" element={Home()} />
        </RouterDomRoutes>
      </div>
    </BrowserRouter>
  );
};
