import {Icon} from '@components/Icon';
import {FC} from 'react';
import {
  CardImage,
  Container,
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
  console.log(data.icon);
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
    </Container>
  );
};
