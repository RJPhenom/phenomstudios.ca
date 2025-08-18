import { Link, useLocation } from 'react-router-dom';
import Logo from './assets/PhenomStudiosWordmarkWhite.png';
import { LuSquareCode, LuGamepad2 } from 'react-icons/lu';
import Webdev from './pages/Webdev.jsx';
import Gamedev from './pages/Gamedev.jsx';

export default function App() {
	const { pathname } = useLocation();

	// Choose which page (if any) to show in the slide-in panel
	const overlayNode =
		pathname === '/webdev' ? (
			<Webdev />
		) : pathname === '/gamedev' ? (
			<Gamedev />
		) : null;

	const panelOpen = !!overlayNode;

	return (
		<>
			{/* Background video */}
			<video
				className="fixed inset-0 w-full h-full object-cover z-[-2] pointer-events-none"
				autoPlay
				muted
				loop
				playsInline
				preload="metadata"
			>
				<source src="/starsein-dialogue-example.mp4" type="video/mp4" />
			</video>

			{/* Optional dark overlay */}
			<div
				className="fixed inset-0 bg-black/45 z-[-1]"
				aria-hidden="true"
			/>

			{/* Hero */}
			<div className="relative w-screen h-screen flex flex-col items-center justify-center">
				<img
					src={Logo}
					alt="Phenom Studios Logo"
					className="max-w-[65vw] sm:max-w-[25em] my-5 mr-10"
				/>
				<div className="flex items-stretch justify-center divide-x divide-white mb-8">
					<a
						href="https://phenomrj.itch.io/netdeck"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 md:px-12 py-3 md:py-6 bg-transparent text-white hover:bg-white hover:text-black uppercase tracking-wide font-semibold transition-colors duration-200"
					>
						NETDECK
					</a>

					<a
						href="https://phenomrj.itch.io/neurowolke"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 md:px-12 py-3 md:py-6 bg-transparent text-white hover:bg-white hover:text-black uppercase tracking-wide font-semibold transition-colors duration-200"
					>
						NEUROWOLKE
					</a>

					<a
						href="https://github.com/RJPhenom/SeinARTS"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 md:px-12 py-3 md:py-6 bg-transparent text-white hover:bg-white hover:text-black uppercase tracking-wide font-semibold transition-colors duration-200"
					>
						SeinARTS
					</a>
				</div>
				<div className="flex flex-col gap-2 justify-center items-center text-xs font-extralight !tracking-[.3em]">
					<a>rj@phenomstudios.ca</a>
					<p>416.722.0731</p>
				</div>
			</div>

			{/* Slide-in panel (route-controlled) */}
			<div
				className={[
					'fixed inset-0 z-10 bg-black/80 backdrop-blur-sm',
					'transform transition-transform duration-500 ease-out',
					panelOpen
						? 'translate-x-0 pointer-events-auto'
						: 'translate-x-full pointer-events-none',
					// NEW: center + allow scrolling if content is tall
					'flex items-center justify-center overflow-y-auto p-6',
				].join(' ')}
				aria-hidden={!panelOpen}
			>
				{/* keep page width constrained via its own container */}
				{overlayNode}
			</div>
		</>
	);
}
