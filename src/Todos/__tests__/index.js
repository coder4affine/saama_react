import 'isomorphic-fetch';
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Todos from '../index';

describe('Todos', () => {
  test('should render component', () => {
    const { container } = render(<Todos />);
    expect(container).toMatchSnapshot();
  });

  test('should render component after api call', async () => {
    const mockSuccessResponse = [
      {
        text: 'add new todo',
        isDone: true,
        id: 14,
      },
    ];

    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    const mockAPI = jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise);

    const { container } = render(<Todos />);

    await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1));
    expect(container).toMatchSnapshot();
  });
});
