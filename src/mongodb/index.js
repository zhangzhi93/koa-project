/** 封装数据库连接文件 */
const mongoose = require('mongoose')
const { mongoDB } = require('../config')

const url = "mongodb://" + mongoDB.host + ":" + mongoDB.port + "/" + mongoDB.database;

/**
 * 连接函数
 * @returns 连接成功失败
 */
const connect = () => {

    //连接mongoDB数据库
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  });

    // 设置最大连接次数,若超过此数则不再连接,直接抛出异常
    let maxConnectTimes = 0;

    return new Promise((resolve, reject) => {

        // 连接成功
        mongoose.connection.once('open', () => {
            console.log('MongoDB 连接成功')
            resolve(mongoose);
        })

        // 连接中断
        mongoose.connection.once('close', () => {
            if (maxConnectTimes < 3) {
                maxConnectTimes++;
                mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  }); // 重连
            } else {
                reject(new Error('MongoDB 连接中断'))
            }
        })

    })

}

module.exports = connect
