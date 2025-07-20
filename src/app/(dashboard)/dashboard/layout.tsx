import Footer from "@/components/dashboard/footer";
import Navbar from "@/components/dashboard/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-[#F8F8F8] min-h-screen">
            <Navbar />
            <div className=" p-2">
                {children}

            </div>
            <Footer/>
        </div>
    );
};

export default DashboardLayout;