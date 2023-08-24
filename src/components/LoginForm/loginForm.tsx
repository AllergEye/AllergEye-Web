'use client';

import { Button, buttonVariants } from '@/components/Button/button';
import { Input } from '@/components/Input/input';
import { Text } from '@/components/Text/text';
import useWindowSize from '@/lib/hooks/useWindowSize';
import Link from 'next/link';

export const LoginForm = () => {
    const [width, height] = useWindowSize();
    return (
        <div className="flex flex-col rounded bg-cerulean my-24 md:w-3/5 drop-shadow-2xl">
            <Text
                variant="extremelyHuge"
                align="center"
                textColour="white"
                className="mt-4 mb-2"
            >
                Log In
            </Text>
            <Text
                variant="normal"
                align="center"
                textColour="white"
                className="mx-1"
            >
                Welcome back to AllergEye!
            </Text>
            <form>
                <div className="flex flex-col mt-6 items-center">
                    <Text
                        variant="huge"
                        textColour="white"
                        weight="bold"
                        align="center"
                        className="my-4"
                    >
                        Your Email
                    </Text>
                    <Input
                        variant="outlined"
                        labelValue="Email"
                        id="email"
                        placeholder=" "
                        bgColour="cerulean"
                        borderColour="aqua"
                        textColour="white"
                        inputWidth="fiveSixths"
                    />
                </div>
                <div className="flex flex-col mt-6 items-center">
                    <Text
                        variant="huge"
                        textColour="white"
                        weight="bold"
                        align="center"
                        className="my-4"
                    >
                        Your Password
                    </Text>
                    <Input
                        variant="outlined"
                        labelValue="Password"
                        id="password"
                        placeholder=" "
                        bgColour="cerulean"
                        borderColour="aqua"
                        textColour="white"
                        inputWidth="fiveSixths"
                        type="password"
                    />
                </div>
                <div className="w-full mt-24 flex items-center justify-around">
                    <Button size="large" className="max-md:w-5/6 w-1/3">
                        Login
                    </Button>
                </div>
            </form>
            <div className="w-full flex flex-col items-center justify-around h-24">
                <Text textColour="white">
                    Don&#39;t have an account? Sign Up!
                </Text>
                <Link
                    href="/login"
                    className={buttonVariants({
                        size: 'large',
                        variant: 'outline',
                        className: 'max-md:w-5/6 w-1/3 text-center',
                    })}
                >
                    Sign Up
                </Link>
            </div>
        </div>
    );
};
