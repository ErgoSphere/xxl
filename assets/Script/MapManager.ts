import { Coordinate } from "./DataStructure";

const spacing:number = 10
const objectW:number = 235
const objectH:number = 235
const matrixSize:number = 3 // 3 x 3

export default class MapManager {
  private static _posMap: cc.Vec2[][] = null

  public static getPos(x: number | Coordinate, y?: number): cc.Vec2 {
    if (typeof x === "number") {
      return this._posMap[x][y]
    } else {
      return this._posMap[x.x][x.y]
    }
  }

  private static width: number = null
  private static height: number = null
  private static beginX: number = null
  private static beginY: number = null

  public static init () {
    this.generatePosMap()
  }

  private static generatePosMap () {
    this._posMap = []
    this.width = spacing * (matrixSize - 1) + objectW * matrixSize
    this.height = spacing * (matrixSize - 1) + objectH * matrixSize
    // 左下角原点开始做第一个方块
    this.beginX = -(this.width/2) + matrixSize/2
    this.beginY = -(this.height/2) + matrixSize/2
    // 从左到右，从下到上
    for (let i = 0; i < matrixSize; i++) {
      let col = []
      let x = this.beginX + i * (objectW + spacing)
      for (let j = 0; j < matrixSize; j++) {
        let y = this.beginY + j * (objectH + spacing)
        col.push(cc.v2(x, y))
      }
      this._posMap.push(col)
    }
  }
}