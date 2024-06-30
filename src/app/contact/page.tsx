'use client';

import Footer from '@/components/Footer';
import LogoIcon from '@/icons/Logo';
import cn from '@/utils/cn';
import { Button, Description, Field, Fieldset, Input, Label, Legend, Textarea } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
	const [data, setData] = useState({
		email: '',
		name: '',
		message: '',
		title: ''
	});
	return (
		<section className='flex flex-col w-full max-w-7xl mx-auto relative z-10'>
			<div className='min-h-screen flex justify-center items-center overflow-hidden z-50 relative'>
				<form className='w-4/5 lg:w-2/6'>
					<Fieldset className='space-y-6 rounded-xl bg-zinc-700/5 backdrop-blur-3xl dark:bg-white/5  p-6 sm:p-10'>
						<Legend className='flex gap-2 items-center font-semibold  text-zinc-700 dark:text-zinc-200 text-3xl capitalize w-full justify-center'>
							<LogoIcon
								className='fill-white dark:fill-black bg-black dark:bg-white rounded-md'
								width={28}
								height={28}
							/>
							Get in touch
						</Legend>
						<Field>
							<Label className='text-sm/6 font-medium text-zinc-700 dark:text-zinc-200'>Name</Label>
							<Input
								onChange={(e) =>
									setData((prev) => ({
										...prev,
										name: e.target.value?.trim()
									}))
								}
								required
								type='text'
								className={cn(
									'mt-3 block w-full rounded-lg border-none bg-zinc-700/5 dark:bg-white/5  py-1.5 px-3 text-sm/6 text-zinc-700 dark:text-zinc-200',
									'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-zinc-700/25 dark:data-[focus]:outline-white/25'
								)}
							/>
						</Field>

						<Field>
							<Label className='text-sm/6 font-medium text-zinc-700 dark:text-zinc-200'>Email ID</Label>
							<Input
								onChange={(e) =>
									setData((prev) => ({
										...prev,
										email: e.target.value?.trim()
									}))
								}
								type='email'
								required
								className={cn(
									'mt-3 block w-full rounded-lg border-none bg-zinc-700/5 dark:bg-white/5  py-1.5 px-3 text-sm/6 text-zinc-700 dark:text-zinc-200',
									'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-zinc-700/25 dark:data-[focus]:outline-white/25'
								)}
							/>
						</Field>

						<Field>
							<Label className='text-sm/6 font-medium text-zinc-700 dark:text-zinc-200'>Subject</Label>
							<Input
								onChange={(e) =>
									setData((prev) => ({
										...prev,
										title: e.target.value?.trim()
									}))
								}
								type='email'
								required
								className={cn(
									'mt-3 block w-full rounded-lg border-none bg-zinc-700/5 dark:bg-white/5  py-1.5 px-3 text-sm/6 text-zinc-700 dark:text-zinc-200',
									'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-zinc-700/25 dark:data-[focus]:outline-white/25'
								)}
							/>
						</Field>

						<Field>
							<Label className='text-sm/6 font-medium text-zinc-700 dark:text-zinc-200'>Message</Label>
							<Textarea
								required
								onChange={(e) =>
									setData((prev) => ({
										...prev,
										message: e.target.value?.trim()
									}))
								}
								className={cn(
									'mt-3 block w-full resize-none rounded-lg border-none bg-zinc-700/5 dark:bg-white/5  py-1.5 px-3 text-sm/6 text-zinc-700 dark:text-zinc-200',
									'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-zinc-700/25 dark:data-[focus]:outline-white/25'
								)}
								rows={3}
							/>
						</Field>

						<div className='flex gap-3 justify-center w-full'>
							<Button
								type='submit'
								onClick={() => window.open(`mailto:craftedui@gmail.com?subject=${data.title}&body=${data.message}`)}
								className='inline-flex items-center gap-2 rounded-md bg-zinc-700 py-1.5 px-3 text-sm/6 font-semibold text-zinc-200 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-zinc-600 data-[open]:bg-zinc-700 data-[focus]:outline-1 data-[focus]:outline-white'
							>
								Send Email
							</Button>
							<Button
								disabled={!(data.title && data.message)}
								onClick={() =>
									window.open(
										`https://github.com/CraftedUI/craftedui/issues/new?title=${data.title}&body=${data.message}`,
										'_blank'
									)
								}
								className='inline-flex items-center gap-2 rounded-md bg-zinc-700 py-1.5 px-3 text-sm/6 font-semibold text-zinc-200 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-zinc-600 data-[open]:bg-zinc-700 data-[focus]:outline-1 data-[focus]:outline-white'
							>
								Create a GH issue
							</Button>
						</div>
					</Fieldset>
				</form>
			</div>
			<Footer />
		</section>
	);
}
