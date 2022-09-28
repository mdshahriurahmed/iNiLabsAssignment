import React, { Component } from "react";
import Slider from "react-slick";
import "./SlicSlider.css"
import teacher1 from "../../Media/teacher1.png"
import teacher2 from "../../Media/teacher2.png"
import teacher3 from "../../Media/teacher3.png"
import facebook from "../../Media/fb.png"
import twitter from "../../Media/Twitter.png"
import linkedin from "../../Media/linkedin.png"
import google from "../../Media/google.png"

export default class PreviousNextMethods extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = { status: '' }

    }
    next() {
        this.slider.slickNext();
        this.setState({ status: 'next_active' })
    }
    previous() {
        this.slider.slickPrev();
        this.setState({ status: 'prev_active' })
    }

    render() {


        const settings = {

            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };

        return (
            <div>
                <div className='styled_line1'></div>
                <div className="flex_slide_head">
                    <div>
                        <h2>Our Teachers</h2>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button className="button_arrow" onClick={
                            this.previous

                        }>
                            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 8.5C1.17157 8.5 0.5 9.17157 0.5 10C0.5 10.8284 1.17157 11.5 2 11.5V8.5ZM38 11.5H39.5V8.5H38V11.5ZM11.0607 16.9393L3.06066 8.93934L0.93934 11.0607L8.93934 19.0607L11.0607 16.9393ZM0.93934 11.0607L8.93934 19.0607L11.0607 16.9393L3.06066 8.93934L0.93934 11.0607ZM3.06066 11.0607L11.0607 3.06066L8.93934 0.93934L0.93934 8.93934L3.06066 11.0607ZM8.93934 0.93934L0.93934 8.93934L3.06066 11.0607L11.0607 3.06066L8.93934 0.93934ZM2 11.5H38V8.5H2V11.5Z" fill={`${this.state.status === "prev_active" ? "#FA5E01" : "#929292"}`} />
                            </svg>
                            {/* "#929292" */}

                        </button>
                        <button className="button_arrow" onClick={this.next}>
                            <svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36 11.5C36.8284 11.5 37.5 10.8284 37.5 10C37.5 9.17157 36.8284 8.5 36 8.5V11.5ZM26.9393 3.06066L34.9393 11.0607L37.0607 8.93934L29.0607 0.93934L26.9393 3.06066ZM37.0607 8.93934L29.0607 0.93934L26.9393 3.06066L34.9393 11.0607L37.0607 8.93934ZM34.9393 8.93934L26.9393 16.9393L29.0607 19.0607L37.0607 11.0607L34.9393 8.93934ZM29.0607 19.0607L37.0607 11.0607L34.9393 8.93934L26.9393 16.9393L29.0607 19.0607ZM36 8.5H0V11.5H36V8.5Z" fill={`${this.state.status === "next_active" ? "#FA5E01" : "#929292"}`} />
                            </svg>


                        </button>
                    </div>
                </div>


                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1} className="teacher_card">
                        <img src={teacher1} alt="teacher1_img" />
                        <h3>Cooper Donin</h3>
                        <p>Head of Operation</p>
                    </div>
                    <div key={2} className="teacher_card">
                        <img src={teacher2} alt="teacher2_img" />
                        <h3>Anika Baptista</h3>
                        <p>Art Teacher</p>
                    </div>
                    <div key={3} className="teacher_card">
                        <img src={teacher3} alt="teacher3_img" />
                        <h3>Kaiya Bator</h3>
                        <p>Spanish Teacher</p>
                    </div>
                    <div key={4} className="teacher_card">
                        <img src={teacher1} alt="teacher1_img" />
                        <h3>Cooper Donin</h3>
                        <p>Head of Operation</p>
                    </div>


                </Slider>

                <div className="social_icon">
                    <div className="flexible_social_icon">
                        <a href="/"><img src={facebook} alt="facebook_icon" /></a>
                        <a href="/"><img src={twitter} alt="twitter_icon" /></a>
                        <a href="/"><img src={linkedin} alt="linkedin_icon" /></a>
                        <a href="/"><img src={google} alt="google_icon" /></a>

                    </div>
                </div>
                <div className="all_teacher_main">
                    <button>SEE ALL TEACHERS <svg className="arrowIcon" width="38" height="20" viewBox="0 0 38 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36 11.5C36.8284 11.5 37.5 10.8284 37.5 10C37.5 9.17157 36.8284 8.5 36 8.5V11.5ZM26.9393 3.06066L34.9393 11.0607L37.0607 8.93934L29.0607 0.93934L26.9393 3.06066ZM37.0607 8.93934L29.0607 0.93934L26.9393 3.06066L34.9393 11.0607L37.0607 8.93934ZM34.9393 8.93934L26.9393 16.9393L29.0607 19.0607L37.0607 11.0607L34.9393 8.93934ZM29.0607 19.0607L37.0607 11.0607L34.9393 8.93934L26.9393 16.9393L29.0607 19.0607ZM36 8.5H0V11.5H36V8.5Z" />
                    </svg>
                    </button>
                </div>

            </div>
        );
    }
}