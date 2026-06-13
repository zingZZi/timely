import { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import { Textarea } from '../../../../../components/form/textarea/Textarea.style';
import { BasicBtn, BasicCancleBtn } from '../../../../../components/Button/Button';
import FormField from '../../../../../components/form/FormField/FormField';
import Input from '../../../../../components/form/Input/Input';
import NativeSelect from '../../../../../components/form/Select/NativeSelect';
import * as S from './ProgressUpdateForm.style'
function ProgressUpdateForm (){
    const [formValue,setFormValue] = useState({
        type:"",
        author:'',
        title:'',
        contnet:'',
        files:'',
    })
    return(
        <S.UpdateForm>
            <fieldset>
                <legend className='text-ir'>기본 입력 내용</legend>
                <S.FlexBox>
                    <FormField label="유형" id="priority" must>
                        <NativeSelect
                        size="small"
                        placeholder="유형을 선택해주세요"
                        datalists={["진행상황", "마일스톤"]}
                        value={formValue.type}
                        />
                    </FormField>
                    <FormField  label="작성자">
                        <Input size='small'/>
                    </FormField>
                </S.FlexBox>
                <FormField label="제목" must>
                    <Input size='small'/>
                </FormField>
                <FormField label="내용" id="content">
                    <Textarea name="content"/>
                </FormField>
            </fieldset>
            <fieldset>
                <legend className='text-ir'>파일업로드</legend>

            </fieldset>
            <S.BtnsWrap>
                <BasicCancleBtn>취소</BasicCancleBtn>
                <BasicBtn><Send/>작성</BasicBtn>
            </S.BtnsWrap>
        </S.UpdateForm>
    )
}

export default ProgressUpdateForm;