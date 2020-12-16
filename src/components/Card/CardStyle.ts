import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.color_card_bg};
  border-radius: ${({ theme }) => theme.size_border_radius};
  box-shadow: #091e4240 0 1px 0 0;
  cursor: pointer;
  margin-bottom: 0.5rem;
  max-width: 300px;
  padding: 0.7rem 1.2rem;
`;
