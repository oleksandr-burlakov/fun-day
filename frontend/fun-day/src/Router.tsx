import {
    createBrowserRouter,

} from "react-router-dom";
import { Login } from "./pages/authentication/Login";
import { Registration } from "./pages/authentication/Registration";
import { BaseLayout } from "./pages/BaseLayout";
import { Home } from "./pages/home/Home";

export const funDayRouter = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    },
]);