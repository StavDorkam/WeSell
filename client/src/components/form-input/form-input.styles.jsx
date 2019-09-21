import styled, { css } from "styled-components";

const SUB_COLOR = "grey";
const MAIN_COLOR = "black";
const _shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${MAIN_COLOR};
`;

const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  font-family: "Open Sans Condensed", sans-serif;
`;

const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${SUB_COLOR};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${SUB_COLOR};
  margin: 25px 0;
  letter-spacing: ${({ type }) => (type === "password" ? "0.3em" : "")};

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${_shrinkLabelStyles}
  }
`;

const FormInputLabel = styled.label`
  color: ${SUB_COLOR};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
      ${_shrinkLabelStyles}
  }
`;

export {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
}