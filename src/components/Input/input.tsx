import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React, { InputHTMLAttributes } from 'react';
import { Label, labelVariants } from './label';

const inputVariants = cva(
    'block text-sm appearance-none focus:outline-none focus:ring-0 peer border-gray-300',
    {
        variants: {
            variant: {
                outlined:
                    'px-2.5 pb-2.5 pt-4 bg-transparent rounded-lg border-2 ',
                filled: 'rounded-t-lg px-2.5 pb-2.5 pt-5 border-0 border-b-2',
                floating: 'py-2.5 px-0 bg-transparent border-0 border-b-2',
            },
            borderColour: {
                cerulean: 'focus:border-cerulean',
                aqua: 'focus:border-aqua',
                white: 'focus:border-white',
            },
            bgColour: {
                cerulean: 'bg-cerulean',
                aqua: 'bg-aqua',
                white: 'bg-white',
                darkCerulean: 'bg-[#154673]',
            },
            textColour: {
                cerulean: 'text-white',
                aqua: 'text-aqua',
                black: 'text-black',
                white: 'text-white',
            },
        },
    }
);

interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {
    labelValue?: string;
}

const Input: React.FC<InputProps> = ({
    className,
    variant,
    borderColour,
    labelValue,
    bgColour,
    textColour,
    ...props
}) => {
    return (
        <div className="relative z-0">
            <input
                className={cn(
                    inputVariants({
                        variant,
                        borderColour,
                        bgColour,
                        textColour,
                        className,
                    })
                )}
                {...props}
            />
            <Label
                className={labelVariants({
                    variant: variant,
                    className: className,
                    textColour: textColour,
                    focusColour: borderColour,
                    bgColour: bgColour,
                })}
                placeholder={labelValue}
                htmlFor={props.id}
            />
        </div>
    );
};

export { Input, inputVariants };
