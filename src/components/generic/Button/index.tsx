import type { FC } from 'react';

export type ButtonProps = {
  style: string;
  handleChangeNextPage: () => void;
  title: string;
};

const Button: FC<ButtonProps> = ({ style, handleChangeNextPage, title }) => {
  return (
    <button className={style} onClick={handleChangeNextPage}>
      {title}
    </button>
  );
};

export default Button;
