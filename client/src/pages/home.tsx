import { useLocation } from "wouter";
import { CATEGORIES } from "@/lib/categories";
import { SiteHeader } from "@/components/SiteHeaderFooter";
import { SiteFooter } from "@/components/SiteFooter";
import { useLanguage } from "@/lib/i18n";

export default function HomePage() {
  const [, navigate] = useLocation();
  const { t, language } = useLanguage();

  return (
    <div style={{ minHeight: "100vh", width: "100%", display: "flex", flexDirection: "column" }}>
      <SiteHeader />

      <div style={{
        width: "100%",
        overflow: "hidden",
      }}>
        <img
          src="/images/banner.png"
          alt="Кришна и Арджуна"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem 1rem",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            position: "relative",
            padding: "8rem 4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            minHeight: "600px",
          }}
        >
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* ── Rainbow icon row ── */}
            <div className="icons-row">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className="icon-btn"
                  title={cat.label}
                  aria-label={cat.label}
                  onClick={() => navigate(cat.path)}
                  style={{
                    background: cat.gradient,
                    boxShadow: `0 6px 18px ${cat.shadow}`,
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    padding: 0,
                  }}
                >
                  {/* Изображение на всю кнопку */}
                  {cat.image ? (
                    <img
                      src={cat.image}
                      alt={cat.label}
                      style={{
                        position: "absolute",
                        top: "4%",
                        left: "10%",
                        width: "80%",
                        height: "74%",
                        objectFit: "contain",
                        pointerEvents: "none",
                        userSelect: "none",
                      }}
                    />
                  ) : (
                    <span
                      className="icon-emoji"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -62%)",
                        pointerEvents: "none",
                        userSelect: "none",
                      }}
                    >
                      {cat.emoji}
                    </span>
                  )}

                  {/* Подпись снизу */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "22%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: "clamp(0.4rem, 1.3vw, 0.95rem)",
                      letterSpacing: "0.04em",
                      textShadow: "0 1px 6px rgba(0,0,0,0.55)",
                      lineHeight: 1,
                      pointerEvents: "none",
                      userSelect: "none",
                      background: "rgba(0,0,0,0.18)",
                    }}
                  >
                    {cat.text ? (cat.text as Record<string, string>)[language] ?? cat.text.ru : cat.label}
                  </span>
                </button>
              ))}
            </div>

            {/* ── Hero ── */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem 1rem",
                textAlign: "center",
                gap: "1rem",
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(2rem, 8vw, 5.5rem)",
                  fontWeight: 900,
                  color: "#7A3A00",
                  textShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                {t.home.title}
              </h1>
              <p
                style={{
                  fontSize: "clamp(1rem, 3.5vw, 2rem)",
                  fontWeight: 600,
                  color: "#A05010",
                  textShadow: "0 1px 4px rgba(0,0,0,0.10)",
                }}
              >
                {t.home.subtitle}
              </p>
              <div
                style={{
                  height: "6px",
                  width: "clamp(200px, 50vw, 480px)",
                  borderRadius: "3px",
                  background:
                    "linear-gradient(90deg,#FF5252,#FF9F43,#FFE033,#2ECC71,#3EA6FF,#6C63FF,#C84BFF)",
                  marginTop: "0.5rem",
                  opacity: 0.75,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}