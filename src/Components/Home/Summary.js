import React from 'react';
import "./Summary.css"

const Summary = () => {
    return (
        <div className='summary_main'>
            <div className='summary_inner'>
                <div>
                    <h3>34</h3>
                    <p>Teachers</p>
                </div>
                <div>
                    <h3>2500+</h3>
                    <p>Students</p>
                </div>
                <div>
                    <h3>1500+</h3>
                    <p>Graduates</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;