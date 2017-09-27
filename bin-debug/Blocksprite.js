/**
 * 方块类
 */
var Blocksprite = (function (_super) {
    __extends(Blocksprite, _super);
    function Blocksprite() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=Blocksprite,p=c.prototype;
    p.init = function () {
        this.graphics.beginFill(0xe8179c);
        this.graphics.drawRect(0, 0, GameConfig.DICBW, GameConfig.DICBH);
        this.graphics.endFill();
    };
    p.setposition = function (x, y) {
        this.posx = x;
        this.posy = y;
        var linethick = GameConfig.LINETHICK - 1;
        var offx = GameConfig.OFFSTARTX + linethick;
        var offy = GameConfig.OFFSTARTY + linethick;
        var dic = GameConfig.DICBH + GameConfig.LINETHICK;
        this.x = offx + x * dic;
        this.y = offy + y * dic;
    };
    return Blocksprite;
}(egret.Sprite));
egret.registerClass(Blocksprite,'Blocksprite');
var Block1 = (function () {
    function Block1() {
        // super();
        this.initdata();
    }
    var d = __define,c=Block1,p=c.prototype;
    p.initdata = function () {
        this.spritedata = [[[0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
            [[1, 0, 0, 0],
                [1, 1, 0, 0],
                [1, 0, 0, 0],
                [0, 0, 0, 0]],
            [[1, 1, 1, 0],
                [0, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
            [[0, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 0, 0]]];
    };
    return Block1;
}());
egret.registerClass(Block1,'Block1');
var Block2 = (function () {
    function Block2() {
        // super();
        this.initdata();
    }
    var d = __define,c=Block2,p=c.prototype;
    p.initdata = function () {
        this.spritedata = [[[1, 1, 0, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
            [[0, 1, 0, 0],
                [1, 1, 0, 0],
                [1, 0, 0, 0],
                [0, 0, 0, 0]],
            [[1, 1, 0, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
            [[0, 1, 0, 0],
                [1, 1, 0, 0],
                [1, 0, 0, 0],
                [0, 0, 0, 0]]];
    };
    return Block2;
}());
egret.registerClass(Block2,'Block2');
var Block3 = (function () {
    function Block3() {
        // super();
        this.initdata();
    }
    var d = __define,c=Block3,p=c.prototype;
    p.initdata = function () {
        this.spritedata = [[[0, 1, 1, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
            [[1, 0, 0, 0],
                [1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 0, 0]],
            [[0, 1, 1, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
            [[1, 0, 0, 0],
                [1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 0, 0]]];
    };
    return Block3;
}());
egret.registerClass(Block3,'Block3');
var Block4 = (function () {
    function Block4() {
        // super();
        this.initdata();
    }
    var d = __define,c=Block4,p=c.prototype;
    p.initdata = function () {
        this.spritedata = [[[0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0]],
            [[0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
            [[0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0]],
            [[0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]]];
    };
    return Block4;
}());
egret.registerClass(Block4,'Block4');
var Block5 = (function () {
    function Block5() {
        // super();
        this.initdata();
    }
    var d = __define,c=Block5,p=c.prototype;
    p.initdata = function () {
        this.spritedata = [[[1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
            [[1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
            [[1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
            [[1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]]];
    };
    return Block5;
}());
egret.registerClass(Block5,'Block5');
var Block6 = (function () {
    function Block6() {
        // super();
        this.initdata();
    }
    var d = __define,c=Block6,p=c.prototype;
    p.initdata = function () {
        this.spritedata = [[[0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0]],
            [[1, 1, 1, 0],
                [1, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
            [[1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 0, 0]],
            [[0, 0, 1, 0],
                [1, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],];
    };
    return Block6;
}());
egret.registerClass(Block6,'Block6');
var Block7 = (function () {
    function Block7() {
        // super();
        this.initdata();
    }
    var d = __define,c=Block7,p=c.prototype;
    p.initdata = function () {
        this.spritedata = [[[0, 1, 0, 0],
                [0, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0]],
            [[1, 0, 0, 0],
                [1, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]],
            [[1, 1, 0, 0],
                [1, 0, 0, 0],
                [1, 0, 0, 0],
                [0, 0, 0, 0]],
            [[1, 1, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]]];
    };
    return Block7;
}());
egret.registerClass(Block7,'Block7');
//# sourceMappingURL=Blocksprite.js.map