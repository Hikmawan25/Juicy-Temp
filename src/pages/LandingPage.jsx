import { useEffect, useState } from "react"
import { Instagram, Facebook, Tiktok } from "react-bootstrap-icons"
import MainLogo from "../assets/images/main_logo.png"

const LandingPage = () => {
    const api = "https://be-project-jofu.vercel.app/newspagination/?limit=1&page=1"
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(api)
                const data = await response.json()
                console.log(data?.news, 'DATA');
                setData(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <div className="mb-12 w-44 h-44 md:w-60 md:h-60 md:mb-0 lg:w-72 lg:h-72 lg:mb-0">
                <img src={MainLogo} alt="Putih Skin Clinic" />
            </div>
            <div className="flex flex-col items-center gap-4 md:gap-5 lg:gap-6">
                <h1 className="text-3xl font-medium font-montserrat text-white md:text-4xl lg:text-[55px]">COMING SOON</h1>
                <p className="text-white font-normal font-montserrat text-xs md:text-sm lg:text-base text-center text-pretty w-[59%]">Our website is <span className="italic font-normal text-white font-montserrat">under construction,</span> stay connected with us on our social media for the latest updates!</p>
                <div className="flex gap-3 md:gap-5 lg:gap-10">
                    <Instagram className="w-5 h-5 text-white duration-300 lg:w-9 lg:h-10 md:w-8 md:h-8 hover:cursor-pointer hover:opacity-100 hover:scale-125 hover:transition-all hover:transform hover:fade-in-out" onClick={() => window.open('https://www.instagram.com/putihskinclinic/', '_blank')} />
                    <Facebook className="w-5 h-5 text-white duration-300 lg:w-9 lg:h-10 md:w-8 md:h-8 hover:cursor-pointer hover:opacity-100 hover:scale-125 hover:transition-all hover:transform hover:fade-in-out" onClick={() => window.open('https://www.facebook.com/putihskinclinic', '_blank')} />
                    <Tiktok className="w-5 h-5 text-white duration-300 lg:w-9 lg:h-10 md:w-8 md:h-8 hover:cursor-pointer hover:opacity-100 hover:scale-125 hover:transition-all hover:transform hover:fade-in-out" onClick={() => window.open('https://www.tiktok.com/@putihskinclinic', '_blank')} />
                </div>
            </div>

            {/* {data?.news?.map((item, index) => (
                <div key={index}>
                    <img src={item?.urlToImage || ''} alt={item?.title || ''} />
                </div>
            ))} */}
        </div>
    )
}

export default LandingPage