"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";
import Image from "next/image";
import youtubeIcon from "../../public/header_youtube.png";
import instagramIcon from "../../public/header_insta.png";
import logoIcon from "../../public/header_logo.png";

const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname ===path? "active":"";
  return (
    <header className="header">
      <div className="header-left">
        <Link href="/" className="home-button">
          <Image src={logoIcon} alt="Logo" width={137}/>
        </Link>
      </div>
      
      <nav className="header-center">
        <Link href="/winners" className={`nav-item ${isActive("/winners")}`}>
          역대 우승자
        </Link>
        <Link href="/performances" className={`nav-item ${isActive("/performances")}`}>
          역대 공연
        </Link>
        <Link href="/hall-of-fame" className={`nav-item ${isActive("/hall-of-fame")}`}>
          명예의 전당
        </Link>
        <Link href="/lunatic-wiki" className={`nav-item ${isActive("/lunatic-wiki")}`}>
          루나틱 위키
        </Link>
      </nav>

      <div className="header-right">
        <a href="https://www.youtube.com/@RealLunaTV" target="_blank" rel="noopener noreferrer">
          <Image src={youtubeIcon} alt="YouTube" width={28} />
        </a>
        
        <a href="https://www.instagram.com/lunatic_street/" target="_blank" rel="noopener noreferrer">
          <Image src={instagramIcon} alt="Instagram" width={28} height={28} />
        </a>
        
      </div>

    </header>
  );
};

export default Header;
