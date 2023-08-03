import styled from '@emotion/styled';

export const StyledUserMenu = styled.div`
  display: flex;
  gap: 20px;

  .userName {
    /* font-size: 12px; */
    font-weight: bold;
    /* color: */
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }

  .userBtn {
    border: none;
    background: #000;
    color: #fff;
    padding: 7px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
