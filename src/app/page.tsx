import Footer from '@/components/Footer';
import Home from '@/components/Home';

export default function HomePage() {
	return (
		<main className='flex flex-col mt-16 w-full max-w-7xl mx-auto'>
			<Home />
			<Footer />
		</main>
	);
}
