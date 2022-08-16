import {FC, cloneElement, ReactElement} from 'react';
import {FlatList} from 'react-native';

import {RestaurantCard} from '@components/RestaurantCard';
import {CategoryCard} from '@components/CategoryCard';
import {Spacer} from '@components/Spacer';
import {FavoriteCard} from '@components/FavoriteCard';
import {Container, Title} from './styles';

/**
 * Types
 */

type CardType = 'restaurant' | 'category' | 'favorite';

type CardItem = {
  item: any;
  index: number;
};

interface HorizontalSliderProps {
  title: string;
  data: any[];
  type: CardType;
}

/**
 * Helpers
 */

const CardMapper: Record<CardType, ReactElement> = {
  restaurant: <RestaurantCard />,
  category: <CategoryCard />,
  favorite: <FavoriteCard />,
};

/**
 * HorizontalSlider
 */

export const HorizontalSlider: FC<HorizontalSliderProps> = ({
  title,
  data,
  type,
}) => {
  const card = CardMapper[type];

  const renderItem = ({item, index}: CardItem) =>
    cloneElement(card, {
      data: item,
      isFirst: index === 0,
    });

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
