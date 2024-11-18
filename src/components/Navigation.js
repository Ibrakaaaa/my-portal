import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Sidebar from "../components/SideNavbar";

function Navigation() {
    const { state, dispatch } = useAppContext();
    const { darkmode, sidebar } = state;

    return (
        <nav
            className={`flex justify-between items-center px-4 py-3 shadow-md ${
                darkmode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
        >
            {/* Sidebar-Schalter */}
            <button
                onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
                className="text-xl md:hidden"
                aria-label="Seitenleiste umschalten"
            >
                ☰
            </button>

            {sidebar ? <Sidebar /> : ""}

            {/* Logo */}
            <div className="text-lg font-bold">Guardian Nachrichten</div>

            {/* Navigationslinks */}
            <div className="hidden md:flex space-x-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-3 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-600"}`
                    }
                >
                    Startseite
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `px-3 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-600"}`
                    }
                >
                    Über Uns
                </NavLink>
                <NavLink
                    to="/guardian"
                    className={({ isActive }) =>
                        `px-3 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-600"}`
                    }
                >
                    Guardian Nachrichten
                </NavLink>
            </div>

            {/* Dunkelmodus-Schalter */}
            <button
                onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })}
                className="text-xl"
                aria-label="Dunkelmodus umschalten"
            >
                {darkmode ? "☀" : "🌑"}
            </button>
        </nav>
    );
}

export default Navigation;
