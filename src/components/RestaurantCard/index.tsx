import {FC} from 'react';

import {Icon} from '@components/Icon';
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
  Rate,
} from './styles';

interface RestaurantCardProps {
  data: any;
}

export const RestaurantCard: FC<RestaurantCardProps> = ({data}) => {
  return (
    <Container>
      <CardImage source={data.icon} />

      <InfoWrapper>
        <Name>{data.name}</Name>
        <Info>
          <Rate>
            <Icon name="Star" size={12} />
            <InfoText>{data.rate}</InfoText>
          </Rate>
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
