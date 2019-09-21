import styled from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 0 auto 20px;
  }
`;

const TitleContainer = styled.h2`
  margin: 10px 0;
`;

export {SignUpContainer, TitleContainer}
