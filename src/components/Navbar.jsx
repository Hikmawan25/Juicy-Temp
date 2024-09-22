import React, { useState, useEffect, useRef } from "react";
import { Whatsapp } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import MainLogo from "../assets/images/logo-dark.png";
import axios from "axios";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null); // Referensi untuk menu
    const buttonRef = useRef(null); // Referensi untuk tombol menu
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://putih-skin-clinic.vercel.app/home');
            setData(response?.data);
        } catch (err) {
            setLoading(false);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    // Tutup menu ketika mengklik di luar area navbar
    const handleClickOutside = (e) => {
        if (
            menuOpen &&
            menuRef.current &&
            !menuRef.current.contains(e.target) && // Jika klik di luar menu
            buttonRef.current &&
            !buttonRef.current.contains(e.target) // Dan di luar tombol
        ) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        fetchData();
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuOpen]);

    // Helper function untuk menentukan link yang aktif
    const isActive = (path) => location.pathname === path;

    const handleWhatsAppRedirect = () => {
        const encodeMessage = encodeURIComponent(
            "Hallo, saya ingin melakukan reservasi."
        );
        const phoneNumber = data?.data?.reservasion_phone;
        const url = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;
        window.open(url, "_blank");
    };

    return (
        <header className="sticky top-0 z-50 py-4 bg-white shadow-md">
            <nav className="container flex items-center justify-between px-4 mx-auto md:flex lg:flex">
                <Link to="/" className="md:flex">
                    <img src={MainLogo} alt="Logo" className="w-16 h-6" />
                </Link>

                {/* Links untuk Desktop */}
                <ul className="hidden space-x-8 md:flex">
                    {/* <li>
                        <Link
                            to="/promo"
                            className={`text-sm text-charcoal font-semibold font-montserrat ${
                                isActive("/promo")
                                    ? "border-b-2 border-charcoal"
                                    : ""
                            }`}>
                            Promo
                        </Link>
                    </li> */}
                    <li>
                        <Link
                            to="/perawatan"
                            className={`text-sm text-charcoal font-semibold font-montserrat ${isActive("/perawatan")
                                    ? "border-b-2 border-b-charcoal text-charcoal pb-1"
                                    : ""
                                }`}>
                            Perawatan
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/lokasi"
                            className={`text-sm text-charcoal font-semibold font-montserrat ${isActive("/lokasi")
                                    ? "border-b-2 border-b-charcoal text-charcoal pb-1"
                                    : ""
                                }`}>
                            Lokasi
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            to="/tentangkami"
                            className={`text-sm text-charcoal font-semibold font-montserrat ${
                                isActive("/tentangkami")
                                    ? "border-b-2 border-b-charcoal text-charcoal pb-1"
                                    : ""
                            }`}>
                            Tentang Kami
                        </Link>
                    </li> */}
                </ul>

                <button
                    className="hidden md:flex flex-row items-center justify-center gap-2 px-6 py-1 bg-green-500 rounded-full focus:outline-none max-w-[215px]"
                    onClick={handleWhatsAppRedirect}>
                    <Whatsapp size={14} color="white" />
                    <p className="font-montserrat text-white text-[12px] font-semibold">
                        Reservasi Sekarang
                    </p>
                </button>

                {/* Tombol Menu untuk Mobile */}
                <button
                    className="md:hidden focus:outline-none"
                    ref={buttonRef}
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 8h16M4 16h16"
                        />
                    </svg>
                </button>
            </nav>

            {/* Menu untuk Mobile */}
            <div
                ref={menuRef}
                id="mobile-menu"
                className={`fixed top-0 left-0 z-40 w-64 p-4 h-full bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex flex-row items-center justify-between">
                    <img src={MainLogo} alt="Logo" className="w-12 h-4" />

                    <button
                        className="focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <hr className="my-4" />

                <ul className="flex flex-col p-4 space-y-4">
                    <li>
                        <Link
                            to="/"
                            className={`text-sm text-charcoal font-semibold font-montserrat ${isActive("/promo")
                                    ? "border-b-2 border-b-charcoal text-charcoal pb-1"
                                    : ""
                                }`}>
                            Home
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            to="/promo"
                            className={`text-sm text-charcoal font-semibold font-montserrat ${
                                isActive("/promo")
                                    ? "border-b-2 border-b-charcoal text-charcoal pb-1"
                                    : ""
                            }`}>
                            Promo
                        </Link>
                    </li> */}
                    <li>
                        <Link
                            to="/perawatan"
                            className={`text-sm text-charcoal font-semibold font-montserrat ${isActive("/perawatan")
                                    ? "border-b-2 border-b-charcoal text-charcoal pb-1"
                                    : ""
                                }`}>
                            Perawatan
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/lokasi"
                            className={`text-sm text-charcoal font-semibold font-montserrat ${isActive("/lokasi")
                                    ? "border-b-2 border-b-charcoal text-charcoal pb-1"
                                    : ""
                                }`}>
                            Lokasi
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            to="/tentangkami"
                            className={`text-sm text-charcoal font-semibold font-montserrat ${
                                isActive("/tentangkami")
                                    ? "border-b-2 border-b-charcoal text-charcoal pb-1"
                                    : ""
                            }`}>
                            Tentang Kami
                        </Link>
                    </li> */}

                    <div
                        className="flex flex-row items-center w-full gap-2 rounded-full focus:outline-none"
                        onClick={handleWhatsAppRedirect}>
                        <Whatsapp size={18} color="green" />
                        <p className="text-sm font-semibold text-green-600 font-montserrat">
                            Reservasi Sekarang
                        </p>
                    </div>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
