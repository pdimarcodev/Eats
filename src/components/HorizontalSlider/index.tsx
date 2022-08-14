import {FC} from 'react';
import {FlatList} from 'react-native';

import {RestaurantCard} from '@components/RestaurantCard';
import {Container, Title} from './styles';
import {CategoryCard} from '@components/CategoryCard';
import {Spacer} from '@components/Spacer';
import {FavoriteCard} from '@components/FavoriteCard';

/**
 * Types
 */

type CardType = 'restaurant' | 'category' | 'favorite';

interface HorizontalSliderProps {
  title: string;
  data: any[];
  type: CardType;
}

/**
 * HorizontalSlider
 */

export const HorizontalSlider: FC<HorizontalSliderProps> = ({
  title,
  data,
  type,
}) => {
  const renderItem = ({item}: {item: any}) => {
    switch (type) {
      case 'restaurant':
        return <RestaurantCard data={item} />;
      case 'category':
        return <CategoryCard data={item} />;
      case 'favorite':
        return <FavoriteCard data={item} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Spacer height={5} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Spacer />
    </Container>
  );
};
