import {FC} from 'react';

import {Rate} from '@components/Rate';
import {Spacer} from '@components/Spacer';
import {
  BusinessName,
  CardImage,
  Container,
  DeliveryTime,
  Description,
  InfoWrapper,
  Logo,
  TextWrapper,
  WhiteBar,
} from './styles';

/**
 * Types
 */

interface FavoriteCardProps {
  data: any;
}

/**
 * FavoriteCard
 */

export const FavoriteCard: FC<FavoriteCardProps> = ({data}) => {
  return (
    <Container>
      <CardImage source={data.image} resizeMode="cover">
        <Logo source={data.icon} />
        <WhiteBar />
      </CardImage>
      <InfoWrapper>
        <TextWrapper>
          <Description>{data.product}</Description>
          <Rate rate={data.rate} />
        </TextWrapper>
        <Spacer height={2} />
        <TextWrapper>
          <BusinessName>{data.businessName}</BusinessName>
          <DeliveryTime>{data.deliveryTime}</DeliveryTime>
        </TextWrapper>
      </InfoWrapper>
    </Container>
  );
};
