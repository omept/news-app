import React from 'react'
import Article from './Article'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <div className="showcase">
                <div className="container">
                    <div className="showcase-container">
                        <div className="showcase-content">
                            <div className="category category-sports">
                                Sports
                            </div>
                            <h1>Some Sports Article</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Explicabo aspernatur sint, illum dolorem adipisci
                                laudantium, voluptatum molestiae ratione error, nemo
                                tempora consequatur consequuntur natus animi iste
                                debitis quos maxime? Fuga.
                            </p>
                            <Link href="/article" className="btn btn-primary">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Article />
        </>
    )
}
