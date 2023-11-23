import { useEffect } from "react";

const Aboutus = () => {

    useEffect(() => {
        document.title='About Us';
    }, []);

    return (
        <div>
            <h1>About us</h1>
        </div>
    )
}

export default Aboutus;