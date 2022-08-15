import {FC, useState} from 'react';
import {Map} from '@components/Map';
import {RootStackParams} from '@navigation/Home';
import {StackScreenProps} from '@react-navigation/stack';
import {useUserContext} from 'context/UserContext';
import {Container} from './styles';
import {Modal, Text, View} from 'react-native';

/**
 * Types
 */

type RestaurantDetailScreenProps = StackScreenProps<
  RootStackParams,
  'RestaurantDetail'
>;

/**
 *  RestaurantDetail
 */

export const RestaurantDetailScreen: FC<RestaurantDetailScreenProps> = ({
  restaurant,
}) => {
  return (
    <View>
      <Text>rest detail</Text>
    </View>
  );
};
