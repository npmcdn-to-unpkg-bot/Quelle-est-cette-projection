import { Projection2Page } from './app.po';

describe('projection2 App', function() {
  let page: Projection2Page;

  beforeEach(() => {
    page = new Projection2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
