"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import './Winners.css'; // 스타일 파일
import { fetchBattles } from "../../utils/api"; // API 호출 함수 가져오기
import Image from "next/image";
const Trophy = "/lunatic_front_rebase/trophy.png";

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
    <div className="total-container">
      
      <Header />

      
          
      <div className="title-container">
        <Image className="title-image" alt="Trophy" src={Trophy} />
        <h1 className="title-text">역대 배틀 우승자</h1>
      </div>
        
      <div className="table-container">
        <table className="battle-table">
          <thead> {/*머리글을 감싸는 태그임*/}
            <tr>
              <th>배틀명</th>
              <th>날짜</th>
              <th>우승자</th>
              <th>MVP</th>
              <th>저지</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
  {/* 기존 데이터 표시 */}
  {currentBattles.map((battle) => (
    <tr key={battle._id}>
      <td>{battle.battleName}</td>
      <td>{battle.date}</td>
      <td>{battle.winner.join(", ")}</td>
      <td>{battle.mvp.join(", ")}</td>
      <td>{battle.judges.join(", ")}</td>
      <td>
      {battle.youtube && (
    <button
      onClick={() => {
        window.open(battle.youtube, "_blank", "noopener,noreferrer");
      }}
      className="youtube-button"
    >
      🔗
    </button>
  )}
      </td>
    </tr>
  ))}

  {/* 부족한 행 채우기 */}
  {Array.from({ length: Math.max(0, 10 - currentBattles.length) }).map((_, index) => (
    <tr key={`empty-${index}`} className="empty-row">
      <td colSpan={6}></td> {/* 빈 칸 */}
    </tr>
  ))}
</tbody>
            </table>
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`page-button ${currentPage === index + 1 ? "active" : ""}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
      <div className="overlay-box" />
    </div>
  );
}

export default Winners;
