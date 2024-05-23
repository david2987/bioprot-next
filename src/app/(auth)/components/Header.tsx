"use client"

import Image from "next/image"

const Header = () => {
  return (
    <div>
      <header className="text-white" style={{ backgroundColor: "#137abe" }}>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
          aria-label="Global"
        >
          <div className="hidden lg:flex lg:flex-1 lg:justify-start">
            <Image src={"/logos/Logo2.png"} alt="Logo" width="230" height="120"></Image>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              {" "}
            </a>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
