import type { FC } from 'react';
import styles from '@Components/CharacterDetails/CharacterDetails.module.css';
import type { ICharacter } from '@Interfaces/domain/character.interface';

export type CharacterDetailsProps = {
  details: ICharacter;
};

const CharacterDetails: FC<CharacterDetailsProps> = ({ details }) => {
  return (
    <div className={styles.details__container}>
      <h3>Character details</h3>
      <p className={styles.details__nameCharacter}>{details.name}</p>
      <ul className={styles.details__characterDetails}>
        <li>Birth Year: {details.birthYear}</li>
        <li>Height: {details.height}</li>
        <li>Mass: {details.mass}</li>
      </ul>
    </div>
  );
};

export default CharacterDetails;
