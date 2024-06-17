const mongoose = require('mongoose')

/**
 * 创建数据模型
 * @param {*} field 表名
 * @param {*} schema 数据模型
 * @returns 模型 (表 和 结构)
 */

const createModel = (field, schema) => {

    let tempModel = null;

    // 实例化模型,创建数据模型对象
    const schameObject = new mongoose.Schema(schema);

    // 生成模型
    try {
        tempModel = mongoose.model(field, schameObject); // 规定好数据模型 表 和 结构
    } catch (error) {
        tempModel = mongoose.model(field); // 规定好数据模型 表
    }

    return tempModel;
}

module.exports = createModel
