import { ExtractNameFromADUserNamePipe } from './extract-name-from-aduser-name.pipe';

describe('ExtractNameFromADUserNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ExtractNameFromADUserNamePipe();
    expect(pipe).toBeTruthy();
  });
});
