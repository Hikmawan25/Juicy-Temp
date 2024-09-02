import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";

const Layout = lazy(() => import('../components/Layouts/DefaultLayout'));
const Landingpage = lazy(() => import('../pages/Landingpage'));
const Errorpage = lazy(() => import('../pages/Errorpage'));
const Notfoundpage = lazy(() => import('../pages/Notfoundpage'));
const LoadingPage = lazy(() => import('../pages/LoadingPage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<LoadingPage />}><Layout /></Suspense>,
        errorElement: <Errorpage />,
        children: [
            {
                path: '/',
                element: <Suspense fallback={<LoadingPage />}><Landingpage /></Suspense>,
                errorElement: <Errorpage />,
            }
        ]
    },
    {
        path: '*',
        element: <Notfoundpage />,
    },
]);

export default router
