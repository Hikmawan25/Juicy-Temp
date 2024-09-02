import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../assets/css/tailwind.css'

const Layout = () => {
    const location = useLocation();
    const [showTopButton, setShowTopButton] = useState(false);

    const goToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const onScrollHandler = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setShowTopButton(true);
        } else {
            setShowTopButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScrollHandler);
        window.scroll(0, 0);

        return () => {
            window.removeEventListener('onscroll', onScrollHandler);
        };
    }, [location.pathname]);

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <div>
            <div className="flex min-h-screen antialiased background">
                {/* <Header className={showTopButton ? 'sticky-header' : ''} /> */}

                <Outlet />

                {/* <Footer /> */}
            </div>

            {showTopButton && (
                <button type="button" className="fixed z-10 bottom-5 left-5 animate-bounce" onClick={goToTop}>
                    <div className="flex items-center justify-center text-white transition duration-500 bg-black border rounded-full group h-14 w-14 border-black/20 hover:bg-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 transition group-hover:text-white"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>
                </button>
            )}
        </div>

    )
}

export default Layout