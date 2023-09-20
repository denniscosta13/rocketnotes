import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  

  margin-bottom: 8px;
  border-radius: 10px;
  
  > input {
    padding: 12px;
    height: 56px;
    width: 100%;
    
    background: transparent;
    border: none;
    
    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

  }
 
  > svg {
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`