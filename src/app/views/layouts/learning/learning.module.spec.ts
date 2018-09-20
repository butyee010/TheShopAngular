import { LearningModule } from './learning.module';

describe('LearningModule', () => {
  let learningModule: LearningModule;

  beforeEach(() => {
    learningModule = new LearningModule();
  });

  it('should create an instance', () => {
    expect(learningModule).toBeTruthy();
  });
});
