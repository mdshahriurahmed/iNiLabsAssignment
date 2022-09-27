import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import slide_image from "../../Media/slide_image.png"
import "./Slider.css"
import playbtn from "../../Media/play_button.png"

const Slider = () => {
    return (
        <div className='slider_main'>

            <Button variant="primary">Primary</Button>{' '}
            <Carousel controls={false} pause={false}>
                <Carousel.Item interval={2500} >
                    <img
                        className="d-block w-100"
                        src={slide_image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='carousel_content'>
                            <div className='half_width'>
                                <div className='small-line'></div>
                                <p className='TRADITION_text_style'>A TRADITION SINCE 2002</p>
                                <h1 className='carousel_caption_style'>Offering Bright <br /> Futures</h1>
                                <p className='carousel_content_style'>iNiLabs School gradutes are styding in the world’s most prestigious universities.</p>
                                <button className='carousel_apply_button'>
                                    <p>Apply Now</p>
                                </button>
                            </div>
                            <div className='half_width'>
                                <div className='right_div'>
                                    <dvi className='playbtn_style'>
                                        <img src={playbtn} alt="" />
                                    </dvi>
                                    <dvi>
                                        <p className='carousel_content_style1'>iNiLabs School</p>
                                        <h3 className='carousel_caption2_style'>CAMPUS <br /> TOUR</h3>
                                        <p className='carousel_content_style2'>Watch Video (6 Min)</p>
                                    </dvi>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500} >
                    <img
                        className="d-block w-100"
                        src={slide_image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='carousel_content'>
                            <div className='half_width'>
                                <div className='small-line'></div>
                                <p className='TRADITION_text_style'>A TRADITION SINCE 2002</p>
                                <h1 className='carousel_caption_style'>Offering Bright <br /> Futures</h1>
                                <p className='carousel_content_style'>iNiLabs School gradutes are styding in the world’s most prestigious universities.</p>
                                <button className='carousel_apply_button'>
                                    <p>Apply Now</p>
                                </button>
                            </div>
                            <div className='half_width'>
                                <div className='right_div'>
                                    <dvi className='playbtn_style'>
                                        <img src={playbtn} alt="" />
                                    </dvi>
                                    <dvi>
                                        <p className='carousel_content_style1'>iNiLabs School</p>
                                        <h3 className='carousel_caption2_style'>CAMPUS <br /> TOUR</h3>
                                        <p className='carousel_content_style2'>Watch Video (6 Min)</p>
                                    </dvi>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500} >
                    <img
                        className="d-block w-100"
                        src={slide_image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='carousel_content'>
                            <div className='half_width'>
                                <div className='small-line'></div>
                                <p className='TRADITION_text_style'>A TRADITION SINCE 2002</p>
                                <h1 className='carousel_caption_style'>Offering Bright <br /> Futures</h1>
                                <p className='carousel_content_style'>iNiLabs School gradutes are styding in the world’s most prestigious universities.</p>
                                <button className='carousel_apply_button'>
                                    <p>Apply Now</p>
                                </button>
                            </div>
                            <div className='half_width'>
                                <div className='right_div'>
                                    <dvi className='playbtn_style'>
                                        <img src={playbtn} alt="" />
                                    </dvi>
                                    <dvi>
                                        <p className='carousel_content_style1'>iNiLabs School</p>
                                        <h3 className='carousel_caption2_style'>CAMPUS <br /> TOUR</h3>
                                        <p className='carousel_content_style2'>Watch Video (6 Min)</p>
                                    </dvi>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>



            </Carousel>
        </div>
    );
};

export default Slider;