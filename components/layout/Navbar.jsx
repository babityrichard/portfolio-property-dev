import React, { useState } from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [toggleMenu, settoggleMenu] = useState(false);

    return (
        <nav>
            <div className="navbar-main">
                <Link href="/">
                    <a><h1>McKinney&apos;s</h1></a>
                </Link>
                <ul className="main-ul">
                    <li>
                        <Link href="/about"><a>About Us</a></Link>
                    </li>
                    <li>
                        <Link href="/properties"><a>Properties</a></Link>
                    </li>
                    <li>
                        <Link href="/management"><a>Management</a></Link>
                    </li>
                    <li>
                        <Link href="/contact"><a>Contact Us</a></Link>
                    </li>
                </ul>

                {/* Hamburger Menu */}
                <div className="navbar-smscreen">
                    <GiHamburgerMenu 
                        onClick={() => settoggleMenu(true)}  
                        fontSize={27} 
                        color="#000"
                    />
                    {toggleMenu && (
                        <div className="hamburger-overlay">
                            <IoClose 
                                onClick={() => settoggleMenu(false)} 
                                fontSize={27} 
                                className="overlay-close" 
                            />
                             
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a onClick={() => settoggleMenu(false)}>Home</a>
                                    </Link>
                                </li>                                
                                <li>
                                    <Link href="/about">
                                        <a onClick={() => settoggleMenu(false)}>About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/properties">
                                        <a onClick={() => settoggleMenu(false)}>Properties</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/management">
                                        <a onClick={() => settoggleMenu(false)}>Management</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a onClick={() => settoggleMenu(false)}>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>   
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
