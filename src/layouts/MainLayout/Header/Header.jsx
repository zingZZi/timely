import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Header.style';
import { useState } from 'react';

function Header({menus}){
    let navigate = useNavigate();
    const location = useLocation();
    const [headerPop, setHeaderPop] = useState({
        alarm: false,
        user: false,
    });

    const togglePop = (type) => {
        setHeaderPop(prev => ({
            alarm: false,
            user: false,
            [type]: !prev[type]
        }));
    };
    return(
        <S.Header>
            <nav>
                <S.HeaderMenu>
                    {
                        menus.map((e,i)=>{
                            return(
                                e.children.length
                                ?
                                <S.MenuList key={i}>
                                    <S.MenuLink to={e.children[0].path}>
                                        <S.MenuText $active={
                                            e.path === '/'
                                            ? location.pathname === '/'
                                            : location.pathname.startsWith(e.path)
                                        }>
                                            {e.name}
                                        </S.MenuText>
                                    </S.MenuLink>
                                </S.MenuList>
                                :
                                <S.MenuList key={i}>
                                    <S.MenuLink to={e.path}>
                                        <S.MenuText $active={
                                            e.path === '/'
                                            ? location.pathname === '/'
                                            : location.pathname.startsWith(e.path)
                                        }>
                                            {e.name}
                                        </S.MenuText>
                                    </S.MenuLink>
                                </S.MenuList>
                            )
                        })
                    }
                </S.HeaderMenu>
            </nav>
            <S.HeaderActions>
                <S.AlarmContainer>
                    <S.AlarmBtn onClick={()=>{
                        togglePop('alarm')
                    }}>알람버튼</S.AlarmBtn>
                    {
                        headerPop.alarm
                        ?
                            <S.AlarmPop>
                                <p>알람</p>
                            </S.AlarmPop>
                        :null
                    }   
                </S.AlarmContainer>
                <S.HeaderUserInfo>
                    <button onClick={()=>{
                        togglePop('user')
                    }}>
                        프로필 이미지
                    </button>
                    {
                        headerPop.user
                        ?
                            <S.HeaderUserPop>
                                <S.UserInfo>
                                    <p>
                                        사용자이름
                                        <span>사용자이메일</span>
                                    </p> 
                                </S.UserInfo>
                                <ul>
                                    <li><a href="">개인정보수정</a></li>
                                    <li>로그아웃</li>
                                </ul>
                            </S.HeaderUserPop>
                        :null
                    }
                    
                </S.HeaderUserInfo>
            </S.HeaderActions>
        </S.Header>
    )
}

export default Header;