import { FilamentAppPage } from './app.po';

describe('filament-app App', () => {
  let page: FilamentAppPage;

  beforeEach(() => {
    page = new FilamentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
