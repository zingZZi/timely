import { X } from "lucide-react";
import ProfileImg from "../../../../components/profileImg/ProfileImg";
import * as S from "./WorkerSelected.style";
function WorkerSelected({
  data,
  size,
  multiple = false,
  value,
  compareKey,
  onChange,
}) {
  //리스트 삭제버튼
  function Delete(data) {
    const newValues = value.filter((item) => item[compareKey] !== data);
    onChange(newValues);
  }
  return (
    <S.WorkerSelected>
      <ProfileImg size={size} />
      <div>
        <S.Name>{data.userNm}</S.Name>
        <S.SelectedInfosMeta>
          <S.Part>{data.positionCd}</S.Part>
          <S.Position>{data.positionNm}</S.Position>
        </S.SelectedInfosMeta>
      </div>
      {multiple ? (
        <S.DeleteBtn
          onClick={(e) => {
            e.stopPropagation();
            Delete(data[compareKey]);
          }}
        >
          <X />
        </S.DeleteBtn>
      ) : null}
    </S.WorkerSelected>
  );
}

export default WorkerSelected;
