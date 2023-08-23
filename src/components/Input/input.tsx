import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React, { InputHTMLAttributes } from 'react';

const inputVariants = cva('rounded');
interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
    return <input className={cn(inputVariants({ className }))} {...props} />;
};

export { Input, inputVariants };
