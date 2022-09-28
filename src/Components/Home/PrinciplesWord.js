import React from 'react';
import "./PrinciplesWord.css"
import principeImage from "../../Media/principleImage.png"


const PrinciplesWord = () => {
    return (
        <div className='principlesWord_main'>
            <div className='principle_half_width'>
                <img src={principeImage} alt="principeImage" className='principe_Image' />
            </div>
            <div className='principle_half_width principle_content'>
                <div className='styled_line'></div>
                <h3>Wise Words From Principle</h3>
                <p className='principle_content_details'><i>“iNiLabs School is a welcoming Catholic community renowned
                    for its integrity and creative learning approaches that bring out
                    the best in boys. Our rich Salesian charism underpinned by the
                    educational principles of founder, St John Bosco, provides the
                    foundation of a future focused pedagogical vision.”</i></p>
                <div className='flexible_principle_name'>
                    <div >
                        <div className='small_lined_style'></div>
                    </div>
                    <div className='principle_identity'>
                        <h4>Jonathon Doe</h4>
                        <p>principle_identity</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrinciplesWord;