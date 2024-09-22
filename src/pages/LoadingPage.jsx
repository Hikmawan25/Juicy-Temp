import '../assets/css/loader.css'

export default function LoadingPage() {
    return (
        <>
            <div className="fixed inset-0 z-[60] grid place-content-center bg-white opacity-75">
                <div className="loader"></div>
                {/* <div className="fas fa-circle-notch fa-spin fa-5x text-violet-600"></div> */}
            </div>
        </>
    )
}
