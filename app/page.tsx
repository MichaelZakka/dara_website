export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
      <main className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Dara LLC
        </h1>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-slate-400"></div>
          <p className="text-xl md:text-2xl text-slate-300 uppercase tracking-widest">
            Under Development
          </p>
          <div className="h-px w-12 bg-slate-400"></div>
        </div>
        <p className="text-slate-400 mt-8">
          Our website is currently being built. Check back soon!
        </p>
      </main>
    </div>
  );
}
