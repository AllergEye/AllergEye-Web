'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import useWindowSize from './hooks/useWindowSize';
import DesktopLinks from './DesktopLinks';
import MobileLinks from './MobileLinks';
import { Transition } from '@headlessui/react';
import x from '../../../public/x.svg';

export default function NavBar() {
    const [isSideMenuExpanded, setIsSideMenuExpanded] = useState(false);
    const [width, height] = useWindowSize();

    const handleSideMenuExpanded = () => {
        setIsSideMenuExpanded(!isSideMenuExpanded);
    };

    useEffect(() => {
        if (width >= 768) {
            setIsSideMenuExpanded(false);
        }
    }, [width]);
    let navbarIcon;

    useEffect(() => {
        if (isSideMenuExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isSideMenuExpanded]);

    if (isSideMenuExpanded) {
        navbarIcon = (
            <Image priority src={x} alt="navbar-icon" className="text-white" />
        );
    } else {
        navbarIcon = (
            <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                />
            </svg>
        );
    }

    return (
        <nav className="bg-cerulean drop-shadow-md flex justify-between h-20 z-50 relative">
            <div className="flex items-center">
                <div className="text-white text-3xl font-semibold ml-5">
                    AllergEye
                </div>
            </div>

            <div className="inline-flex items-center w-12 justify-between text-white md:hidden mr-5 focus:outline-none focus:ring-2 focus:ring-aqua h-full">
                <button
                    onClick={handleSideMenuExpanded}
                    className="hover:bg-[#2370b8] hover:brightness-75 p-4 rounded"
                >
                    <span className="sr-only">Open main menu</span>
                    {navbarIcon}
                </button>
            </div>
            <DesktopLinks />
            <Transition
                show={isSideMenuExpanded}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className={
                    'fixed right-0 top-20 w-screen h-[calc(100vh-5rem)] bg-cerulean'
                }
            >
                <MobileLinks handleSideMenuExpanded={handleSideMenuExpanded} />
            </Transition>
        </nav>
    );
}
