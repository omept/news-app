import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="main-footer bg-black py-2">
            <div className="container footer-container">
                <div>
                    <img src="/images/logo_light.png" alt="NewsGrid" />
                    <p>
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Delectus earum dolorem ab ipsam,
                        deserunt consectetur enim molestias
                        commodi autem sint!
                    </p>
                </div>
                
                <div>
                    <p>
                        Copyright &copy; 2023, All Rights Reserved
                    </p>
                </div>
            </div>
        </footer >
    );
}

export default Footer;
