import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-sm text-white/90 hover:text-white hover:bg-white/10 flex items-center gap-1.5 font-normal px-2"
      >
        {/* Dual circle / half-filled icon */}
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path
            fill="#eab308"
            stroke="none"
            d="M12 3a9 9 0 0 0 0 18V3z"
          />
          <path
            fill="#3b82f6"
            stroke="none"
            d="M12 21a9 9 0 0 0 0-18v18z"
          />
        </svg>
        <span className="capitalize text-sm">
          {themeMode === "auto" ? "Auto" : themeMode === "dark" ? "Dark" : "Light"}
        </span>
        <svg
          className="w-3.5 h-3.5 opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow-2xl bg-base-100 dark:bg-[#282a2d] text-base-content rounded-box w-36 z-50 mt-2 border border-base-300 dark:border-gray-700 text-sm"
      >
        <li>
          <button
            onClick={() => setThemeMode("light")}
            className={`flex items-center gap-2 ${
              themeMode === "light" ? "active font-semibold" : ""
            }`}
          >
            ☀️ Light
          </button>
        </li>
        <li>
          <button
            onClick={() => setThemeMode("dark")}
            className={`flex items-center gap-2 ${
              themeMode === "dark" ? "active font-semibold" : ""
            }`}
          >
            🌙 Dark
          </button>
        </li>
        <li>
          <button
            onClick={() => setThemeMode("auto")}
            className={`flex items-center gap-2 ${
              themeMode === "auto" ? "active font-semibold" : ""
            }`}
          >
            🌓 Auto
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ThemeToggle;
