"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { fetchPerformances } from "../../utils/api.js";

// const Stage = "/lunatic_front_rebase/stage.png";
const Stage = "/stage.png";

interface Performance {
  _id: string;
  teamName: string;
  genre: string[];
  season: string;
  teamMembers: string[];
  youtube: string;
}

function Performances() {
  const [performanceData, setPerformanceData] = useState<Performance[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const getPerformances = async () => {
      const data = await fetchPerformances();
      setPerformanceData(data);
    };
    getPerformances();
  }, []);

  const totalPages = Math.ceil(performanceData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPerformances = performanceData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={styles.totalContainer}>
      {/* 오버레이 박스 */}
      <div style={styles.overlayBox} />

      <Header />

      {/* 타이틀 영역 */}
      <div style={styles.titleContainer}>
        <div style={styles.imageWrapper}>
          <Image src={Stage} alt="Stage" fill style={{ objectFit: "contain" }} />
        </div>
        <h1 style={styles.titleText}>역대 공연</h1>
      </div>

      {/* 테이블 영역 */}
      <div style={styles.tableContainer}>
        <table style={styles.performanceTable}>
          <thead style={styles.performanceTableThead}>
            <tr style={styles.performanceTableTr}>
              <th style={styles.performanceTableTh1}>공연팀명</th>
              <th style={styles.performanceTableTh2}>장르</th>
              <th style={styles.performanceTableTh3}>시즌</th>
              <th style={styles.performanceTableTh4}>팀원</th>
              <th style={styles.performanceTableTh5}></th>
            </tr>
          </thead>
          <tbody>
            {currentPerformances.map((performance) => (
              <tr key={performance._id} style={styles.performanceTableTr}>
                <td style={styles.performanceTableTd1}>{performance.teamName}</td>
                <td style={styles.performanceTableTd2}>{performance.genre.join(", ")}</td>
                <td style={styles.performanceTableTd3}>{performance.season}</td>
                <td style={styles.performanceTableTd4}>{performance.teamMembers.join(", ")}</td>
                <td style={styles.performanceTableTd5}>
                  {performance.youtube && (
                    <button
                      onClick={() => {
                        window.open(performance.youtube, "_blank", "noopener,noreferrer");
                      }}
                      style={styles.youtubeButton}
                    >
                      🔗
                    </button>
                  )}
                </td>
              </tr>
            ))}

            {/* 빈 행 추가 (높이 유지) */}
            {Array.from({ length: Math.max(0, itemsPerPage - currentPerformances.length) }).map((_, index) => (
              <tr key={`empty-${index}`} style={styles.emptyRow}>
                <td colSpan={5} style={{ height: "50px" }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div style={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              style={{
                ...styles.pageButton,
                ...(currentPage === index + 1 ? styles.pageButtonActive : {}),
              }}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Performances;

const styles: { [key: string]: React.CSSProperties } = {
  totalContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "url('/main_image.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
    color: "white",
    position: "relative",
    margin: -8,
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
  titleContainer: {
    width: "100%",
    padding: "20px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    zIndex: 10,
    position: "absolute",
    top: "60px",
    flexDirection: "column",
  },
  imageWrapper: {
    position: "relative",
    width: "81px",
    height: "38px",
  },
  titleText: {
  },
  tableContainer: {
    zIndex: 10,
    position: "absolute",
    top: "220px",
    width: "90%",
    minWidth: "800px",
    height: "550px",
  },
  performanceTable: {
    width: "100%",
    height: "100%",
    padding: "20px 30px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(5px)",
    borderCollapse: "separate",
  },
  performanceTableThead: {
    color: "#039CE0",
    fontSize: "1rem",
    textAlign: "left",
  },
  performanceTableTr: {
    height: "50px",
  },
  performanceTableTh1: {
    width: "30%",
  },
  performanceTableTd1: {
    width: "30%",
  },
  performanceTableTh2: {
    width: "10%",
  },
  performanceTableTd2: {
    width: "10%",
  },
  performanceTableTh3: {
    width: "10%",
  },
  performanceTableTd3: {
    width: "10%",
  },
  performanceTableTh4: {
    width: "45%",
  },
  performanceTableTd4: {
    width: "45%",
  },
  performanceTableTh5: {
    width: "10%",
  },
  performanceTableTd5: {
    width: "10%",
    textAlign: "center"
  },
  emptyRow: {
    height: "50px",
  },
  pagination: {
    zIndex: 10,
    position: "absolute",
    top: "870px",
  },
  pageButton: {
    width: "20px",
    height: "20px",
    color: "white",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    position: "relative",
  },
  pageButtonActive: {
    fontWeight: "bold",
  },
  youtubeButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
};
