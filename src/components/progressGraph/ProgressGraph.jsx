import * as S from "./ProgressGraph.style";
function  ProgressGraph ({percent}){
    return(
        <S.Graph>
            <S.GraphPerCent style={{ width: `${percent}%` }}></S.GraphPerCent>
        </S.Graph>
    )
}

export default ProgressGraph;