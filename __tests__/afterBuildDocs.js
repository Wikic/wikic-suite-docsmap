/* eslint-env jest, node */

const docsmapSuite = require('..');

const fse = {
  writeJSON: jest.fn(() => Promise.resolve()),
};

describe('afterBuildDocs', () => {
  beforeEach(() => {
    fse.writeJSON.mockClear();
  });

  it('works', async () => {
    const config = {
      docsmap: {
        enable: true,
        output: 'la.json',
      },
    };
    const wikic = {
      fse,
      config,
      publicPath: '/c/a',
    };
    const docsmap = docsmapSuite(config, wikic);
    docsmap.flatInfos = 'something';
    await docsmap.afterBuildDocs();
    expect(wikic.fse.writeJSON.mock.calls[0][0]).toBe('/c/a/la.json');
    expect(wikic.fse.writeJSON.mock.calls[0][1]).toBe('something');
  });

  it('use docs.json default', async () => {
    const config = {
      docsmap: {
        enable: true,
      },
    };
    const wikic = {
      fse,
      config,
      publicPath: '/c/a',
    };
    const docsmap = docsmapSuite(config, wikic);
    docsmap.flatInfos = 'something';
    await docsmap.afterBuildDocs();
    expect(fse.writeJSON.mock.calls[0][0]).toBe('/c/a/docs.json');
    expect(fse.writeJSON.mock.calls[0][1]).toBe('something');
  });

  it('returns directly if flatInfo is falsy', async () => {
    const config = {
      docsmap: {
        enable: true,
      },
    };
    const wikic = {
      publicPath: '/c/a',
      config,
    };
    const docsmap = docsmapSuite(config, wikic);
    docsmap.flatInfos = null;
    await docsmap.afterBuildDocs();
    expect(fse.writeJSON).not.toHaveBeenCalled();
  });
});
