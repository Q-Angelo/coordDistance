# coorddistance
coordDistance 计算两坐标系之间距离

## 安装（install）

```
npm install coorddistance --save
```

## 引用 (quote)

```
const coorddistance = require('coorddistance');
```

## 示例用法（Example&Usage）

```javascript
const coorddistance = require('coorddistance');

let point1 = {
    lng: '121.326389',
    lat: '31.680378',
}

let point2 = {
    lng: '121.186313',
    lat: '31.864842',
}

coorddistance.getDistance(point1, point2);
```
