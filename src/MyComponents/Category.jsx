import React from 'react';
import Img1 from './../asset/Card_first.jpg';
import Img4 from './../asset/Card_four.jpg';
import Img2 from './../asset/Card_second.jpg';
import Img3 from './../asset/Card_third.jpg';
import './Category.css';

export default function Category() {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="category_header_section pb-5 text-center">
                                <p className='text-secondary'>CATEGORY</p>
                                <h2 className='fw-bold'>We Offer Best Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 category_cart_section py-2">
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                                <div className="card pt-3">
                                    <img src={Img1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Calculated Weather</h5>
                                        <p className="card-text">Built Wicket longer admire do barton vanity itself do in it.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                                <div className="card pt-3">
                                    <img src={Img2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Best Flights</h5>
                                        <p className="card-text">Engrossed listening. Park gate sell they west hard for the.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                                <div className="card pt-3">
                                    <img src={Img3} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Local Events</h5>
                                        <p className="card-text">Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                                <div className="card pt-3">
                                    <img src={Img4} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Customization</h5>
                                        <p className="card-text">We deliver outsourced aviation services for military customers</p>
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
