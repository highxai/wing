import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
	Check,
	ChevronRight,
	Command,
	Copy,
	Cpu,
	Database,
	Layout,
	Shield,
	Zap,
} from "lucide-react";
import React, { useState } from "react";

export const Route = createFileRoute("/")({ component: Wing });

export default function Wing() {
	const [copied, setCopied] = useState(false);

	const copyCommand = () => {
		navigator.clipboard.writeText("npm i @highx/wing");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<>
			<main className="relative pt-32 lg:pt-48">
				{/* Hero Section */}
				<section className="px-6 max-w-7xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
							</span>
							Coming Soon: WingJs v1.0
						</div>

						<h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-8 tracking-tight">
							The Cockpit for <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-500">
								your Application.
							</span>
						</h1>

						<p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-sans leading-relaxed mb-12">
							WingJs is an adapter-based control panel that connects to your
							data sources in seconds. Real-time updates, built-in RBAC, and
							beautiful UI—all inside your own Next.js routes.
						</p>
					</motion.div>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<button
							type="button"
							onClick={copyCommand}
							className="w-full sm:w-auto flex items-center justify-between gap-6 px-6 py-4 rounded-2xl bg-slate-900 border border-white/10 hover:border-emerald-500/50 transition-all font-mono group relative overflow-hidden"
						>
							<div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
							<span className="text-emerald-400">npm i @highx/wing</span>
							{copied ? (
								<Check className="w-4 h-4 text-emerald-400" />
							) : (
								<Copy className="w-4 h-4 text-slate-500 group-hover:text-white" />
							)}
						</button>
						<button
							type="button"
							className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
						>
							Start Building <ChevronRight className="w-5 h-5" />
						</button>
					</div>
				</section>

				{/* Cinematic Demo Section */}
				<section className="mt-24 px-6 relative max-w-7xl mx-auto">
					<div className="relative rounded-[2rem] p-2 glass overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none" />
						<div className="relative rounded-[1.6rem] bg-slate-950 overflow-hidden border border-white/5 shadow-2xl">
							{/* Fake Dashboard UI */}
							<div className="grid grid-cols-12 h-[600px]">
								<aside className="col-span-3 border-r border-white/5 p-6 space-y-6 hidden md:block">
									<div className="space-y-2">
										<div className="h-2 w-12 bg-slate-800 rounded" />
										<div className="h-8 w-full bg-slate-900 rounded-lg border border-white/5" />
									</div>
									<div className="space-y-4 pt-4">
										{[1, 2, 3, 4].map((i) => (
											<div key={i} className="flex items-center gap-3">
												<div className="w-4 h-4 rounded bg-slate-800" />
												<div className="h-2 flex-1 bg-slate-900 rounded" />
											</div>
										))}
									</div>
								</aside>
								<main className="col-span-12 md:col-span-9 p-8">
									<div className="flex justify-between items-end mb-12">
										<div className="space-y-2">
											<h3 className="font-display text-3xl text-white">
												Project Dashboard
											</h3>
											<p className="text-slate-500 text-sm">
												Real-time sync active with MongoDB Cluster
											</p>
										</div>
										<div className="flex gap-2">
											<div className="px-3 py-1 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold border border-emerald-500/20 uppercase">
												Live
											</div>
										</div>
									</div>
									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 lg:col-span-2 h-64 rounded-2xl border border-white/5 bg-slate-900/50 p-6">
											{/* Placeholder for a chart visual */}
											<div className="w-full h-full flex items-end gap-2">
												{[40, 70, 45, 90, 65, 80, 30, 90].map((h, i) => (
													<motion.div
														key={i + h}
														initial={{ height: 0 }}
														whileInView={{ height: `${h}%` }}
														className="flex-1 bg-emerald-500/20 border-t-2 border-emerald-500 rounded-t-sm"
													/>
												))}
											</div>
										</div>
										<div className="col-span-3 lg:col-span-1 h-64 rounded-2xl border border-white/5 bg-slate-900/50 p-6 flex flex-col justify-between">
											<Database className="w-8 h-8 text-emerald-500" />
											<div>
												<p className="text-slate-500 text-sm">Storage Used</p>
												<p className="text-2xl font-bold text-white">84.2 GB</p>
											</div>
										</div>
									</div>
								</main>
							</div>
						</div>
					</div>
				</section>

				{/* Features Bento Grid */}
				<section className="py-32 px-6 max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
						<BentoCard
							className="md:col-span-8"
							icon={<Zap className="text-emerald-400" />}
							title="Real-time Subscriptions"
							description="WingJs uses optimized webhooks and polling adapters to ensure your dashboard updates the second your database does. No refresh required."
						/>
						<BentoCard
							className="md:col-span-4"
							icon={<Shield className="text-indigo-400" />}
							title="Built-in RBAC"
							description="Define roles like 'Editor' or 'Auditor' directly in your Provider config."
						/>
						<BentoCard
							className="md:col-span-4"
							icon={<Layout className="text-teal-400" />}
							title="Custom Layouts"
							description="Deploy on /admin, /dashboard, or even a hidden route. You own the routing."
						/>
						<BentoCard
							className="md:col-span-8"
							icon={<Cpu className="text-blue-400" />}
							title="Multiple Adapters, One Interface"
							description="Seamlessly bridge data from MongoDB, PostgreSQL, and S3 into a unified control plane without writing complex glue code."
						/>
					</div>
				</section>

				{/* Technical Implementation Section */}
				<section className="py-32 border-y border-white/5 bg-slate-900/20">
					<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
						<div>
							<h2 className="font-display text-5xl text-white mb-6 underline decoration-emerald-500/30 underline-offset-8">
								A developer-first <br />
								integration.
							</h2>
							<div className="space-y-8 mt-12">
								<TechDetail
									num="01"
									title="Wrap your application"
									desc="Import WingProvider at the root or specific layout level."
								/>
								<TechDetail
									num="02"
									title="Configure your Adapter"
									desc="Pass your connection strings and RBAC rules into the provider."
								/>
								<TechDetail
									num="03"
									title="Expose the Dashboard"
									desc="Use the useWing hook or the built-in Admin components to build your UI."
								/>
							</div>
						</div>

						<div className="glass rounded-3xl p-1 overflow-hidden">
							<div className="bg-slate-950 rounded-[1.4rem] p-6 font-mono text-sm border border-white/5">
								<div className="flex gap-2 mb-6">
									<div className="w-3 h-3 rounded-full bg-slate-800" />
									<div className="w-3 h-3 rounded-full bg-slate-800" />
								</div>
								<div className="space-y-1">
									<p className="text-slate-500 italic">
										{"// src/routes/(admin)/layout.tsx"}
									</p>
									<p className="text-indigo-400">
										import{" "}
										<span className="text-white">{`{ WingProvider }`}</span>{" "}
										from '@highx/wing'
									</p>
									<p className="text-slate-200">&nbsp;</p>
									<p className="text-indigo-400">
										export default function{" "}
										<span className="text-teal-400">AdminLayout</span>(
										{`{ children }`}) {"{"}
									</p>
									<p className="text-slate-200 ml-4">return (</p>
									<p className="text-indigo-400 ml-8">{`<WingProvider`}</p>
									<p className="text-indigo-400 ml-12">
										adapter=
										{<span className="text-emerald-400">"mongodb"</span>}
									</p>
									<p className="text-indigo-400 ml-12">
										rbac=
										{
											<span className="text-white">{`{ roles: ['admin'] }`}</span>
										}
									</p>
									<p className="text-indigo-400 ml-8">{`>`}</p>
									<p className="text-white ml-12">{`{children}`}</p>
									<p className="text-indigo-400 ml-8">{`</WingProvider>`}</p>
									<p className="text-slate-200 ml-4">)</p>
									<p className="text-indigo-400">{"}"}</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Final CTA */}
				<section className="py-40 px-6 text-center">
					<div className="max-w-3xl mx-auto glass p-16 rounded-[3rem] border-emerald-500/20 relative">
						<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/40 rotate-12">
							<Command className="text-slate-950 w-10 h-10" />
						</div>
						<h2 className="font-display text-5xl text-white mb-6">
							Ready to scale your <br />
							operations?
						</h2>
						<p className="text-slate-400 mb-10">
							Join 1,000+ developers building faster internal tools.
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<button
								type="button"
								className="bg-white text-slate-950 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-colors"
							>
								Get Started Free
							</button>
							<button
								type="button"
								className="glass px-10 py-4 rounded-2xl font-bold text-lg text-white hover:bg-white/5 transition-colors"
							>
								Read Documentation
							</button>
						</div>
					</div>
				</section>
			</main>

			<footer className="py-12 border-t border-white/5 px-6">
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="flex items-center gap-2">
						<div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center font-bold text-slate-950 text-xs text-[10px]">
							W
						</div>
						<span className="font-bold text-white">wing</span>
					</div>
					<div className="flex gap-8 text-sm text-slate-500 font-medium">
						<a href="x.com/abura1han" className="hover:text-emerald-400">
							X
						</a>
						<a
							href="github.com/highxai/wing"
							className="hover:text-emerald-400"
						>
							GitHub
						</a>
						<a href="/privacy" className="hover:text-emerald-400">
							Privacy
						</a>
					</div>
					<p className="text-sm text-slate-600">
						© {new Date().getFullYear()} Wing@HighX. Built for speed.
					</p>
				</div>
			</footer>
		</>
	);
}

function BentoCard({
	title,
	description,
	icon,
	className = "",
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`group glass p-8 rounded-[2rem] hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden ${className}`}
		>
			<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
				{icon}
			</div>
			<div className="relative z-10">
				<div className="mb-4 p-3 glass w-fit rounded-xl">{icon}</div>
				<h3 className="text-2xl font-display text-white mb-3 tracking-tight">
					{title}
				</h3>
				<p className="text-slate-400 leading-relaxed max-w-sm">{description}</p>
			</div>
		</div>
	);
}

function TechDetail({
	num,
	title,
	desc,
}: {
	num: string;
	title: string;
	desc: string;
}) {
	return (
		<div className="flex gap-6 group">
			<span className="font-display text-xl text-emerald-500/40 group-hover:text-emerald-400 transition-colors">
				{num}
			</span>
			<div>
				<h4 className="text-lg font-bold text-white mb-1 tracking-tight">
					{title}
				</h4>
				<p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
			</div>
		</div>
	);
}
