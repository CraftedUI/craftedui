import cn from '@/utils/cn';
import { IconType } from './types';

export default function FramerMotion({
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
			strokeWidth={2}
		>
			<path d='M12 12l-8 -8v16l16 -16v16l-4 -4'></path>
			<path d='M20 12l-8 8l-4 -4'></path>
		</svg>
	);
}
