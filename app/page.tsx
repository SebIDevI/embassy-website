// app/page.tsx (App Router) or pages/index.tsx (Pages Router)

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white text-gray-900">
      <div className="max-w-2xl px-6 text-center">
        {/* Logo / Agency Name */}
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Embassy Network
        </h2>

        {/* Main Headline */}
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          A New Era of Media
          <br />
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>

        {/* Divider */}
        <div className="mx-auto my-10 h-[2px] w-24 rounded-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300" />

        {/* Tagline */}
        <p className="mb-12 text-lg leading-relaxed text-gray-600 sm:text-xl">
          We’re reimagining digital storytelling. Premium media creation,
          strategy, and design tailored for visionaries.
        </p>

        {/* Call to Action */}
        <a
          href="mailto:contact@embassynetwork.ro"
          className="inline-block rounded-full bg-gradient-to-r from-gray-900 to-gray-700 px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:shadow-xl"
        >
          Contact Us — contact@embassynetwork.ro
        </a>

        {/* Footer note */}
        <p className="mt-12 text-xs text-gray-400">
          © {new Date().getFullYear()} Embassy Network. All rights reserved.
        </p>
      </div>
    </main>
  );
}
