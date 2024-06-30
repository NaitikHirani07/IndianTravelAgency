import React from 'react'
import topSellingImgOne from './../asset/topSellingCardOne.jpg'
import topSellingImgThree from './../asset/topSellingCardThree.jpg'
import topSellingImgTwo from './../asset/topSellingCardTwo.jpg'
import './Topselling.css'

export default function Topselling() {
    return (
        <>
            <section className='py-5 px-2'>
                <div class="container">
                <div className="row">
                        <div className="col-12">
                            <div className="category_header_section pb-5 text-center">
                                <p className='text-secondary'>TOP SELLING</p>
                                <h2 className='fw-bold'>Top Destinations</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4 mb-4">
                            <div class="flip-card-container">
                                <div class="flip-card">
                                    <div class="card-front">
                                        <figure>
                                            <div class="img-bg"></div>
                                            <img src={topSellingImgOne} alt="" />
                                            <figcaption>Brohm Lake</figcaption>
                                        </figure>
                                        <ul>
                                            <li>Rome, Italty</li>
                                            <li>$5,42k</li>
                                            <li>10 Days Trip</li>
                                        </ul>
                                    </div>
                                    <div class="card-back">
                                        <figure>
                                            <div class="img-bg"></div>
                                            <img src={topSellingImgOne} alt="" />
                                        </figure>
                                        <button>Book</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4">
                            <div class="flip-card-container">
                                <div class="flip-card">
                                    <div class="card-front">
                                        <figure>
                                            <div class="img-bg"></div>
                                            <img src={topSellingImgTwo} alt="" />
                                            <figcaption>Légende</figcaption>
                                        </figure>
                                        <ul>
                                            <li>London, UK</li>
                                            <li>$4.2k</li>
                                            <li>12 Days Trip</li>
                                        </ul>
                                    </div>
                                    <div class="card-back">
                                        <figure>
                                            <div class="img-bg"></div>
                                            <img src={topSellingImgTwo} alt="" />
                                        </figure>
                                        <button>Book</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 mb-4">
                            <div class="flip-card-container">
                                <div class="flip-card">
                                    <div class="card-front">
                                        <figure>
                                            <div class="img-bg"></div>
                                            <img src={topSellingImgThree} alt="" />
                                            <figcaption>Brohm Lake</figcaption>
                                        </figure>
                                        <ul>
                                            <li>Full Europe</li>
                                            <li>$15k</li>
                                            <li>28 Days Trip</li>
                                        </ul>
                                    </div>
                                    <div class="card-back">
                                        <figure>
                                            <div class="img-bg"></div>
                                            <img src={topSellingImgThree} alt="" />
                                        </figure>
                                        <button>Book</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
