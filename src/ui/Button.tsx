import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import Link, { LinkProps } from 'next/link';

type CommonProps = {
	as?: 'button' | 'a';
	size?: 'sm' | 'default' | 'md' | 'lg' | 'xl';
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CommonProps;
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & CommonProps;

type Props = ButtonProps | AnchorProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
	({ as = 'button', variant = 'primary', size = 'default', className, ...props }, ref) => {
		const variants = {
			primary:
				'bg-primary-800 text-neutral-50 hover:bg-primary-800/90 dark:bg-primary-50 dark:text-neutral-900 dark:hover:bg-primary-100/90',
			destructive:
				'bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90',
			outline:
				'border border-neutral-200 bg-white hover:bg-primary-100/80 hover:text-neutral-900 dark:border-neutral-800 dark:bg-black dark:hover:bg-zinc-900/90 dark:hover:text-neutral-50',
			secondary:
				'bg-primary-100 text-neutral-900 hover:bg-primary-100/80 dark:bg-primary-600 dark:text-neutral-50 dark:hover:bg-primary-600/80',
			ghost: 'hover:bg-primary-100 hover:text-neutral-900 dark:hover:bg-primary-600 dark:hover:text-neutral-50',
			link: 'text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50'
		};

		const sizes = {
			sm: 'px-1.5 py-1.5 text-sm',
			default: 'px-4 py-2 text-sm font-medium',
			md: 'px-5 py-3',
			lg: 'px-6 py-3.5',
			xl: 'px-7 py-4'
		};

		if (as === 'a') {
			return (
				<Link
					className={`
          inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 duration-150 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300
          ${variants[variant]}
          ${sizes[size]}
          ${className ?? ''}`}
					{...(props as AnchorProps)}
					ref={ref as Ref<HTMLAnchorElement>}
				/>
			);
		}

		return (
			<button
				className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 duration-150 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300
        ${variants[variant]} 
        ${sizes[size]}
         ${className ?? ''}`}
				{...(props as ButtonProps)}
				ref={ref as Ref<HTMLButtonElement>}
			/>
		);
	}
);
