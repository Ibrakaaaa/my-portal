import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Sidebar() {
  const { state, dispatch } = useAppContext();
  const { darkmode } = state;

  // Schließt die Sidebar, wenn auf einen Link geklickt wird
  const closeSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <div
      className={`${
        darkmode ? "bg-gray-900" : "bg-white"
      } fixed inset-0 z-50 md:hidden flex justify-end`}
    >
      {/* Hintergrundüberlagerung der Sidebar */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeSidebar}
      ></div>

      {/* Inhalt der Sidebar */}
      <div
        className={`${
          state.sidebar ? "translate-x-0" : "-translate-x-full"
        } transform fixed left-0 top-0 w-64 h-full overflow-y-auto bg-gray-900 text-white transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          {/* Schließen-Button */}
          <button
            onClick={closeSidebar}
            className="text-white text-2xl"
            aria-label="Seitenleiste schließen"
          >
            ✖
          </button>
        </div>
        <div className="space-y-4 p-4">
          <NavLink
            to="/"
            onClick={closeSidebar}
            className="block px-4 py-2 hover:bg-gray-700"
          >
            Startseite
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeSidebar}
            className="block px-4 py-2 hover:bg-gray-700"
          >
            Über Uns
          </NavLink>
          <NavLink
            to="/guardian"
            onClick={closeSidebar}
            className="block px-4 py-2 hover:bg-gray-700"
          >
            Guardian Nachrichten
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
