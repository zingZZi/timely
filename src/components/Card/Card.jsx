import * as S from "./Card.styles";

function Card({ children, variant = "default" }) {
  return <S.Container variant={variant}>{children}</S.Container>;
}

function Header({ children }) {
  return <S.Header>{children}</S.Header>;
}

function Body({ children }) {
  return <S.Body>{children}</S.Body>;
}

function Footer({ children }) {
  return <S.Footer>{children}</S.Footer>;
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
