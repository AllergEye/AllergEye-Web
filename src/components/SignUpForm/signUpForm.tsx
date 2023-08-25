'use client';

import { FormEvent, useState } from 'react';
import { Button, buttonVariants } from '@/components/Button/button';
import { Input } from '@/components/Input/input';
import { Text } from '@/components/Text/text';
import useWindowSize from '@/lib/hooks/useWindowSize';
import { useMutation } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import Link from 'next/link';

interface SignUpData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const SignUpForm = () => {
    const [width, height] = useWindowSize();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const mutation = useMutation({
        mutationKey: ['signUp'],
        mutationFn: async (signUpData: SignUpData) => {
            const createUserMutation = gql`
            mutation {
                createUser(input: {
                    firstName: ${signUpData.firstName},
                    lastName: ${signUpData.lastName},
                    email: ${signUpData.email},
                    password: ${signUpData.password}
                }) {
                    accessToken,
                    refreshToken
                }
            }
        `;
            request(
                'https://epinephrine-service-bbgxeko6ga-uc.a.run.app/',
                createUserMutation
            );
        },
    });

    return (
        <div className="flex flex-col rounded bg-cerulean my-24 md:w-3/5 drop-shadow-2xl">
            <Text
                variant="extremelyHuge"
                align="center"
                textColour="white"
                className="mt-4 mb-2"
            >
                Sign Up
            </Text>
            <Text
                variant="normal"
                align="center"
                textColour="white"
                className="mx-1"
            >
                Sign up to AllergEye and start adding restaurants and dishes
                today!
            </Text>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    mutation.mutate({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                    });
                }}
            >
                <div className="flex-col mt-6 w-full">
                    <Text
                        variant="huge"
                        textColour="white"
                        weight="bold"
                        align="center"
                        className="my-4"
                    >
                        Your Name
                    </Text>
                    <div className="flex max-sm:flex-col max-sm:h-40 max-sm:items-center md:flex-row justify-around">
                        <Input
                            variant="outlined"
                            borderColour="aqua"
                            bgColour="cerulean"
                            labelValue="First Name"
                            id="firstName"
                            textColour="white"
                            placeholder=" "
                            inputWidth={
                                width >= 640 ? 'oneThird' : 'fiveSixths'
                            }
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <Input
                            variant="outlined"
                            borderColour="aqua"
                            bgColour="cerulean"
                            labelValue="Last Name"
                            id="lastName"
                            textColour="white"
                            placeholder=" "
                            inputWidth={
                                width >= 640 ? 'oneThird' : 'fiveSixths'
                            }
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center">
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <Text
                        variant="huge"
                        textColour="white"
                        weight="bold"
                        align="center"
                        className="my-4"
                    >
                        Your Password
                    </Text>
                    <div className="flex max-sm:flex-col max-sm:h-40 max-sm:items-center md:flex-row justify-around">
                        <Input
                            variant="outlined"
                            borderColour="aqua"
                            bgColour="cerulean"
                            labelValue="Password"
                            id="password"
                            textColour="white"
                            placeholder=" "
                            inputWidth={
                                width >= 640 ? 'oneThird' : 'fiveSixths'
                            }
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Input
                            variant="outlined"
                            borderColour="aqua"
                            bgColour="cerulean"
                            labelValue="Confirm Password"
                            id="confirmPassword"
                            textColour="white"
                            placeholder=" "
                            inputWidth={
                                width >= 640 ? 'oneThird' : 'fiveSixths'
                            }
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full mt-24 flex items-center justify-around">
                    <Button size="large" className="max-md:w-5/6 w-1/3">
                        Sign Up
                    </Button>
                </div>
            </form>
            <div className="w-full flex flex-col items-center justify-around h-24">
                <Text textColour="white">Already have an account?</Text>
                <Link
                    href="/login"
                    className={buttonVariants({
                        size: 'large',
                        variant: 'outline',
                        className: 'max-md:w-5/6 w-1/3 text-center',
                    })}
                >
                    Log In
                </Link>
            </div>
            {mutation.isError ? <div>An error occurred</div> : null}
        </div>
    );
};
