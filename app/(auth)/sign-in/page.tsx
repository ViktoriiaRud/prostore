import { auth } from '@/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { APP_NAME } from '@/lib/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import CredentialsSigninForm from './credentials-signin-form';

export const metadata: Metadata = {
    title: 'Sign in',
}

type SignInPageProps = {
    searchParams?: {
        callbackUrl?: string;
        error?: string;
    }
}

const SignInPage = async ({ searchParams }: SignInPageProps) => {
    const callbackUrl = searchParams?.callbackUrl &&
        searchParams.callbackUrl.startsWith('/') ?
        searchParams.callbackUrl : '/';

    try {
        const session = await auth();
        if (session) {
            return redirect(callbackUrl);
        }
    } catch (error) {
        console.error("Authentication error:", error);
    }

    return (<>
        <div className="flex-center min-h-screen w-full max-w-md mx-auto">
            <Card>
                <CardHeader className='space-y-4'>
                    <Link href='/' className='flex-center'>
                        <Image
                            src='/images/logo.png'
                            width={100}
                            height={100}
                            alt={`${APP_NAME} logo`}
                            priority={true}
                        />
                    </Link>
                    <CardTitle className='text-center'>Sign in</CardTitle>
                    <CardDescription className='text-center'>
                        Sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <CredentialsSigninForm />
                    {searchParams?.error && (
                        <p className="text-sm text-red-500 text-center">
                            {searchParams.error === "Configuration"
                                ? "There was an error with the sign-in configuration."
                                : "Authentication failed. Please try again."}
                        </p>
                    )}
                </CardContent>
            </Card>
        </div>
    </>)
}

export default SignInPage;