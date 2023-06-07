import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Article = () => {
    return (
        <section className="home-articles py-2">
            <div className="container">
                <h2>Editors Packs</h2>
                <div className="articles-container">
                    <article className='card'>
                        <img src="/images/articles/ent1.jpg" alt="" />
                        <div>
                            <div className="category category-ent">
                                Entertainment
                            </div>
                            <h3>
                                <Link className='navlink-color' href="/articleDetails">Lorem ipsum dolor site</Link>
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Vitae aspernatur doloribus eveniet officiis consectetur
                                corporis ut, atque perspiciatis est ratione illo sapiente
                                sunt excepturi eaque quis saepe recusandae quisquam
                                harum quia. Officiis natus dicta aperiam, pariatur
                                necessitatibus quas officia beatae molestiae quis eos,
                                blanditiis dignissimos.
                            </p>
                        </div>
                    </article>

                    <article className='card bg-dark'>
                        <div className="category category-sports">
                            Sports
                        </div>
                        <h3>
                            <Link className='navlink-color' href="/articleDetails">Lorem ipsum dolor site</Link>
                        </h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Vitae aspernatur doloribus eveniet officiis consectetur
                            corporis ut, atque perspiciatis est ratione illo sapiente
                            sunt excepturi eaque quis saepe recusandae quisquam
                            harum quia. Officiis natus dicta aperiam, pariatur
                            necessitatibus quas officia beatae molestiae quis eos,
                            blanditiis dignissimos.
                        </p>
                    </article>

                    <article className='card'>
                        <img src="/images/articles/tech1.jpg" alt="" />
                        <div className="category category-tech">
                            Technology
                        </div>
                        <h3>
                            <Link className='navlink-color' href="/articleDetails">Lorem ipsum dolor site</Link>
                        </h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Vitae aspernatur doloribus eveniet officiis consectetur
                            corporis ut, atque perspiciatis est ratione illo sapiente
                            sunt excepturi eaque quis saepe recusandae quisquam
                            harum quia. Officiis natus dicta aperiam, pariatur
                            necessitatibus quas officia beatae molestiae quis eos,
                            blanditiis dignissimos.
                        </p>
                    </article>

                    <article className='card'>
                        <div>
                            <div className="category category-sports">
                                Sports
                            </div>
                            <h3>
                                <Link className='navlink-color' href="/articleDetails">Lorem ipsum dolor site</Link>
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Vitae aspernatur doloribus eveniet officiis consectetur
                                corporis ut, atque perspiciatis est ratione illo sapiente
                                sunt excepturi eaque quis saepe recusandae quisquam
                                harum quia. Officiis natus dicta aperiam, pariatur
                                necessitatibus quas officia beatae molestiae quis eos,
                                blanditiis dignissimos.
                            </p>
                        </div>
                        <img src="/images/articles/sports1.jpg" alt="" />
                    </article>

                    <article className='card'>
                        <img src="/images/articles/tech2.jpg" alt="" />
                        <div className="category category-tech">
                            Technology
                        </div>
                        <h3>
                            <Link className='navlink-color' href="/articleDetails">Lorem ipsum dolor site</Link>
                        </h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Vitae aspernatur doloribus eveniet officiis consectetur
                            corporis ut, atque perspiciatis est ratione illo sapiente
                            sunt excepturi eaque quis saepe recusandae quisquam
                            harum quia. Officiis natus dicta aperiam, pariatur
                            necessitatibus quas officia beatae molestiae quis eos,
                            blanditiis dignissimos.
                        </p>
                    </article>

                    <article className='card bg-dark'>
                        <div className="category category-sports">
                            Sports
                        </div>
                        <h3>
                            <Link className='navlink-color' href="/articleDetails">Lorem ipsum dolor site</Link>
                        </h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Vitae aspernatur doloribus eveniet officiis consectetur
                            corporis ut, atque perspiciatis est ratione illo sapiente
                            sunt excepturi eaque quis saepe recusandae quisquam
                            harum quia. Officiis natus dicta aperiam, pariatur
                            necessitatibus quas officia beatae molestiae quis eos,
                            blanditiis dignissimos.
                        </p>
                    </article>

                    <article className='card'>
                        <div>
                            <div className="category category-ent">
                                Entertainment
                            </div>
                            <h3>
                                <Link className='navlink-color' href="/articleDetails">Lorem ipsum dolor site</Link>
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Vitae aspernatur doloribus eveniet officiis consectetur
                                corporis ut, atque perspiciatis est ratione illo sapiente
                                sunt excepturi eaque quis saepe recusandae quisquam
                                harum quia. Officiis natus dicta aperiam, pariatur
                                necessitatibus quas officia beatae molestiae quis eos,
                                blanditiis dignissimos.
                            </p>
                        </div>
                        <img src="/images/articles/ent2.jpg" alt="" />
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Article;
