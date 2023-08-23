import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { LabelHTMLAttributes } from 'react';

const labelVariants = cva('', {
    variants: {
        variant: {
            outlined:
                'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1',
            filled: 'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4',
            floating:
                'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6',
        },
    },
});

interface LabelProps
    extends LabelHTMLAttributes<HTMLLabelElement>,
        VariantProps<typeof labelVariants> {
    placeholder?: string;
}

const Label: React.FC<LabelProps> = ({
    className,
    variant,
    placeholder,
    ...props
}) => {
    return (
        <label className={cn(labelVariants({ variant, className }))} {...props}>
            {placeholder}
        </label>
    );
};

export { labelVariants, Label };
