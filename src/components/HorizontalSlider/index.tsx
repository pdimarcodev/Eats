import {FC} from 'react';
import {FlatList} from 'react-native';
import {RestaurantCard} from '@components/RestaurantCard';
import {Spacer} from '@components/Spacer';
import {Container, Title} from './styles';

interface HorizontalSliderProps {
  title: string;
  data: any[];
}

export const HorizontalSlider: FC<HorizontalSliderProps> = ({title, data}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Spacer />
      <FlatList
        data={data}
        renderItem={({item}: {item: any}) => <RestaurantCard data={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};
