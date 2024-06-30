import React from 'react'
import './About.css'

export default function About() {
    return (
        <>
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <h6 className='fw-bold text-center py-5'>About</h6>
                        <div className="col-lg-6 col-md-12 d-flex flex-wrap">
                            <div className="col-12 col-sm-6 col-lg-6 mb-4">
                                <div className="left_about_one h-100">
                                    <div className="left_about_one_header text-center py-3">
                                        <i className="fa-solid fa-parachute-box fs-1"></i>
                                    </div>
                                    <div className="left_about_one_body text-center p-3">
                                        <h3>Activities</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6 mb-4">
                                <div className="left_about_two h-100">
                                    <div className="left_about_two_header text-center py-3">
                                        <i class="fa-solid fa-location-crosshairs fs-1"></i>
                                    </div>
                                    <div className="left_about_two_body text-center p-3">
                                        <h3>Arrangements</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6">
                                <div className="left_about_three h-100">
                                    <div className="left_about_three_header text-center py-3">
                                        <i class="fa-solid fa-user-tie fs-1"></i>
                                    </div>
                                    <div className="left_about_three_body text-center p-3">
                                        <h3>Guide</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6">
                                <div className="left_about_four h-100">
                                    <div className="left_about_four_header text-center py-3">
                                        <i class="fa-solid fa-map-location-dot fs-1"></i>
                                    </div>
                                    <div className="left_about_four_body text-center p-3">
                                        <h3>Manager</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 text-center px-4 pt-4 d-flex flex-column justify-content-center align-items-center">
                            <h1>It's time to start your adventure</h1>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <button className='btn btn-warning rounded-5 text-white'>Search Destination</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
