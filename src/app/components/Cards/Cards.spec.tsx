import { render,screen } from '@testing-library/react';
import { mockRecipes } from '../../testData/recipes'
import OutlinedCard from './Cards';

describe('OutlinedCard', () => {
  it('should exist and contain recipes', () => {
    expect(mockRecipes).toBeDefined();
    expect(mockRecipes.recipes).toBeDefined();
    expect(mockRecipes.recipes.length).toBeGreaterThan(0);
  });

  it('each recipe should have required properties', () => {
    mockRecipes.recipes.forEach(recipe => {
      expect(recipe.id).toBeDefined();
      expect(recipe.title).toBeDefined();
      expect(recipe.image).toBeDefined();
      expect(recipe.summary).toBeDefined();
    });
  });

  it('renders the card with the correct information', () => {
   
    render(<OutlinedCard id={mockRecipes.recipes[1].id} title={mockRecipes.recipes[1].title} image={mockRecipes.recipes[1].image} summary={mockRecipes.recipes[1].summary} />);
    // Verify the title is rendered
    const titleElement = screen.getByText(mockRecipes.recipes[1].title);
    expect(titleElement).toBeDefined();

  });


  it('snapshot', () => {
    const { baseElement } = render(<OutlinedCard {...mockRecipes.recipes[1]} />);
    expect(baseElement).toMatchSnapshot();
  });
});