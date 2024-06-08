import { SVGProps } from 'react';

export type IconType = SVGProps<any> & {
	inverted?: boolean;
	withoutBg?: boolean;
};
