/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                "custom-violet": "hsl(257, 40%, 49%)",
                "custom-softMagenta": "hsl(300, 69%, 71%)",
            },
            fontFamily: {
                headings: "Poppins",
                body: '"Open Sans"',
            },
            backgroundImage: {
                mobile: "url('./images/bg-mobile.svg')",
                desktop: "url('./images/bg-desktop.svg')",
            },
        },
    },
    plugins: [],
};
