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
        primary: '#4ec9b0',   // terminal teal - my favourite color
        dark: '#1e1e1e',      // VS Code background
        light: '#252526',     // VS Code sidebar
        muted: '#6a9955',     // VS Code comment green
        code: '#d4d4d4',      // VS Code default text
        line: '#3e3e42',      // VS Code border color
      },
      fontFamily: {
        // yes i know frontend devs use fancy fonts. this is JetBrains Mono. deal with it.
        mono: ['"JetBrains Mono"', '"Courier New"', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}
