export default class Utils {
  // 随机对象
  public static getRandomType() {
    let min = 1, max = 3
    return Math.floor(Math.random() * (max-min+1) + min)
  }
}