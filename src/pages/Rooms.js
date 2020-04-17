import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../Components/RoomsContainer'

const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Our rooms" >
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
        <RoomContainer />
        
        </>
    )
}

export default Rooms;

