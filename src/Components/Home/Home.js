import React from 'react';
import AboutSchool from './AboutSchool';
import ApplyAdd from './ApplyAdd';
import EducationInfo from './EducationInfo';
import Slider from './Slider';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <EducationInfo></EducationInfo>
            <AboutSchool></AboutSchool>
            <Summary></Summary>
            <ApplyAdd></ApplyAdd>
        </div>
    );
};

export default Home;