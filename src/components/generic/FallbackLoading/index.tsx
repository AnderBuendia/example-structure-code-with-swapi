import type { FC } from 'react';
import styles from '@Components/generic/FallbackLoading/FallbackLoading.module.css';
import Spinner from '../Spinner';

const FallbackLoading: FC = () => {
  return (
    <div className={styles.fallbackLoading__container}>
      <h3>Loading...</h3>
      <Spinner />
    </div>
  );
};

export default FallbackLoading;
