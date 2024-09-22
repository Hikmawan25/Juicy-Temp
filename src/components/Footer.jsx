import React from "react";
import MainLogo from "../assets/images/logo-dark.png";
import { Facebook, Instagram, Tiktok } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <footer className="mt-auto shadow-inner bg-secondary">
            <div className="container flex flex-col px-12 pt-12 pb-4 mx-auto space-y-8">
                <div className="flex xs:flex-col xs:justify-start md:flex-row md:justify-between lg:flex-row lg:justify-between">
                    <img
                        src={MainLogo}
                        alt="logo"
                        className="flex-none w-20 h-5 xs:mb-4 lg:w-[180px] lg:h-[58px]"
                    />

                    <div className="flex md:flex-row lg:flex-row lg:w-9/12 lg:space-x-14 xs:flex-col">
                        <div className="text-pretty">
                            <h1 className="text-xs font-semibold text-black font-montserrat lg:text-base">
                                Alamat Klinik
                            </h1>
                            <p className="text-[10px] lg:text-sm font-normal text-black font-montserrat">
                                Sentra Niaga Puri Indah Blok T2 No. 17,
                            </p>
                            <p className="text-[10px] lg:text-sm font-normal text-black font-montserrat">
                                Jakarta Barat
                            </p>
                        </div>
                        <div className="text-pretty">
                            <h1 className="text-xs font-semibold text-black lg:text-base font-montserrat">
                                Hubungi Kami
                            </h1>
                            <p className="text-[10px] lg:text-sm font-normal text-black font-montserrat">
                                021-58300517
                            </p>
                            <p className="text-[10px] lg:text-sm font-normal text-black font-montserrat">
                                putihskinclinic@gmail.com
                            </p>
                        </div>
                        <div className="text-pretty">
                            <h1 className="text-xs font-semibold text-black font-montserrat lg:text-base">
                                Waktu Operasional
                            </h1>
                            <p className="text-[10px] lg:text-sm font-normal text-black font-montserrat">
                                Senin – Minggu: 09:00 – 21:00
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex xs:gap-3 md:gap-5 lg:gap-10 xs:place-content-start md:place-content-center lg:place-content-center">
                    <Instagram
                        className="w-6 h-6 text-black lg:w-9 lg:h-10 md:w-8 md:h-8 hover:cursor-pointer hover:opacity-100 hover:scale-125 hover:transition-all hover:transform hover:fade-in-out"
                        onClick={() =>
                            window.open(
                                "https://www.instagram.com/putihskinclinic/",
                                "_blank"
                            )
                        }
                    />
                    <Facebook
                        className="w-6 h-6 text-black lg:w-9 lg:h-10 md:w-8 md:h-8 hover:cursor-pointer hover:opacity-100 hover:scale-125 hover:transition-all hover:transform hover:fade-in-out"
                        onClick={() =>
                            window.open(
                                "https://www.facebook.com/putihskinclinic",
                                "_blank"
                            )
                        }
                    />
                    <Tiktok
                        className="w-6 h-6 text-black lg:w-9 lg:h-10 md:w-8 md:h-8 hover:cursor-pointer hover:opacity-100 lg:hover:scale-125 hover:transition-all hover:transform hover:fade-in-out"
                        onClick={() =>
                            window.open(
                                "https://www.tiktok.com/@putihskinclinic",
                                "_blank"
                            )
                        }
                    />
                </div>

                <p className="xs:text-[10px] md:text-xs lg:text-sm font-montserrat font-normal lg:text-center md:text-center xs:text-start text-black">
                    Copyrigth &copy; {new Date().getFullYear()} Putih Skin
                    Clinic | All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
