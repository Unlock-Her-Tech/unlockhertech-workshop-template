import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FeatureMain } from './FeatureMain';

describe('Mentorship Finder Feature', () => {
  it('renders directory heading and loads mentor cards from mock client', async () => {
    render(<FeatureMain />);

    expect(screen.getByText('Find Your Engineering Mentor')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Dr. Evelyn Zhang')).toBeInTheDocument();
      expect(screen.getByText('Tamika Washington')).toBeInTheDocument();
      expect(screen.getByText('Clara Johansson')).toBeInTheDocument();
    });
  });

  it('filters mentor list when user searches for a skill or company', async () => {
    render(<FeatureMain />);

    await waitFor(() => {
      expect(screen.getByText('Dr. Evelyn Zhang')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText('Search by name, company, skill...');
    fireEvent.change(searchInput, { target: { value: 'DeepMind' } });

    expect(screen.getByText('Dr. Evelyn Zhang')).toBeInTheDocument();
    expect(screen.queryByText('Tamika Washington')).not.toBeInTheDocument();
    expect(screen.queryByText('Clara Johansson')).not.toBeInTheDocument();
  });

  it('opens booking modal when Book Session is clicked', async () => {
    render(<FeatureMain />);

    await waitFor(() => {
      expect(screen.getByText('Dr. Evelyn Zhang')).toBeInTheDocument();
    });

    const bookButtons = screen.getAllByRole('button', { name: /book session/i });
    expect(bookButtons.length).toBeGreaterThan(0);

    fireEvent.click(bookButtons[0]);

    await waitFor(() => {
      expect(screen.getByText(/Book Session with/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    });
  });
});
