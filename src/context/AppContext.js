import { createContext, useContext, useReducer } from "react"

const initialState = {
    articles: [],
    darkmode: false,
    sidebar: false,
}


export default function AppReducer(state, action) {
    switch (action.type) {
        case "FETCH_START":
            return {...state, loading: true}
            case "FETCH_SUCCESS":
                return {...state, loading: false, articles: action.payload}
                case "FETCH_ERROR": 
                return {...state, loading: false, error: action.error}
                case "TOGGLE_SIDEBAR":
                    return {...state, sidebar: !state.sidebar}
                    case "TOGGLE_DARKMODE":
                        return {...state, darkmode: !state.darkmode}
                        
                        default:
                            return state;
                        }
}


const AppContext = createContext()

export function ContextProvider({children}) {
    
    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => useContext(AppContext);
