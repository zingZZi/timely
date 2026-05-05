import { createPortal } from 'react-dom';
import * as S from './Popup.style';
import { X } from 'lucide-react';

function PopupRenderer({ popup, closePopup, title }) {

    if(!popup) return null;

    return createPortal(
        <S.Dim>
            <S.Layout onClick={(e)=>e.stopPropagation()}>
                <S.Hearder>
                    <S.Title>
                        {popup.title}
                    </S.Title>
                    <button onClick={closePopup}>
                        <span className='text-ir'>닫기</span>   
                        <X/>
                    </button>
                </S.Hearder>
                {popup.content}
            </S.Layout>
        </S.Dim>,
        document.body
    )
}

export default PopupRenderer;