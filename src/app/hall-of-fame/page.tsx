"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { fetchTop5Winners, fetchTop5Judges, fetchTop5Performers } from "../../utils/api";

// const HOF = "/hof.png";
// const hof_battle = "/hof_battle.png";
// const hof_perf = "/hof_perf.png";
// const hof_judge = "/hof_judge.png";

const HOF = "/lunatic_front_rebase/hof.png";
const hof_battle = "/lunatic_front_rebase/hof_battle.png";
const hof_perf = "/lunatic_front_rebase/hof_perf.png";
const hof_judge = "l/unatic_front_rebase/hof_judge.png";

import { Winner, Judge, Performer } from "../../types/types";

const HallOfFame = () => {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [judges, setJudges] = useState<Judge[]>([]);
  const [performers, setPerformers] = useState<Performer[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log("여기서 시작");
        const winnersData = await fetchTop5Winners();
        console.log("요청보냄");
        const judgesData = await fetchTop5Judges();
        const performersData = await fetchTop5Performers();
  
        console.log("📢 Winners Data:", winnersData);
        console.log("📢 Judges Data:", judgesData);
        console.log("📢 Performers Data:", performersData);
  
        setWinners(winnersData);
        setJudges(judgesData);
        setPerformers(performersData);
      } catch (error) {
        console.error("❌ HOF 데이터 불러오기 실패:", error);
      }
    };
    getData();
  }, []);
  

  return (
    <div style={styles.totalContainer}>
      <Header />
      
      {/* 타이틀 이미지 + 텍스트 */}
      <div style={styles.titleContainerHof}>
        <div style={styles.imageWrapper}>
          <Image src={HOF} alt="Hall of Fame" fill style={{ objectFit: "contain" }} />
        </div>
        <h1 style={styles.titleTextHof}>명예의 전당</h1>
      </div>

      <div style={styles.hofContainer}>
        {/* 우승 부문 */}
        <div style={styles.hofSection}>
          <div style={styles.hofTitle}>
            <div style={styles.imageWrapper}>
              <Image src={hof_battle} alt="Battle Icon" fill style={{ objectFit: "contain" }} />
            </div>
            <h2 style={styles.hofTitleText}>우승 부문</h2>
          </div>
          <ul style={styles.hofList}>
            {winners.map((w, i) => (
              <li key={i} style={styles.hofListItem}>
                {w.name} ({w.generation}) {w.winBattlesCount}회
              </li>
            ))}
          </ul>
        </div>

        {/* 저지 부문 */}
        <div style={styles.hofSection}>
          <div style={styles.hofTitle}>
            <div style={styles.imageWrapper}>
              <Image src={hof_judge} alt="Judge Icon" fill style={{ objectFit: "contain" }} />
            </div>
            <h2 style={styles.hofTitleText}>저지 부문</h2>
          </div>
          <ul style={styles.hofList}>
            {judges.map((j, i) => (
              <li key={i} style={styles.hofListItem}>
                {j.name} ({j.generation}) {j.judgesCount}회
              </li>
            ))}
          </ul>
        </div>

        {/* 공연 부문 */}
        <div style={styles.hofSection}>
          <div style={styles.hofTitle}>
            <div style={styles.imageWrapper}>
              <Image src={hof_perf} alt="Performance Icon" fill style={{ objectFit: "contain" }} />
            </div>
            <h2 style={styles.hofTitleText}>공연 부문</h2>
          </div>
          <ul style={styles.hofList}>
            {performers.map((p, i) => (
              <li key={i} style={styles.hofListItem}>
                {p.name} ({p.generation}) {p.performancesCount}회
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={styles.overlayBox} />
    </div>
  );
};

export default HallOfFame;

const styles: { [key: string]: React.CSSProperties } = {
  totalContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "url('/lunatic_front_rebase/main_image.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
    color: "white",
    position: "relative",
    margin: -8
  },
  overlayBox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  titleContainerHof: {
    width: "100%",
    padding: "20px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    position: "absolute",
    top: "90px",
    height: "66px",
  },
  imageWrapper: {
    position: "absolute",
    width: "260px", // 타이틀 이미지 크기
    height: "66px",
  },
  titleTextHof: {
    fontSize: "2rem",
    marginLeft: "10px",
  },
  hofContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "50px",
    zIndex: 10,
  },
  hofSection: {
    flex: 1,
    padding: "15px",
    background: "linear-gradient(to bottom, rgba(3,156,224,0.2) 0%, rgba(255,255,255,0.2) 50%, rgba(221,7,125,0.2) 100%)",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    minWidth: "350px",
    height: "400px",
    backdropFilter: "blur(5px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  hofTitle: {
    width: "185px",
    height: "70.75px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "25px",
    position: "relative",
  },
  hofTitleText: {
    position: "absolute",
    fontSize: "24px",
    color: "white",
    textShadow: "1px 1px 3px rgba(221,7,125,0.8)",
    top: "-15px",
  },
  hofList: {
    listStyle: "none",
    padding: 0,
  },
  hofListItem: {
    fontSize: "18px",
    padding: "10px",
    transition: "all 0.3s ease-in-out",
  },
};
