import Navbar from "../../components/shared/Navbar"


export default function RootLayout({
  children,
}) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
   
    </div>
  )
}