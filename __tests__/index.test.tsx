import React from 'react'; // Add this line to import React
import { render, screen } from '@testing-library/react';
import IndexPage from '../pages/index';
import testdata from '../testdata.json';

describe('Pages', () => {
  describe('Index', () => {
    it('should render the title and character names', () => {
      render(
        <IndexPage data={testdata.characterData} episodesData={testdata.episodeData} />
      );

      // Assert title
      expect(screen.getByText('Rick And Morty')).toBeInTheDocument();

      // Assert character names
      const characterNames = screen.getAllByTestId('character-name'); // Adjust this line according to how character names are marked in your markup
      expect(characterNames.length).toBeGreaterThan(0); // Check if at least one character name exists
    });
  });
});
