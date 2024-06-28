import TailwindCSS from '@/icons/TailwindCSS';
import { IconType } from '@/icons/types';

const iconMap: { [key: string]: (props: IconType) => React.ReactElement } = {
	tailwind: TailwindCSS
};

export default iconMap;
