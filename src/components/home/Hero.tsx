import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="pt-28 pb-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Green accent bar */}
          <div className="mb-6 h-2 w-16 bg-green-600 border-2 border-stone-900" />

          {/* Headline - two lines for visual weight */}
          <h1 className="text-5xl font-black tracking-tight uppercase md:text-7xl leading-[0.95]">
            <span className="text-stone-900">AI MADE SIMPLE.</span>
            <br />
            {/* <span className="relative inline-block">
              <span
                className="absolute inset-0 top-[40%] bg-green-200 border-2 border-stone-900 -skew-x-1"
                aria-hidden="true"
              />
              <span className="relative text-green-600">SIMPLE.</span>
            </span> */}
          </h1>

          {/* Subtitle with leading dash */}
          <p className="mt-5 max-w-md text-base font-semibold text-stone-500 uppercase tracking-wide">
            <span className="text-green-600 mr-1.5" aria-hidden="true">--</span>
            Free guides with tools, prompts & workflows for your profession
          </p>

          {/* CTA button - green, brutal */}
          <Link
            to="/guides"
            className="brutal-btn mt-8 inline-flex bg-green-600 px-10 py-4 text-sm font-bold uppercase tracking-wider text-white"
          >
            Browse guides
          </Link>

          {/* Stats strip with background */}
          <div className="mt-10 inline-flex items-stretch border-2 border-stone-900 divide-x-2 divide-stone-900 bg-green-50">
            <div className="px-6 py-3 text-center">
              <div className="text-xl font-black text-stone-900">50</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Guides</div>
            </div>
            <div className="px-6 py-3 text-center">
              <div className="text-xl font-black text-stone-900">900+</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Prompts</div>
            </div>
            <div className="px-6 py-3 text-center">
              <div className="text-xl font-black text-stone-900">100%</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Free</div>
            </div>
          </div>

          {/* Tagline below stats */}
          <p className="mt-4 text-[11px] font-bold uppercase tracking-widest text-stone-400">
            No login. No paywall. No BS.
          </p>
        </div>
      </div>
    </section>
  )
}
