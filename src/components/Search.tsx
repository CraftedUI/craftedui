'use client';
import SearchIcon from '@/icons/SearchIcon';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { Suspense, useEffect, useState } from 'react';

function SearchDialog({
	isOpen,
	setIsOpen
}: {
	isOpen: boolean;
	setIsOpen: (value: boolean | ((prevState: boolean) => boolean)) => void;
}) {
	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
			<div className='fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur-sm bg-zinc-400 bg-opacity-20'>
				<DialogPanel className='max-w-lg space-y-4 border bg-white p-12'>
					{/* <DialogTitle className='font-bold'>Deactivate account</DialogTitle> */}
					Dialog box for search.
				</DialogPanel>
			</div>
		</Dialog>
	);
}

export default function Search() {
	let [modifierKey, setModifierKey] = useState<string>();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl ');
	}, []);

	return (
		<div className='hidden md:block md:max-w-md md:flex-auto'>
			<button
				type='button'
				onClick={() => setIsOpen(true)}
				className='hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 ui-not-focus-visible:outline-none md:flex dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20'
			>
				<SearchIcon width={16} height={16} className='stroke-current fill-none' />
				Find something...
				<kbd className='ml-auto text-2xs text-zinc-400 dark:text-zinc-500'>
					<kbd className='font-sans'>{modifierKey}</kbd>
					<kbd className='font-sans'>K</kbd>
				</kbd>
			</button>
			<Suspense fallback={null}>
				<SearchDialog isOpen={isOpen} setIsOpen={setIsOpen} />
			</Suspense>
		</div>
	);
}
