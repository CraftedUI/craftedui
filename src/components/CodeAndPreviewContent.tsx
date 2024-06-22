'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
type Props = {
	path: string;
};

export default function CodeAndPreviewContent({ path }: Props) {
	const [isPreview, setIsPreview] = useState(true);
	const Component = dynamic(() => import(`../content/${path}.tsx`));
	const codestring = require(`!!raw-loader!../content/${path}.tsx`).default;
	return (
		<section>
			<button className='p-2 bg-zinc-400 rounded-lg' onClick={() => setIsPreview((prev) => !prev)}>
				change
			</button>
			{isPreview ? (
				<Component />
			) : (
				<SyntaxHighlighter language='javascript' style={docco}>
					{codestring}
				</SyntaxHighlighter>
			)}
		</section>
	);
}
