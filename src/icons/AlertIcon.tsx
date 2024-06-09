import cn from '@/utils/cn';
import { IconType } from './types';

export default function AlertIcon({
	className,
	inverted = false,
	withoutBg = false,
	width = 24,
	height = 24,
	...props
}: IconType) {
	return (
		<svg
			{...props}
			className={cn(className)}
			width={width}
			height={height}
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<path
				opacity='0.1'
				d='M10.2501 5.147L3.64909 17.0287C2.9085 18.3618 3.87244 20 5.39741 20H18.5994C20.1243 20 21.0883 18.3618 20.3477 17.0287L13.7467 5.147C12.9847 3.77538 11.0121 3.77538 10.2501 5.147Z'
			/>
			<path d='M12 10V13' strokeWidth='2' strokeLinecap='round' />
			<path d='M12 16V15.9888' strokeWidth='2' strokeLinecap='round' />
			<path
				d='M10.2515 5.147L3.65056 17.0287C2.90997 18.3618 3.8739 20 5.39887 20H18.6008C20.1258 20 21.0897 18.3618 20.3491 17.0287L13.7482 5.147C12.9861 3.77538 11.0135 3.77538 10.2515 5.147Z'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
