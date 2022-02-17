export class Coordinate {
  public x: number // position x
  public y: number // position y

  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }
  // update position
  public set(x: number | Coordinate, y?: number) {
    if (typeof x === "number") {
      this.x = x
      this.y = y
    } else {
      this.x = x.x
      this.y = x.y
    }
  }
  // copy position
  public copy (): Coordinate {
    return new Coordinate(this.x, this.y)
  }
  // compare position
  public compare (x: number | Coordinate, y?: number) {
    if (typeof x === "number") {
      return this.x === x && this.y === y
    } else {
      return this.x === x.x && this.y === x.y
    }

  }
  // show position string
  public toString(): string {
    return `(x: ${this.x}, y: ${this.y})`
  }
}
// generate coordinate
export function Coord(x: number = 0, y: number = 0) {
  return new Coordinate(x, y)
}