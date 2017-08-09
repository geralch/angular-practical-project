import { AngularPracticalProjectPage } from './app.po';

describe('angular-practical-project App', () => {
  let page: AngularPracticalProjectPage;

  beforeEach(() => {
    page = new AngularPracticalProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
