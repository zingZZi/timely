import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  BasicBtn,
  BasicCancleBtn,
} from "../../../../../components/Button/Button";
import FormField from "../../../../../components/form/FormField/FormField";
import Input from "../../../../../components/form/Input/Input";
import NativeSelect from "../../../../../components/form/Select/NativeSelect";
import { PROJECT_PRIORITY_OPTIONS } from "../../../../../constants/project";
import * as S from "./TaskListTab.style";
import { postProjectTask } from "../../../../../api/projectApi";
import { isEmptyValue } from "../../../../../common/valuCheck";
function TaskAddForm({ assignableUsers, setFormShow, upDataForm }) {
  const projectSn = useParams().id;
  const [addTaskForm, setAddTaskForm] = useState({
    taskNm: "",
    priority: "",
    assigneeUserSn: "",
    dueDt: "",
  });

  const REQUIRED_FIELDS = {
    taskNm: { label: "작업명", required: () => true },
    priority: { label: "우선순위", required: () => false },
    assigneeUserSn: { label: "담당자", required: () => true },
    dueDt: { label: "마감일 ", required: () => true },
  };

  const validation = (formData) => {
    const newErrors = {};
    Object.entries(REQUIRED_FIELDS).forEach(([key, { label, required }]) => {
      const value = formData[key];
      const isRequired = required(formData);
      if (!isRequired) return;
      if (isEmptyValue(value)) {
        newErrors[key] = `${label}은 필수값입니다`;
        return;
      }
    });
    return newErrors;
  };
  const [errors, setErrors] = useState({});
  const submitAddTaskForm = async (e) => {
    e.preventDefault();
    const check = validation(addTaskForm);
    setErrors(check);
    if (Object.keys(check).length > 0) return;
    try {
      await postProjectTask({ projectSn, ...addTaskForm });
      setFormShow(false);
      upDataForm();
    } catch (error) {
      console.log(error);
    }
  };

  function updateField(key, value) {
    setAddTaskForm((prev) => ({
      ...prev,
      [key]: value,
    }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      if (isEmptyValue(value)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }
  return (
    <S.AddTaskForm>
      <fieldset>
        <legend className="text-ir">작업추가하기</legend>
        <S.ColFormWrap>
          <FormField must label="작업명" id="TaskName">
            <Input
              placeholder="작업명"
              size="small"
              value={addTaskForm.taskNm}
              onChange={(value) => updateField("taskNm", value)}
              isEmptyValue={!!errors.taskNm}
            />
          </FormField>

          <FormField must label="담당자" id="assigneeUser">
            <NativeSelect
              placeholder="담당자를 선택해주세요"
              datalists={assignableUsers}
              value={addTaskForm.assigneeUserSn}
              dataValue="userSn"
              dataText="userNm"
              size="small"
              isEmptyValue={!!errors.assigneeUserSn}
              onChange={(value) => {
                updateField("assigneeUserSn", Number(value));
              }}
            />
          </FormField>
        </S.ColFormWrap>
        <S.ColFormWrap>
          <FormField label="우선순위" id="priority">
            <NativeSelect
              placeholder="우선순위를 선택해주세요"
              datalists={PROJECT_PRIORITY_OPTIONS}
              value={addTaskForm.priority}
              dataValue="priorityCd"
              dataText="priorityNm"
              size="small"
              onChange={(value) => {
                updateField("priority", value);
              }}
            />
          </FormField>
          <FormField must="must" label="마감일 " id="deadline">
            <Input
              type="date"
              size="small"
              value={addTaskForm.dueDt}
              isEmptyValue={!!errors.dueDt}
              onChange={(value) => updateField("dueDt", value)}
            />
          </FormField>
        </S.ColFormWrap>
      </fieldset>
      <S.FromBtnsWrap>
        <BasicCancleBtn>취소</BasicCancleBtn>
        <BasicBtn type="button" onClick={submitAddTaskForm}>
          추가
        </BasicBtn>
      </S.FromBtnsWrap>
    </S.AddTaskForm>
  );
}
export default TaskAddForm;
