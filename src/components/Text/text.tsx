import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

const textVariants = cva('text-base text-left text-black font-normal', {
    variants: {
        variant: {
            extremelyHuge: 'text-5xl',
            veryHuge: 'text-2xl',
            huge: 'text-xl',
            large: 'text-lg',
            normal: 'text-base',
            small: 'text-sm',
        },
        align: {
            left: 'text-left',
            center: 'text-center',
            right: 'text-right',
            justify: 'text-justify',
        },
        textColour: {
            white: 'text-white',
            black: 'text-black',
            aqua: 'text-aqua',
            grey: 'text-grey',
            cerulean: 'text-cerulean',
        },
        weight: {
            light: 'font-light',
            normal: 'font-normal',
            semibold: 'font-semibold',
            bold: 'font-bold',
        },
    },
});

interface TextProps
    extends HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof textVariants> {}

const Text: React.FC<TextProps> = ({
    className,
    variant,
    align,
    textColour,
    weight,
    ...props
}) => {
    return (
        <p
            className={cn(
                textVariants({ variant, align, textColour, weight, className })
            )}
            {...props}
        />
    );
};

export { Text, textVariants };
