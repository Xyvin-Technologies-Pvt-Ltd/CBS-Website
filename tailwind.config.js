/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#C8102E',    // Omani Red
                secondary: '#007236',  // Omani Green
                heading: '#0F172A',   // Dark blue for headings
                body: '#1A2B4B',      // Main text color
                muted: '#64748B',     // Secondary text color
                border: '#E5E7EB',
                'pattern': 'rgba(200, 16, 46, 0.05)',
            },
            container: {
                center: true,
                padding: '1.25rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1240px',
                },
            },
        },
    },
    plugins: [],
} 