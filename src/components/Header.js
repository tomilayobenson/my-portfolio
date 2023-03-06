import { useState } from 'react';
import TomiLogo from '../images/TA.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='topNavDiv text-center'>
            <ul className={menuOpen ? 'topnav responsive d-inline-block' : 'topnav d-inline-block'}>
                <li className="icon">
                    <a href="javascript:void(0)" onClick={() => setMenuOpen(!menuOpen)}>
                        <i class="fa fa-bars" style={{fontSize:'1.5em'}}></i>
                    </a>
                </li>
                <li><a href="#home" onClick={() => setMenuOpen(false)}>HOME</a></li>
                <li><a href="#bio" onClick={() => setMenuOpen(false)}>BIO</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a></li>
                <li><a href="#experience" onClick={() => setMenuOpen(false)}>EXPERIENCE</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>

            </ul>
        </div>
    );
};

export default Header;