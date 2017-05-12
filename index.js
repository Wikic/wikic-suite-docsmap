const path = require('path');

const defaultOutput = 'docs.json';
const docsMapSuite = (config) => {
  if (!(config.docsmap && config.docsmap.enable)) return null;
  const self = {};

  self.afterRead = function collectInfo(context) {
    if (!context.IS_DOC) return context;

    const { page } = context;
    if (!page) {
      throw Error('expect context to be a Object');
    }
    const { types, address, title, hide } = page;
    if (hide) return context;
    const typesMapped = types.map(this.typeMap);

    const info = {
      address,
      title,
      types: typesMapped,
    };

    if (!self.flatInfos) self.flatInfos = [];
    self.flatInfos.push(info);

    return context;
  };

  self.beforeBuildDocs = () => {
    self.flatInfos = null;
  };

  self.afterBuildDocs = async function afterBuildDocs() {
    if (!self.flatInfos) return;
    const filename = this.config.docsMap
      ? this.config.docsMap.output || defaultOutput
      : defaultOutput;
    await this.fse.writeJSON(path.resolve(this.publicPath, filename), self.flatInfos);
  };

  return self;
};

module.exports = docsMapSuite;
