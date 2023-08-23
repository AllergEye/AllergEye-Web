import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { LabelHTMLAttributes } from 'react';

const labelVariants = cva(
    'absolute text-sm scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-focus:scale-75 duration-300 transform',
    {
        variants: {
            variant: {
                outlined:
                    '-translate-y-4 scale-75 top-2 z-10 px-2 peer-focus:px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 left-1',
                filled: '-translate-y-4 scale-75 top-4 z-10 left-2.5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4',
                floating:
                    '-translate-y-6 scale-75 top-3 peer-focus:left-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6',
            },
            textColour: {
                cerulean: 'text-cerulean',
                aqua: 'text-aqua',
                white: 'text-white',
                black: 'text-black',
            },
            focusColour: {
                cerulean: 'peer-focus:text-cerulean',
                aqua: 'peer-focus:text-aqua',
                white: 'peer-focus:text-white',
            },
            bgColour: {
                cerulean: 'bg-cerulean',
                aqua: 'bg-aqua',
                white: 'bg-white',
                darkCerulean: 'bg-[#154673]',
            },
        },
    }
);

interface LabelProps
    extends LabelHTMLAttributes<HTMLLabelElement>,
        VariantProps<typeof labelVariants> {
    placeholder?: string;
}

const Label: React.FC<LabelProps> = ({
    className,
    variant,
    placeholder,
    textColour,
    focusColour,
    bgColour,
    ...props
}) => {
    return (
        <label
            className={cn(
                labelVariants({
                    variant,
                    textColour,
                    focusColour,
                    bgColour,
                    className,
                })
            )}
            {...props}
        >
            {placeholder}
        </label>
    );
};

export { labelVariants, Label };
