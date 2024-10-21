/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,css}"
    ],
    theme: {
        extend: {
            dropShadow: {
                'white': '2px 5px 15px rgba(255, 255, 255, 0.4)',
                'orange': '2px 5px 15px rgba(255, 87, 51, 0.4)',
                'sky': '2px 5px 15px rgba(0, 171, 213, 0.4)',
                'yellow': '2px 5px 15px rgba(255, 236, 0, 0.4)',
                'green': '2px 5px 15px rgba(0, 255, 120, 0.4)',
                'pink': '2px 5px 15px rgba(255, 0, 85, 0.4)'
            },
        },
    },
    plugins: [],
}

