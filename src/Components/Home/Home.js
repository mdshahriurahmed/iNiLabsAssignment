import React from 'react';
import AboutSchool from './AboutSchool';
import ApplyAdd from './ApplyAdd';
import EducationInfo from './EducationInfo';
import OurTeachers from './OurTeachers';
import PrinciplesWord from './PrinciplesWord';
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
            <PrinciplesWord></PrinciplesWord>
            <OurTeachers></OurTeachers>


        </div>
    );
};

export default Home;