import React from 'react';
import "./EducationInfo.css"
import world from "../../Media/World.png"
import grad_hat from "../../Media/Graduate Hat.png"
import clipboard from "../../Media/Clipboard.png"
import notebook from "../../Media/Notebook.png"

const EducationInfo = () => {
    return (
        <div className='d-flex flex-row'>
            <div className='common_div_style bg-light'>
                <img src={world} alt="world icon" />
                <p>Education in English: Cambridge International Programme and qualified native english speaking teachers.</p>
            </div>
            <div className='common_div_style bg-orange'>
                <img src={grad_hat} alt="Graduate Hat icon" />
                <p>Education in English: Cambridge International Programme and qualified native english speaking teachers.</p>
            </div>
            <div className='common_div_style bg-light'>
                <img src={clipboard} alt="clipboard icon" />
                <p>Education in English: Cambridge International Programme and qualified native english speaking teachers.</p>
            </div>
            <div className='common_div_style bg-orange'>
                <img src={notebook} alt="notebook icon" />
                <p>Education in English: Cambridge International Programme and qualified native english speaking teachers.</p>
            </div>
        </div>
    );
};

export default EducationInfo;