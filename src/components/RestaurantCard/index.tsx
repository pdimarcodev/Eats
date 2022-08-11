import {FC} from 'react';
import {CardImage} from './styles';

interface RestaurantCardProps {
  data: any;
}

export const RestaurantCard: FC<RestaurantCardProps> = ({data}) => {
  console.log(data.icon);
  return <CardImage source={data.icon} />;
};
