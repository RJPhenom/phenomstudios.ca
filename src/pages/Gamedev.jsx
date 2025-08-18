import { Link } from 'react-router-dom';

export default function Gamedev() {
	return (
		<div className="w-full">
			<div className="mx-auto max-w-5xl px-6 py-10">
				<h1 className="text-4xl sm:text-6xl font-extralight !tracking-[.3em] text-center">
					GAMEDEV
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
				<div className="mt-10 space-y-6">
					{/* NETDECK */}
					<iframe
						title="NETDECK by PhenomRJ"
						frameBorder="0"
						src="https://itch.io/embed/3815187?bg_color=222222&fg_color=eeeeee&border_color=363636"
						width="552"
						height="167"
						className="mx-auto w-full max-w-[552px] rounded-lg shadow-lg"
					>
						<a href="https://phenomrj.itch.io/netdeck">
							NETDECK by PhenomRJ
						</a>
					</iframe>

					{/* NEUROWOLKE */}
					<iframe
						title="NEUROWOLKE by PhenomRJ"
						frameBorder="0"
						src="https://itch.io/embed/3564315?dark=true"
						width="552"
						height="167"
						className="mx-auto w-full max-w-[552px] rounded-lg shadow-lg"
					>
						<a href="https://phenomrj.itch.io/neurowolke">
							NEUROWOLKE by PhenomRJ
						</a>
					</iframe>

					{/* Ball Booster */}
					<iframe
						title="Ball Booster by PhenomRJ"
						frameBorder="0"
						src="https://itch.io/embed/2706047?dark=true"
						width="552"
						height="167"
						className="mx-auto w-full max-w-[552px] rounded-lg shadow-lg"
					>
						<a href="https://phenomrj.itch.io/ball-booster">
							Ball Booster by PhenomRJ
						</a>
					</iframe>
				</div>
			</div>
		</div>
	);
}
