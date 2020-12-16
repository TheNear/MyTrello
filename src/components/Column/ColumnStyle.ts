import styled from "styled-components";


//TODO: Заменить фиксированные значения
export const ColumnContainer = styled.div`
  background-color: ${({ theme }) => theme.color_column};
  border-radius: 3px;
  flex-grow: 0;
  margin-right: 20px;
  min-height: 40px;
  padding: 8px;
  width: 300px;
`;

export const ColumnTitle = styled.div`
  font-weight: bold;
  padding: 6px 16px 12px;
`;