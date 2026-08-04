import React from "react";

export default function DesignSystemShowcase() {
  const primaryColors = [
    { label: "100", value: "bg-primary-100", text: "text-primary-900" },
    { label: "200", value: "bg-primary-200", text: "text-primary-900" },
    { label: "300", value: "bg-primary-300", text: "text-primary-900" },
    { label: "400", value: "bg-primary-400", text: "text-white" },
    { label: "500", value: "bg-primary-500", text: "text-white" },
    { label: "600", value: "bg-primary-600", text: "text-white" },
    { label: "700", value: "bg-primary-700", text: "text-white" },
    { label: "800", value: "bg-primary-800", text: "text-white" },
    { label: "900 (Key)", value: "bg-primary-900", text: "text-white" },
    { label: "1000", value: "bg-primary-1000", text: "text-white" },
  ];

  const secondaryColors = [
    { label: "100", value: "bg-secondary-100", text: "text-secondary-900" },
    { label: "200", value: "bg-secondary-200", text: "text-secondary-900" },
    { label: "300", value: "bg-secondary-300", text: "text-secondary-900" },
    { label: "400", value: "bg-secondary-400", text: "text-white" },
    { label: "500", value: "bg-secondary-500", text: "text-white" },
    { label: "600", value: "bg-secondary-600", text: "text-white" },
    { label: "700 (Key)", value: "bg-secondary-700", text: "text-white" },
    { label: "800", value: "bg-secondary-800", text: "text-white" },
    { label: "900", value: "bg-secondary-900", text: "text-white" },
    { label: "1000", value: "bg-secondary-1000", text: "text-white" },
  ];

  const neutralColors = [
    { label: "100", value: "bg-neutral-100", text: "text-neutral-900 border border-neutral-300" },
    { label: "200", value: "bg-neutral-200", text: "text-neutral-900" },
    { label: "300", value: "bg-neutral-300", text: "text-neutral-900" },
    { label: "400", value: "bg-neutral-400", text: "text-neutral-900" },
    { label: "500", value: "bg-neutral-500", text: "text-white" },
    { label: "600", value: "bg-neutral-600", text: "text-white" },
    { label: "700", value: "bg-neutral-700", text: "text-white" },
    { label: "800", value: "bg-neutral-800", text: "text-white" },
    { label: "900", value: "bg-neutral-900", text: "text-white" },
    { label: "1000", value: "bg-neutral-1000", text: "text-white" },
  ];

  const accentColors = [
    { label: "100", value: "bg-accent-100", text: "text-accent-900" },
    { label: "200", value: "bg-accent-200", text: "text-accent-900" },
    { label: "300", value: "bg-accent-300", text: "text-accent-900" },
    { label: "400", value: "bg-accent-400", text: "text-white" },
    { label: "500", value: "bg-accent-500", text: "text-white" },
    { label: "600", value: "bg-accent-600", text: "text-white" },
    { label: "700", value: "bg-accent-700", text: "text-white" },
    { label: "800", value: "bg-accent-800", text: "text-white" },
    { label: "900", value: "bg-accent-900", text: "text-white" },
    { label: "1000", value: "bg-accent-1000", text: "text-white" },
  ];

  const semanticColors = [
    { label: "Red 100", value: "bg-red-100", text: "text-red-900" },
    { label: "Red 200", value: "bg-red-200", text: "text-white" },
    { label: "Yellow 100", value: "bg-yellow-100", text: "text-yellow-900" },
    { label: "Yellow 200", value: "bg-yellow-200", text: "text-white" },
    { label: "Green 100", value: "bg-green-100", text: "text-green-900" },
    { label: "Green 200", value: "bg-green-200", text: "text-white" },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-1000 px-6 py-12 md:px-12 lg:px-24">
      <header className="mb-16 border-b border-neutral-300 pb-8">
        <h1 className="text-h1 text-primary-900 mb-2">Bluefixx Design System</h1>
        <p className="text-s1 text-neutral-600">
          Foundational styles, typographic scales, and color palettes built for the Bluefixx web platform.
        </p>
      </header>

      {/* Typography Section */}
      <section className="mb-16">
        <h2 className="text-h2 text-primary-900 border-b border-neutral-300 pb-4 mb-8">Typography</h2>
        
        <div className="space-y-12">
          {/* Headlines */}
          <div>
            <h3 className="text-h5 text-secondary-700 mb-6 font-bold uppercase tracking-wider">Headlines</h3>
            <div className="space-y-6">
              <div>
                <span className="text-label text-neutral-500 block mb-1">H1. Headline (48px / Line 58px / Semi Bold)</span>
                <h1 className="text-h1 text-neutral-1000">The Quick Brown Fox</h1>
              </div>
              <div>
                <span className="text-label text-neutral-500 block mb-1">H2. Headline (40px / Line 48px / Semi Bold)</span>
                <h2 className="text-h2 text-neutral-1000">The Quick Brown Fox</h2>
              </div>
              <div>
                <span className="text-label text-neutral-500 block mb-1">H3. Headline (32px / Line 38px / Semi Bold)</span>
                <h3 className="text-h3 text-neutral-1000">The Quick Brown Fox</h3>
              </div>
              <div>
                <span className="text-label text-neutral-500 block mb-1">H4. Headline (28px / Line 34px / Semi Bold)</span>
                <h4 className="text-h4 text-neutral-1000">The Quick Brown Fox</h4>
              </div>
              <div>
                <span className="text-label text-neutral-500 block mb-1">H5. Headline (24px / Line 28px / Semi Bold)</span>
                <h5 className="text-h5 text-neutral-1000">The Quick Brown Fox</h5>
              </div>
            </div>
          </div>

          {/* Subtitles */}
          <div>
            <h3 className="text-h5 text-secondary-700 mb-6 font-bold uppercase tracking-wider">Subtitles</h3>
            <div className="space-y-6">
              <div>
                <span className="text-label text-neutral-500 block mb-1">S1. Subtitle (18px / Line 28px / Semi Bold)</span>
                <p className="text-s1 text-neutral-1000">Linking blue collar professionals with job opportunities.</p>
              </div>
              <div>
                <span className="text-label text-neutral-500 block mb-1">S2. Subtitle (16px / Line 24px / Semi Bold)</span>
                <p className="text-s2 text-neutral-1000">Linking blue collar professionals with job opportunities.</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div>
            <h3 className="text-h5 text-secondary-700 mb-6 font-bold uppercase tracking-wider">Body Text</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <span className="text-label text-neutral-500 block mb-1">B1. Body (16px / Line 24px / Regular)</span>
                <p className="text-b1 text-neutral-800">
                  Bluefixx is a platform dedicated to empowering blue-collar professionals by offering quick access to localized job placements, skill matchmaking, and secure digital work records.
                </p>
              </div>
              <div>
                <span className="text-label text-neutral-500 block mb-1">B2. Body (16px / Line 24px / Medium)</span>
                <p className="text-b2 text-neutral-800">
                  Bluefixx is a platform dedicated to empowering blue-collar professionals by offering quick access to localized job placements, skill matchmaking, and secure digital work records.
                </p>
              </div>
              <div>
                <span className="text-label text-neutral-500 block mb-1">B3. Body (14px / Line 20px / Regular)</span>
                <p className="text-b3 text-neutral-800">
                  Bluefixx is a platform dedicated to empowering blue-collar professionals by offering quick access to localized job placements, skill matchmaking, and secure digital work records.
                </p>
              </div>
              <div>
                <span className="text-label text-neutral-500 block mb-1">B4. Body (14px / Line 20px / Medium)</span>
                <p className="text-b4 text-neutral-800">
                  Bluefixx is a platform dedicated to empowering blue-collar professionals by offering quick access to localized job placements, skill matchmaking, and secure digital work records.
                </p>
              </div>
            </div>
          </div>

          {/* Caption & Label */}
          <div>
            <h3 className="text-h5 text-secondary-700 mb-6 font-bold uppercase tracking-wider">Captions & Labels</h3>
            <div className="space-y-4">
              <div>
                <span className="text-label text-neutral-500 block mb-1">C1. Caption (12px / Line 16px / Regular)</span>
                <p className="text-c1 text-neutral-600">Last updated: Aug 4, 2026</p>
              </div>
              <div>
                <span className="text-label text-neutral-500 block mb-1">C2. Caption (12px / Line 16px / Medium)</span>
                <p className="text-c2 text-neutral-600">Verification complete • Active job status</p>
              </div>
              <div>
                <span className="text-label text-neutral-500 block mb-1">C3. Caption (10px / Line 14px / Medium)</span>
                <p className="text-c3 text-neutral-600">1.2 miles away</p>
              </div>
              <div>
                <span className="text-label text-neutral-500 block mb-1">LABEL (12px / Line 16px / Medium)</span>
                <span className="text-label bg-primary-100 text-primary-900 px-2.5 py-1 rounded">SUBMIT APPLICATION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Button Fonts Section */}
      <section className="mb-16">
        <h2 className="text-h2 text-primary-900 border-b border-neutral-300 pb-4 mb-8">Buttons (Typography & Sizing)</h2>
        <div className="flex flex-wrap items-center gap-4">
          <button className="btn-giant bg-primary-900 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-colors">
            Giant Button (18px)
          </button>
          <button className="btn-large bg-secondary-700 text-white px-5 py-2.5 rounded-lg hover:bg-secondary-600 transition-colors">
            Large Button (16px)
          </button>
          <button className="btn-medium bg-neutral-900 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors">
            Medium Button (14px)
          </button>
          <button className="btn-small bg-neutral-200 text-neutral-900 px-3 py-1.5 rounded-md hover:bg-neutral-300 transition-colors border border-neutral-400">
            Small Button (12px)
          </button>
          <button className="btn-tiny bg-primary-100 text-primary-900 px-2 py-1 rounded-sm hover:bg-primary-200 transition-colors">
            Tiny Button (10px)
          </button>
        </div>
      </section>

      {/* Colors Section */}
      <section className="mb-16">
        <h2 className="text-h2 text-primary-900 border-b border-neutral-300 pb-4 mb-8">Color Palettes</h2>
        
        <div className="space-y-8">
          {/* Primary */}
          <div>
            <h3 className="text-h5 text-primary-900 mb-3 font-semibold">Primary Palette (#001B40 key)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2">
              {primaryColors.map((color) => (
                <div key={color.label} className={`p-4 rounded-lg flex flex-col justify-between h-24 ${color.value} ${color.text}`}>
                  <span className="text-label font-bold">{color.label}</span>
                  <span className="text-c3 opacity-80">{color.value.replace("bg-", "")}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary */}
          <div>
            <h3 className="text-h5 text-secondary-700 mb-3 font-semibold">Secondary Palette (#074292 key)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2">
              {secondaryColors.map((color) => (
                <div key={color.label} className={`p-4 rounded-lg flex flex-col justify-between h-24 ${color.value} ${color.text}`}>
                  <span className="text-label font-bold">{color.label}</span>
                  <span className="text-c3 opacity-80">{color.value.replace("bg-", "")}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral */}
          <div>
            <h3 className="text-h5 text-neutral-800 mb-3 font-semibold">Neutral Palette</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2">
              {neutralColors.map((color) => (
                <div key={color.label} className={`p-4 rounded-lg flex flex-col justify-between h-24 ${color.value} ${color.text}`}>
                  <span className="text-label font-bold">{color.label}</span>
                  <span className="text-c3 opacity-80">{color.value.replace("bg-", "")}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accent */}
          <div>
            <h3 className="text-h5 text-neutral-700 mb-3 font-semibold">Accent Palette</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-2">
              {accentColors.map((color) => (
                <div key={color.label} className={`p-4 rounded-lg flex flex-col justify-between h-24 ${color.value} ${color.text}`}>
                  <span className="text-label font-bold">{color.label}</span>
                  <span className="text-c3 opacity-80">{color.value.replace("bg-", "")}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Semantics */}
          <div>
            <h3 className="text-h5 text-neutral-700 mb-3 font-semibold">Semantics (Red, Yellow, Green)</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
              {semanticColors.map((color) => (
                <div key={color.label} className={`p-4 rounded-lg flex flex-col justify-between h-24 ${color.value} ${color.text}`}>
                  <span className="text-label font-bold">{color.label}</span>
                  <span className="text-c3 opacity-80">{color.value.replace("bg-", "")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

