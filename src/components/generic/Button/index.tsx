import type { FC } from 'react';

export type ButtonProps = {
  style: string;
  disableButton: boolean;
  handleChangeNextPage: () => void;
  title: string;
};

const Button: FC<ButtonProps> = ({
  style,
  disableButton,
  title,
  handleChangeNextPage,
}) => {
  return (
    <button
      className={style}
      disabled={disableButton}
      onClick={handleChangeNextPage}
    >
      {title}
    </button>
  );
};

export default Button;
