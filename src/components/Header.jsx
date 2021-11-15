import Navbar from "./Navbar";
import './Header.css'
import Banner from '../img/main-banner.png'

export default function Header() {
    return <>
        <header>
            <Navbar />
            <img src={Banner} alt="banner" id='banner'/>
        </header>
        </>
    
}
