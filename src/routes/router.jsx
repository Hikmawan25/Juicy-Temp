import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";

const Layout = lazy(() => import("../components/Layouts/DefaultLayout"));
const Landingpage = lazy(() => import("../pages/LandingPage"));
const Errorpage = lazy(() => import("../pages/Errorpage"));
const Notfoundpage = lazy(() => import("../pages/Notfoundpage"));
const LoadingPage = lazy(() => import("../pages/LoadingPage"));
const Comingsoon = lazy(() => import("../pages/CoomingSoon"));
const Promo = lazy(() => import("../pages/Promo"));
const Perawatan = lazy(() => import("../pages/Perawatan"));
const Lokasi = lazy(() => import("../pages/Lokasi"));
const Tentangkami = lazy(() => import("../pages/TentangKami"));
const Treatment = lazy(() => import("../pages/Treatment"));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<LoadingPage />}>
                <Layout />
            </Suspense>
        ),
        errorElement: <Errorpage />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <Landingpage />
                    </Suspense>
                ),
                errorElement: <Errorpage />,
            },
            // {
            //     path: "/comingsoon",
            //     element: (
            //         <Suspense fallback={<LoadingPage />}>
            //             <Comingsoon />
            //         </Suspense>
            //     ),
            //     errorElement: <Errorpage />,
            // },
            // {
            //     path: "/promo",
            //     element: (
            //         <Suspense fallback={<LoadingPage />}>
            //             <Promo />
            //         </Suspense>
            //     ),
            //     errorElement: <Errorpage />,
            // },
            {
                path: "/perawatan",
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <Perawatan />
                    </Suspense>
                ),
                errorElement: <Errorpage />,
            },
            {
                path: "/lokasi",
                element: (
                    <Suspense fallback={<LoadingPage />}>
                        <Lokasi />
                    </Suspense>
                ),
                errorElement: <Errorpage />,
            },
            // {
            //     path: "/tentangkami",
            //     element: (
            //         <Suspense fallback={<LoadingPage />}>
            //             <Tentangkami />
            //         </Suspense>
            //     ),
            //     errorElement: <Errorpage />,
            // },
            // {
            //     path: "/treatment",
            //     element: (
            //         <Suspense fallback={<LoadingPage />}>
            //             <Treatment />
            //         </Suspense>
            //     ),
            //     errorElement: <Errorpage />,
            // },
        ],
    },
    {
        path: "*",
        element: <Notfoundpage />,
    },
]);

export default router;
