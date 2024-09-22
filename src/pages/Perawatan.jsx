import React, { useEffect, useState } from "react";
import axios from "axios";
import perawatanimg from "../assets/images/101385.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import LoadingPage from "./LoadingPage";

const Perawatan = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDataPerawatan();
    }, []);

    const getDataPerawatan = async () => {
        const response = await axios.get(process.env.REACT_BASE_API_URL + "/home/treatment");
        console.log(response.data, 'DATA');

        if (response.status !== 200) {
            setLoading(false);
            setError("Failed to fetch data");
            return;
        }
        setData(response.data);
        setLoading(false);
    };

    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ];

    const properties = {
        prevArrow: (
            <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="000"
                    className="bi bi-chevron-left"
                    viewBox="0 0 16 16">
                    <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                    />
                </svg>
            </button>
        ),
        nextArrow: (
            <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="000"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16">
                    <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                </svg>
            </button>
        ),
    };

    // Render loading state, error message, or the fetched data
    if (loading) return <LoadingPage />;

    return (
        // <div className="relative">
        //     <img src={perawatanimg} className='w-full h-full'/>

        //     <div className='absolute top-11 left-12 lg:top-40 lg:left-32'>
        //         <h1 className='font-semibold text-lg lg:text-[32px] font-montserrat text-charcoal lg:mb-1'>Putih Signature Treatment</h1>
        //         <p className='text-[8px] leading-none font-normal font-montserrat lg:text-sm text-charcoal'>Dapatkan potongan diskon 100rb untuk semua treatment!</p>
        //     </div>

        //     <div className='px-12 py-8 lg:py-12 lg:px-32'>
        //         <div className='text-center'>
        //             <h1 className='mb-4 lg:mb-8 font-semibold text-lg lg:text-[32px] font-montserrat text-charcoal'>Perawatan Wajah</h1>

        //             <div className='grid grid-cols-2 gap-4 lg:grid-cols-4 place-items-center'>
        //                 <div className='relative group' onClick={handleDirect} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan1}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        //                         title="Putih Signature Facial"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-5 lg:right-4 lg:top-12">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Signature Facial
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan2}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        //                         title="Putih Skin Signature"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-5 lg:right-4 lg:top-12">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Skin Signature
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan3}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        //                         title="Putih Signature Hair Removal"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-5 lg:right-4 lg:top-9">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Signature Hair Removal
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan4}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        //                         title="Putih Signature Peeling"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-5 lg:right-6 lg:left-6 lg:top-9">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Signature Peeling
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan5}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        //                         title="Putih Signature Laser"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-5 lg:right-4 lg:top-12">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Signature Laser
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan6}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        //                         title="Putih Ultimate Scar Acne"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-5 lg:right-6 lg:left-6 lg:top-9">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Ultimate Scar Acne
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan7}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        //                         title="Putih Meso Slim Signature"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-5 lg:right-6 lg:left-6 lg:top-9">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Meso Slim Signature
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan15}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        //                         title="Putih Signature Threadlift"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-5 lg:right-6 lg:left-6 lg:top-9">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Signature Threadlift
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan8}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        //                         title="Putih Signature Botox"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-5 lg:right-4 lg:top-12">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Signature Botox
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan9}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        //                         title="Putih Signature Filler"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-5 lg:right-4 lg:top-12">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Signature Filler
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan16}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        //                         title="Putih Signature Skin Booster"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-5 lg:right-4 lg:top-9">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Signature Skin Booster
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan10}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        //                         title="Putih Signature Lifting"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-5 lg:right-0 lg:left-0 lg:top-12">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Signature Lifting
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className='flex flex-col items-center justify-center mx-8'>
        //             <h1 className='my-4 lg:my-8 font-semibold text-lg lg:text-[32px] font-montserrat text-charcoal'>Perawatan Rambut</h1>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan13}
        //                         alt="perawatan"
        //                         className="w-[200px] h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        //                         title="Putih Hair Growth Signature"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute break-all top-3 left-9 right-9 lg:right-11 lg:left-11 lg:top-9 text-pretty">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Hair Growth Signature
        //                         </p>
        //                     </div>
        //                 </div>
        //         </div>

        //         <div className='mx-8 text-center lg:mx-36'>
        //             <h1 className='my-4 lg:my-8 font-semibold text-lg lg:text-[32px] font-montserrat text-charcoal'>Perawatan Lainnya</h1>

        //             <div className='grid grid-cols-3 gap-4 lg:place-items-center'>
        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan11}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl hover:cursor-pointer"
        //                         title="Putih Infused Signature"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-3 lg:right-0 lg:left-0 lg:top-12">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Infused Signature
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan12}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl hover:cursor-pointer"
        //                         title="Putih Volumizing Signature"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-3 lg:left-0 lg:right-0 lg:top-9">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Volumizing Signature
        //                         </p>
        //                     </div>
        //                 </div>

        //                 <div className='relative group' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        //                     <img
        //                         src={Perawatan14}
        //                         alt="perawatan"
        //                         className="w-64 h-16 lg:h-[122px] lg:w-[280px] object-cover rounded-xl lg:rounded-3xl hover:cursor-pointer"
        //                         title="Putih Tattoo Removal"
        //                     />
        //                     {/* Overlay */}
        //                     <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-50 cursor-pointer group-hover:opacity-0 rounded-xl lg:rounded-3xl"></div>
        //                     <div className="absolute left-0 right-0 top-3 lg:left-0 lg:right-0 lg:top-12">
        //                         <p className="text-sm font-semibold text-center text-white lg:text-xl font-montserrat">
        //                             Putih Tattoo Removal
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="relative">
            <img src={perawatanimg} className="object-cover w-full h-[363px]" />

            <div className="absolute top-11 left-12 xs:top-40 xs:left-10 lg:top-40 lg:left-32">
                <h1 className="font-semibold text-lg lg:text-[32px] font-montserrat text-charcoal lg:mb-1">
                    Putih Signature Treatment
                </h1>
                <p className="text-[8px] leading-none font-normal font-montserrat lg:text-sm text-charcoal">
                    Dapatkan potongan diskon 100rb untuk semua treatment!
                </p>
            </div>

            <div className="xs:p-10 md:p-28 lg:p-32">
                <div className="slide-container">
                    <Slide
                        indicators={true}
                        responsive={responsiveSettings}
                        {...properties}>
                        {/* {slideImages.map((slideImage, index) => (
                            <div key={index} className="each-slide">
                                <img
                                    className="object-cover w-full lazy"
                                    src={slideImage.url}
                                    id={slideImage.id}
                                    alt="image"
                                />
                            </div>
                        ))} */}
                        {data?.data?.section_treatment.map((item, index) => (
                            <div key={index} className="each-slide">
                                <img
                                    className="object-cover w-full lazy"
                                    src={item.image}
                                    id={item._id}
                                    alt={`Image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Perawatan;
