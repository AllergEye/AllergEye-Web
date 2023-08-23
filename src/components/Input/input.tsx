import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React, { InputHTMLAttributes } from 'react';
import { Label, labelVariants } from './label';

const inputVariants = cva('', {
    variants: {
        variant: {
            outlined:
                'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-cerulean focus:outline-none focus:ring-0 focus:border-cerulean peer',
            filled: 'block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-black bg-grey dark:bg-grey border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer',
            floating:
                'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer',
        },
    },
});

interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {
    labelValue?: string;
}

const Input: React.FC<InputProps> = ({
    className,
    variant,
    labelValue,
    ...props
}) => {
    return (
        <div className="relative z-0">
            <input
                className={cn(inputVariants({ variant, className }))}
                {...props}
            />
            <Label
                className={labelVariants({
                    variant: variant,
                    className: className,
                })}
                placeholder={labelValue}
                htmlFor={props.id}
            />
        </div>
    );
};

export { Input, inputVariants };
