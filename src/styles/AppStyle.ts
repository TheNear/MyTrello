import styled from "styled-components";

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.color_background};
  display: flex;
  overflow-x: auto;
  height: 100%;
  padding: 2rem;
`;
