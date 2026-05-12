import Card from "./Card";
import * as S from "./Card.style";

function StateCard({ title, num, footer = false, graph = false }) {
  return (
    <>
      <Card>
        <div>
          <Card.Header>
            <S.CardTitle>{title}</S.CardTitle>
          </Card.Header>
          <Card.Body>
            <S.CardNum>{num}</S.CardNum>
            {graph ? <>그래프</> : null}
          </Card.Body>
        </div>
        {footer ? <Card.Footer>{footer}</Card.Footer> : null}
      </Card>
    </>
  );
}

export default StateCard;
