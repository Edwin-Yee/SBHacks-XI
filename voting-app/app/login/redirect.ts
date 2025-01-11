// app/redirect.ts
// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Redirect() {
//     const router = useRouter();

//     useEffect(() => {
//         router.push('/home');
//     }, [router]);

//     return null;
// }



// app/page.tsx
import { redirect } from 'next/navigation';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function Redirect() {
    redirect('/home');
    return null; // This line won't be reached due to the redirect
}