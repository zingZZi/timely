import * as S from './BarChart.style'
function BarChart({percent,state="default"}){
    return(
        <S.ChartWrap>
            <S.ChartPercent $state={state} style={{width:percent}}/>
        </S.ChartWrap>
    )
}

export default BarChart;