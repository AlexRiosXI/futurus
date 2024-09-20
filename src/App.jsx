import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./modules/auth/login/login";
import { NextUIProvider } from "@nextui-org/react";
import Dashboard from "./components/structure/dashboard/dashboard";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Clients from "./modules/clients/clients";
import Index from "./modules/index";
import AppContextProvider from "./appContext/appContext";
import NotFound from "./components/structure/reusable/notFound";
import Organization from "./modules/organization/organization";
import User from "./modules/organization/users/user/user";
import Users from "./modules/organization/users/users";
import Register from "./modules/auth/login/register";
import ConfirmationCode from "./modules/auth/confirmation/confirmation";
import NewProfile from "./modules/profile/newProfile";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NextUIProvider>
        <main className="box-border">
          <AppContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/confirmation" element={<ConfirmationCode />} />
              <Route path="/index" element={<Dashboard />} >
                <Route index element={<Index />} />
                <Route path="new-profile" element={<NewProfile />} />
                <Route path="clients" element={<Clients />} />
                <Route path="organization" element={<Organization />} >
                  <Route path="users" element={<Users />} />
                  <Route path="subscription" element={<h1>Suscripción</h1>} />
                </Route>
                <Route path="organization/user/new" element={<User />} />
              </Route>
            </Routes>
          </BrowserRouter>
          </AppContextProvider>
        </main>
      </NextUIProvider>
    </>
  );
}

export default App;
