/*!
 * industrypicker v1.0.4
 * https://github.com/fengyuanchen/industrypicker
 *
 * Copyright (c) 2014-2016 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2016-06-01T15:05:52.606Z
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as anonymous module.
    define('ChineseIndustry', [], factory);
  } else {
    // Browser globals.
    factory();
  }
})(function () {

  var ChineseIndustry = {
    86: {
      A: '农、林、牧、渔业',
      B: '采矿业',
      C: '制造业',
      D: '电力、热力、燃气及水生产和供应业'
    },
    A: {
      01: '农业',
      02: '林业',
      03: '畜牧业'
    },
    01: {
      011: '谷物种植',
      012: '豆类、油料和薯类种植'
    },
    011: {
      0111: '稻谷种植',
      0112: '小麦种植'
    },
    012: {
      0121: '豆类种植',
      0122: '油料种植'
    },
    B: {
      06: '煤炭开采和洗选业',
      07: '唐山市'
    },
    06: {
      061: '烟煤和无烟煤开采洗选',
      062: '褐煤开采洗选'
    },
    061: {
      0610: '褐煤开采洗选'
    },
    062: {
      0620: '烟煤和无烟煤开采洗选'
    },
    07: {
      071: '石油开采',
      072: '天然气开采',
    },
    071: {
      0710: '石油开采'
    },
    072: {
      0720: '天然气开采'
    }
  };

  if (typeof window !== 'undefined') {
    window.ChineseIndustry = ChineseIndustry;
  }
  return ChineseIndustry;
});
