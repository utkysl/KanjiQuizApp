import React from "react";
import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu import edin
import "./App.css";

const kanjiData = [
  { character: "日", meaning: "gün, güneş", reading: "hi" },
  { character: "時", meaning: "zaman, saat", reading: "toki" },
  { character: "後", meaning: "sonra, arka", reading: "ato" },
  { character: "高", meaning: "yüksek", reading: "takai" },
  { character: "私", meaning: "ben", reading: "watashi" },
  { character: "読む", meaning: "okumak", reading: "yomu" },
  { character: "夜", meaning: "gece", reading: "yoru" },
  { character: "会う", meaning: "buluşmak", reading: "au" },
  { character: "朝", meaning: "sabah", reading: "asa" },
  { character: "雨", meaning: "yağmur", reading: "ame" },
  { character: "小", meaning: "küçük", reading: "shou" },
  { character: "百", meaning: "yüz", reading: "hyaku" },
  { character: "千", meaning: "bin", reading: "sen" },
  { character: "水", meaning: "su", reading: "mizu" },
  { character: "男", meaning: "erkek", reading: "otoko" },
  { character: "食", meaning: "yemek", reading: "shoku" },
  { character: "何", meaning: "ne", reading: "nani" },
  { character: "友", meaning: "arkadaş", reading: "tomo" },
  { character: "休", meaning: "dinlenmek", reading: "yasu" },
  { character: "来", meaning: "gelmek", reading: "kuru" },
];

export default function MainPage() {
  const navigate = useNavigate(); // useNavigate hook'unu kullanın

  const openExternalLink = () => {
    window.open('https://utkuyesil.vercel.app', '_blank'); // Burada istediğiniz URL'yi kullanabilirsiniz
  };

  return (
    <div className="full-height-container">
      <div className="header-text">N5 Seviye Kanjiler, Okunuşları ve Anlamları</div>
      <div className="button-container">
        <button onClick={() => navigate('/')} className="navigate-button">Quiz Sayfasına Git</button>
        <button onClick={openExternalLink} className="external-link-button">İletişim</button>
      </div>
      <div className="container">
        {kanjiData.map((kanji, index) => (
          <div className={`card box${index + 1}`} key={index}>
            <div className="kanji">{kanji.character}</div>
            <div className="meaning">Anlamı: {kanji.meaning}</div>
            <div className="reading">Okunuşu: {kanji.reading}</div>
          </div>
        ))}
      </div>
    </div>
  );
}