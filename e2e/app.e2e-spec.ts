import { Angular4TourOfHeroesPage } from './app.po';

describe('angular4-tour-of-heroes App', () => {
  let page: Angular4TourOfHeroesPage;

  beforeEach(() => {
    page = new Angular4TourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
