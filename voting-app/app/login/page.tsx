// app/login/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRouter } from 'next/navigation';

// import LogoutButton from './components/LogoutButton';

const clientId = '376855101707-6rvk4fqkhq301cd6ar1340pagpd7cea1.apps.googleusercontent.com';
//const navigate = useNavigate();

const Login: React.FC = () => {
    const [user, setUser] = useState(null);

    const handleLoginSuccess = (credentialResponse: React.SetStateAction<null>) => {
      console.log('Login Success:', credentialResponse);
      setUser(credentialResponse);
      // Store user data in localStorage if needed
      localStorage.setItem('user', JSON.stringify(credentialResponse));
    };
  
    const handleLoginError = () => {
      console.log('Login Failed');
    };
  

    const router = useRouter();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
        <GoogleOAuthProvider clientId={clientId}>
            <div className="text-center mb-8">
                <h1 className="text-8xl font-bold mb-2">UCSB Vote</h1>
                <p className="text-lg text-gray-600">Anonymous voting powered by the Midnight Blockchain.</p>
            </div>

            <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
                <div className="google-login-container">
                    <GoogleLogin onSuccess={(credentialResponse) => {
                        if (credentialResponse.credential) {
                            const credential = jwtDecode(credentialResponse?.credential)
                            console.log(jwtDecode(credentialResponse?.credential));
                            //redirect('../home');
                            const email = credential.email;
                            if (email.endsWith("@ucsb.edu")) {
                                //Reroute page to home
                                router.push('/home');
                            } else {
                                //Error them like the ... they are

                            }
                        }
                    }} onError={() =>
                        //Throw a login error
                        console.log("Login Failed")} />
                </div>
            </div>
        </GoogleOAuthProvider>
        </div>
    );
};

export default Login;
