import { useState } from "react";
import Select from "react-select";

export const ThemeCHanger: React.FC = () => {
    const themes = [
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
        "fantasy",
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
    ].map((theme) => ({ value: theme, label: theme }));

    const [theme, setTheme] = useState(
        themes.find((theme) => theme.value === localStorage.getItem("sb-react-daisyui-preview-theme")) ??
            document.getElementsByTagName("html")[0].getAttribute("data-theme") ??
            themes[0]
    );

    const onThemeChange = (theme: any) => {
        setTheme(theme);
        document.getElementsByTagName("html")[0].setAttribute("data-theme", theme.value);
        window.localStorage.setItem("sb-react-daisyui-preview-theme", theme.value);
    };

    return (
        <div>
            <Select
                options={themes}
                value={theme}
                onChange={(selected: any) => selected?.value && onThemeChange(selected)}
                isMulti={false}
                className={` `}
                classNames={{ menuList: () => "" }}
            />
        </div>
    );
};
