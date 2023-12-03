/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                accent: {
                    100: '#4BE48D',
                    200: '#41C67B',
                    300: '#38AA69',
                    400: '#2E8B57',
                    500: '#1C5534',
                    600: '#123722',
                    700: '#091B11',
                },
            },

            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            color: '#2E8B57',
                            'text-decoration-style': 'dotted',
                            '&hover': {
                                color: '#1C5534',
                            },
                            '&active': {
                                color: '#41C67B',
                            },
                        },
                    },
                },
            },
        },
        fontFamily: {
            sans: 'proxima-nova, Helvetica, Arial, sans-serif',
            serif: 'serif',
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
