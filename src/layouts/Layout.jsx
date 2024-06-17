import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Layout({children}) {
  return (
    <div className="min-h-screen">
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
