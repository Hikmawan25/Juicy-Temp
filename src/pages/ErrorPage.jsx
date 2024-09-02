export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold text-red-500">500</h1>
            <p className="text-xl text-center text-gray-600">Something went wrong!</p>
            <a
                href="/"
                className="px-4 py-2 mt-8 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
                Back to home
            </a>
        </div>
    );
}
