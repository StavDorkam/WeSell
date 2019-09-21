import styled from "styled-components";

const CollectionPageContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const CollectionItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
`;

export {CollectionPageContainer, CollectionItems, CollectionTitle};
