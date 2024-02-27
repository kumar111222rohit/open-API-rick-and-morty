import { render, screen } from '@testing-library/react';
import Character from '../components/Character/Character';
import testdata from '../testdata.json';

describe('Component', () => {
  describe('Character', () => {
    it('should render without throwing an error', function () {
      render(<Character characterData={testdata.characterData} />);
      expect(screen.getByText('Rick And Morty')).toBeInTheDocument();
    });
  });
});
