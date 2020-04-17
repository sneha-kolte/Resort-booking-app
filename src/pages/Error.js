import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Hero>
            <Banner title="error page" subtitle="page not found">
                <Link to ="/" className="btn-primary">
                    Return to homepage
                </Link>
            </Banner>
        </Hero> 
           )
}

export default Error;