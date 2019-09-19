import styled, { css } from "styled-components";
import { Link } from "react-router-dom";



const _optionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
    margin-bottom: 20px;
  }
`;

const OptionsContainer = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

const OptionLink = styled(Link)`
    ${_optionContainerStyles}
`;

const OptionDiv = styled.div`
    ${_optionContainerStyles}
`;

export { HeaderContainer, LogoContainer , OptionsContainer, OptionLink, OptionDiv};

