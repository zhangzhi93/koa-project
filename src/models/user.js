'use strict'

const userNameReg = /^(?!_)(?=^.{2,20}$)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
const passwordReg = /(?=^.{6,16}$)(?=(?:.*?\d){1})(?=.*[a-z])(?=(?:.*?[A-Z]){1})(?=(?:.*?[`·~!@#$%^&*()_+}{|:;'",<.>/?\=\[\]\-\\]){1})(?!.*\s)[0-9a-zA-Z`·~!@#$%^&*()_+}{|:;'",<.>/?\=\[\]\-\\]*$/;

const schema = {
  // 用户ID
  id: { type: String, required: true },
  // 用户角色 user普通用户 root超管用户
  role: { type: String, default: 'user', enum: ['user', 'root'], required: true },
  // 用户名 长度 3-20 位只含有汉字、数字、字母、下划线不能以下划线开头和结尾
  userName: { type: String, required: true, trim: true, match: userNameReg },
  // 密码 密码长度 6-16 位,包含至少一个特殊字符,一个数字,一个大写字母和一个小写字母
  password: { type: String, required: true },
  // 昵称
  nickName: { type: String, default: '' },
  // 头像
  avatar: { type: String, default: '' },
  // 简介
  intro: { type: String, default: '这家伙很懒,什么都没留下～～～' },
  // 性别 -1保密 0女 1男
  gender: { type: Number, default: -1 },
  // 出生日期
  birthday: { type: Date, default: '' },
  // 省
  province: { type: String, default: '' },
  // 市
  city: { type: String, default: '' },
  // 区
  district: { type: String, default: '' },
  // 学校
  school: { type: String, default: '' },
  // 专业
  profession: { type: String, default: '' },
  // 评论文章
  commentArticles: { type: Array, default: [] },
  // 阅读文章
  viewArticles: { type: Array, default: [] },
  // 创建时间
  createTime: { type: Date, default: Date.now },
}

module.exports = schema
