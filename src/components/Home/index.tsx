import Logo from '@/icons/Logo';
import { FlipWords } from '../FlipWords';
import FramerMotion from '@/icons/FramerMotion';
import cn from '@/utils/cn';
import DotPattern from '../DotPattern';
import { Spotlight } from '../Spotlight';

export default function Home() {
	return (
		<section className=''>
			<div className='md:max-w-lg lg:max-w-xl max-w-md flex flex-col items-center gap-3 mx-auto relative my-40'>
				<Spotlight className='top-1/3 left-1/3 w-full h-full' />
				<Logo width={100} height={100} className='bg-black  fill-white dark:bg-white dark:fill-black rounded-lg' />

				<h1 className='md:text-5xl lg:text-7xl text-3xl font-bold text-balance'>
					Build web apps 10x <FlipWords words={['faster', 'sleeker', 'better', 'easier']} />
				</h1>

				<span className='text-zinc-500 dark:text-zinc-300 text-lg'>
					Copy and paste beautifully crafted components and animations for a seamless development experience.
				</span>

				<div>{/* <FramerMotion className='fill-none stroke-black' /> */}</div>
			</div>
			<DotPattern className={cn('-z-10 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]')} />
		</section>
	);
}
