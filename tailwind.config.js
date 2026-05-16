module.exports = {
  content: [
    './index.html',
    './style.js',
    './popup.js',
  ],
  theme: {
    extend: {
      colors: {
        cream:    '#f5f0e8',
        paper:    '#faf7f2',
        navy:     '#0d1b2a',
        'navy-mid': '#1a3a5c',
        green:    '#15803d',
        'green-light': '#dcfce7',
        'green-mid': '#16a34a',
        red:      '#dc2626',
        gold:     '#b45309',
        ink:      '#1c1917',
        'ink-mid': '#44403c',
        'ink-dim': '#78716c',
        edge:     '#d6cfc4',
        'edge-light': '#e8e2d9',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono:    ['"IBM Plex Mono"', '"Courier New"', 'monospace'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};