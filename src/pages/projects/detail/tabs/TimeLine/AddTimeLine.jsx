import FormField from "../../../../../components/form/FormField/FormField";
import Input from "../../../../../components/form/Input/Input";
import NativeSelect from "../../../../../components/form/Select/NativeSelect";
import * as S from "./AddTimeLine.style";
import {
  BasicBtn,
  BasicCancleBtn,
} from "../../../../../components/Button/Button";
import { useState } from "react";
import { TIMELINE_STATUS_OPTIONS } from "../../../../../constants/project";
import { postTimeline } from "../../../../../api/projectApi";
import { useParams } from "react-router-dom";
function AddTimeLine({ fetchDatas }) {
  const projectSn = useParams().id;
  const [form, setForm] = useState({
    phaseNm: "",
    description: "",
    status: "",
    startDt: "",
    endDt: "",
  });
  function updateForm(key, value) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }
  const submitForm = async () => {
    try {
      await postTimeline(projectSn, form);
      fetchDatas();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.AddTimeLine>
      <fieldset>
        <legend className="text-ir">타임라인 추가양식 폼</legend>
        <S.Colgroup>
          <FormField label="단계명" must>
            <Input
              size="4.2"
              placeholder="ex) 기획, 디자인, 개발"
              value={form.phaseNm}
              onChange={(value) => {
                updateForm("phaseNm", value);
              }}
            />
          </FormField>
          <FormField label="상태" must>
            <NativeSelect
              size="small"
              placeholder="상태"
              datalists={TIMELINE_STATUS_OPTIONS}
              dataValue="statusCd"
              dataText="statusNm"
              value={form.status}
              onChange={(value) => {
                updateForm("status", value);
              }}
            />
          </FormField>
        </S.Colgroup>
        <S.Colgroup>
          <FormField label="시작일" must>
            <Input
              size="4.2"
              type="date"
              value={form.startDt}
              onChange={(value) => {
                updateForm("startDt", value);
              }}
            />
          </FormField>
          <FormField label="종료일" must>
            <Input
              size="4.2"
              type="date"
              value={form.endDt}
              onChange={(value) => {
                updateForm("endDt", value);
              }}
            />
          </FormField>
        </S.Colgroup>

        <FormField label="설명" must>
          <Input
            size="4.2"
            placeholder="이 단계에서 수행할 작업 내용"
            value={form.description}
            onChange={(value) => {
              updateForm("description", value);
            }}
          />
        </FormField>
      </fieldset>
      <S.BtnWrap>
        <BasicCancleBtn>취소</BasicCancleBtn>
        <BasicBtn
          type="button"
          onClick={() => {
            submitForm();
          }}
        >
          추가
        </BasicBtn>
      </S.BtnWrap>
    </S.AddTimeLine>
  );
}

export default AddTimeLine;
