import * as S from './PageHeader.style';

function PageHeader({title,subtitle,more=false}){
    return(
        <S.PageHeaderWrap>
            <S.PageTitleWrap>
                <S.PageTitle>{title}</S.PageTitle>
                {
                    more?<S.MoreBtn to={more}>전체 보기</S.MoreBtn>:null
                }
                
            </S.PageTitleWrap>
            {
                subtitle?<S.Description>{subtitle}</S.Description>:null
            }
            
        </S.PageHeaderWrap>
    )
}

export default PageHeader;