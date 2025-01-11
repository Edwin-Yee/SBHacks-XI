// app/page.tsx
import { redirect } from 'next/navigation';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function Home() {
    redirect('/login');
    return null; // This line won't be reached due to the redirect
}
