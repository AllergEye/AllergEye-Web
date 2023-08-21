import { buttonVariants } from '@/components/Button/button';
import { textVariants } from '@/components/Text/text';
import Link from 'next/link';
import { ReactNode } from 'react';

export const DesktopLinks = (): ReactNode => {
    return (
        <div className={'hidden md:flex items-center space-x-4 mr-5'}>
            <div>
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
            <div>
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
            <div>
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
            <div>
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
    );
};
