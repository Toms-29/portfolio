/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,css}"
    ],
    theme: {
        extend: {
            dropShadow: {
                'colored': '2px 5px 15px rgba(255, 255, 255, 0.5)',
              },
        },
    },
    plugins: [],
}

