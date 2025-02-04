"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { fetchBattles } from "../../utils/api";

const Trophy = "/trophy.png";
// const Trophy = "/lunatic_front_rebase/trophy.png";

interface Battle {
  _id: string;
  battleName: string;
  date: string;
  winner: string[];
  mvp: string[];
  judges: string[];
  youtube: string;
}

function Winners() {
  const [battleData, setBattleData] = useState<Battle[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    console.log("use Effect 실행됨");
    const getBattles = async () => {
      const data = await fetchBattles();
      setBattleData(data);
    };
    getBattles();
  }, []);

  const totalPages = Math.ceil(battleData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBattles = battleData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div style={styles.totalContainer}>
      {/* 오버레이 박스를 가장 위(배경 바로 위)에 추가 */}
      <div style={styles.overlayBox} />

      <Header />

      <div style={styles.titleContainer}>
        <div style={styles.imageWrapper}>
    <Image style={styles.titleImage} alt="Trophy" src={Trophy} fill />
  </div>
        <h1 style={styles.titleText}>역대 배틀 우승자</h1>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.battleTable}>
          <thead style={styles.battleTableThead}>
            <tr style={styles.battleTableTr}>
              <th style={styles.battleTableTh1}>배틀명</th>
              <th style={styles.battleTableTh2}>날짜</th>
              <th style={styles.battleTableTh3}>우승자</th>
              <th style={styles.battleTableTh4}>MVP</th>
              <th style={styles.battleTableTh5}>저지</th>
              <th style={styles.battleTableTh6}></th>
            </tr>
          </thead>
          <tbody>
            {currentBattles.map((battle) => (
              <tr key={battle._id} style={styles.battleTableTr}>
                <td style={styles.battleTableTd1}>{battle.battleName}</td>
                <td style={styles.battleTableTd2}>{battle.date}</td>
                <td style={styles.battleTableTd3}>{battle.winner.join(", ")}</td>
                <td style={styles.battleTableTd4}>{battle.mvp.join(", ")}</td>
                <td style={styles.battleTableTd5}>{battle.judges.join(", ")}</td>
                <td style={styles.battleTableTd6}>
                  {battle.youtube && (
                    <button
                      onClick={() => {
                        window.open(battle.youtube, "_blank", "noopener,noreferrer");
                      }}
                      style={styles.youtubeButton}
                    >
                      🔗
                    </button>
                  )}
                </td>
              </tr>
            ))}

            {Array.from({ length: Math.max(0, itemsPerPage - currentBattles.length) }).map((_, index) => (
              <tr key={`empty-${index}`} style={styles.emptyRow}>
                <td colSpan={6}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
  <div style={styles.pagination}>
    {Array.from({ length: totalPages }, (_, index) => (
      <div key={index + 1} style={{ position: "relative" }}>
        <button
          style={{
            ...styles.pageButton,
          }}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
        {currentPage === index + 1 && <div style={styles.pageButtonActive}></div>}
      </div>
    ))}
  </div>
)}


    </div>
  );
}

export default Winners;

const styles: { [key: string]: React.CSSProperties } = {
  totalContainer: {
    width: "100vw",
    height: "100vh", // 뷰포트 전체를 채우도록 변경
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "url('/main_image.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
    color: "white",
    position: "relative", // 오버레이 박스의 기준
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
  titleContainer: {
    width: "100%",
    padding: "20px 0",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    zIndex: 10,
    position: "absolute",
    top: "60px",
    display: "flex", // ✅ 이미지랑 텍스트 정렬
    flexDirection: "column",
  },
  imageWrapper: {
    position: "relative", // ✅ fill을 쓰려면 부모 div가 relative여야 함
    width: "81px", // 원하는 크기로 조정 가능
    height: "38px", // 비율 유지
  },
  titleImage: {
    objectFit: "contain", // ✅ fill을 사용하면서 비율 유지
  },
  titleText: {
    // h1 스타일 지정 (예: fontSize, fontWeight 등)
  },
  tableContainer: {
    zIndex: 10,
    position: "absolute",
    top: "220px",
    width: "90%",
    minWidth: "800px",
    height: "550px",
  },
  battleTable: {
    width: "100%",
    height: "100%",
    padding: "20px 30px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(5px)",
    borderCollapse: "separate",
  },
  battleTableThead: {
    color: "#039CE0",
    fontSize: "1rem",
    textAlign: "left",
  },
  battleTableTr: {
    height: "50px",
  },
  battleTableTh1: {
    width: "25%",
  },
  battleTableTd1: {
    width: "25%",
  },
  battleTableTh2: {
    width: "10%",
  },
  battleTableTd2: {
    width: "10%",
  },
  battleTableTh3: {
    width: "15%",
  },
  battleTableTd3: {
    width: "15%",
  },
  battleTableTh4: {
    width: "15%",
  },
  battleTableTd4: {
    width: "15%",
  },
  battleTableTh5: {
    width: "20%",
  },
  battleTableTd5: {
    width: "20%",
  },
  battleTableTh6: {
    width: "5%",
    textAlign: "center",
  },
  battleTableTd6: {
    width: "5%",
    textAlign: "center",
  },
  emptyRow: {
    height: "50px"
  },
  pagination: {
    zIndex: 10,
    position: "absolute",
    top: "870px",
    display: "flex",
    gap: "5px",
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
    backgroundColor: "#DD077D", // ✅ 선택된 페이지 강조 (핑크색)
    fontWeight: "bold",
    height: "3px", // ✅ 높이 유지
    width: "20px",
    position: "absolute", // ✅ 버튼 내에서 위치 조정
    top: "-2px", // ✅ 숫자 아래쪽으로 배치 (숫자를 덮지 않도록)
    left: "0px",
    transform: "translateY(-5px)", // ✅ 숫자보다 살짝 위로 이동
  },
  youtubeButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
};
