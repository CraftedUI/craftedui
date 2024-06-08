import cn from '@/utils/cn';
import { IconType } from './types';

export default function Logo({
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
			className={cn(className, withoutBg ? '!bg-transparent' : '')}
			width={width}
			height={height}
			viewBox='-6.4 -6.4 76.80 76.80'
			version='1.1'
			xmlSpace='preserve'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			stroke-width='0.384'
			transform='matrix(1, 0, 0, 1, 0, 0)rotate(0)'
		>
			<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
			<g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
			<g id='SVGRepo_iconCarrier'>
				{' '}
				<g id='orgami'>
					{' '}
					<path d='M61,52c0-0.1,0-0.2-0.1-0.3c0,0,0,0,0-0.1c0-0.1-0.1-0.2-0.2-0.3L40.2,30.8L52.9,6.5c0.2-0.4,0.1-0.9-0.2-1.2 c-0.3-0.3-0.8-0.4-1.2-0.1L40,12.2V6c0-0.4-0.2-0.7-0.5-0.9c-0.3-0.2-0.7-0.2-1,0l-17,10c-0.1,0.1-0.2,0.1-0.2,0.2c0,0,0,0,0,0 c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.3c0,0,0,0,0,0.1c0,0.1,0,0.2,0,0.3v4H4c-0.1,0-0.2,0-0.4,0.1c0,0-0.1,0-0.1,0 c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.1,0.2-0.2,0.2c0,0,0,0,0,0.1c0,0,0,0,0,0C3,20.7,3,20.9,3,21c0,0,0,0,0,0v12 c0,0.3,0.2,0.7,0.5,0.9C3.6,34,3.8,34,4,34c0.2,0,0.3,0,0.4-0.1l7.7-3.8l9.2,8.7c0,0,0,0,0.1,0.1c0.1,0.1,0.2,0.1,0.2,0.1 c0,0,0,0,0,0c0,0,0,0,0,0l17,6l12.7,4.8l7.9,8.9c0.2,0.2,0.5,0.3,0.7,0.3c0.1,0,0.2,0,0.4-0.1c0.4-0.1,0.6-0.5,0.6-0.9L61,52 C61,52,61,52,61,52z M56,49.4l-16-6.1v-9.9L56,49.4z M49.4,8.8L40,26.9V14.6L49.4,8.8z M38,14.1C38,14.1,38,14.1,38,14.1v14.7 L23.7,16.2L38,7.8V14.1z M23,21v-2.8l14.1,12.5L23,36.5V21z M21,22v13.7L6.5,22H21z M5,31.4v-8.1l5.6,5.3L5,31.4z M24.8,37.9 L38,32.5v10.1L24.8,37.9z M55.4,51.3l3.6,1.4v2.7L55.4,51.3z'></path>{' '}
				</g>{' '}
				<g id='embroidery'></g> <g id='craftsman'></g> <g id='pottery'></g> <g id='sculpt'></g> <g id='yarn'></g>{' '}
				<g id='scissors'></g> <g id='sewing_machine'></g> <g id='knitting'></g> <g id='stationary'></g>{' '}
				<g id='stapler'></g> <g id='compass'></g> <g id='cutter'></g> <g id='pin_tool'></g> <g id='wood_chisel'></g>{' '}
				<g id='adhesive_tape'></g> <g id='sewing_clothes'></g> <g id='anvil'></g> <g id='glue_gun'></g>{' '}
				<g id='roller_brush'></g>{' '}
			</g>
		</svg>
	);
}
