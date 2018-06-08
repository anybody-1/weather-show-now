#!/usr/bin/env node

var getWeather = require('weather-show-now')
var location = process.argv[2]

getWeather(location).then(data=>{
    console.log('当前城市：' + data.weather[0].city_name)
    console.log('当前天气：' + data.weather[0].now.text)
    console.log('当前温度：' + data.weather[0].now.temperature + '℃')
})