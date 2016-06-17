# Industrypicker

> A simple jQuery plugin for picking provinces, cities and districts of China.

- [Homepage](https://fengyuanchen.github.io/Industrypicker)



## Table of contents

  - [Main](#main)
  - [Getting started](#getting-started)
  - [Options](#options)
  - [Methods](#methods)
  - [No conflict](#no-conflict)
  - [Browser support](#browser-support)
  - [License](#license)



## Main

```
dist/
├── Industrypicker.js          ( 7 KB)
├── Industrypicker.data.js     (97 KB)
```

## Getting started


### Quick start

Four quick start options are available:

- [Download the latest release](https://github.com/fengyuanchen/Industrypicker/archive/master.zip).
- Clone the repository: `git clone https://github.com/fengyuanchen/Industrypicker.git`.
- Install with [NPM](http://npmjs.org): `npm install Industrypicker`.
- Install with [Bower](http://bower.io): `bower install Industrypicker`.


### Installation

Include files:

```html
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->
<script src="/path/to/Industrypicker.data.js"></script>
<script src="/path/to/Industrypicker.js"></script>
```


Create HTML elements:

```html
<div><!-- container -->
  <select></select><!-- province -->
  <select></select><!-- city -->
  <select></select><!-- district -->
</div>
```



### Usage

#### Initialize with `data-toggle="Industrypicker"` attribute


Basic

```html
<div data-toggle="Industrypicker">
  <select></select>
  <select></select>
  <select></select>
</div>
```


Custom placeholders

```html
<div data-toggle="Industrypicker">
  <select data-province="---- 选择省 ----"></select>
  <select data-city="---- 选择市 ----"></select>
  <select data-district="---- 选择区 ----"></select>
</div>
```


Custom districts

```html
<div data-toggle="Industrypicker">
  <select data-province="浙江省"></select>
  <select data-city="杭州市"></select>
  <select data-district="西湖区"></select>
</div>
```


#### Initialize with `$.fn.Industrypicker` method

Basic

```js
$('#target').Industrypicker();
```

Custom placeholders

```js
$('#target').Industrypicker({
  province: '---- 所在省 ----',
  city: '---- 所在市 ----',
  district: '---- 所在区 ----'
});
```

Custom districts

```js
$('#target').Industrypicker({
  province: '浙江省',
  city: '杭州市',
  district: '西湖区'
});
```


[⬆ back to top](#table-of-contents)



## Options

- Change the default options with `$().Industrypicker(options)`.
- Change the global default options with `$.fn.Industrypicker.setDefaults(options)`.


### autoSelect

- Type: `Boolean`
- Default: `true`

Selects the city and district automatically when the province changes.


### placeholder

- Type: `Boolean`
- Default: `true`

Show placeholder (with an `<option>` element).


### province

- Type: `String`
- Default: `—— 省 ——`

Defines the initial value of province `<select>`. If it is a existing province in `Industrypicker.data.js`, it will be selected. If not, it will be used as a placeholder.


### city

- Type: `String`
- Default: `—— 市 ——`

Defines the initial value of city `<select>`. If it is a existing city under the selected province, it will be selected. If not, it will be used as a placeholder.


### district

- Type: `String`
- Default: `—— 区 ——`

Defines the initial value of district `<select>`. If it is a existing district under the selected city, it will be selected. If not, it will be used as a placeholder.


[⬆ back to top](#table-of-contents)



## Methods

### reset([deep])

- **deep** (optional):
  - Type: `Boolean`
  - Default: `false`
  - Reset the selects to default states (Undo selected).

Reset the selects to the initial states (Undo changed).

**Examples:**

```js
$().Industrypicker('reset');
$().Industrypicker('reset', true);
```

### destroy()

Destroy the Industrypicker instance, but keep the selected districts.

If you want to remove the selected districts, you can call `reset` method first and then call this method.


[⬆ back to top](#table-of-contents)



## No conflict

If you have to use other plugin with the same namespace, just call the `$.fn.Industrypicker.noConflict` method to revert to it.

```html
<script src="other-plugin.js"></script>
<script src="Industrypicker.js"></script>
<script>
  $.fn.Industrypicker.noConflict();
  // Code that uses other plugin's "$().Industrypicker" can follow here.
</script>
```



## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 8+

As a jQuery plugin, you also need to see the [jQuery Browser Support](http://jquery.com/browser-support/).



## License

[MIT](http://opensource.org/licenses/MIT) © [Fengyuan Chen](http://chenfengyuan.com)


[⬆ back to top](#table-of-contents)
