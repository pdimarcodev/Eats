import {FC, useState} from 'react';
import {Map} from '@components/Map';
import {RootStackParams} from '@navigation/Home';
import {StackScreenProps} from '@react-navigation/stack';
import {useUserContext} from 'context/UserContext';
import {Container} from './styles';
import {Modal} from 'react-native';

/**
 * Types
 */

type SearchAreaScreenProps = StackScreenProps<RootStackParams, 'SearchArea'>;

/**
 *  SearchArea
 */

export const SearchAreaScreen: FC<SearchAreaScreenProps> = () => {
  const {user, setUser} = useUserContext();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      visible={modalVisible}
      animationType="none"
      transparent
      onRequestClose={() => setModalVisible(state => !state)}>
      <Container>
        <Map selectedLocation={user.location} />
      </Container>
    </Modal>
  );
};
