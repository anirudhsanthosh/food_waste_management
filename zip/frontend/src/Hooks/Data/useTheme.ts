import { useEffect } from "react";

export function useTheme() {

    const themes = [
        "fantasy",
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
    ]

    const onThemeChange = (theme: string) => {


        document.getElementsByTagName("html")[ 0 ].setAttribute("data-theme", theme);

        window.localStorage.setItem("sb-react-daisyui-preview-theme", theme);
    };

    useEffect(() => {


        const theme = themes.find((theme) => theme === localStorage.getItem("sb-react-daisyui-preview-theme")) ??
            document.getElementsByTagName("html")[ 0 ].getAttribute("data-theme") ??
            themes[ 0 ]

        onThemeChange(theme)
    }, [])
}