import styled from "styled-components";

const SignInContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 0 auto 20px;
  }
`;

const TitleContainer = styled.h2`
  margin: 10px 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    @media screen and (max-width: 800px) {
      min-width: unset;
    }
  }
`;

export {SignInContainer, TitleContainer, ButtonsContainer}