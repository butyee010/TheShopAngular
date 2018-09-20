import { NavSecondaryModule } from './nav-secondary.module';

describe('NavSecondaryModule', () => {
  let navSecondaryModule: NavSecondaryModule;

  beforeEach(() => {
    navSecondaryModule = new NavSecondaryModule();
  });

  it('should create an instance', () => {
    expect(navSecondaryModule).toBeTruthy();
  });
});
