import AlertIcon from '@/icons/AlertIcon';
import { Button } from '@/ui/Button';

export default function NotFound() {
	return (
		<section className='w-screen h-screen flex items-center justify-center flex-col gap-4'>
			<AlertIcon width={52} height={52} className='fill-none stroke-zinc-800 dark:stroke-zinc-300' />
			<h1 className='text-3xl font-semibold text-zinc-800 dark:text-zinc-300'>Page not found</h1>
			<span className='-mt-2 text-zinc-500'>The page you are looking for doesn't exist.</span>

			<Button as='a' href='/' className='mt-2' size='md'>
				Go to home
			</Button>
		</section>
	);
}
