import logo from './logo.png'

export default function Navbar() {
    return (
        <div className='navbar'>
            <img src={logo} alt="logo" id='logo'/>
            <ul class="navbar__list">
                <li>INTRODUCTION</li>
                <li>SOLUTION</li>
                <li>RATE PLAN</li>
                <li>
                    <div></div>
                </li>
                <li>LOGIN</li>
                <li>APPLY FOR FREE USE</li>
            </ul>
        </div>
    )
}
