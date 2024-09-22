import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Whatsapp } from "react-bootstrap-icons";
import Vector1 from "../assets/images/Vector 1.png";
import Bioimage1 from "../assets/images/bio1.png";
import Bioimage2 from "../assets/images/bio2.png";
import Bioimage3 from "../assets/images/bio3.png";
import Bioimage4 from "../assets/images/bio4.png";
import Bioimage5 from "../assets/images/bio5.png";
import Bioimage6 from "../assets/images/bio6.png";
import treatement1 from '../assets/images/treatment1.png'
import treatement2 from '../assets/images/treatment2.png'
import treatement3 from '../assets/images/treatment3.png'
import treatement4 from '../assets/images/treatment4.png'
import axios from 'axios'
import Loading from '../pages/LoadingPage'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/css/tailwind.css";

const LandingPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDataLanding();
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const getDataLanding = async () => {
        const response = await axios.get(process.env.REACT_BASE_API_URL + "/home");

        if (response.status !== 200) {
            setLoading(false);
            setError("Failed to fetch data");
            return;
        }

        setData(response.data);
        setLoading(false);
    };

    const handleWhatsAppRedirect = () => {
        const endcodeMessage = encodeURIComponent(
            "Hallo, saya ingin melakukan reservasi."
        );

        const phoneNumber = data?.data?.reservasion_phone;

        const url = `https://wa.me/${phoneNumber}?text=${endcodeMessage}`;
        window.open(url, "_blank");
    };

    function handleClick() {
        navigate("/perawatan");
    }

    // Render loading state, error message, or the fetched data
    if (loading) return <Loading />;

    return (
        <>
            <div className="relative">
                <div className="flex items-center w-full h-screen bgIndex">
                    <div className="flex flex-col gap-4 px-12 lg:px-36">
                        <div className="flex flex-col xs:space-y-0 md:space-x-1 lg:space-y-2">
                            <h1 className="xs:max-w-xl xs:text-xl md:text-3xl lg:text-[32px] lg:leading-9 font-semibold text-pretty font-montserrat text-charcoal">{data?.data?.section_header_title}</h1>
                            <p className="xs:text-[10px] md:text-xs xs:leading-3 font-normal lg:text-sm text-charcoal font-montserrat">{data?.data?.section_header_desc}</p>
                        </div>

                        <div className="flex">
                            <button
                                className="flex flex-row items-center justify-center gap-2 rounded-full xs:px-4 xs:py-0 md:px-5 md:py-2 lg:px-6 lg:py-2 bg-charcoal focus:outline-none"
                                onClick={handleWhatsAppRedirect}>
                                <Whatsapp size={14} color="white" />
                                <p className="font-montserrat text-white xs:text-[8px] md:text-xs lg:text-xs font-semibold">
                                    Reservasi Sekarang
                                </p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-transparent xs:bottom-0 lg:bottom-0">
                    <img src={Vector1} className="w-full h-32 xs:h-20 lg:h-48" />

                    <div className="absolute bottom-0 right-0 z-10 lg:top-[85px] xs:top-10 xs:right-10 xs:left-10 lg:left-36 left-12 top-16">
                        <h1 className="xs:max-w-md md:max-w-xl lg:max-w-2xl xs:text-xl md:text-3xl lg:text-[32px] lg:leading-9 font-semibold text-pretty font-montserrat text-charcoal">{data?.data?.section_middle_title}</h1>
                        <p className="lg:max-w-[1000px] md:max-w-full xs:max-w-[550px] xs:text-[10px] xs:leading-3 md:text-xs lg:text-sm font-normal text-charcoal font-montserrat text-pretty">{data?.data?.section_middle_desc}</p>
                    </div>
                </div>
            </div>

            <div className="pb-5 pt-28 lg:pb-10 lg:pt-10 px-11 lg:px-36 xs:pt-32 md:pt-24">
                <div className="flex flex-col items-center justify-center gap-6 lg:gap-8">
                    <div className="grid gap-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xs:w-full lg:gap-4">
                        <div className="relative group" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <img
                                src={treatement2}
                                alt="perawatan"
                                className="w-64 h-16 lg:h-[122px] lg:w-[280px] xs:w-full object-cover cursor-pointer rounded-xl lg:rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                title="Skin Booster"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
                            <div className="absolute xs:left-16 xs:right-16 xs:top-6 lg:left-14 lg:top-[45px]">
                                <p className="text-xs font-semibold text-center text-white lg:text-xl font-montserrat">
                                    Skin Booster
                                </p>
                            </div>
                        </div>

                        <div className="relative group" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <img
                                src={treatement4}
                                alt="perawatan"
                                className="w-64 h-16 lg:h-[122px] lg:w-[280px] xs:w-full object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                title="Contouring"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
                            <div className="absolute top-6 left-6 xs:left-16 xs:right-16 xs:top-6 lg:left-[70px] lg:top-[45px]">
                                <p className="text-xs font-semibold text-center text-white lg:text-xl font-montserrat">
                                    Contouring
                                </p>
                            </div>
                        </div>

                        <div className="relative group" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <img
                                src={treatement3}
                                alt="perawatan"
                                className="w-64 h-16 lg:h-[122px] lg:w-[280px] xs:w-full object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                title="Rejuvenation"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
                            <div className="absolute top-6 left-6 xs:left-16 xs:right-16 xs:top-6 lg:left-[70px] lg:top-[45px]">
                                <p className="text-xs font-semibold text-center text-white lg:text-xl font-montserrat">
                                    Rejuvenation
                                </p>
                            </div>
                        </div>

                        <div className="relative group" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <img
                                src={treatement1}
                                alt="perawatan"
                                className="w-64 h-16 lg:h-[122px] lg:w-[280px] xs:w-full object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                title="Restoration & Growth Hair Booster"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
                            <div className="absolute left-1 top-2 xs:left-16 xs:right-16 xs:top-4 md:left-20 lg:left-[58px] lg:top-[20px] xs:max-w-40">
                                <p className="text-xs font-semibold text-center text-white lg:text-xl font-montserrat">
                                    Restoration & Growth Hair Booster
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        className="px-6 py-2 rounded-full place-content-center bg-charcoal focus:outline-none"
                        onClick={handleClick}>
                        <p className="text-xs font-normal text-white lg:text-base font-montserrat">
                            Lihat Treatment lainnya
                        </p>
                    </button>

                    <div className="flex flex-col items-center mt-2 xs:w-full xs:mx-12 lg:mt-6">
                        <p className="font-montserrat md:text-xl xs:text-base xs:text-center  lg:text-[32px] font-semibold text-charcoal mb-5 lg:mb-10">
                            Mengapa Memilih Putih Skin CLinic?
                        </p>

                        {/* <div className="flex flex-row items-center justify-between gap-8 xs:flex-col xs:w-full lg:gap-24"> */}
                        <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xs:gap-8 md:gap-16 lg:gap-24">
                            <div className="flex flex-col gap-5 lg:gap-14">
                                <div className="flex flex-row items-center lg:w-[474px] break-all w-64 gap-7 lg:gap-14 text-pretty" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                    <img
                                        src={Bioimage6}
                                        className="w-10 h-10 lg:w-20 lg:h-20"
                                    />

                                    <div className="flex flex-col items-start">
                                        <h1 className="text-xs font-semibold text-black lg:text-xl font-montserrat">
                                            Advanced Technology
                                        </h1>
                                        <p className="text-xs font-normal text-black lg:text-base lg:w-64 font-montserrat">
                                            Mesin berkualitas tinggi untuk hasil
                                            maksimal
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center lg:w-[440px] break-all w-64 gap-7 lg:gap-14 text-pretty" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
                                    <img
                                        src={Bioimage1}
                                        className="w-10 h-10 lg:w-20 lg:h-20"
                                    />

                                    <div className="flex flex-col items-start">
                                        <h1 className="text-xs font-semibold text-black lg:text-xl font-montserrat">
                                            Comfortable and welcoming
                                            environment
                                        </h1>
                                        <p className="text-xs font-normal text-black lg:text-base lg:w-64 font-montserrat">
                                            Klinik kecantikan yang nyaman dan
                                            ramah
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center lg:w-[474px] break-all w-64 gap-7 lg:gap-14 text-pretty" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
                                    <img
                                        src={Bioimage2}
                                        className="w-10 h-10 lg:w-20 lg:h-20"
                                    />

                                    <div className="flex flex-col items-start">
                                        <h1 className="text-xs font-semibold text-black lg:text-xl font-montserrat">
                                            Warm and attentive service
                                        </h1>
                                        <p className="text-xs font-normal text-black lg:text-base lg:w-64 font-montserrat">
                                            Layanan penuh perhatian yang fokus
                                            pada kebutuhan Anda
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 lg:gap-14">
                                <div className="flex flex-row items-center break-all w-64 lg:w-[420px] gap-7 lg:gap-14 text-pretty" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                    <img
                                        src={Bioimage5}
                                        className="h-14 w-14 lg:w-20 lg:h-20"
                                    />

                                    <div className="flex flex-col items-start">
                                        <h1 className="text-xs font-semibold text-black lg:text-xl lg:w-64 font-montserrat">
                                            Efficient solutions with minimal
                                            downtime
                                        </h1>
                                        <p className="lg:w-[270px] text-xs font-normal lg:text-base text-black font-montserrat">
                                            Perawatan efektif dengan waktu
                                            pemulihan yang cepat
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center break-all w-64 lg:w-[420px] gap-7 lg:gap-14 text-pretty" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
                                    <img
                                        src={Bioimage4}
                                        className="w-10 h-10 lg:w-20 lg:h-20"
                                    />

                                    <div className="flex flex-col items-start">
                                        <h1 className="text-xs font-semibold text-black lg:text-xl font-montserrat">
                                            Exceptional Results
                                        </h1>
                                        <p className="font-normal text-xs text-black lg:text-base lg:w-[260px] font-montserrat">
                                            Hasil perawatan yang luar biasa dan
                                            memuaskan
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center break-all w-64 lg:w-[420px] gap-7 lg:gap-14 text-pretty" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
                                    <img
                                        src={Bioimage3}
                                        className="w-10 h-10 lg:w-20 lg:h-20"
                                    />

                                    <div className="flex flex-col items-start">
                                        <h1 className="text-xs font-semibold text-black lg:text-xl font-montserrat">
                                            Experienced doctors and medical
                                            staff
                                        </h1>
                                        <p className="text-xs font-normal text-black lg:text-base font-montserrat">
                                            Ditangani oleh dokter dan staf medis
                                            berpengalaman
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex lg:flex-row lg:items-center lg:justify-between xs:gap-2 xs:flex-col lg:gap-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        {data?.data?.section_list_promo.map((it) => (
                            <img
                                key={it?._id}
                                src={it?.image}
                                className="w-44 h-44 xs:w-auto xs:h-auto lg:w-[380px] lg:h-[380px] transition-transform duration-300 transform hover:scale-105"
                            />
                        ))}
                    </div>

                    <div className="max-w-[550px] lg:max-w-[712px] text-center">
                        <p className="text-xs font-normal text-black md:text-sm lg:text-base font-montserrat ">
                            We’re here to solve your skin problems with
                            personalized care and advanced treatments.
                            Experience the difference of a one-stop solution for
                            your skincare needs.
                        </p>
                        <p className="mt-8 italic font-normal text-black xs:text-xs md:text-sm lg:text-base font-montserrat">
                            "Your Skin Problem, Solved by Us."
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
