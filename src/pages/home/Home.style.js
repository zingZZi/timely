import styled from "styled-components";

export let HomeLayout = styled.main`
  display: grid;
	row-gap: 2.4rem;
	column-gap: 3.6rem;
  grid-template-columns: 1fr 340px;

`;
export let HomeTotal = styled.section`
	grid-column-start: 1;
	grid-column-end: 3;
`;
export let HomeProject = styled.section`
	grid-column-start: 1;
	grid-column-end: 2;
`;
export let HomeRecent = styled.section`
	grid-column-start: 2;
	grid-column-end: 3;`;

export let HomeTotalCard = styled.ul`
  display: flex;
  gap:1.6rem;
  li {
    width: 33.3333%;
  }
`;
