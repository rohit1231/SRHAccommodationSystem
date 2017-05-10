import { SRHAccommodationSystemPage } from './app.po';

describe('srh-accommodation-system App', () => {
  let page: SRHAccommodationSystemPage;

  beforeEach(() => {
    page = new SRHAccommodationSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
