import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  color: rgba(35,0,70,1)
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: rgba(35,0,70,0.6);
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
