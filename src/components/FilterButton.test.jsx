/**
 * skenario testing
 *
 * - FilterButton component
 *   - should handle onClick event correctly
 *   - should handle active state correctly
 *   - should handle children rendering correctly
 */
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterButton from './FilterButton';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

describe('FilterButton component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle onClick event correctly', async () => {
    // arrange
    const onClick = vi.fn();
    render(
      <FilterButton onClick={onClick}>
        <span>Test Button</span>
      </FilterButton>
    );
    const button = screen.getByRole('button', { name: /test button/i });

    // act
    await userEvent.click(button);

    // assert
    expect(onClick).toHaveBeenCalled();
  });

  it('should handle active state correctly', () => {
    // arrange
    const { rerender } = render(
      <FilterButton active={false} onClick={() => {}}>
        <span>Inactive Button</span>
      </FilterButton>
    );
    const inactiveButton = screen.getByRole('button', {
      name: /inactive button/i,
    });

    // assert inactive state
    expect(inactiveButton).toHaveClass(
      'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
    );

    // act - rerender with active state
    rerender(
      <FilterButton active={true} onClick={() => {}}>
        <span>Active Button</span>
      </FilterButton>
    );
    const activeButton = screen.getByRole('button', {
      name: /active button/i,
    });

    // assert active state
    expect(activeButton).toHaveClass(
      'bg-primary text-white hover:bg-primary/90'
    );
  });

  it('should handle children rendering correctly', () => {
    // arrange
    render(
      <FilterButton onClick={() => {}}>
        <span>Child Content</span>
      </FilterButton>
    );
    const button = screen.getByRole('button', { name: /child content/i });

    // assert
    expect(button).toBeInTheDocument();
  });
});
