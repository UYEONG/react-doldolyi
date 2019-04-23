# React Preloader Icon

SVG loading icons component for React. - [Demo](http://uyeong.github.io/react-preloader-icon)

Thank to [SVG-Loaders](https://github.com/SamHerbert/SVG-Loaders)

## Installation

### npm

```
npm install --save react-preloader-icon@beta
yarn add react-preloader-icon@beta
```

### Usage

```
import { Preloader, Oval } from 'react-preloader-icon';

const SomeComponent = () => (
  <Preloader
    use={Oval}
    size={32}
    strokeWidth={8}
    strokeColor="#F0AD4E"
    duration={800}
  /> 
);
```

### Icon types

- [x] [Oval](http://uyeong.github.io/react-preloader-icon?loader=oval)
- [x] [TailSpin](http://uyeong.github.io/react-preloader-icon?loader=tail_spin)
- [x] [Audio](http://uyeong.github.io/react-preloader-icon?loader=audio)
- [x] [Puff](http://uyeong.github.io/react-preloader-icon?loader=puff)
- [x] [Rings](http://uyeong.github.io/react-preloader-icon?loader=rings)
- [x] [SpinningCircles](http://uyeong.github.io/react-preloader-icon?loader=spinning)
- [ ] BallTriangle
- [ ] Bars
- [ ] Circles
- [ ] Grid
- [ ] Hearts
- [ ] ThreeDots

## Supported browsers

Support for Internet Explorer 9 requires [raf](https://github.com/chrisdickinson/raf) polyfill.

  * Latest Firefox
  * Latest Chrome
  * Latest Safari
  * IE9 through latest

## License

MIT
