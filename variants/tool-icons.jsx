// Iconos con identidad de marca para el stack diario.
// Reconocibles pero limpios — formas + colores oficiales.

const ToolIcons = {
  ChatGPT: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <circle cx="20" cy="20" r="15" fill="#111" />
      <path d="M14 14h12v12H14zM20 8v24M8 20h24" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </svg>
  ),
  Claude: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <circle cx="20" cy="20" r="15" fill="#D97745" />
      <path d="M20 7v26M7 20h26M10.8 10.8l18.4 18.4M29.2 10.8 10.8 29.2" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  ),
  Grok: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <circle cx="20" cy="20" r="16" fill="#050505" />
      <path d="M11 28 29 10M15 12c8 0 13 5 13 13M12 25c0-7 5-12 12-12" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  ),
  Ollama: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <rect x="8" y="12" width="24" height="22" rx="8" fill="#fff" stroke="#111" strokeWidth="2.4" />
      <path d="M14 13V7m12 6V7" stroke="#111" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="15" cy="22" r="2" fill="#111" /><circle cx="25" cy="22" r="2" fill="#111" />
      <path d="M17 28c2 2 4 2 6 0" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  ),
  Perplexity: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <rect x="9" y="9" width="22" height="22" fill="#E8FFFF" stroke="#0B6B73" strokeWidth="2" />
      <path d="M20 6v28M10 20h20M12 12l8 8-8 8M28 12l-8 8 8 8" stroke="#0B6B73" strokeWidth="2.2" fill="none" />
    </svg>
  ),
  Codex: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <polygon points="20,5 33,13 33,27 20,35 7,27 7,13" fill="#fff" stroke="#111" strokeWidth="2.4" />
      <path d="m15 15-5 5 5 5m10-10 5 5-5 5m-3-12-4 14" stroke="#111" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Copilot: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <defs><linearGradient id="copG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0EA5E9"/><stop offset=".5" stopColor="#8B5CF6"/><stop offset="1" stopColor="#F97316"/></linearGradient></defs>
      <rect x="6" y="9" width="28" height="22" rx="7" fill="url(#copG)" />
      <path d="M13 25c5-8 9-8 14 0" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  "Hugging Face": (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <circle cx="20" cy="20" r="15" fill="#FFD21E" />
      <circle cx="15" cy="17" r="2" fill="#553B00" /><circle cx="25" cy="17" r="2" fill="#553B00" />
      <path d="M14 25c4 4 8 4 12 0M9 24l-5 5m27-5 5 5" stroke="#553B00" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  ),
  Llama: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <path d="M13 32V16c0-6 4-10 9-10s8 4 8 10v16" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 10V5m8 5V5M16 21h9" stroke="#111" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <path d="M7 22h24c0 7-5 11-13 11-7 0-11-4-11-11Z" fill="#1687D9" />
      <path d="M11 18h5v-5h5v5h5v-5h5v5h4v4H11Z" fill="#1687D9" />
      <circle cx="13" cy="27" r="1.5" fill="#fff" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <circle cx="20" cy="20" r="16" fill="#111" />
      <path d="M14 29c0-3 2-4 6-4s6 1 6 4M14 18c0-5 3-8 6-8s6 3 6 8c0 4-2 7-6 7s-6-3-6-7Z" fill="#fff" />
    </svg>
  ),
  "Power BI": (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <defs>
        <linearGradient id="pbiG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FBE16B" />
          <stop offset="1" stopColor="#E8A33D" />
        </linearGradient>
      </defs>
      <rect x="6" y="16" width="7" height="20" rx="1.5" fill="url(#pbiG)" />
      <rect x="16.5" y="8" width="7" height="28" rx="1.5" fill="url(#pbiG)" />
      <rect x="27" y="22" width="7" height="14" rx="1.5" fill="url(#pbiG)" />
    </svg>
  ),
  Excel: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <rect x="5" y="5" width="30" height="30" rx="4" fill="#1D6F42" />
      <path
        d="M13 13 L20 20 L13 27 M27 13 L20 20 L27 27"
        stroke="#fff"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  SQL: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <defs>
        <linearGradient id="sqlG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5E80B5" />
          <stop offset="1" stopColor="#2E4D7B" />
        </linearGradient>
      </defs>
      <path
        d="M8 11 v18 a12 4 0 0 0 24 0 v-18"
        fill="url(#sqlG)"
      />
      <ellipse cx="20" cy="11" rx="12" ry="4" fill="#7A9BCC" />
      <ellipse cx="20" cy="11" rx="12" ry="4" fill="none" stroke="#2E4D7B" strokeWidth="0.6" />
      <path d="M8 17 a12 4 0 0 0 24 0 M8 23 a12 4 0 0 0 24 0" stroke="#2E4D7B" strokeWidth="0.8" fill="none" opacity="0.5" />
    </svg>
  ),
  Workspace: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      {/* 2x2 Google Workspace tiles */}
      <rect x="6" y="6" width="13" height="13" rx="2" fill="#EA4335" />
      <rect x="21" y="6" width="13" height="13" rx="2" fill="#FBBC04" />
      <rect x="6" y="21" width="13" height="13" rx="2" fill="#34A853" />
      <rect x="21" y="21" width="13" height="13" rx="2" fill="#4285F4" />
    </svg>
  ),
  "App Script": (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <rect x="5" y="5" width="30" height="30" rx="6" fill="#F7B500" />
      <path
        d="M16 14 L10 20 L16 26 M24 14 L30 20 L24 26"
        stroke="#fff"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 12 L18 28" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  Gemini: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <defs>
        <linearGradient id="gemG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4285F4" />
          <stop offset=".5" stopColor="#9B72CB" />
          <stop offset="1" stopColor="#D96570" />
        </linearGradient>
      </defs>
      {/* 4-point asymmetric star */}
      <path
        d="M20 4
           C 21 13, 27 19, 36 20
           C 27 21, 21 27, 20 36
           C 19 27, 13 21, 4 20
           C 13 19, 19 13, 20 4 Z"
        fill="url(#gemG)"
      />
    </svg>
  ),
  NotebookLM: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      <defs>
        <linearGradient id="nbG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4285F4" />
          <stop offset="1" stopColor="#9B72CB" />
        </linearGradient>
      </defs>
      {/* notebook body */}
      <rect x="9" y="6" width="22" height="28" rx="2" fill="#fff" stroke="#9B72CB" strokeWidth="1.4" />
      <rect x="9" y="6" width="3.5" height="28" fill="url(#nbG)" />
      <path d="M16 14 h11 M16 19 h11 M16 24 h7" stroke="#9B72CB" strokeWidth="1.2" strokeLinecap="round" />
      {/* sparkle */}
      <path
        d="M28 25
           C 28.4 28, 30 29.6, 33 30
           C 30 30.4, 28.4 32, 28 35
           C 27.6 32, 26 30.4, 23 30
           C 26 29.6, 27.6 28, 28 25 Z"
        fill="url(#nbG)"
      />
    </svg>
  ),
  SIAF: (
    <svg viewBox="0 0 40 40" width="100%" height="100%">
      {/* Government-shield with S/ (Sol Peruano) */}
      <path
        d="M20 4 L33 9 V20 C 33 28, 27 33, 20 36 C 13 33, 7 28, 7 20 V9 Z"
        fill="#C0392B"
      />
      <path
        d="M20 4 L33 9 V20 C 33 28, 27 33, 20 36 C 13 33, 7 28, 7 20 V9 Z"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
        opacity="0.5"
      />
      <text
        x="20"
        y="25"
        textAnchor="middle"
        fill="#fff"
        fontFamily="'Archivo', Arial"
        fontWeight="900"
        fontSize="13"
        letterSpacing="-0.5"
      >S/
      </text>
    </svg>
  ),
};

Object.assign(window, { ToolIcons });
