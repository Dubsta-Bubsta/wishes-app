import React from 'react';
import { Link } from 'react-router-dom';


const Policy = () => {
    return (
        <div className="app-content">
            <h1> Privacy Policy</h1>
            <h2>Effective December 2020</h2>
            <h2>Quick, Plain-English Summary</h2>
            <ul>
                <li>New Year Resolution (website) collects only the information you give us
without checking it.</li>
                <li>Google Analytics is used to help determine how to best build this
website to serve users.</li>
                <li>This uses Google AdSense which uses cookies. Google's use of
                advertising cookies enables it and its partners to serve ads to your users
based on their visit to your sites and/or other sites on the Internet.</li>
                <li></li>
            </ul>

            <h2>Who are we?</h2>
            <p>New Year Resolution is owned and operated by Bezdenezhnykh Maxim (we/
            us). For any concerns, please email us at nyrproj@gmail.com. We do not
maintain a business phone number.</p>
            <h2>What sort of personal information do we collect about you?</h2>
            <p>Here is the information we collect from you:</p>
            <ul>
                <li>First and Last Name</li>
                <li>Year of birth</li>
                <li>Your country</li>
            </ul>
            <h2>Do you use cookies?</h2>
            <p>Yes, cookies are used by Google AdSense to improve your advertisement
            experience. Google Analytics also uses cookies to help us improve the
website and overall presentation to our users.</p>
            <h2>Where is my personal data stored?</h2>
            <p>Your data is stored through the AWS services platform.</p>
            <h2>How long is data stored?</h2>
            <p>To make our site operate as intended, we keep you data until you tell us to
delete it using our contact email address.</p>
            
            <Link to="/" style={{ fontSize: 24, textAlign: 'center', width: '100%' }}>Back to site</Link>
        </div>
    )
}
export default Policy;
