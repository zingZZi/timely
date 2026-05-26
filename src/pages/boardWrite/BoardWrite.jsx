import FormField from "../../components/form/FormField/FormField";
import Input from "../../components/form/Input/Input";
import NativeSelect from "../../components/form/Select/NativeSelect";
import Tiptap from "../../components/editor/Tiptap";

import * as S from "./BoardWrite.style";
import { useEffect, useState } from "react";
import { fetchCommonCode } from "../../api/commonApi";
import { postBoard } from "../../api/boardApi";
import { useNavigate } from "react-router-dom";

function BoardWrite() {
  const navigate = useNavigate();

  const [categoryList,setCategoryList] = useState([]);
  const [stateList,setStatusList] = useState([])
  const [form,setForm] = useState({
    title:"",
    category:"",
    state:"",
    content:"",
  })

  const updateField = (key, value) => {
    if (typeof key === "object") {
      setForm((prev) => ({
        ...prev,
        ...key,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
  };

  useEffect(()=>{
    const getCommonCode = async ()=>{
      try{
        const res = await fetchCommonCode();
        const data = res.data;
        setCategoryList(
          data.filter((item) => item.codeGroup === "BOARD_CATEGORY")
        );
        setStatusList(
          data.filter((item) => item.codeGroup === "BOARD_STATUS")
        );
      }catch(error){
        console.log(error)
      }
    }
    getCommonCode()
  },[])

  //작성폼 유효성 검사
  const rules = {
    title: { required: true },
    category: { required: true },
    state: { required: true },
    content: { required: true },
  };
  const isFormFilled = (form) => {
    return Object.keys(rules).every((key) => {
      return form[key] && form[key].toString().trim() !== "";
    });
  };
  const isFilled = isFormFilled(form);

  const boardPost= async()=>{
    try{
      const res = await postBoard({
        category:form.category,
        status:form.state,
        title:form.title,
        content:form.content
      })
      navigate('/board')
    }catch(error){
      console.log(error)
    }
  }


  return (
    <>
      <S.BackLink to="">게시판으로 돌아가기</S.BackLink>
      <S.WriteContainer>
        <S.SectionTtile>새글작성</S.SectionTtile>
        <form action="">
          <fieldset className="text-ir">게시판 글 작성</fieldset>
          <FormField must="must" label="제목 " id="title">
            <Input 
              placeholder="게시글 제목을 입력하세요" 
              value={form.title}
              onChange={(value)=>{
                updateField('title',value)
              }}
            />
          </FormField>
          <S.ColFormWrap>
            <FormField must="must" label="카테고리" id="category">
              <NativeSelect
                placeholder="카테고리 선택"
                datalists={categoryList}
                value={form.category}
                dataValue="code"
                dataText="codeNm"
                onChange={(value)=>{
                  updateField('category',value)
                }}
              />
            </FormField>

            <FormField must="must" label="상태" id="state">
              <NativeSelect placeholder="상태 선택" 
                datalists={stateList} 
                value={form.state}
                dataValue="code"
                dataText="codeNm"
                onChange={(value)=>{
                  updateField('state',value)
                }}
                />
                
            </FormField>
          </S.ColFormWrap>
          

          <S.EditorWrap>
            <Tiptap content={form.content} onChange={(value)=>{
                updateField('content',value)
              }}/>
          </S.EditorWrap>

          <div>
            <button>취소</button>
            <button type="button" disabled={!isFilled}  onClick={()=>{
              boardPost()
            }}>게시글 작성</button>
          </div>
        </form>
      </S.WriteContainer>
    </>
  );
}

export default BoardWrite;
