import React, { useState, useEffect } from 'react';
import './MissionProgressCircle.css'; // CSSファイルをインポート

const getCircleColor = (percentage) => {
  // 色の計算は変更なし
};

const MissionProgressCircle = ({ missionName, completed, total }) => {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const targetPercentage = Math.round((completed / total) * 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayPercentage((prev) => {
        if (prev < targetPercentage) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 20); // 20ミリ秒ごとに1%ずつ増加

    return () => clearInterval(interval);
  }, [targetPercentage]);

  const circleStyle = {
    // スタイルの定義は変更なし
  };

  return (
    <div className="mission-progress-container">
      <h2>{missionName}</h2>
      <div style={circleStyle} className="mission-progress-circle">
        {`${displayPercentage}%`}
      </div>
    </div>
  );
};

export default MissionProgressCircle;