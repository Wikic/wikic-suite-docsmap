const docsmapSuite = require('..');

const typeMap = any => any;

describe('afterRead', () => {
  let wikic;
  let docsmap;
  let config;
  let afterRead;

  beforeEach(() => {
    config = {
      docsmap: {
        enable: true,
      },
    };
    wikic = { typeMap, config };
    docsmap = docsmapSuite(config, wikic);
    afterRead = docsmap.afterRead;
  });

  it('returns original context and do nothing with wikic if IS_DOC is falsy', () => {
    const origin = {};
    expect(afterRead(origin)).toBe(origin);
    expect(afterRead(origin)).toEqual({});
    expect(wikic).toEqual({ config, typeMap });
  });

  it('do nothing with wikic if page.hide', () => {
    const origin = {
      IS_DOC: true,
      page: {
        hide: true,
        title: 'title1',
        address: '/2.html',
        types: ['a', 'b', 'd'],
      },
    };
    expect(afterRead(origin)).toBe(origin);
    expect(wikic).toEqual({ typeMap, config });
  });

  it('throws if page not found', () => {
    expect(() => {
      afterRead({
        IS_DOC: true,
      });
    }).toThrow();
  });

  it('works properly', () => {
    afterRead({
      page: {
        title: 'title1',
        address: '/2.html',
        types: ['a', 'b', 'd'],
      },
      IS_DOC: true,
    });
    expect(docsmap.flatInfos).toEqual([
      {
        title: 'title1',
        address: '/2.html',
        types: ['a', 'b', 'd'],
      },
    ]);
  });
});
