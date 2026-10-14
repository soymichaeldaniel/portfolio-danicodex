type IconKind = 'about' | 'cv' | 'projects' | 'courses' | 'stack' | 'computer' | 'youtube' | 'github' | 'start';

// Small, code-native pixel icons inspired by classic desktop applications.
export function RetroIcon({ kind, size = 36 }: { kind: IconKind; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" shapeRendering="crispEdges" className="retro-icon">
    {kind === 'projects' ? <>
      <path d="M2 7h11v3h16v18H2Z" fill="#000" /><path d="M3 8h9v3h16v15H3Z" fill="#c6a000" /><path d="M4 9h7v3h15v2H4Z" fill="#ffffa5" /><path d="M5 14h25l-4 13H2Z" fill="#000" /><path d="M6 15h22l-3 11H4Z" fill="#ffe55b" /><path d="M6 15h22v1H6ZM5 17h1v6H5" fill="#ffffd6" /><path d="M4 26h21v1H4" fill="#ad8400" />
    </> : kind === 'about' || kind === 'cv' ? <>
      <path d="M7 2h15l5 5v23H7Z" fill="#000" /><path d="M8 3h13v5h5v21H8Z" fill="#fff" /><path d="M22 3v4h4" fill="#bcbcbc" /><path d="M10 11h13v2H10ZM10 16h13v1H10ZM10 20h13v1H10ZM10 24h9v1H10Z" fill="#000080" /><path d="M10 6h7v2h-7" fill="#808080" /><path d="M8 28h18v1H8" fill="#808080" />
    </> : kind === 'courses' ? <>
      <path d="M3 7h7v22H3ZM12 3h8v26h-8ZM22 9h7v20h-7Z" fill="#000" /><path d="M4 8h5v19H4Z" fill="#255bc0" /><path d="M13 4h6v23h-6Z" fill="#a13ab4" /><path d="M23 10h5v17h-5Z" fill="#d94a32" /><path d="M5 9h3v2H5ZM14 5h4v2h-4ZM24 11h3v2h-3ZM5 23h3v2H5ZM14 23h4v2h-4ZM24 23h3v2h-3Z" fill="#ffffc6" /><path d="M4 8h1v19H4ZM13 4h1v23h-1ZM23 10h1v17h-1Z" fill="#ffffff88" /><path d="M1 29h30v2H1Z" fill="#808080" />
    </> : kind === 'start' ? <>
      <path d="m2 6 12 2v10L2 16ZM16 8l13-3v11l-13 2ZM2 18l12 2v10L2 26ZM16 20l13-2v10l-13 2Z" fill="#000" /><path d="m3 7 10 2v7L3 15Z" fill="#ee3535" /><path d="m17 9 11-2v7l-11 2Z" fill="#2da747" /><path d="m3 20 10 2v6L3 25Z" fill="#307dc1" /><path d="m17 22 11-2v6l-11 2Z" fill="#f3cf20" />
    </> : <>
      <path d="M4 2h23v21H4ZM12 23h7v3h-7ZM3 27h25v4H3Z" fill="#000" /><path d="M5 3h21v19H5Z" fill="#c0c0c0" /><path d="M6 4h19v1H6ZM6 5h1v15H6ZM4 28h23v1H4" fill="#fff" /><path d="M8 6h15v13H8Z" fill="#000" /><path d="M9 7h13v11H9Z" fill={kind === 'stack' ? '#071608' : kind === 'youtube' ? '#c52327' : kind === 'github' ? '#292658' : '#008b9b'} />
      {kind === 'stack' ? <path d="m11 9 3 3-3 3h2l3-3-3-3ZM17 14h4v1h-4Z" fill="#43ff43" /> : kind === 'youtube' ? <path d="m13 9 6 3-6 4Z" fill="#fff" /> : kind === 'github' ? <path d="M12 9h3v3h4V9h2v4h-6v3h-3Z" fill="#fff" /> : <><path d="M11 9h8v6h-8Z" fill="#000080" /><path d="M12 10h6v4h-6Z" fill="#89dcff" /></>}
      <path d="M23 20h2v1h-2" fill="#00cc3b" /><path d="M6 29h19v1H6Z" fill="#808080" />
    </>}
  </svg>;
}
