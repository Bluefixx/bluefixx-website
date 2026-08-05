import React from "react";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-12 bg-neutral-100 text-neutral-1000">
      <div className="max-w-xl text-center flex flex-col gap-6">
        <h1 className="text-h2 text-primary-900 font-semibold">BlueFixx Components</h1>
        <p className="text-b1 text-neutral-600">
          The Navbar, Footer, and Button components have been successfully created and styled using Montserrat.
        </p>

        {/* Buttons Showcase */}
        <div className="border-t border-neutral-300 pt-8 mt-4 flex flex-col gap-4">
          <h3 className="text-h5 text-primary-900 font-bold">Reusable Button Component</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="solid" size="giant">Solid Giant</Button>
            <Button variant="solid" size="large">Solid Large</Button>
            <Button variant="solid" size="medium">Solid Medium</Button>
            <Button variant="solid" size="small">Solid Small</Button>
            <Button variant="solid" size="tiny">Solid Tiny</Button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <Button variant="outlined" size="giant">Outlined Giant</Button>
            <Button variant="outlined" size="large">Outlined Large</Button>
            <Button variant="outlined" size="medium">Outlined Medium</Button>
            <Button variant="outlined" size="small">Outlined Small</Button>
            <Button variant="outlined" size="tiny">Outlined Tiny</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

