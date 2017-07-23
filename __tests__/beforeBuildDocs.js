const docsmapSuite = require('..');

const config = {
  docsmap: {
    enable: true,
  },
};

const docsmap = docsmapSuite(config, { config });

test('beforeBuildDocs', () => {
  docsmap.flatInfos = [];
  docsmap.beforeBuildDocs();
  expect(docsmap.flatInfos).toBeFalsy();
});
