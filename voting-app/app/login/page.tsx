// app/login/page.tsx
'use client';

import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const clientId = '376855101707-6rvk4fqkhq301cd6ar1340pagpd7cea1.apps.googleusercontent.com';

const Login: React.FC = () => {
    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="login-container">
                <h1>Login</h1>
                <GoogleLogin onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    redirect('/home');
                }} onError={() => console.log("Login Failed")} />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
