import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import TodoActions from '../todoActions';

describe('TodoActions', () => {
  const mockChangeStatus = jest.fn();

  const props = {
    changeStatus: mockChangeStatus,
  };

  afterEach(() => {
    // mockChangeStatus.mockClear();
    jest.clearAllMocks();
  });

  test('should render TodoActions', () => {
    const { container } = render(<TodoActions {...props} />);

    expect(container).toMatchSnapshot();
  });

  test('should check length of buttons', () => {
    const { getAllByRole } = render(<TodoActions {...props} />);

    expect(getAllByRole('button').length).toBe(3);
  });

  test('should click all button', () => {
    const { getByTestId } = render(<TodoActions {...props} />);

    fireEvent.click(getByTestId('btn-all'));

    expect(mockChangeStatus).toHaveBeenCalledTimes(1);
    expect(mockChangeStatus).toHaveBeenCalledWith('all');
  });

  test('should click pending button', () => {
    const { getByTestId } = render(<TodoActions {...props} />);

    fireEvent.click(getByTestId('btn-pending'));

    expect(mockChangeStatus).toHaveBeenCalledTimes(1);
    expect(mockChangeStatus).toHaveBeenCalledWith('pending');
  });

  test('should click complete button', () => {
    const { getByTestId } = render(<TodoActions {...props} />);

    fireEvent.click(getByTestId('btn-completed'));

    expect(mockChangeStatus).toHaveBeenCalledTimes(1);
    expect(mockChangeStatus).toHaveBeenCalledWith('completed');
  });
});
