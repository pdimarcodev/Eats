import {FC} from 'react';

import {
  CardImage,
  Container,
  Discount,
  DiscountRate,
  DiscountText,
  Info,
  InfoText,
  InfoWrapper,
  Name,
} from './styles';
import {Rate} from '@components/Rate';

interface RestaurantCardProps {
  data?: any;
  isFirst?: boolean;
}

export const RestaurantCard: FC<RestaurantCardProps> = ({data, isFirst}) => {
  return (
    <Container isFirst={isFirst}>
      <CardImage source={data.icon} />

      <InfoWrapper>
        <Name>{data.name}</Name>
        <Info>
          <Rate rate={data.rate} />
          <InfoText>{data.deliveryTime}</InfoText>
        </Info>
      </InfoWrapper>
      <Discount>
        <DiscountRate>{data.discount}%</DiscountRate>
        <DiscountText>DCTO</DiscountText>
      </Discount>
    </Container>
  );
};
