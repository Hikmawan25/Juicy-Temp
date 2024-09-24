import LokasiImage from "../assets/images/lokasiImg.png";
import { Map } from "react-bootstrap-icons";

const Lokasi = () => {
    const showInMapClicked = () => {
        window.open(
            "https://maps.google.com?q=" +
            -6.187769306156649 +
            "," +
            106.73635640083177
        );
    };

    return (
        <div className="flex flex-col">
            <div className="relative">
                <div className="xs:max-w-md lg:max-w-[616px] lg:max-h-[283px] absolute xs:top-28 xs:left-11 md:top-32 md:left-[44px] lg:top-20 xl:left-[142px] lg:left-32">
                    <h1 className="font-semibold xs:text-lg lg:text-[32px] font-montserrat text-black lg:mb-1">
                        Our Location
                    </h1>

                    <p className="text-black lg:font-normal xs:text-xs font-montserrat lg:text-base text-pretty">
                        Berlokasi strategis untuk memberikan pelayanan terbaik
                        bagi Anda.
                    </p>
                    <br />
                    <p className="text-black lg:font-normal xs:text-xs font-montserrat lg:text-base text-pretty">
                        Putih Skin Clinic menawarkan lokasi yang mudah diakses
                        untuk kenyamanan Anda.
                    </p>
                    <br />
                    <p className="text-black lg:font-normal xs:text-xs font-montserrat lg:text-base text-pretty">
                        Klinik kami menyediakan lingkungan yang ramah dan
                        profesional untuk memastikan Anda merasa tenang dan
                        terawat saat menjalani perawatan kulit bersama kami.
                    </p>
                    <br />
                    <p className="text-black lg:font-normal xs:text-xs font-montserrat lg:text-base text-pretty">
                        Alamat Klinik: Sentra Niaga Puri Indah Blok T2 No. 17,
                        Kembangan Sel., Kec. Kembangan Kota Jakarta Barat,
                        Daerah Khusus Ibukota Jakarta 11610
                    </p>
                    <br />

                    <button
                        className="flex flex-row items-center lg:w-[225px] justify-center gap-2 lg:px-6 lg:py-2 xs:px-4 xs:py-1 rounded-full bg-charcoal focus:outline-none"
                        onClick={showInMapClicked}>
                        <Map size={14} color="white" />
                        <p className="font-montserrat text-white lg:text-[12px] xs:text-[10px] font-semibold">
                            Lokasi Kami
                        </p>
                    </button>
                </div>

                <img
                    src={LokasiImage}
                    className="w-auto h-[580px] object-cover float-right"
                />
            </div>

            <div className="text-center lg:py-6 xs:px-11 xs:py-6 md:px-[44px] md:py-6 lg:px-32">
                <p className="font-normal text-black xs:text-xs md:text-sm lg:text-base font-montserrat">
                    We’re here to solve your skin problems with personalized
                    care and advanced treatments.
                </p>
                <p className="font-normal text-black xs:text-xs md:text-sm lg:text-base font-montserrat">
                    Experience the difference of a one-stop solution for your
                    skincare needs.
                </p>
                <p className="mt-8 italic font-normal text-black xs:text-xs md:text-sm lg:text-base font-montserrat">
                    "Your Skin Problem, Solved by Us."
                </p>
            </div>
        </div>
    );
};

export default Lokasi;
