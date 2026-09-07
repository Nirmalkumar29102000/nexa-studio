import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#08080c]">
      
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
        
        <div className="max-w-4xl">

          {/* Label */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-violet-400" />

            <span className="text-sm text-white/70">
              Independent Digital Agency
            </span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
            We build digital

            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              experiences.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
            Nexa is a design and development studio helping ambitious brands
            turn bold ideas into memorable digital products.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-105"
            >
              Start a Project
              <span className="ml-2">↗</span>
            </Link>

            <Link
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              View Our Work
            </Link>

          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10 border-t border-white/10 pt-8">

            <div>
              <p className="text-2xl font-semibold text-white">
                40+
              </p>

              <p className="mt-1 text-sm text-white/50">
                Projects delivered
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-white">
                12
              </p>

              <p className="mt-1 text-sm text-white/50">
                Global clients
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-white">
                5+
              </p>

              <p className="mt-1 text-sm text-white/50">
                Years of experience
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#08080c] to-transparent" />

    </section>
  );
}