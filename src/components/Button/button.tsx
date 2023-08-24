import { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva('outline outline-2 rounded hover:brightness-75', {
    variants: {
        variant: {
            primary: 'outline-aqua bg-aqua rounded p-2 text-white',
            outline: 'outline-white rounded p-2 text-white',
        },
        size: {
            default: 'h-10 py-2 px-4',
            sm: 'h-9 px-2',
            large: 'h-12',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default',
    },
});

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size, variant, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
