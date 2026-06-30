import BarChart from "../graph/BarChart/BarChart";
import Card from "./Card";
import * as S from "./Card.style";

function StateCard({ title, num, footer = false, graph = false, icon, color }) {
  return (
    <>
      <Card>
        <S.StateCardFlexbox>
          <S.WorkInfo>
            <Card.Header>
              <S.CardTitle>{title}</S.CardTitle>
            </Card.Header>
            <Card.Body>
              <S.CardNum>{num}</S.CardNum>
            </Card.Body>
          </S.WorkInfo>
          <S.StatusIcon color={color}>{icon}</S.StatusIcon>
        </S.StateCardFlexbox>
        {footer ? (
          <Card.Footer>
            {graph ? <BarChart percent={graph} /> : null}
            {footer}
          </Card.Footer>
        ) : null}
      </Card>
    </>
  );
}

export default StateCard;
