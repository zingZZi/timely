import FormField from "../../../../../components/form/FormField/FormField";
import Input from "../../../../../components/form/Input/Input";
import NativeSelect from "../../../../../components/form/Select/NativeSelect";
import * as S from "./AddTimeLine.style";
import {
  BasicBtn,
  BasicCancleBtn,
} from "../../../../../components/Button/Button";
function AddTimeLine() {
  return (
    <S.AddTimeLine>
      <fieldset>
        <legend className="text-ir">타임라인 추가양식 폼</legend>
        <S.Colgroup>
          <FormField label="단계명" must>
            <Input size="4.2" placeholder="ex) 기획, 디자인, 개발" />
          </FormField>
          <FormField label="상태" must>
            <NativeSelect
              size="small"
              datalists={["test", "test2"]}
              dataValue=""
              dataText=""
            />
          </FormField>
        </S.Colgroup>
        <S.Colgroup>
          <FormField label="시작일" must>
            <Input size="4.2" type="date" />
          </FormField>
          <FormField label="종료일" must>
            <Input size="4.2" type="date" />
          </FormField>
        </S.Colgroup>

        <FormField label="설명" must>
          <Input size="4.2" placeholder="이 단계에서 수행할 작업 내용" />
        </FormField>
      </fieldset>
      <S.BtnWrap>
        <BasicCancleBtn>취소</BasicCancleBtn>
        <BasicBtn>추가</BasicBtn>
      </S.BtnWrap>
    </S.AddTimeLine>
  );
}

export default AddTimeLine;
