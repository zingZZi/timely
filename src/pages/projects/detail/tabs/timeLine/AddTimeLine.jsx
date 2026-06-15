import FormField from "../../../../../components/form/FormField/FormField";
import Input from "../../../../../components/form/Input/Input";
import NativeSelect from "../../../../../components/form/Select/NativeSelect";
import * as S from "./AddTimeLine.style";
function AddTimeLine() {
  return (
    <form>
      <fieldset>
        <legend className="text-ir">타임라인 추가양식 폼</legend>
        <S.Colgroup>
          <FormField label="단계명" must>
            <Input size="4.2" />
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
          <Input size="4.2" />
        </FormField>
      </fieldset>
    </form>
  );
}

export default AddTimeLine;
