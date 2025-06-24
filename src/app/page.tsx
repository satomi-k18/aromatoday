'use client';
import { useState } from 'react';
import { OILS } from './data/oils';

export default function Home() {
  const [pick, setPick] = useState<(typeof OILS)[number] | null>(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-emerald-50 text-center">
      <h1 className="text-5xl font-extrabold flex items-center gap-3">
        Aroma Dice <span>🎲</span>
      </h1>

      <button
        className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition text-white text-lg ring-2 ring-blue-500/70"
        onClick={() => setPick(OILS[Math.floor(Math.random() * OILS.length)])}
      >
        今日の香りを決める
      </button>

      {pick && (
        <div className="w-80 bg-white rounded-2xl shadow-xl p-6 space-y-2 animate-fade-in">
          <h2 className="text-2xl font-semibold">{pick.name}</h2>
          <p>主な作用：{pick.effect}</p>
          <p className="text-sm text-gray-500">おすすめ：{pick.how}</p>
        </div>
      )}
    </main>
  );
}

