import * as S from "./Table.style";

function Table() {
  return (
    <S.Table>
      <S.TableHeader>
        <tr>
          <th>프로젝트</th>
          <th>상태</th>
          <th>진행률</th>
          <th>마감일</th>
        </tr>
      </S.TableHeader>
      <S.TableBody>
        <tr>
          <td></td>
          <td>상태</td>
          <td>진행률</td>
          <td>마감일</td>
        </tr>
        <tr>
          <td>프로젝트</td>
          <td>상태</td>
          <td>진행률</td>
          <td>마감일</td>
        </tr>
      </S.TableBody>
    </S.Table>
  );
}

export default Table;
