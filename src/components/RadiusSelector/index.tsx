import {FC} from 'react';
import {
  Container,
  ItemNonSelected,
  ItemSelected,
  Km,
  Line,
  TextWrapper,
} from './styles';

/**
 * Types
 */

type RadiusSelectorProps = {
  selectedValue: number;
  onSelect: (value: number) => void;
};

/**
 * Constants
 */

const RADIUS_OPTIONS = [1000, 2000, 3000, 4000, 5000];

/**
 * RadiusSelector
 */

export const RadiusSelector: FC<RadiusSelectorProps> = ({
  selectedValue,
  onSelect,
}) => {
  return (
    <>
      <TextWrapper>
        <Km>1 KM</Km>
        <Km>5 KM</Km>
      </TextWrapper>
      <Container>
        <Line />
        {RADIUS_OPTIONS.map(value =>
          value === selectedValue ? (
            <ItemSelected key={value} />
          ) : (
            <ItemNonSelected
              key={value}
              onPress={() => onSelect(value)}
              hitSlop={10}
            />
          ),
        )}
      </Container>
    </>
  );
};
