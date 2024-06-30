import Logo from '@/icons/Logo';
import { FlipWords } from '../FlipWords';
import cn from '@/utils/cn';
import DotPattern from '../DotPattern';
import { Spotlight } from '../Spotlight';
import FramerMotionIcon from '@/icons/FramerMotion';
import NextjsIcon from '@/icons/Nextjs';
import ReactIcon from '@/icons/React';
import TailwindIcon from '@/icons/TailwindIcon';
import { Button } from '@/ui/Button';

export default function Hero() {
	return (
		<section className='relative'>
			<div className='sm:max-w-md md:max-w-xl max-w-xs flex flex-col items-center gap-6 mx-auto relative sm:my-36 my-40'>
				<Spotlight className='top-[0%] left-[40%] w-full h-full' />
				<Logo width={100} height={100} className='bg-black  fill-white dark:bg-white dark:fill-black rounded-2xl' />

				<h1 className='md:text-6xl lg:text-7xl text-3xl font-bold text-balance '>
					Build web apps 10x <FlipWords words={['faster', 'sleeker', 'better', 'easier']} />
				</h1>

				<span className='text-zinc-500 dark:text-zinc-300 text-sm sm:text-base md:text-lg'>
					Copy and paste beautifully crafted components and animations for a seamless development experience.
				</span>

				<div className='flex sm:flex-row items-center gap-8 self-start mt-4'>
					<Button as='a' href='/explore' className='hover:shadow-xl md:w-48 w-28 !rounded-lg' size='xl'>
						<span className='font-semibold'>Explore</span>
					</Button>
					<Button
						as='a'
						href='/contact'
						className='hover:shadow-xl md:w-48 w-28 !rounded-lg'
						size='xl'
						variant='outline'
					>
						<span className=''>Contact</span>
					</Button>
				</div>

				<div className='flex items-center justify-start w-full gap-6 flex-wrap mt-4'>
					<div className='flex gap-2 items-center'>
						<NextjsIcon width={28} height={28} className='fill-zinc-500 dark:fill-zinc-300' />
						<span className='text-sm sm:text-lg font-medium text-zinc-500 dark:text-zinc-300'>Next.js</span>
					</div>

					<div className='flex gap-2 items-center'>
						<ReactIcon width={28} height={28} className='stroke-none fill-zinc-500 dark:fill-zinc-300' />
						<span className='text-sm sm:text-lg font-medium text-zinc-500 dark:text-zinc-300'>React</span>
					</div>

					<div className='flex gap-2 items-center'>
						<TailwindIcon width={28} height={28} className='stroke-none fill-zinc-500 dark:fill-zinc-300' />
						<span className='text-sm sm:text-lg font-medium text-zinc-500 dark:text-zinc-300'>TailwindCSS</span>
					</div>

					<div className='flex gap-2 items-center'>
						<FramerMotionIcon width={28} height={28} className='fill-none stroke-zinc-500 dark:stroke-zinc-300' />
						<span className='text-sm sm:text-lg font-medium text-zinc-500 dark:text-zinc-300'>Framer Motion</span>
					</div>
				</div>
			</div>
			<DotPattern className={cn('-z-10 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]')} />
		</section>
	);
}
