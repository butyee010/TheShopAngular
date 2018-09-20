import { TerminatePageModule } from './terminate-page.module';

describe('TerminatePageModule', () => {
  let terminatePageModule: TerminatePageModule;

  beforeEach(() => {
    terminatePageModule = new TerminatePageModule();
  });

  it('should create an instance', () => {
    expect(terminatePageModule).toBeTruthy();
  });
});
