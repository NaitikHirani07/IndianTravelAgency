import React from 'react';
import headerTravelImg from './../asset/header_travel.png';
import './Header.css';

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 order-2 order-lg-1 left_header">
                            <div className="left_header_top">
                                <h4 className='fw-bold my-5'>BEST DESTINATION AROUND THE WORD</h4>
                                <h1 className='fw-bold mb-3'>Travel, enjoy and live a new and full life</h1>
                                <p className='mb-3'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                            </div>
                            <div className="left_header_bottom">
                                <input className='border-0 py-2 px-2 rounded-3 text-light fw-bold' type="submit" value={'Find Out More'} />
                                <i className="fa-solid fa-play ms-5 rounded-circle"></i>
                                <span className='ms-4'>Play Demo</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 order-1 order-lg-2 right_header">
                            <img src={headerTravelImg} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
