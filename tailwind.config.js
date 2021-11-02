const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        colors: {
           transparent: 'transparent',
            current: 'currentColor', 
            blue: {
                light: '#99d6ff',
                DEFAULT: '#0099ff',
                dark: '#006bb3',
            },
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.red,
            yellow: colors.amber,
            green: colors.emerald
        }
    }
}