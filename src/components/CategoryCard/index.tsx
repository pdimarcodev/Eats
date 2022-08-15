import {FC} from 'react';

import {CardImage, Container, Title} from './styles';

interface CategoryCardProps {
  data?: any;
}

export const CategoryCard: FC<CategoryCardProps> = ({data}) => {
  return (
    <Container>
      <CardImage source={data.image} resizeMode="cover">
        <Title>{data.name}</Title>
      </CardImage>
    </Container>
  );
};
