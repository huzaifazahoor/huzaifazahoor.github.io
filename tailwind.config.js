module.exports = {
  content: [
    './index.html',
    './style.js',
    './popup.js',
    './style.css',
  ],
  theme: {
    extend: {
      colors: {
        accent:   '#6366f1',
        dark:     '#0f172a',
        surface:  '#1e293b',
        edge:     '#334155',
        bright:   '#f1f5f9',
        dim:      '#94a3b8',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
