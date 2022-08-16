import {FC} from 'react';

import {CardImage, Container, Title} from './styles';

interface CategoryCardProps {
  data?: any;
  isFirst?: boolean;
}

export const CategoryCard: FC<CategoryCardProps> = ({data, isFirst}) => {
  return (
    <Container isFirst={isFirst}>
      <CardImage source={data.image} resizeMode="cover">
        <Title>{data.name}</Title>
      </CardImage>
    </Container>
  );
};
