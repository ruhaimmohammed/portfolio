import React from "react";
import Image from "next/image";
import '@/styles/__layout.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="main-header flex items-center">
        <div>
            <Image 
                src={'/'}
                alt="Logo"
                width={20}
                height={20}
            />
        </div>
        <nav className="header-nav-bar flex">
            <div>Home</div>
            <div>About Me</div>
            <div>Experience</div>
            <div>Projects</div>
        </nav>
        <div>
            <Image 
                src={'/'}
                alt="Logo"
                width={20}
                height={20}
            />
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
