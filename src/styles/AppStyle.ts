import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.color_background};
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 2rem;
  width: 100%;
`;
