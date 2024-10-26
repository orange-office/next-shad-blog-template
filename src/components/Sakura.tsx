'use client';

import React, { useEffect, useState } from 'react';

interface SakuraProps {
  count?: number;
  className?: string;
}

const Sakura: React.FC<SakuraProps> = ({ count = 50, className = '' }) => {
  const [sakuras, setSakuras] = useState<Array<{ id: number; left: number; animationDuration: number }>>([]);

  useEffect(() => {
    const newSakuras = Array.from({ length: count }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      animationDuration: Math.random() * 10 + 5,
    }));
    setSakuras(newSakuras);
  }, [count]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 ${className}`}>
      {sakuras.map((sakura) => (
        <div
          key={sakura.id}
          className="absolute animate-fall"
          style={{
            left: `${sakura.left}%`,
            animationDuration: `${sakura.animationDuration}s`,
          }}
        >
          <span className="text-pink-300">🌸</span>
        </div>
      ))}
    </div>
  );
};

export default Sakura;
