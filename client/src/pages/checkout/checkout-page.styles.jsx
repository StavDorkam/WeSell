import styled from "styled-components";

const CheckoutPageContainer = styled.section`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media (max-width: 800px) {
    width: 80vw;
    margin: 20px auto;
  }

  & button {
    margin-left: auto;
  }
`;

const CheckoutHeaderContainer = styled.header`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const TotalContainer = styled.p`
  margin: 30px 0px;
  margin-left: auto;
  font-size: 36px;
`;

const TestWarningContainer = styled.div`
  text-align: center;
  margin: 20px 0px;
  font-size: 24px;
  color: red;
`;

export {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer
};
