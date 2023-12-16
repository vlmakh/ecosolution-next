import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  padding-top: 8px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(4px);
  z-index: 10;
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    top: 24px;
    right: 30px;
    left: auto;
    transform: translate(0, 0);
  }

  @media (min-width: 1280px) {
    right: 100px;
  }
`;