import { Link } from 'react-router-dom';

export default function Webdev() {
	return (
		<div className="w-full">
			<div className="mx-auto max-w-5xl px-6 py-10">
				<h1 className="text-4xl sm:text-6xl font-extralight !tracking-[.3em] text-center">
					WEBDEV
				</h1>

				<div className="mt-6 text-center">
					<Link
						to="/"
						className="text-base sm:text-lg font-extralight hover:underline"
					>
						&larr; Back to Phenom Studios
					</Link>
				</div>

				{/* Embeds */}
				<div className="mt-10 space-y-6"></div>
			</div>
		</div>
	);
}
