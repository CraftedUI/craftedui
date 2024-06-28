'use client';
import componentDetails from './data.json';
import PreviewContent from '@/components/PreviewContent';

function ThreeDButton() {
	return (
		<PreviewContent>
			<PreviewContent.CodeAndPreview path='components/button/ghost' componentDetails={componentDetails} />
		</PreviewContent>
	);
}

export default ThreeDButton;
