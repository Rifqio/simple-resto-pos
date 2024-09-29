/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            },
            colors: {
                secondaryTheme: '#F3F3F3',
                accentTheme: '#B0B1B3',
                tertiaryTheme: '#EDEDED',
                border: '#EAEBEA',
                primaryTheme: '#2E81FF'
            }
        }
    },
    plugins: [require('daisyui')]
}
