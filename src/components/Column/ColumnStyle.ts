import styled from "styled-components";
import { DragPreviewContaienr } from "../../styles/DragStyles";


//TODO: Заменить фиксированные значения
export const ColumnContainer = styled(DragPreviewContaienr)`
  background-color: ${({ theme }) => theme.color_column};
  border-radius: ${({ theme }) => theme.size_border_radius};
  flex-grow: 0;
  margin-right: 20px;
  min-height: 40px;
  padding: 8px;
  min-width: 300px;
`;

export const ColumnTitle = styled.div`
  font-weight: bold;
  padding: 6px 16px 12px;
`;