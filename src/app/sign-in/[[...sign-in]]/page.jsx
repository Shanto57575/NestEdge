import { SignIn } from "@clerk/nextjs";

const page = () => {
	return (
		<div className="flex items-center justify-center p-3">
			<SignIn />
		</div>
	);
};

export default page;
