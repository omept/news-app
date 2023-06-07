import Link from 'next/link';
import React from 'react';

const Header = () => {


    return (
        <>
            <nav className="main-nav">
                <div className="container">
                    <img src="/images/logo.png" alt="NewsLogo" className='logo' />
                    
                    <ul>
                        <li><Link href="/" className="link ">Home</Link></li>
                        <li><Link href="settings" className="link">Settings</Link></li>
                        <li><Link href="login" className="link">Login</Link></li>
                        <li><Link href="/sign-up" className="link ">Sign-up</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;
