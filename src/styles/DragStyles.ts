import styled from "styled-components";

interface DragPreviewContainerProps {
  isHidden?: boolean,
}

export const DragPreviewContaienr = styled.div<DragPreviewContainerProps>`
  /* opacity: ${({ isHidden }) => isHidden ? 0.3 : 1}; */
  filter: ${({ isHidden }) => isHidden ? "contrast(0%);" : "contrast(100%);"};
`;