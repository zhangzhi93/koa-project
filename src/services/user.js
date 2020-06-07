const User = require('../models/index').getModel('user')

const user = {
  /**
   * @Description: µÇÂ¼
   * @date 2019/5/30
   * @params: { Object } userData
   * @return: { Object | null }
   */
  async login(userData) {
    const result = await User.findOne(userData)
    return result
  },
  async save(userData) {
    const user = new User(userData);
    return await user.save()
  },
}

module.exports = user
