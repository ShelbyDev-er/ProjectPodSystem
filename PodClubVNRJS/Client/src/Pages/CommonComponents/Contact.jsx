import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

export default function Contact() {
    const [toggleContact, setToggleContact] = useState()

    const handleActiveToggleContact = () => setToggleContact(!toggleContact)

    return (
        <>
            <div className="toggle-contact" onClick={() => handleActiveToggleContact()}>
                <RecentActorsIcon />
            </div>
            <div className={toggleContact ? `toggle-contact-active` : `contact`}>
                <div className="phone"><PhoneIphoneIcon /></div>
                <div className="facebook"><FacebookIcon /></div>
                <div className="instagram"><InstagramIcon /></div>
            </div>
        </>
    )
}
