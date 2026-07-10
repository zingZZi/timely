import { useEffect, useState } from "react";
import {
  Send,
  RefreshCw,
  SquareArrowOutUpRight,
  FileText,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import { Textarea } from "../../../../../components/form/textarea/Textarea.style";
import {
  BasicBtn,
  BasicCancleBtn,
} from "../../../../../components/Button/Button";
import FormField from "../../../../../components/form/FormField/FormField";
import Input from "../../../../../components/form/Input/Input";
import NativeSelect from "../../../../../components/form/Select/NativeSelect";
import * as S from "./ProgressUpdateForm.style";
import { UPDATE_TYPE_OPTIONS } from "../../../../../constants/project";
import { postProjectUpdateList } from "../../../../../api/projectApi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProgressUpdateForm({ setFormShow }) {
  let userInfo = useSelector((state) => {
    return state.userInfo;
  });
  const projectSn = useParams().id;
  const [formValue, setFormValue] = useState({
    updateType: "",
    authorUserNm: userInfo.userNm,
    title: "",
    content: "",
    files: "",
  });

  function updateForm(key, value) {
    setFormValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  const submitForm = async () => {
    const submitData = {
      ...formValue,
      authorUserSn: userInfo.userSn,
    };
    try {
      await postProjectUpdateList(projectSn, submitData);
    } catch (error) {
      console.log(error);
    }
  };
  //   useEffect(() => {
  //     console.log(formValue.content);
  //   }, [formValue]);
  return (
    <S.UpdateForm>
      <fieldset>
        <legend className="text-ir">기본 입력 내용</legend>
        <S.FlexBox>
          <FormField label="유형" id="priority" must>
            <NativeSelect
              placeholder="유형을 선택해주세요"
              datalists={UPDATE_TYPE_OPTIONS}
              value={formValue.updateType}
              dataValue="typeCd"
              dataText="typeNm"
              size="small"
              onChange={(e) => {
                updateForm("updateType", e);
              }}
            />
          </FormField>
          <FormField label="작성자">
            <Input size="small" value={formValue.authorUserNm} />
          </FormField>
        </S.FlexBox>
        <FormField label="제목" must>
          <Input
            size="small"
            value={formValue.title}
            onChange={(e) => {
              updateForm("title", e);
            }}
          />
        </FormField>
        <FormField label="내용" id="content" must>
          <Textarea
            name="content"
            placeholder="업데이트 내용을 입력하세요"
            value={formValue.content}
            onChange={(e) => {
              updateForm("content", e.target.value);
            }}
          />
        </FormField>
      </fieldset>
      <fieldset>
        <legend className="text-ir">파일업로드</legend>
      </fieldset>
      <S.BtnsWrap>
        <BasicCancleBtn>취소</BasicCancleBtn>
        <BasicBtn type="button" onClick={submitForm}>
          <Send />
          작성
        </BasicBtn>
      </S.BtnsWrap>
    </S.UpdateForm>
  );
}

export default ProgressUpdateForm;
