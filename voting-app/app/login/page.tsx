// app/login/page.tsx
'use client';

import React, { useEffect, useState, useContext } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from 'next/navigation';

const clientId = '376855101707-6rvk4fqkhq301cd6ar1340pagpd7cea1.apps.googleusercontent.com';
//const navigate = useNavigate();

const Login: React.FC = () => {

    //const { setUser } = useContext(AuthContext);
    const router = useRouter();


    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="login-container">
                <h1>Login</h1>
                <GoogleLogin onSuccess={(credentialResponse) => {
                    if (credentialResponse.credential) {
                        const credential = jwtDecode(credentialResponse?.credential)
                        const email = credential.email.toString();
                        console.log("LOGIN PAGE ", email);
                        if (email.endsWith("@ucsb.edu")) {
                            //Reroute page to home

                            localStorage.setItem('user', JSON.stringify({ email }));
                            router.push('/home');
                        } else {
                            //Error them like the bitches they are

                        }
                    }
                }} onError={() =>
                    //Throw a login error
                    console.log("Login Failed")} />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
