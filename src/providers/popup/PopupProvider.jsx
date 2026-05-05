import { useState } from 'react';
import { PopupContext } from './popup.context';
import PopupRenderer from './PopupRenderer';

function PopupProvider({ children }) {

    const [popup, setPopup] = useState(null);

    const openPopup = ({title,content}) => {
        setPopup({title,content});
    };

    const closePopup = () => {
        setPopup(null);
    };

    return (
        <PopupContext.Provider value={{ openPopup, closePopup }}>
            {children}
            <PopupRenderer popup={popup} closePopup={closePopup}/>
        </PopupContext.Provider>
    );
}

export default PopupProvider;