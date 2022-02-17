// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import { Coordinate, Coord } from "./DataStructure";
import MapManager from "./MapManager";
import Utils from "./Utils";

@ccclass
export default class GameController extends cc.Component {

    @property(cc.Prefab)
    materials: cc.Prefab[] = []

    @property(cc.Node)
    container: cc.Node = null // grid view

    tileMap: any = null // 二维组件数组
    typeMap: any = null // 二维类型数组

    onLoad () {
        this.loadPrefab()
        MapManager.init()
        this.tileInit()

    }

    tileInit () {
        this.generateInitTypeMap ()
    }

    generateInitTypeMap () {
        this.typeMap = []
        for (let i = 0; i < 3; i++) {
            let col = []
            for (let j = 0; j < 3; j++) {
                let prefix = (i + j)%2 === 0 ? "odd" : "even"
                let suffix = Utils.getRandomType()
                col.push(`${prefix}_cat_${suffix}`)
            }
            this.typeMap.push(col)
        }
        console.log(this.typeMap)
    }

    loadPrefab () {
        cc.loader.loadRes("Prefabs", cc.Prefab, (err, prefab) => {
            console.log(prefab)
        })
    }
}

//https://blog.csdn.net/6346289/article/details/105963564?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&utm_relevant_index=2 reference
