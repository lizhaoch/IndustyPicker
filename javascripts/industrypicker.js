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
        define(['jquery', 'ChineseIndustry'], factory);
    } else if (typeof exports === 'object') {
        // Node / CommonJS
        factory(require('jquery'), require('ChineseIndustry'));
    } else {
        // Browser globals.
        factory(jQuery, ChineseIndustry);
    }
})(function ($, ChineseIndustry) {

    'use strict';

    if (typeof ChineseIndustry === 'undefined') {
        throw new Error('The file "industrypicker.data.js" must be included first!');
    }

    var NAMESPACE = 'industrypicker';
    var EVENT_CHANGE = 'change.' + NAMESPACE;
    var menlei = 'menlei';
    var dalei = 'dalei';
    var zhonglei = 'zhonglei';
    var xiaolei = 'xiaolei';

    function industrypicker(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, industrypicker.DEFAULTS, $.isPlainObject(options) && options);
        this.placeholders = $.extend({}, industrypicker.DEFAULTS);
        this.active = false;
        this.init();
    }

    industrypicker.prototype = {
        constructor: industrypicker,

        init: function () {
            var options = this.options;
            var $select = this.$element.find('select');
            var length = $select.length;
            var data = {};

            $select.each(function () {
                $.extend(data, $(this).data());
            });

            $.each([menlei, dalei, zhonglei, xiaolei], $.proxy(function (i, type) {
                if (data[type]) {
                    options[type] = data[type];
                    this['$' + type] = $select.filter('[data-' + type + ']');
                } else {
                    this['$' + type] = length > i ? $select.eq(i) : null;
                }
            }, this));

            this.bind();

            // Reset all the selects (after event binding)
            this.reset();

            this.active = true;
        },

        bind: function () {
            if (this.$menlei) {
                this.$menlei.on(EVENT_CHANGE, (this._changemenlei = $.proxy(function () {
                    this.output(dalei);
                    this.output(zhonglei);
                    this.output(xiaolei);
                }, this)));
            }

            if (this.$dalei) {
                this.$dalei.on(EVENT_CHANGE, (this._changedalei = $.proxy(function () {
                    this.output(zhonglei);
                    this.output(xiaolei);
                }, this)));
            }

            if (this.$zhonglei) {
                this.$zhonglei.on(EVENT_CHANGE, (this._changezhonglei = $.proxy(function () {
                    this.output(xiaolei);
                }, this)));
            }
        },

        unbind: function () {
            if (this.$menlei) {
                this.$menlei.off(EVENT_CHANGE, this._changemenlei);
            }

            if (this.$dalei) {
                this.$dalei.off(EVENT_CHANGE, this._changedalei);
            }
        },

        output: function (type) {
            var options = this.options;
            var placeholders = this.placeholders;
            var $select = this['$' + type];
            var zhongleis = {};
            var data = [];
            var code;
            var matched;
            var value;

            if (!$select || !$select.length) {
                return;
            }

            value = options[type];
            code = (
                type === menlei ? 86 :
                    type === dalei ? this.$menlei && this.$menlei.find(':selected').data('code') :
                        type === zhonglei ? this.$dalei && this.$dalei.find(':selected').data('code') :
                            type === xiaolei ? this.$zhonglei && this.$zhonglei.find(':selected').data('code') : code
            );

            zhongleis = ChineseIndustry[code];

            if ($.isPlainObject(zhongleis)) {
                $.each(zhongleis, function (code, address) {
                    var selected = address === value;

                    if (selected) {
                        matched = true;
                    }

                    data.push({
                        code: code,
                        address: address,
                        selected: selected
                    });
                });
            }

            if (!matched) {
                if (data.length && (options.autoSelect || options.autoselect)) {
                    data[0].selected = true;
                }

                // Save the unmatched value as a placeholder at the first output
                if (!this.active && value) {
                    placeholders[type] = value;
                }
            }

            // Add placeholder option
            if (options.placeholder) {
                data.unshift({
                    code: '',
                    address: placeholders[type],
                    selected: false
                });
            }

            $select.html(this.getList(data));
        },

        getList: function (data) {
            var list = [];

            $.each(data, function (i, n) {
                list.push(
                    '<option' +
                    ' value="' + (n.address && n.code ? n.address : '') + '"' +
                    ' data-code="' + (n.code || '') + '"' +
                    (n.selected ? ' selected' : '') +
                    '>' +
                    (n.address || '') +
                    '</option>'
                );
            });

            return list.join('');
        },

        reset: function (deep) {
            if (!deep) {
                this.output(menlei);
                this.output(dalei);
                this.output(zhonglei);
                this.output(xiaolei);
            } else if (this.$menlei) {
                this.$menlei.find(':first').prop('selected', true).trigger(EVENT_CHANGE);
            }
        },

        destroy: function () {
            this.unbind();
            this.$element.removeData(NAMESPACE);
        }
    };

    industrypicker.DEFAULTS = {
        autoSelect: true,
        placeholder: true,
        menlei: '—— 门类 ——',
        dalei: '—— 大类 ——',
        zhonglei: '—— 中类 ——',
        xiaolei: '—— 小类 ——'
    };

    industrypicker.setDefaults = function (options) {
        $.extend(industrypicker.DEFAULTS, options);
    };

    // Save the other industrypicker
    industrypicker.other = $.fn.industrypicker;

    // Register as jQuery plugin
    $.fn.industrypicker = function (option) {
        var args = [].slice.call(arguments, 1);

        return this.each(function () {
            var $this = $(this);
            var data = $this.data(NAMESPACE);
            var options;
            var fn;

            if (!data) {
                if (/destroy/.test(option)) {
                    return;
                }

                options = $.extend({}, $this.data(), $.isPlainObject(option) && option);
                $this.data(NAMESPACE, (data = new industrypicker(this, options)));
            }

            if (typeof option === 'string' && $.isFunction(fn = data[option])) {
                fn.apply(data, args);
            }
        });
    };

    $.fn.industrypicker.Constructor = industrypicker;
    $.fn.industrypicker.setDefaults = industrypicker.setDefaults;

    // No conflict
    $.fn.industrypicker.noConflict = function () {
        $.fn.industrypicker = industrypicker.other;
        return this;
    };

    $(function () {
        $('[data-toggle="industrypicker"]').industrypicker();
    });
});
