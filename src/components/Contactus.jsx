import React, { useEffect } from 'react';
const Contactus = () => {

    useEffect(() => {
        document.title='Contact Us';
    }, []);

    return (
        <div>
            <h1>Contact us</h1>
        </div>
    )
}

export default Contactus;