import React from 'react';
import { textVariants } from '@/components/Text/text';
import Link from 'next/link';

interface MobileLinksProps {
    handleSideMenuExpanded: () => void;
}

export const MobileLinks: React.FC<MobileLinksProps> = ({
    handleSideMenuExpanded,
}) => {
    const linkContainerClass =
        'w-11/12 text-right hover:brightness-75 hover:bg-[#2370b8] hover:cursor-pointer rounded py-4';
    return (
        <div className="flex flex-col w-full h-full items-center">
            <div className={linkContainerClass}>
                <Link
                    href="/restaurants"
                    className={textVariants({
                        variant: 'huge',
                        align: 'right',
                        textColour: 'white',
                        weight: 'normal',
                        className: 'inline-block w-full h-full pr-2',
                    })}
                    onClick={handleSideMenuExpanded}
                >
                    Restaurants
                </Link>
            </div>
            <div className={linkContainerClass}>
                <Link
                    href="/dishes"
                    className={textVariants({
                        variant: 'huge',
                        align: 'right',
                        textColour: 'white',
                        weight: 'normal',
                        className: 'inline-block w-full h-full pr-2',
                    })}
                    onClick={handleSideMenuExpanded}
                >
                    Dishes
                </Link>
            </div>
            <div className={linkContainerClass}>
                <Link
                    href="/login"
                    className={textVariants({
                        variant: 'huge',
                        align: 'right',
                        textColour: 'white',
                        weight: 'normal',
                        className: 'inline-block w-full h-full pr-2',
                    })}
                    onClick={handleSideMenuExpanded}
                >
                    Log In
                </Link>
            </div>
            <div className={linkContainerClass}>
                <Link
                    href="/sign-up"
                    className={textVariants({
                        variant: 'huge',
                        align: 'right',
                        textColour: 'white',
                        weight: 'normal',
                        className: 'inline-block w-full h-full pr-2',
                    })}
                    onClick={handleSideMenuExpanded}
                >
                    Sign Up
                </Link>
            </div>
        </div>
    );
};
