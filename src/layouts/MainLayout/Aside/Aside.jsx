import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import * as S from './Aside.style';
import { ChevronDown, ChevronsLeft,ChevronsRight } from 'lucide-react';
import { Calendar,Newspaper,FolderOpen,House,ChevronRight} from 'lucide-react';
import { useState } from "react";

function Aside({asideOpen,asideHandle,menus}){
    let [depthOpen,setDepthOpen] = useState(false)
    let navigate = useNavigate();
    const location = useLocation();
    const iconMap = {
        house: House,
        calendar: Calendar,
        folder: FolderOpen,
        board: Newspaper,
    };
    return(
        <S.Aside $asideopen={asideOpen}>
            <S.AsideLogo>
                <S.LogoLink to="/" $asideopen={asideOpen}>
                    <S.LogoIcon>T</S.LogoIcon>
                    {
                        asideOpen
                        ?<Logo/>
                        : null
                    }
                </S.LogoLink>
            </S.AsideLogo>
            <S.AsideBtnWrap>
                <S.AsideBtn onClick={asideHandle} $asideopen={asideOpen}>
                    {
                        asideOpen
                        ?
                        <ChevronsLeft/>
                        :
                        <ChevronsRight/>
                    }
                </S.AsideBtn>
            </S.AsideBtnWrap>

            <S.AsideNav>
                <S.AsideMenu>
                    {
                      menus.map((e,i)=>{
                        const Icon = iconMap[e.icon];
                        const depthLists = e.children;
                        return(
                            <S.MenuList key={i}>
                            {
                                e.children.length
                                ?
                                //하위메뉴 있을시
                                <>
                                    <S.MenuBtn $active={
                                            e.path === '/'
                                            ? location.pathname === '/'
                                            : location.pathname.startsWith(e.path)
                                        }   
                                        onClick={()=>setDepthOpen(!depthOpen)}>
                                        {Icon && <Icon />}
                                        {
                                            asideOpen
                                            ?
                                                <>
                                                    <S.MenuName>
                                                        {e.name}
                                                    </S.MenuName>
                                                    <S.MenuBtnArrow>
                                                        {
                                                            depthOpen
                                                            ?
                                                            <ChevronDown/>
                                                            :
                                                            <ChevronRight/>
                                                        }
                                                    </S.MenuBtnArrow>
                                                </>
                                            :null
                                        }
                                    </S.MenuBtn>
                                    {
                                        asideOpen && depthOpen
                                        ?
                                            <S.Menu2Depth>
                                                {
                                                depthLists.map((e,i)=>{
                                                    const linkPath = e.path
                                                    return(
                                                    <S.Menu2DepthList 
                                                        key={i}  
                                                        onClick={()=>{ navigate(linkPath) }}
                                                        $active={location.pathname === e.path}
                                                    >
                                                        {e.name}
                                                    </S.Menu2DepthList>
                                                    )
                                                })
                                                }
                                            </S.Menu2Depth>
                                        : null
                                    }
                                    
                                </>
                                :
                                //하위메뉴 없을시
                                <S.MenuLink 
                                    to={e.path} 
                                    $active={location.pathname === e.path}
                                >
                                    {Icon && <Icon/>}
                                    {
                                        asideOpen?<S.MenuName>{e.name}</S.MenuName>:null
                                    }
                                </S.MenuLink>
                            }
                            </S.MenuList>
                            
                        )
                      })  
                    }
                </S.AsideMenu>
            </S.AsideNav>
        </S.Aside>
    )
}

export default Aside;