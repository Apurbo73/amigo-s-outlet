import React from 'react';
import { Link } from 'react-router-dom';

const emailVerified = () => {
    return (
        <div>
            <h1>You Email Is Verified...</h1>
            <Link to='/login'>Please Log in</Link>
        </div>
    );
};

export default emailVerified.js;