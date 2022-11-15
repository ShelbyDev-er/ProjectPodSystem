import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export default function Contact() {
    return (
        <>
            <div className="contact">
                <div className="phone"><PhoneIphoneIcon /></div>
                <div className="facebook"><FacebookIcon /></div>
                <div className="instagram"><InstagramIcon /></div>
            </div>
        </>
    )
}
