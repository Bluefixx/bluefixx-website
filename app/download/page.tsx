import React from "react";
import Image from "next/image";

export default function DownloadPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 px-6 text-center bg-[#001B40] text-white">
      <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">Download the BlueFixx App</h1>
      <p className="font-montserrat text-lg text-white/80 max-w-2xl mb-12">
        Get the best professional home services at your fingertips. Available now on iOS and Android.
      </p>
      
      <div className="flex flex-col md:flex-row items-center gap-6">
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Image
            src="/icons/appstore.svg"
            alt="Download on the App Store"
            width={160}
            height={54}
            className="h-14 w-auto"
          />
        </a>
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Image
            src="/icons/playstore.svg"
            alt="Get it on Google Play"
            width={180}
            height={54}
            className="h-14 w-auto"
          />
        </a>
      </div>
    </div>
  );
}
