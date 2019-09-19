import styled from "styled-components";


const CheckoutItemContainer = styled.section`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const TextContainer = styled.span`
  width: 23%;
`;

const QuantityContainer = styled(TextContainer)`
    display: flex;
  
    div {
      cursor: pointer;
    }
  
    span {
      margin: 0px 10px;
    }
`

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export {
  CheckoutItemContainer,
  TextContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer
};
