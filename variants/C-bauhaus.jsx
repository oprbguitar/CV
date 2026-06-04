// Variación C — Bauhaus Color Block
// Bloques de color asimétricos, tipografía pesada, paleta disciplinada.
// Ivory + navy + arcilla + mostaza + tinta.

const bauhaus = {
  ivory: "#F0EADC",
  navy: "#1B2A4E",
  clay: "#C16E50",
  mustard: "#E4B046",
  ink: "#181613",
  paper: "#FCF7EB",
  line: "#D9CFB7",
  cream: "#F4ECD8",
};

function BauhausCV() {
  const t = bauhaus;
  return (
    <div
      style={{
        position: "relative",
        width: 1440,
        height: 900,
        background: t.ivory,
        color: t.ink,
        fontFamily: '"Inter", system-ui, sans-serif',
        overflow: "hidden",
        padding: 24,
        display: "grid",
        gridTemplateColumns: "380px 1fr 1fr 340px",
        gridTemplateRows: "44px 280px 264px 244px",
        gridTemplateAreas: `
          "topbar topbar topbar topbar"
          "photo  hero   hero   metrics"
          "photo  norma  norma  norma"
          "skills skills proj   tools"
        `,
        gap: 14,
      }}
    >
      {/* ── Top bar ── */}
      <div
        style={{
          gridArea: "topbar",
          display: "flex",
          alignItems: "center",
          gap: 18,
          padding: "0 8px",
        }}
      >
        <div
          style={{
            fontFamily: '"Archivo", sans-serif',
            fontWeight: 900,
            fontSize: 26,
            letterSpacing: -1,
            lineHeight: 1,
          }}
        >
          OP<span style={{ color: t.clay }}>·</span>RB
        </div>
        <div style={{ width: 1, height: 22, background: t.line }} />
        <div
          style={{
            fontSize: 10,
            letterSpacing: 2.2,
            fontWeight: 800,
            textTransform: "uppercase",
            color: t.ink,
          }}
        >
          Prototipos / 2026 — <span style={{ color: t.clay }}>Lima, Perú</span>
        </div>
        <div style={{ flex: 1 }} />
        <a
          href={`mailto:${CV_DATA.email}`}
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: t.ink,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Icon name="mail" size={14} /> {CV_DATA.email}
        </a>
        <span style={{ color: t.line }}>·</span>
        <a
          href={`https://${CV_DATA.linkedin}`}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: t.ink,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Icon name="linkedin" size={14} /> LinkedIn
        </a>
      </div>

      {/* ── PHOTO block (clay frame) ── */}
      <div
        style={{
          gridArea: "photo",
          position: "relative",
          background: t.clay,
          padding: 16,
          overflow: "hidden",
        }}
      >
        {/* large circle behind */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: t.mustard,
            opacity: 0.95,
          }}
        />
        <img
          src={CV_DATA.photo}
          alt=""
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 22%",
            filter: "contrast(1.04) saturate(0.85)",
          }}
        />
        {/* badge bottom-left */}
        <div
          style={{
            position: "absolute",
            left: 16,
            bottom: 16,
            zIndex: 2,
            padding: "10px 14px",
            background: t.ink,
            color: t.cream,
          }}
        >
          <div
            style={{
              fontSize: 9,
              letterSpacing: 2,
              fontWeight: 800,
              color: t.mustard,
            }}
          >
            INGENIERO INDUSTRIAL
          </div>
          <div
            style={{
              fontFamily: '"Archivo", sans-serif',
              fontWeight: 900,
              fontSize: 18,
              lineHeight: 1,
              letterSpacing: -0.5,
              marginTop: 4,
            }}
          >
            Desde 2010
          </div>
        </div>
      </div>

      {/* ── HERO name (navy) ── */}
      <div
        style={{
          gridArea: "hero",
          background: t.navy,
          color: t.cream,
          padding: "28px 32px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decoration: mustard bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 6,
            height: "100%",
            background: t.mustard,
          }}
        />
        <div
          style={{
            fontSize: 10,
            letterSpacing: 2.6,
            fontWeight: 800,
            textTransform: "uppercase",
            color: t.mustard,
          }}
        >
          Portafolio · Vol. 02
        </div>
        <h1
          style={{
            margin: "10px 0 6px",
            fontFamily: '"Archivo", sans-serif',
            fontWeight: 900,
            fontSize: 82,
            lineHeight: 0.86,
            letterSpacing: -3.2,
            color: t.cream,
          }}
        >
          OSCAR<br />
          <span style={{ color: t.mustard }}>PIERRE</span>
        </h1>
        <p
          style={{
            margin: "12px 0 0",
            fontSize: 13.5,
            lineHeight: 1.5,
            color: "rgba(244,236,216,.86)",
            maxWidth: 520,
            textWrap: "pretty",
          }}
        >
          {CV_DATA.summary}
        </p>
        <div
          style={{
            position: "absolute",
            bottom: 22,
            right: 28,
            fontFamily: '"Archivo", sans-serif',
            fontWeight: 900,
            fontSize: 70,
            color: "rgba(228,176,70,.15)",
            lineHeight: 1,
            letterSpacing: -3,
          }}
        >
          01
        </div>
      </div>

      {/* ── METRICS block ── */}
      <div
        style={{
          gridArea: "metrics",
          background: t.paper,
          border: `1px solid ${t.line}`,
          padding: 16,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 8,
        }}
      >
        {CV_DATA.metrics.map((m, i) => {
          const colors = [t.clay, t.navy, t.mustard, t.ink];
          return (
            <div
              key={i}
              style={{
                background: t.ivory,
                padding: "10px 12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderLeft: `4px solid ${colors[i]}`,
              }}
            >
              <div
                style={{
                  fontFamily: '"Archivo", sans-serif',
                  fontWeight: 900,
                  fontSize: 34,
                  lineHeight: 1,
                  letterSpacing: -1.5,
                  color: colors[i],
                }}
              >
                {m.k}
              </div>
              <div
                style={{
                  fontSize: 9.5,
                  letterSpacing: 1.4,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: t.ink,
                  marginTop: 6,
                  lineHeight: 1.2,
                }}
              >
                {m.v}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── NORMAFLOW big block (mustard) ── */}
      <a
        href={CV_DATA.flagship.url}
        target="_blank"
        rel="noreferrer"
        style={{
          gridArea: "norma",
          background: t.mustard,
          color: t.ink,
          padding: "22px 28px",
          position: "relative",
          overflow: "hidden",
          textDecoration: "none",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 24,
          alignItems: "center",
        }}
      >
        {/* clay diagonal stripe */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "55%",
            height: "100%",
            background: t.clay,
            clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)",
            opacity: 0.94,
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: 2.6,
              fontWeight: 800,
              textTransform: "uppercase",
              color: t.navy,
            }}
          >
            ★ Proyecto insignia · Experimento 2026
          </div>
          <h2
            style={{
              margin: "8px 0 8px",
              fontFamily: '"Archivo", sans-serif',
              fontWeight: 900,
              fontSize: 62,
              lineHeight: 0.88,
              letterSpacing: -2.6,
              color: t.ink,
            }}
          >
            NORMAFLOW <span style={{ color: t.navy }}>AI</span>
          </h2>
          <div style={{ fontSize: 13.5, lineHeight: 1.45, fontWeight: 600, maxWidth: 520 }}>
            {CV_DATA.flagship.pitch} — redacta, valida y normaliza{" "}
            <span style={{ color: t.navy, fontWeight: 800 }}>TDR, EETT, SST y bases</span>{" "}
            contra normativa vigente.
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
            {CV_DATA.flagship.docs.map((d) => (
              <span
                key={d}
                style={{
                  fontFamily: '"Archivo", sans-serif',
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: 1.8,
                  padding: "6px 12px",
                  background: t.ink,
                  color: t.mustard,
                }}
              >
                {d}
              </span>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 2, textAlign: "right" }}>
          <div
            style={{
              fontFamily: '"Archivo", sans-serif',
              fontWeight: 900,
              fontSize: 110,
              lineHeight: 0.85,
              letterSpacing: -5,
              color: t.cream,
              opacity: 0.95,
            }}
          >
            AI
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginTop: 10,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1.6,
              textTransform: "uppercase",
              color: t.cream,
              background: t.ink,
              padding: "8px 12px",
            }}
          >
            Ver experimento <Icon name="arrowUp" size={13} />
          </div>
        </div>
      </a>

      {/* ── SKILLS block ── */}
      <div
        style={{
          gridArea: "skills",
          background: t.paper,
          border: `1px solid ${t.line}`,
          padding: "18px 22px",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <BauhausHead t={t} num="02" title="Habilidades de impacto" accent={t.clay} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 28px", marginTop: 12, flex: 1 }}>
          {CV_DATA.skills.map((s, i) => (
            <div key={i}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <div style={{ fontSize: 12.5, fontWeight: 800, color: t.ink, flex: 1, letterSpacing: -0.1 }}>
                  {s.name}
                </div>
                <div
                  style={{
                    fontFamily: '"Archivo", sans-serif',
                    fontWeight: 900,
                    fontSize: 22,
                    lineHeight: 1,
                    color: t.clay,
                    letterSpacing: -0.6,
                  }}
                >
                  {s.impact}<span style={{ fontSize: 12, opacity: 0.6 }}>%</span>
                </div>
              </div>
              <div
                style={{
                  height: 6,
                  background: t.ivory,
                  marginTop: 5,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${s.impact}%`,
                    height: "100%",
                    background: i % 2 === 0 ? t.clay : t.navy,
                  }}
                />
              </div>
              <div style={{ fontSize: 10.5, color: "#6e6557", marginTop: 4 }}>{s.blurb}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROJECTS block (ink) ── */}
      <div
        style={{
          gridArea: "proj",
          background: t.ink,
          color: t.cream,
          padding: "16px 18px",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <BauhausHead t={t} num="03" title="Proyectos" accent={t.mustard} inverted />
        <div style={{ display: "grid", gap: 4, marginTop: 10 }}>
          {CV_DATA.projects.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "6px 0",
                borderBottom: i < CV_DATA.projects.length - 1 ? `1px solid rgba(244,236,216,.15)` : "none",
                color: t.cream,
                textDecoration: "none",
                fontSize: 11.5,
              }}
            >
              <span
                style={{
                  fontFamily: '"Archivo", sans-serif',
                  fontWeight: 900,
                  fontSize: 11,
                  color: t.mustard,
                  width: 22,
                }}
              >
                0{i + 1}
              </span>
              <span style={{ fontWeight: 800, flex: 1, letterSpacing: -0.1 }}>{p.name}</span>
              <span style={{ fontSize: 9.5, opacity: 0.6, letterSpacing: 0.4 }}>{p.area}</span>
              <span style={{ color: t.mustard, fontSize: 14 }}>→</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── TOOLS block (clay) — íconos reales del stack ── */}
      <div
        style={{
          gridArea: "tools",
          background: t.clay,
          color: t.cream,
          padding: "14px 16px 12px",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <BauhausHead t={t} num="04" title="Stack diario" accent={t.mustard} inverted />
        <div
          style={{
            marginTop: 10,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "1fr 1fr",
            gap: 6,
            flex: 1,
          }}
        >
          {CV_DATA.tools.map((tool) => (
            <div
              key={tool}
              style={{
                background: "rgba(252,247,235,.12)",
                border: "1px solid rgba(252,247,235,.22)",
                padding: "7px 4px 6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {ToolIcons[tool]}
              </div>
              <div
                style={{
                  fontSize: 8.5,
                  fontWeight: 800,
                  letterSpacing: 0.4,
                  color: t.cream,
                  textAlign: "center",
                  lineHeight: 1.1,
                }}
              >
                {tool}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 9.5,
            letterSpacing: 1.6,
            fontWeight: 800,
            textTransform: "uppercase",
            color: t.mustard,
            marginTop: 10,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: t.mustard,
              boxShadow: `0 0 8px ${t.mustard}`,
            }}
          />
          Disponible para nuevos proyectos
        </div>
      </div>
    </div>
  );
}

function BauhausHead({ t, num, title, accent, inverted }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span
        style={{
          fontFamily: '"Archivo", sans-serif',
          fontWeight: 900,
          fontSize: 22,
          lineHeight: 1,
          color: accent,
          letterSpacing: -1,
        }}
      >
        {num}
      </span>
      <span
        style={{
          fontSize: 10,
          letterSpacing: 2.4,
          fontWeight: 800,
          textTransform: "uppercase",
          color: inverted ? t.cream : t.ink,
        }}
      >
        {title}
      </span>
      <span style={{ flex: 1, height: 2, background: accent, opacity: 0.5 }} />
    </div>
  );
}

Object.assign(window, { BauhausCV });
