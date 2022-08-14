import {FC} from 'react';
import {Text} from 'react-native';

import {CardImage, Container, InfoWrapper, Logo, Title} from './styles';

interface FavoriteCardProps {
  data: any;
}

export const FavoriteCard: FC<FavoriteCardProps> = ({data}) => {
  return (
    <Container>
      <CardImage source={data.image} resizeMode="cover">
        <Logo source={data.icon} />
        {/* <Title>{data.product}</Title> */}
      </CardImage>
      <InfoWrapper>{/* <Text>Hola</Text> */}</InfoWrapper>
    </Container>
  );
};
