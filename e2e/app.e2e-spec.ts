import { FeaDynamicPage } from './app.po';

describe('fea-dynamic App', () => {
  let page: FeaDynamicPage;

  beforeEach(() => {
    page = new FeaDynamicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
