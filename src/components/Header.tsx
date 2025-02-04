"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const youtubeIcon = "/lunatic_front_rebase/header_youtube.png";
const instagramIcon = "/lunatic_front_rebase/header_insta.png";
const logoIcon = "/lunatic_front_rebase/header_logo.png";

// const youtubeIcon = "/header_youtube.png";
// const instagramIcon = "/header_insta.png";
// const logoIcon = "/header_logo.png";

const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  // 기본 네비게이션 아이템 스타일
  const navItemStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
    padding: "0px 15px",
    lineHeight: "60px",
  };

  // 활성화된 네비게이션 아이템에 추가할 스타일
  const activeNavItemStyle: React.CSSProperties = {
    backgroundColor: "rgba(3,156,224,0.2)",
    borderBottom: "3px solid #DD077D",
    fontWeight: "bold",
    color: "#039CE0",
  };

  return (
    <header
      style={{
        zIndex: 10,
        top: 0,
        left: 0,
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        position: "fixed",
      }}
    >
      <div>
        <Link
          href="/"
          style={{
            fontSize: "1.2rem",
            textDecoration: "none",
            color: "white",
            padding: "8px 12px",
            borderRadius: "5px",
            transition: "background 0.3s",
          }}
        >
          <Image src={logoIcon} alt="Logo" width={137} height={20} />
        </Link>
      </div>

      {/* 가운데: 네비게이션 */}
      <nav
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link
          href="/winners"
          style={
            isActive("/winners")
              ? { ...navItemStyle, ...activeNavItemStyle }
              : navItemStyle
          }
        >
          역대 우승자
        </Link>
        <Link
          href="/performances"
          style={
            isActive("/performances")
              ? { ...navItemStyle, ...activeNavItemStyle }
              : navItemStyle
          }
        >
          역대 공연
        </Link>
        <Link
          href="/hall-of-fame"
          style={
            isActive("/hall-of-fame")
              ? { ...navItemStyle, ...activeNavItemStyle }
              : navItemStyle
          }
        >
          명예의 전당
        </Link>
        <Link
          href="/lunatic-wiki"
          style={
            isActive("/lunatic-wiki")
              ? { ...navItemStyle, ...activeNavItemStyle }
              : navItemStyle
          }
        >
          루나틱 위키
        </Link>
      </nav>

      {/* 오른쪽: SNS 아이콘 */}
      <div
        style={{
          position: "absolute",
          left: "95%",
          transform: "translateX(-95%)",
          display: "flex",
          gap: "20px",
        }}
      >
        <a
          href="https://www.youtube.com/@RealLunaTV"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Image src={youtubeIcon} alt="YouTube" width={28} height={20} />
        </a>
        <a
          href="https://www.instagram.com/lunatic_street/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Image src={instagramIcon} alt="Instagram" width={28} height={28} />
        </a>
      </div>
    </header>
  );
};

export default Header;
