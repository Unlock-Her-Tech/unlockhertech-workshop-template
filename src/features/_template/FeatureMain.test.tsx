import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FeatureMain } from './FeatureMain';

describe('FeatureMain (_template)', () => {
  it('renders feature heading and boilerplate items', () => {
    render(<FeatureMain />);

    expect(screen.getByText('Template Feature Module')).toBeInTheDocument();
    expect(screen.getByText('Sample Feature Item One')).toBeInTheDocument();
    expect(screen.getByText('Sample Feature Item Two')).toBeInTheDocument();
  });

  it('filters items by search input query', () => {
    render(<FeatureMain />);

    const searchInput = screen.getByPlaceholderText('Search items by title...');
    fireEvent.change(searchInput, { target: { value: 'Item One' } });

    expect(screen.getByText('Sample Feature Item One')).toBeInTheDocument();
    expect(screen.queryByText('Sample Feature Item Two')).not.toBeInTheDocument();
  });

  it('opens and closes modal on View Details button click', () => {
    render(<FeatureMain />);

    const viewButtons = screen.getAllByRole('button', { name: /view details/i });
    expect(viewButtons.length).toBeGreaterThan(0);

    fireEvent.click(viewButtons[0]);

    // Modal should be open
    expect(screen.getByText('Perform Action')).toBeInTheDocument();

    // Close button
    const closeBtn = screen.getByRole('button', { name: /close dialog/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByText('Perform Action')).not.toBeInTheDocument();
  });
});
