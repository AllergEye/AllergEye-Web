'use client';

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { buttonVariants } from '../Button/button';
import Link from 'next/link';
import { textVariants } from '../Text/text';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default function NavBar() {
    const [isSideMenuExpanded, setIsSideMenuExpanded] = useState(false);
    const [width, height] = useWindowSize();
    const topbarClasses = 'hidden md:flex items-center space-x-4 mr-5';
    const dropdownClasses =
        'absolute top-20 left-0 flex-col w-screen h-[calc(100vh-5rem)] bg-cerulean justify-between items-center';

    useEffect(() => {
        if (width >= 768) {
            setIsSideMenuExpanded(false);
        }
    }, [width]);

    return (
        <nav className="bg-cerulean drop-shadow-md flex justify-between h-20">
            <div className="flex items-center">
                <div className="text-white text-3xl font-semibold ml-5">
                    AllergEye
                </div>
            </div>

            <div className="inline-flex items-center p-2 w-12 justify-between text-white md:hidden mr-5 focus:outline-none focus:ring-2 focus:ring-aqua h-full">
                <button
                    onClick={() => {
                        console.log('FOO1337');
                        setIsSideMenuExpanded(!isSideMenuExpanded);
                    }}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </div>
            <div
                className={
                    !isSideMenuExpanded ? topbarClasses : dropdownClasses
                }
            >
                <div
                    className={
                        !isSideMenuExpanded
                            ? ''
                            : 'p-4 text-3xl w-full text-center border-t-2 border-t-grey'
                    }
                >
                    <Link
                        href="/restaurants"
                        className={textVariants({
                            variant: 'normal',
                            align: 'center',
                            textColour: 'white',
                            weight: 'normal',
                        })}
                    >
                        Restaurants
                    </Link>
                </div>
                <div
                    className={
                        !isSideMenuExpanded
                            ? ''
                            : 'p-4 text-3xl w-full text-center border-t-2 border-t-grey'
                    }
                >
                    <Link
                        href="/dishes"
                        className={textVariants({
                            variant: 'normal',
                            align: 'center',
                            textColour: 'white',
                            weight: 'normal',
                        })}
                    >
                        Dishes
                    </Link>
                </div>
                <div
                    className={
                        !isSideMenuExpanded
                            ? ''
                            : 'p-4 text-3xl w-full text-center border-t-2 border-t-grey'
                    }
                >
                    <Link
                        href="/login"
                        className={buttonVariants({
                            variant: 'outline',
                            size: 'sm',
                        })}
                    >
                        Login
                    </Link>
                </div>
                <div
                    className={
                        !isSideMenuExpanded
                            ? ''
                            : 'p-4 text-3xl w-full text-center border-t-2 border-t-grey border-b-2 border-b-grey'
                    }
                >
                    <Link
                        href="/sign-up"
                        className={buttonVariants({
                            variant: 'primary',
                            size: 'sm',
                        })}
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
}
