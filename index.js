/**
 * Created by Garry on 2017/11/16.
 */

class calulateTwoLngLat{
    constructor(){
        this.earthRadius = 6371.004;
    }

    /**
     * [rad]
     * @param {*} d 
     */
    static rad(d){
        return d * Math.PI / 180.0;
    }

    /**
     * [getDistance 得到距离]
     * @param {*} point1 [第一个经纬度]
     * @param {*} point2 [第二个经纬度]
     */
    getDistance(point1, point2){
        let radLng1 = calulateTwoLngLat.rad(point1.lng);
        let radLng2 = calulateTwoLngLat.rad(point2.lng);
        let radLat1 = calulateTwoLngLat.rad(point1.lat);
        let radLat2 = calulateTwoLngLat.rad(point2.lat);
        let a = radLat1 - radLat2;
        let b = radLng1 - radLng2;

        //计算a的次幂
        let aPow = Math.pow(Math.sin(a/2), 2);

        //计算b的次幂
        let bPow = Math.pow(Math.sin(b/2), 2);

        //计算两个纬度的余弦
        let latCos = Math.cos(radLat1)*Math.cos(radLat2);

        //计算平方根
        let sqrt = Math.sqrt(aPow + latCos * bPow);

        //计算反正弦值
        let asin = Math.asin(sqrt);
        
        let s = 2 * asin * this.earthRadius;

        //把数四舍五入为最接近的整数
        s = Math.round(s * 10000) / 10000;

        return s;
    }
}

module.exports = {
    getDistance: (point1, point2) => {
        if(!global.distanceInstace){
            global.distanceInstace = new calulateTwoLngLat();
        }

        return global.distanceInstace.getDistance(point1, point2);
    }
}