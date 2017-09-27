/**
 * Created by pior on 16/12/15.
 * 游戏配置
 */
var KEYCODE;
(function (KEYCODE) {
    KEYCODE[KEYCODE["LEFT"] = 37] = "LEFT";
    KEYCODE[KEYCODE["UP"] = 38] = "UP";
    KEYCODE[KEYCODE["RIGHT"] = 39] = "RIGHT";
    KEYCODE[KEYCODE["DOWN"] = 40] = "DOWN";
    KEYCODE[KEYCODE["SPACE"] = 32] = "SPACE";
})(KEYCODE || (KEYCODE = {}));
;
/**声音文件枚举 */
var SoundName;
(function (SoundName) {
    SoundName[SoundName["gamebgm"] = 0] = "gamebgm";
    SoundName[SoundName["startgamebgm"] = 1] = "startgamebgm";
    SoundName[SoundName["comble"] = 2] = "comble";
    SoundName[SoundName["remove"] = 3] = "remove";
    SoundName[SoundName["newcored"] = 4] = "newcored";
    SoundName[SoundName["clickf"] = 5] = "clickf";
    SoundName[SoundName["end"] = 6] = "end";
})(SoundName || (SoundName = {}));
;
/**场景转换效果，对应：无效果，从左往右，淡入淡出，向两边分开 */
var SceneEffect;
(function (SceneEffect) {
    SceneEffect[SceneEffect["NullAction"] = 0] = "NullAction";
    SceneEffect[SceneEffect["CrossLeft"] = 1] = "CrossLeft";
    SceneEffect[SceneEffect["TransAlpha"] = 2] = "TransAlpha";
    SceneEffect[SceneEffect["OpenDoor"] = 3] = "OpenDoor";
})(SceneEffect || (SceneEffect = {}));
;
var GameConfig = (function () {
    /**开发游戏配置结束 */
    function GameConfig() {
        this.initconfigdata();
    }
    var d = __define,c=GameConfig,p=c.prototype;
    /**初始化游戏配置数据 */
    p.initconfigdata = function () {
        this.bguidedone = true;
        this.bfirstplay = false;
        if (!GameUtil.readLocalData(GameConfig.FIRSTGAME)) {
            GameUtil.saveLocalData(GameConfig.FIRSTGAME, '1');
            GameUtil.saveLocalData(GameConfig.GAMESOUND, '1');
            GameUtil.saveLocalData(GameConfig.GAMEMUSIC, '1');
            GameUtil.saveLocalData(GameConfig.GAMELEVEL, '0');
            this.bfirstplay = true;
        }
        this.bgamemusic = parseInt(GameUtil.readLocalData(GameConfig.GAMEMUSIC)) == 1 ? true : false;
        this.bgamesound = parseInt(GameUtil.readLocalData(GameConfig.GAMESOUND)) == 1 ? true : false;
    };
    GameConfig.getSW = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    GameConfig.getSH = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    GameConfig._i = function () {
        if (this._instance == null) {
            this._instance = new GameConfig();
        }
        return this._instance;
    };
    /**基本配置 */
    GameConfig.DEBUG = true;
    GameConfig.IP = "api.h5.gamexun.com"; //http连接地址
    GameConfig.GAMENAME = '俄罗斯方块'; //游戏在服务器上的名字
    GameConfig.SERVERNAME = 'children'; //服务器连接名
    GameConfig.FIRSTGAME = 'firstgame'; //第一次进游戏标示
    GameConfig.GAMESOUND = 'gamesound'; //游戏音效
    GameConfig.GAMEMUSIC = 'gamemusic'; //游戏音乐
    GameConfig.GAMELEVEL = 'gamelevel'; //游戏等级
    GameConfig.IsLoadSound = false; //是否加载声音
    GameConfig.SoundName = [
        'startgamebgm.mp3', 'gamebgm.mp3', 'comble.mp3', 'remove.mp3', 'newcored.mp3', 'clickf.mp3'
    ];
    GameConfig.MoreGameName = [];
    GameConfig.GUIDESTEPNUM = 2; //新手引导总步数
    GameConfig.DesignWidth = 755; //游戏设计尺寸宽
    GameConfig.DesignHeight = 1334; //游戏设计尺寸高
    GameConfig.WeiXinstr = 'micromessenger'; //常用判断类型
    GameConfig.Androidstr = 'android';
    GameConfig.Iphone = 'iPhone';
    /**基本配置结束 */
    /**开发游戏配置 */
    GameConfig.DICBW = 50;
    GameConfig.DICBH = 50;
    GameConfig.BROW = 14; //列数
    GameConfig.BCOL = 10; //行数
    GameConfig.OFFSTARTX = 10; //x位移值
    GameConfig.OFFSTARTY = 200; //y位移值
    GameConfig.LINETHICK = 2;
    GameConfig._instance = null;
    return GameConfig;
}());
egret.registerClass(GameConfig,'GameConfig');
//# sourceMappingURL=GameConfig.js.map