import { useState, useEffect } from 'react';
import './navbar.css';
import Logo from '../../assets/logo.png'

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleLinkClick = () =>{
        setIsMenuOpen(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className='logo'>
                <a href='#home'><img src={Logo}/></a>
            </div>

            <button
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label='Menu'
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href='#home' onClick={handleLinkClick}>Home</a></li>
                    <li><a href='#sobre' onClick={handleLinkClick}>Sobre</a></li>
                    <li><a href='#projetos' onClick={handleLinkClick}>Projetos</a></li>
                    <li><a href='#servicos' onClick={handleLinkClick}>Serviços</a></li>
                    <li><a href='#contato' onClick={handleLinkClick}>Contato</a></li>
                </ul>
            </nav>

            {isMenuOpen && (
                <div
                    className='nav-overlay'
                    onClick={() => setIsMenuOpen(false)}
                    ></div>
            )}
        </header>
    );
}