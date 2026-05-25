import FormField from "../../components/form/FormField/FormField";
import Input from "../../components/form/Input/Input";
import NativeSelect from "../../components/form/Select/NativeSelect";

import * as S from "./BoardWrite.style";
import Tiptap from "./TipTab";

function BoardWrite() {
  const categoryList = ["공지", "아이디어"];
  return (
    <>
      <S.BackLink to="">게시판으로 돌아가기</S.BackLink>
      <section>
        <h2>새글작성</h2>
        <form action="">
          <fieldset className="text-ir">게시판 글 작성</fieldset>
          <FormField must="must" label="제목 " id="title">
            <Input placeholder="게시글 제목을 입력하세요" />
          </FormField>

          <FormField must="must" label="카테고리" id="category">
            <NativeSelect
              placeholder="카테고리 선택"
              datalists={categoryList}
            />
          </FormField>

          <FormField must="must" label="상태" id="state">
            <NativeSelect placeholder="상태 선택" datalists={categoryList} />
          </FormField>

          <div>
            <Tiptap />
          </div>

          <div>
            <button>취소</button>
            <button>게시글 작성</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default BoardWrite;
