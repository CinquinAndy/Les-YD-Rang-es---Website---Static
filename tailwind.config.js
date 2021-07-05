// eslint-disable-next-line no-undef
module.exports = {
    purge: {
        enabled: false,
        content: ["./dist/*.html"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            yd_purple: {
                50: "#EDE3F7",
                100: "#D3C0E7",
                200: "#B994E0",
                300: "#9F62DF",
                400: "#842DE1",
                500: "#6A11CB",
                600: "#5104A4",
                700: "#390372",
                800: "#200241",
                900: "#07000F",
            },
            yd_blue: {
                50: "#DBF4FF",
                100: "#A8E4FF",
                200: "#75D3FF",
                300: "#4CC0F6",
                400: "#27AAE7",
                500: "#218ABA",
                600: "#226787",
                700: "#1D4558",
                800: "#0D2835",
                900: "#020A0D",
            },
            yd_gray: {
                50: "#E8E8E9",
                100: "#CFCED0",
                200: "#B6B4B7",
                300: "#9D9A9E",
                400: "#848085",
                500: "#6A666B",
                600: "#504D51",
                700: "#363437",
                800: "#1C1B1D",
                900: "#080708",
            },
            yd_pink: {
                50: "#FCF7F9",
                100: "#F3CED8",
                200: "#EEA0B6",
                300: "#EF6C91",
                400: "#F4346A",
                500: "#F60046",
                600: "#B80A3B",
                700: "#810E2F",
                800: "#4E0E20",
                900: "#21080F",
            }
        },
        extend: {
            spacing: {
                "10px": "10px",
                "20px": "20px",
                "30px": "30px",
                "50px": "50px",
                "60px": "60px",
                "70px": "70px",
                "80px": "80px",
                "90px": "90px",
                "100px": "100px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
