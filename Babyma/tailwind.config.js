module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        hovercolor: '#1E40AF',
        brightColor: '#2563EB',
        backgroundColor: '#F3F4F6',
      }
    },
  },
  plugins: [],
  safelist: [
    // custom classic theme names
    { pattern: /^classic-/ },
    { pattern: /^dark/ },
  ],
};
