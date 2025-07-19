import Navbar from "@/components/dashboard/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-[#F8F8F8] min-h-screen">
            <Navbar />
            <div className=" ">
                {children}

            </div>
        </div>
    );
};

export default DashboardLayout;