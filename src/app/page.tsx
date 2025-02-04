"use client";

import React from "react";
import Header from "../components/Header";
import Image from "next/image";
// const Logo = "/logo.png";
const Logo = "/lunatic_front_rebase/logo.png";

function App() {
  return (
    <div style={styles.app}>
      <Header />
      <div style={styles.backgroundImage}>
        <div style={styles.overlayBox}>
        <div style={{
  position: "relative",
  width: "100%",  // 부모 요소 크기에 맞춰 자동 조절
  maxWidth: "673px", // 최대 크기 제한
  height: "auto"
}}>
  <Image
    src={Logo}
    alt="Logo"
    width={673}
    height={0} // ✅ height를 auto로 맞추려면 0으로 설정 후 CSS에서 관리
    style={{ width: "100%", height: "auto", objectFit: "contain" }}
  />
</div>

        </div>
      </div>
    </div>
  );
}

export default App;

const styles: { [key: string]: React.CSSProperties } = {
  app: {
    width: "100vw",
    height: "100vh", // 뷰포트 전체 높이
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    margin: -8
  },
  backgroundImage: {
    width: "100%",
    height: "100vh",
    backgroundImage: "url('/main_image.jpg')",
    backgroundSize: "cover", // 이미지 비율 유지하며 화면을 채움
    backgroundPosition: "center", // 이미지 중앙 정렬
    backgroundRepeat: "no-repeat", // 이미지 반복 금지
    position: "relative", // 오버레이 박스를 배치하기 위한 부모
  },
  overlayBox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)", // 검정색 반투명
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "2rem", // 텍스트 크기
    textAlign: "center",
  },
};
