import Footer from '@/components/Footer';

export default function Contact() {
	return (
		<section className='flex flex-col gap-6 min-h-screen items-center justify-center w-full max-w-7xl mx-auto'>
			<div className='flex-1 pt-48'>
				<h1 className='text-3xl font-semibold text-zinc-800 dark:text-zinc-300'>Contact</h1>
				<span className='-mt-2 text-zinc-500'>Coming Soon...</span>
			</div>
			<Footer />
		</section>
	);
}
