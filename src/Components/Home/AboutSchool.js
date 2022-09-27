import React from 'react';
import "./AboutSchool.css"
import about_image from "../../Media/aboutschool.png"

const AboutSchool = () => {
    return (
        <div className='main_about_school '>
            <div className='half_width_about left_content_div'>
                <div className='top_line_style'></div>
                <h2 className='about_headline'>About School</h2>
                <p className='about_content'>iNiLabs School is an independent, non-governmental
                    organisation, established to provide high-quality
                    education to local and expatriate communities in
                    Bangladesh and United State of America.</p>

                <button className='learn_more_btn'>
                    Learn More
                </button>
            </div>
            <div className='half_width_about'>
                <img src={about_image} alt="aboutschool_image" height={464} width={778} />
            </div>
        </div>
    );
};

export default AboutSchool;