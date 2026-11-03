import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import { App } from '../App';

describe('Workshop App Shell', () => {
  it('renders landing page with heading and action buttons', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Feature Development Template/i)
    ).toBeInTheDocument();
    expect(screen.getByText('Open Workshop Sandbox')).toBeInTheDocument();
    expect(screen.getByText('Essential Workshop Commands')).toBeInTheDocument();
  });

  it('renders sandbox route and feature showcase', () => {
    render(
      <MemoryRouter initialEntries={['/sandbox']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Workshop Feature Sandbox')).toBeInTheDocument();
    expect(screen.getByText('Mock Data')).toBeInTheDocument();
    expect(
      screen.getByText('Workshop Developer Guide & Quality Rules')
    ).toBeInTheDocument();
  });
});
