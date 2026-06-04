// Iconos con identidad de marca para el stack diario.
// Reconocibles pero limpios — formas + colores oficiales.

const ToolIcons = {
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
