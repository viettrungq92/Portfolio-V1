import { createContext, useReducer } from "react";

export const themeContext = createContext();

const initialState = {darkMode : false};

const themReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return {darkMode : !state.darkMode};
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themReducer, initialState);
    return (
        <themeContext.Provider value={{state, dispatch}}>
            {props.children}
        </themeContext.Provider>
    );
};