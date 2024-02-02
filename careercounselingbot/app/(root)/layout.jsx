import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
