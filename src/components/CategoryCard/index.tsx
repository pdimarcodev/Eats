import {FC} from 'react';

import {CardImage, Title} from './styles';

interface CategoryCardProps {
  data: any;
}

export const CategoryCard: FC<CategoryCardProps> = ({data}) => {
  return (
    <CardImage source={data.image} resizeMode="contain">
      <Title>{data.name}</Title>
    </CardImage>
  );
};
