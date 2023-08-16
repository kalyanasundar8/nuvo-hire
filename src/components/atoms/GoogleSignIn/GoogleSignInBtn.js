import React, { useEffect, useState } from 'react';
import './styles.css';

export default function GoogleSignInBtn() {
    const handleResponse = (res) => {
        console.log(res)
    }

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: handleResponse
        });

        window.google.accounts.id.renderButton(
            document.getElementById("google-signin"), { theme: "outline", size: "large" }
        );
    }, []);

    return (
        <div className="mt-3 google-signin-btn">
            <div id="google-signin"></div>
        </div>
    );
}