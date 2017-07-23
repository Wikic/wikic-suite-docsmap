const docsmapSuite = require('..');

test('returns null if config.docsmap is falsy', () => {
  const config = {};
  const docsmap = docsmapSuite(config, { config });
  expect(docsmap).toBe(null);
});

test('returns null if config.docsmap.enable is falsy', () => {
  const config = {
    docsmap: {
      enable: false,
    },
  };
  const docsmap = docsmapSuite(config, { config });
  expect(docsmap).toBe(null);
});
