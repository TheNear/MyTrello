import styled from "styled-components";

interface AddItemButtonProps {
  dark?: boolean,
}

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border: none;
  border-radius: ${({ theme }) => theme.size_border_radius};
  color: ${({ dark, theme }) => dark ? theme.color_font : "#fff"};
  cursor: pointer;
  max-width: 300px;
  padding: 1rem 1.2rem;
  text-align: left;
  transition: background 0.85s ease-in;
  width: 100%;

  &:hover {
    background-color: #ffffff52;
  }
`;
