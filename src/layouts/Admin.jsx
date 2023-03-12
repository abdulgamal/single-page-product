import HeaderStats from "@/components/HeaderStats";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-100 min-h-screen">
        <div className="hidden md:block">
          <Navbar />
        </div>
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
