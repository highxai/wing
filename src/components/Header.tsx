export default function Header() {
	return (
		<header className="fixed top-0 w-full z-[100] border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
			<nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
				<div className="flex items-center gap-3 group cursor-pointer">
					<div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:rotate-6 transition-transform">
						<span className="text-slate-950 font-black text-xl">W</span>
					</div>
					<span className="text-lg font-bold tracking-tight text-white">
						wing
					</span>
				</div>

				<div className="hidden md:flex items-center gap-1 glass px-1 py-1 rounded-full">
					<NavMethod title="Features" />
					<NavMethod title="Adapters" />
					<NavMethod title="Docs" />
				</div>

				<button
					type="button"
					className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-emerald-400 transition-all active:scale-95"
				>
					Star on GitHub
				</button>
			</nav>
		</header>
	);
}

function NavMethod({ title }: { title: string }) {
	return (
		<button
			type="button"
			className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
		>
			{title}
		</button>
	);
}
