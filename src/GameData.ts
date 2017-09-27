/**
 * Created by pior on 16/12/15.
 * 游戏数据
 */

class GameData {

    public GamePause: boolean;              //游戏暂停标志    
    public GameOver: boolean;               //游戏结束标志
    public isLoadingend: boolean;           //游戏加载进度结束标志
    public gamesound: MySound[] = [];       //游戏声音
    public GameLevel: number;               //游戏等级
    public gamescore: number;
    public gamedata: number[][] = [];

    public constructor() {
        this.init();
    }

    private init()
    {
        this.GamePause = false;
        this.GameOver = false;
        this.isLoadingend = false;
        this.gamescore = 0;
        this.GameLevel = 1;
        // for (var i: number = 0; i < GameConfig.BROW; i++){
        //     for (var j: number = 0; j < GameConfig.BCOL; j++){
        //         GameData._i().gamedata[i][j] = 0;
        //     }
        // }
    }

    private static _inst:GameData = null;

    public static _i():GameData
    {
        return (this._inst = (this._inst==null ? new GameData():this._inst));
    }
}