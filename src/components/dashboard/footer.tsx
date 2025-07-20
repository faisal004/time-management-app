const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white p-10 flex items-center justify-center h-20 max-w-5xl my-3 mx-auto rounded shadow border border-gray-50 font-light">
            © {currentYear} tentwenty. All rights reserved.
        </footer>
    )
}

export default Footer