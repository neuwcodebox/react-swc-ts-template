import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MainPage } from './MainPage';
import '@testing-library/jest-dom';

describe('MainPage', () => {
  it('increments count when button is clicked', () => {
    render(<MainPage />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  });
});
