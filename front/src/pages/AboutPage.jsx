import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutPage() {
    const [authStatus, setAuthStatus] = useState(null);

    useEffect(() => {
        axios
            .post('http://localhost:3000/users/checkAuth', {sw: "swx"}, { withCredentials: true, timeout: 5000 })
            .then((response) => {
                setAuthStatus(response.data.auth);
            })
            .catch((error) => {
                console.error('Auth error:', error);
                setAuthStatus(false);
            });
    }, []);

    return (
        <div>
            <h1>Authentication Status</h1>
            {authStatus === null ? (
                <p>Loading...</p>
            ) : authStatus ? (
                <p>Authenticated</p>
            ) : (
                <p>Not Authenticated</p>
            )}
        </div>
    );
}

export default AboutPage;
