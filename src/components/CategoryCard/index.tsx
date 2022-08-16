import {FC} from 'react';

import {CardImage, Container, Title} from './styles';

/**
 * Types
 */

interface CategoryCardProps {
  data?: any;
  isFirst?: boolean;
}

/**
 * CategoryCard
 */

export const CategoryCard: FC<CategoryCardProps> = ({data, isFirst}) => {
  return (
    <Container isFirst={isFirst}>
      <CardImage source={data.image} resizeMode="cover">
        <Title>{data.name}</Title>
      </CardImage>
    </Container>
  );
};
