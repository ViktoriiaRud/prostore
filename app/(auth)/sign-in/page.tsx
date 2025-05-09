import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CredentialsSigninForm from './credentials-signin-form';

export const metadata: Metadata = {
    title: 'Sign in',
}

const SignInPage = () => {
    return <>
        <div className="flex-center min-h-screen w-full max-w-md mx-auto">
            <Card>
                <CardHeader className='space-y-4'>
                    <Link href='/' className='flex-center'>
                        <Image src='/images/logo.png' width={100} height={100} alt={`$
                          {APP_NAME} logo`} priority={true} />
                    </Link>
                    <CardTitle className='text-center'>Sign in</CardTitle>
                    <CardDescription className='text-center'>
                        Sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <CredentialsSigninForm/>
                </CardContent>
            </Card>
        </div>
    </>;
}

export default SignInPage;