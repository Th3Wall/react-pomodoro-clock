import './themeToggle.sass'
import { useState, useEffect } from 'react';

const ThemeToggle = () => {

    const getDefaultTheme = () => {
        const selectedTheme = localStorage.getItem('theme');
        localStorage.setItem("theme", selectedTheme || "light");
        return selectedTheme || 'light'
    }

    const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);
    useEffect(() => {
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", getDefaultTheme());
    }, []);

    const toggleThemeChange = () => {
        if (checked === false) {
            localStorage.setItem("theme", "dark");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", localStorage.getItem("theme"));
            setChecked(true);
        } else {
            localStorage.setItem("theme", "light");
            document
                .getElementsByTagName("HTML")[0]
                .setAttribute("data-theme", localStorage.getItem("theme"));
            setChecked(false);
        }
    }

    return (
        <label className="theme-toggler">
            <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => toggleThemeChange()}
            />
            <span className="theme-toggler__slider round" />
        </label>
    )
}

export default ThemeToggle;