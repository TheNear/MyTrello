import styled from "styled-components";

export const NewItemFormContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
`;

export const NewItemButton = styled.button`
  background-color: ${({ theme }) => theme.color_button};
  border: none;
  border-radius: ${({ theme }) => theme.size_border_radius};
  box-shadow: none;
  color: #fff;
  padding: .6rem 1.2rem;
  text-align: center;
`;

export const NewItemInput = styled.input`
  border: none;
  border-radius: ${({ theme }) => theme.size_border_radius};
  box-shadow: #091e4240 0 1px 0 0;
  margin-bottom: .7rem;
  padding: .7rem 1.2rem;
  width: 100%;
`;
