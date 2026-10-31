import { motion } from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/lib/i18n";

interface SiteHeaderProps {
  onBack?: () => void;
}

export function SiteHeader({ onBack }: SiteHeaderProps = {}) {
  const { language } = useLanguage();

  const handleIshvaraClick = async () => {
    try {
      const response = await fetch('/api/audio/ishvara');
      if (!response.ok) {
        throw new Error(`Не удалось получить путь к аудио: ${response.status}`);
      }
      const data = await response.json();
      const audio = new Audio(data.path);
      audio.play().catch((e) => console.error("Ошибка воспроизведения:", e));
    } catch (e) {
      console.error("Ошибка получения пути к аудио:", e);
    }

    setTimeout(() => {
      window.location.href = 'ishvara.html';
    }, 2000);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      style={{
        width: "100%",
        background: "#ffffff",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.5rem 1rem",
        zIndex: 100,
        position: "relative",
      }}
    >
      {onBack && (
        <button
          onClick={onBack}
          style={{
            background: "rgba(0,0,0,0.08)",
            border: "none",
            borderRadius: "50%",
            width: "clamp(30px, 3.5vw, 42px)",
            height: "clamp(30px, 3.5vw, 42px)",
            fontSize: "clamp(0.9rem, 1.8vw, 1.2rem)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          ←
        </button>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <img
          src="/images/logo.png"
          alt="logo"
          style={{
            width: "96px",
            height: "96px",
            borderRadius: "27px",
            objectFit: "cover",
            border: "6px solid #FFD700",
            boxSizing: "border-box"
          }}
        />
        <div>
          <div
            style={{
              margin: "0 0 6px",
              color: "#FFD700",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.01em",
            }}
          >
            {language === "uk" ? "Знання для дітей" : "Совершенное знание"}
          </div>
          <p
            style={{
              margin: 0,
              color: "#FFD700",
              fontSize: "1rem",
              fontWeight: 700,
            }}
          >
            {language === "uk" ? "Освітній сайт" : "Образовательный сайт"}
          </p>
        </div>
      </div>

      <nav style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <button
          onClick={handleIshvaraClick}
          style={{
            minWidth: "120px", height: "50px", borderRadius: "12px", border: "4px solid #FFD700",
            background: "#ffffff", color: "#FFD700", fontSize: "1rem", fontWeight: 700,
            cursor: "pointer", transition: "all 0.3s ease", display: "flex", alignItems: "center",
            justifyContent: "center", padding: "8px 8px",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#FFD700"; e.currentTarget.style.color = "#ffffff"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 215, 0, 0.4)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.color = "#FFD700"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
        >
          {language === "ru" ? "Верховний повелитель" : language === "uk" ? "Верховний володар" : "Ишвара"}
        </button>

        <a href="jiva.html" style={{ minWidth: "120px", height: "50px", borderRadius: "12px", border: "4px solid #FFD700", background: "#ffffff", color: "#FFD700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontWeight: 700 }}>Джива</a>
        <a href="prakriti.html" style={{ minWidth: "120px", height: "50px", borderRadius: "12px", border: "4px solid #FFD700", background: "#ffffff", color: "#FFD700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontWeight: 700 }}>Пракрити</a>
        <a href="karma.html" style={{ minWidth: "120px", height: "50px", borderRadius: "12px", border: "4px solid #FFD700", background: "#ffffff", color: "#FFD700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontWeight: 700 }}>Карма</a>
        <a href="kala.html" style={{ minWidth: "120px", height: "50px", borderRadius: "12px", border: "4px solid #FFD700", background: "#ffffff", color: "#FFD700", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontWeight: 700 }}>Кала</a>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <LanguageSwitcher />
      </div>
    </motion.header>
  );
}