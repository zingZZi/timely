import DefaultBtn from "../../components/button/DefaultBtn";
import SearchSelect from "../../components/input/SearchSelect";
import * as Styled from './Signup.style';

function Signup(){
    const openModal = () => {
        console.log("모달 오픈!");
    };
    return(
        <form>
            <div>
                <Styled.InputFormLabel htmlFor="">회사명</Styled.InputFormLabel>
                <SearchSelect 
                    text="회사명을 입력해주세요."
                    icon="arrow"
                    color="default"
                    onClick={openModal}
                    
                />
            </div>
             <div>
                <Styled.InputFormLabel htmlFor="">부서명</Styled.InputFormLabel>
                <SearchSelect 
                    text="부서를 입력해주세요."
                    icon="arrow"
                    onClick={openModal}
                />
            </div>
            <div>
                <Styled.InputFormLabel htmlFor="">이름</Styled.InputFormLabel>
            </div>
            <div>
                <Styled.InputFormLabel htmlFor="">아이디</Styled.InputFormLabel>
            </div>
            <div>
                <Styled.InputFormLabel htmlFor="">비밀번호</Styled.InputFormLabel>
            </div>
            <div>
                <Styled.InputFormLabel htmlFor="">비밀번호 확인</Styled.InputFormLabel>
            </div>
            <DefaultBtn type="submit" text="가입하기" color="default"/>
        </form>
    )
}

export default Signup;