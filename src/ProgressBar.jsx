import React, { useState, useEffect } from 'react';

const ProgressBar = ({ progress }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000); // 1秒後にloadingステートをtrueに設定

    return () => clearTimeout(timer); // コンポーネントのアンマウント時にタイマーをクリア
  }, []);

  return (
    <div className="relative w-full h-4 bg-gray-300 rounded-full overflow-hidden">
      <div className="h-full bg-green-500 transition-all duration-1000 ease-in-out" style={{ width: `${loading ? progress : 0}%` }}></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <span className="text-sm">{loading ? `${parseFloat(progress).toFixed(1)}% 完了` : ''}</span>
      </div>
    </div>
  );
};

export default ProgressBar;