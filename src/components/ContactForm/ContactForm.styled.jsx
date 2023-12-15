import styled from "@emotion/styled";
import { Form, Field, ErrorMessage } from "formik";
import InputMask from 'react-input-mask';

export const StyledForm = styled(Form)`
  padding: 36px 12px;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => p.theme.colors.grey};

  @media (max-width: 767.98px) {
    margin-top: 24px;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    width: 50%;
    margin-bottom: 100px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 120px;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 8px 0;
  background-color: ${(p) => p.theme.colors.grey};
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.colors.accent};
  font-size: 18px;
  font-family: ${(p) => p.theme.fonts.body};
  resize: none;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const StyledErrorMsg = styled(ErrorMessage)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  text-align: right;
  transform: translatey(100%);
  font-size: 10px;
  background-color: ${(p) => p.theme.colors.grey};
  border-top: 1px solid red;
  color: red;
`;

export const Send = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 3.5px 4px 3.5px 16px;
  margin-top: 16px;
  margin-left: auto;
  font-size: 16px;
  color: ${(p) => p.theme.colors.main};
  background-color: transparent;
  border: 1px solid ${(p) => p.theme.colors.accent};
  border-radius: 500px;
  cursor: pointer;

  transition: all 250ms ease-in;

  &:hover {    
    border-color: ${(p) => p.theme.colors.main};
    background-color: ${(p) => p.theme.colors.main};
    color: ${(p) => p.theme.colors.accent};
  }
`;


export const InputNumber = styled(InputMask)`
  width: 100%;
  padding: 8px 0;
  background-color: ${(p) => p.theme.colors.grey};
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.colors.accent};
  font-size: 18px;
  font-family: ${(p) => p.theme.fonts.body};
`;