import ProfileImg from '../../../../../components/profileImg/ProfileImg'
import { CornerDownLeft } from 'lucide-react';
import * as S from './CommentLists.style'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function CommentLists (){
    let userInfo = useSelector((state)=>{
        return state.userInfo
    })
    const [form,setForm] = useState({
        content:"",
    })

    const handleSubmit = async(e) => {
        e.preventDefault(); // 필수: 새로고침 방지
        let now = new Date(); //시간정보 가져오기
         const submitData = {
            writer: userInfo.userNm,
            content: form.content,
            time: new Date().toISOString(),
        };
        console.log(submitData)
    };
    
    return(
        <>
            <S.CommentLists>
                <S.CommentList>
                    <ProfileImg size={2.4} img="/img/sample.png" alt="홍길동 프로필 이미지" />
                    <div>
                        <S.CommentMeta>
                            <span>김민수</span>
                            <S.MetaDate>2026-01-30</S.MetaDate>
                        </S.CommentMeta>
                        <S.CommnetContent>감사합니다! 개발 단계에서도 디자인 의도 잘 살려주세요 :)</S.CommnetContent>
                    </div>
                </S.CommentList>
                <S.CommentList>
                    <ProfileImg size={2.4} img="/img/sample.png" alt="홍길동 프로필 이미지" />
                    <div>
                        <S.CommentMeta>
                            <span>김민수</span>
                            <S.MetaDate>2026-01-30</S.MetaDate>
                        </S.CommentMeta>
                        <S.CommnetContent>감사합니다! 개발 단계에서도 디자인 의도 잘 살려주세요 :)</S.CommnetContent>
                    </div>
                </S.CommentList>
            </S.CommentLists>
            <S.CommentWrite onSubmit={handleSubmit}>
                <ProfileImg size={2.4} img="/img/sample.png" alt="홍길동 프로필 이미지" />
                <S.CommentTextarea 
                    placeholder='댓글을 입력하세요....(Enter로 전송)' 
                    value={form.content}
                    onChange={(e)=>{
                        setForm((prev)=>({
                            ...prev,
                            content:e.target.value
                        }))
                    }}
                />
                <CornerDownLeft/>
            </S.CommentWrite>
        </>
        
    )
}

export default CommentLists