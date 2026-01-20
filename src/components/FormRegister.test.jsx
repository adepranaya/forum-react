/**
 * skenario testing
 *
 * - FormRegister component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should handle show password toggle correctly
 *   - should call submit function when register button is clicked or form is submitted
 */
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormRegister from './FormRegister';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

describe('FormRegister component', () => {
  afterEach(() => {
    cleanup();
  });
  it('should handle name typing correctly', async () => {
    // arrange
    render(<FormRegister submit={() => {}} />);
    const nameInput = screen.getByLabelText('Name');

    // act
    await userEvent.type(nameInput, 'user');
    // assert
    expect(nameInput).toHaveValue('user');
  });
  it('should handle email typing correctly', async () => {
    // arrange
    render(<FormRegister submit={() => {}} />);
    const emailInput = screen.getByLabelText('Email Address');

    // act
    await userEvent.type(emailInput, 'user@example.com');
    // assert
    expect(emailInput).toHaveValue('user@example.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<FormRegister submit={() => {}} />);
    const passwordInput = screen.getByLabelText('Password');

    // act
    await userEvent.type(passwordInput, 'mypassword');
    // assert
    expect(passwordInput).toHaveValue('mypassword');
  });

  it('should handle show password toggle correctly', async () => {
    // arrange
    render(<FormRegister submit={() => {}} />);
    const passwordInput = screen.getByLabelText('Password');
    const toggleButton = screen.getByRole('button', { name: /toggle password visibility/i });

    // assert initial type
    expect(passwordInput).toHaveAttribute('type', 'password');

    // act - click to show password
    await userEvent.click(toggleButton);
    // assert
    expect(passwordInput).toHaveAttribute('type', 'text');

    // act - click to hide password
    await userEvent.click(toggleButton);
    // assert
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('should call submit function when register button is clicked or form is submitted', async () => {
    // arrange
    const mockSubmit = vi.fn();
    render(<FormRegister submit={mockSubmit} />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email Address');
    const passwordInput = screen.getByLabelText('Password');
    const registerButton = screen.getByRole('button', { name: /sign up/i, type: 'submit' });

    // act - fill the form
    await userEvent.type(nameInput, 'user');
    await userEvent.type(emailInput, 'user@example.com');
    await userEvent.type(passwordInput, 'mypassword');
    // act - click the register button
    await userEvent.click(registerButton);

    // assert
    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'user',
      email: 'user@example.com',
      password: 'mypassword',
    });
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});