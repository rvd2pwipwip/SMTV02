import React from 'react';
import { render, screen } from '@testing-library/react';
import TVSwimlane from './TVSwimlane';

describe('TVSwimlane', () => {
  const mockItems = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
  ];

  const mockOnItemSelect = jest.fn();

  it('renders the swimlane with title and items', () => {
    render(
      <TVSwimlane
        title="Test Swimlane"
        items={mockItems}
        onItemSelect={mockOnItemSelect}
      />
    );

    // Check if title is rendered
    expect(screen.getByText('Test Swimlane')).toBeInTheDocument();

    // Check if all items are rendered
    mockItems.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('calls onItemSelect when an item is clicked', () => {
    render(
      <TVSwimlane
        title="Test Swimlane"
        items={mockItems}
        onItemSelect={mockOnItemSelect}
      />
    );

    // Click the first item
    screen.getByText('Item 1').click();

    // Check if onItemSelect was called with the correct item
    expect(mockOnItemSelect).toHaveBeenCalledWith(mockItems[0]);
  });
}); 