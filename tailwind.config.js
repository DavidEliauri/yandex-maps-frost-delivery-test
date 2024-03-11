/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,ts,vue}'],
    theme: {
        fontFamily: {
            Roboto: ['Roboto', 'sans-serif'],
        },
        extend: {
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
};
