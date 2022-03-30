import type { FC, Dispatch, SetStateAction } from 'react';
import styles from '@Components/Home/Home.module.css';
import Button from '@Components/generic/Button';
import type { IPeoplePage } from '@Interfaces/domain/people-page.interface';

export type PaginationProps = {
  peoplePage: IPeoplePage;
  numberOfPage: number;
  handleNumberOfPage: Dispatch<SetStateAction<number>>;
};

const Pagination: FC<PaginationProps> = ({
  peoplePage,
  numberOfPage,
  handleNumberOfPage,
}) => {
  const { previousPage, nextPage, totalPages } = peoplePage;

  const handleChangeNextPage = (sumPage: number) => {
    const newPage = numberOfPage + sumPage;

    if (previousPage && newPage <= 0) return;
    if (nextPage && newPage >= totalPages) return;

    handleNumberOfPage(newPage);
  };

  return (
    <div className={styles.pagination__container}>
      <Button
        style={styles.pagination__button}
        disableButton={!previousPage}
        handleChangeNextPage={() => handleChangeNextPage(-1)}
        title="Prev"
      />
      <div className={styles.pagination__pages}>
        {numberOfPage} / {totalPages}
      </div>
      <Button
        style={styles.pagination__button}
        disableButton={!nextPage}
        handleChangeNextPage={() => handleChangeNextPage(1)}
        title="Next"
      />
    </div>
  );
};

export default Pagination;
