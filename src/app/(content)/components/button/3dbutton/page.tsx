import CodeAndPreviewContent from '@/components/CodeAndPreviewContent';

export const componentDetails = {
	name: '3D Button',
	desc: '3D Button for your nextjs component',
	libraries: ['Tailwind']
};
function ThreeDButton() {
	return <CodeAndPreviewContent path='components/button/3dbutton' componentDetails={componentDetails} />;
}

export default ThreeDButton;
