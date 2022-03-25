import styles from '@Components/generic/Spinner/Spinner.module.css';

const Spinner = () => {
  return (
    <>
      <div className={styles.center}>
        <div className={styles.spinner}></div>
      </div>
    </>
  );
};

export default Spinner;
