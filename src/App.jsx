import {
  createBrowserRouter,
  createRoutesFromElement,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Create, Dashboard, Profile } from "./pages";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElement(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
