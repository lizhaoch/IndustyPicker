# Industrypicker

> A simple jQuery plugin for picking the Industry kinds of China.

- [Homepage](http://lizhaoch.github.io/IndustyPicker)



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

- [Download the latest release](https://github.com/lizhaoch/IndustyPicker/archive/master.zip).
- Clone the repository: `git clone https://github.com/lizhaoch/Industrypicker.git`.


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
  <select></select><!-- 门类 -->
  <select></select><!-- 大类 -->
  <select></select><!-- 中类 -->
  <select></select><!-- 小类 -->
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
  <select></select>
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
  menlei: '—— 门类 ——',
        dalei: '—— 大类 ——',
        zhonglei: '—— 中类 ——',
        xiaolei: '—— 小类 ——'
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


### menlei门类

- Type: `String`
- Default: `—— 门类 ——`

Defines the initial value of province `<select>`. If it is a existing province in `Industrypicker.data.js`, it will be selected. If not, it will be used as a placeholder.


### dalei大类

- Type: `String`
- Default: `—— 大类 ——`

Defines the initial value of city `<select>`. If it is a existing city under the selected province, it will be selected. If not, it will be used as a placeholder.


### zhonglei中类

- Type: `String`
- Default: `—— 中类 ——`

### xiaolei小类

- Type: `String`
- Default: `—— 小类 ——`



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

## Browser support 浏览器支持

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 8+

As a jQuery plugin, you also need to see the [jQuery Browser Support](http://jquery.com/browser-support/).



## License

[MIT](http://opensource.org/licenses/MIT) © LIZHAOCH


[⬆ back to top](#table-of-contents)
