import { FeaWebappPage } from './app.po';

describe('fea-webapp App', () => {
  let page: FeaWebappPage;

  beforeEach(() => {
    page = new FeaWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
