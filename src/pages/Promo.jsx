import PromoImg from '../assets/images/100853.png'

const Promo = () => {
    return (
        <div>
            <div className="relative">
                <img src={PromoImg} className="object-cover w-full h-[363px]" />

                <div className="absolute top-11 left-12 lg:top-40 lg:left-32">
                    <h1 className="font-semibold text-lg lg:text-[32px] font-montserrat text-charcoal lg:mb-1">
                        Promo Klinik Kecantikan
                    </h1>
                    <p className="text-[8px] leading-none font-normal font-montserrat lg:text-sm text-charcoal">
                        Dapatkan potongan diskon 100rb untuk semua treatment!
                    </p>
                </div>

                <div className="py-6 text-center">
                    <p className="text-base font-semibold font-montserrat text-charcoal">Cooming Soon</p>
                </div>
            </div>
        </div>
    )
}

export default Promo