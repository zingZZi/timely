import { Link } from 'react-router-dom';
import * as S from './CardList.style'

function CardList(){
    return(
        <S.BoardCard>
            <Link to="">
                <S.IconWrap>
                    <S.Icon>아이디어</S.Icon>
                    <S.Icon>검토중</S.Icon>
                </S.IconWrap>
                <S.Title>제목</S.Title>
                <S.SubText>서브내용</S.SubText>
                <div>
                    <div>
                        <i></i>
                        <span>이름</span>
                        <span>2026.04.04</span>
                    </div>

                    <div></div>
                </div>
            </Link>
        </S.BoardCard>
    )
}

export default CardList;