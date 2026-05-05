import { useContext } from 'react';
import { PopupContext } from './popup.context';

export function usePopup(){
    return useContext(PopupContext);
}