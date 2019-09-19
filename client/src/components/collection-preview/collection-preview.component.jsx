import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  TitleContainer,
  ItemsContainer
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, routeName, history, match }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title}
      </TitleContainer>
      <ItemsContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </ItemsContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
