import '../assets/css/loader.css'

export default function LoadingPage() {
    return (
        <>
            <div className="fixed inset-0 z-[60] grid place-content-center bg-[#fafafa]">
                <div className="loader"></div>
            </div>
        </>
    )
}
