import { WebPackCliPage } from './app.po';

describe('web-pack-cli App', function() {
  let page: WebPackCliPage;

  beforeEach(() => {
    page = new WebPackCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
