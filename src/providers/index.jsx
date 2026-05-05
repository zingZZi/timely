import PopupProvider from "./popup/PopupProvider";

function AppProvider({ children }){
    return(
        <PopupProvider>
            {children}
        </PopupProvider>
    )
}

export default AppProvider;