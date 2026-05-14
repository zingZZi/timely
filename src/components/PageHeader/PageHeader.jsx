import * as S from './PageHeader.style';

function PageHeader({title}){
    return(
        <>
            <S.PageHeader>{title}</S.PageHeader>
            <S.Description>타이틀 설명</S.Description>
        </>
    )
}

export default PageHeader;