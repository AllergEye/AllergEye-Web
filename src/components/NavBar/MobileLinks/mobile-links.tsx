import { textVariants } from '@/components/Text/text';
import Link from 'next/link';

export const MobileLinks = (props: any) => {
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
                >
                    Sign Up
                </Link>
            </div>
        </div>
    );
};
