/* eslint-disable import/export */
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';

const customRender = (ui: ReactElement, options = {}) => {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => <div>{children}</div>,
    ...options,
  });
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
