import React from 'react';
import "./NotFound.css"
import notfound from "../../Media/404.jpg"

const NotFound = () => {
    return (
        <div className='nfound'>
            <img src={notfound} alt="" width={500} />
        </div>
    );
};

export default NotFound;