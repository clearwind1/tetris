/**
 * Create by hardy on 16/12/21
 * 主游戏场景
 */
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        _super.call(this);
        this.gamedata = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        this.bpause = false;
        this.point = { x: 0, y: 0 };
        this.touchcount = 0;
    }
    var d = __define,c=GameScene,p=c.prototype;
    p.init = function () {
        this.intervalarr = [];
        this.offblock = [];
        BGMPlayer._i().play(SoundName.gamebgm);
        this.initdata();
        this.showbg();
        this.gameinterval();
    };
    p.initdata = function () {
        this.hightscore = 0;
        this.curscore = 0;
        GameData._i().gamescore = 0;
        this.beginpointx = 0;
        this.beginpointy = 0;
        this.gametime = 0;
    };
    /**
     * 显示背景
     */
    p.showbg = function () {
        var _this = this;
        window.addEventListener('keydown', function (e) {
            switch (e.keyCode) {
                case KEYCODE.DOWN:
                    _this.downend();
                    break;
                case KEYCODE.LEFT:
                    _this.left();
                    break;
                case KEYCODE.RIGHT:
                    _this.right();
                    break;
                case KEYCODE.UP:
                    _this.change();
                    break;
                case KEYCODE.SPACE:
                    _this.pause();
                    break;
            }
        }, false);
        var gamebgshap = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 1, 0x26292d);
        this.addChild(gamebgshap);
        gamebgshap.$touchEnabled = true;
        gamebgshap.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchtap, this);
        this.gametimeT = new GameUtil.MyTextField(80, 50, 40, 0, 0.5);
        this.gametimeT.setText('时间:' + this.gametime + '秒');
        this.gametimeT.textColor = 0xcfef7a;
        this.addChild(this.gametimeT);
        this.curscoreT = new GameUtil.MyTextField(480, 50, 40, 0, 0.5);
        this.curscoreT.setText('分数:' + this.curscore);
        this.curscoreT.textColor = 0xcfef7a;
        this.addChild(this.curscoreT);
        var linethick = GameConfig.LINETHICK;
        var offx = GameConfig.OFFSTARTX;
        var offy = GameConfig.OFFSTARTY;
        var dic = GameConfig.DICBH + linethick;
        var tx = GameConfig.BCOL * dic + offx;
        var ty = GameConfig.BROW * dic + offy;
        var rowline = new egret.Shape();
        rowline.graphics.lineStyle(linethick, 0x76acae, 1);
        for (var i = 0; i <= GameConfig.BROW; i++) {
            rowline.graphics.moveTo(offx, offy + i * dic);
            rowline.graphics.lineTo(tx, offy + i * dic);
        }
        for (var i = 0; i <= GameConfig.BCOL; i++) {
            rowline.graphics.moveTo(offx + i * dic, offy);
            rowline.graphics.lineTo(offx + i * dic, ty);
        }
        rowline.graphics.endFill();
        this.addChild(rowline);
        var controlshap = GameUtil.createCircle(200, 1120, 150, 1, 0x5e72da);
        this.addChild(controlshap);
        controlshap.touchEnabled = true;
        var shappos = [{ x: 200, y: 1040 }, { x: 300, y: 1120 }, { x: 200, y: 1200 }, { x: 100, y: 1120 }];
        var dirtextT = ['换', '右', '下', '左'];
        var btnfun = [this.change, this.right, this.downend, this.left];
        for (var i_1 = 0; i_1 < 4; i_1++) {
            var btnname = '';
            var fun = btnfun[i_1];
            var btn = new GameUtil.Menu(this, btnname, btnname, fun, []);
            btn.addButtonShap(GameUtil.createCircle(0, 0, 40, 1, 0xe0e688), 0, 0); //(GameUtil.createRect(0, 0, 300, 60, 1, 0x3399fe, 40, 50), -150, -30);
            btn.addButtonText(dirtextT[i_1], 30);
            this.addChild(btn);
            btn.x = shappos[i_1].x;
            btn.y = shappos[i_1].y;
        }
        var posx = 560;
        var posy = GameConfig.OFFSTARTY;
        var nexttext = new GameUtil.MyTextField(posx, posy, 45, 0, 0);
        nexttext.setText('下一个');
        nexttext.textColor = 0x8fd8b8;
        this.addChild(nexttext);
        this.blockcontaint = new egret.DisplayObjectContainer();
        this.addChild(this.blockcontaint);
        this.currblockcontain = new egret.DisplayObjectContainer();
        this.addChild(this.currblockcontain);
        this.nextblockcontain = new egret.DisplayObjectContainer();
        this.nextblockcontain.x = 530;
        this.nextblockcontain.y = 50;
        this.addChild(this.nextblockcontain);
        this.createnextblock();
        this.creaettetri();
        this.createnextblock();
    };
    p.creaettetri = function () {
        this.currblocktype = this.nextblocktype;
        this.offblock[0] = (GameConfig.BCOL / 2 - 1);
        this.offblock[1] = 0;
        this.tetri = this.nexttetri;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.tetri.spritedata[this.currblocktype][j][i] == 1) {
                    var blsp = new Blocksprite();
                    this.currblockcontain.addChild(blsp);
                    blsp.setposition(this.offblock[0] + i, j);
                    this.gamedata[blsp.posy][blsp.posx] = 1;
                }
            }
        }
    };
    p.createnextblock = function () {
        this.nextblocktype = RandomUtils.limitInteger(0, 3);
        var type = RandomUtils.limitInteger(1, 7);
        switch (type) {
            case 1:
                this.nexttetri = new Block1();
                break;
            case 2:
                this.nexttetri = new Block2();
                break;
            case 3:
                this.nexttetri = new Block3();
                break;
            case 4:
                this.nexttetri = new Block4();
                break;
            case 5:
                this.nexttetri = new Block5();
                break;
            case 6:
                this.nexttetri = new Block6();
                break;
            case 7:
                this.nexttetri = new Block7();
                break;
        }
        this.nextblockcontain.removeChildren();
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.nexttetri.spritedata[this.nextblocktype][j][i] == 1) {
                    var blsp = new Blocksprite();
                    this.nextblockcontain.addChild(blsp);
                    blsp.setposition(i, j);
                }
            }
        }
    };
    p.resetdata = function () {
        for (var i = 0; i < this.currblockcontain.numChildren; i++) {
            var block = this.currblockcontain.getChildAt(i);
            this.gamedata[block.posy][block.posx] = 1;
        }
    };
    p.pause = function () {
        if (GameData._i().GameOver) {
            return;
        }
        if (this.bpause) {
            this.bpause = false;
            GameData._i().GamePause = false;
            this.timecon.resume();
        }
        else {
            this.bpause = true;
            GameData._i().GamePause = true;
            this.timecon.pause();
        }
    };
    p.down = function () {
        //console.log('down');
        if (this.canmove(KEYCODE.DOWN)) {
            for (var i = 0; i < this.currblockcontain.numChildren; i++) {
                var block = this.currblockcontain.getChildAt(i);
                this.gamedata[block.posy][block.posx] = 0;
                block.setposition(block.posx, block.posy + 1);
            }
            this.offblock[1]++;
            this.resetdata();
        }
        else {
            //console.log('outnum=====', this.currblockcontain.numChildren);
            for (var i = 0; i < 4; i++) {
                var block = this.currblockcontain.getChildAt(i);
                var newblock = new Blocksprite();
                newblock.setposition(block.posx, block.posy);
                this.blockcontaint.addChild(newblock);
                GameUtil.gray(newblock);
            }
            this.currblockcontain.removeChildren();
            this.removeline();
        }
    };
    p.left = function () {
        //console.log('left');
        if (this.canmove(KEYCODE.LEFT)) {
            for (var i = 0; i < this.currblockcontain.numChildren; i++) {
                var block = this.currblockcontain.getChildAt(i);
                this.gamedata[block.posy][block.posx] = 0;
                block.setposition(block.posx - 1, block.posy);
            }
            this.offblock[0]--;
            this.resetdata();
        }
    };
    p.right = function () {
        //console.log('right');
        if (this.canmove(KEYCODE.RIGHT)) {
            for (var i = 0; i < this.currblockcontain.numChildren; i++) {
                var block = this.currblockcontain.getChildAt(i);
                this.gamedata[block.posy][block.posx] = 0;
                block.setposition(block.posx + 1, block.posy);
            }
            this.offblock[0]++;
            this.resetdata();
        }
    };
    p.change = function () {
        //console.log('change');
        this.currblocktype = (this.currblocktype + 1) % 4;
        if (this.checkChange()) {
            for (var i_2 = 0; i_2 < this.currblockcontain.numChildren; i_2++) {
                var block = this.currblockcontain.getChildAt(i_2);
                this.gamedata[block.posy][block.posx] = 0;
            }
            this.currblockcontain.removeChildren();
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    if (this.tetri.spritedata[this.currblocktype][j][i] == 1) {
                        var blsp = new Blocksprite();
                        this.currblockcontain.addChild(blsp);
                        blsp.setposition(this.offblock[0] + i, this.offblock[1] + j);
                        this.gamedata[blsp.posy][blsp.posx] = 1;
                    }
                }
            }
        }
        else {
            this.currblocktype = (this.currblocktype - 1) % 4;
        }
    };
    p.downend = function () {
        if (GameData._i().GamePause) {
            return;
        }
        var downline = GameConfig.BROW;
        for (var i = 0; i < this.currblockcontain.numChildren; i++) {
            var block = this.currblockcontain.getChildAt(i);
            var nextposx = block.posx;
            var nextposy = block.posy;
            if (nextposy == 13) {
                downline = 0;
                break;
            }
            var line = 0;
            for (var j = nextposy + 1; j < GameConfig.BROW; j++) {
                if (this.gamedata[j][nextposx] != 1 || this.checkincontain(nextposx, j)) {
                    line++;
                }
                else {
                    break;
                }
            }
            downline = GameUtil.MIN(downline, line);
        }
        if (downline != GameConfig.BROW) {
            this.offblock[1] += downline;
            for (var i = 0; i < this.currblockcontain.numChildren; i++) {
                var block = this.currblockcontain.getChildAt(i);
                this.gamedata[block.posy][block.posx] = 0;
                block.setposition(block.posx, downline + block.posy);
                this.gamedata[block.posy][block.posx] = 1;
            }
        }
    };
    p.canmove = function (type) {
        if (GameData._i().GamePause) {
            return false;
        }
        var bcan = true;
        for (var i = 0; i < this.currblockcontain.numChildren; i++) {
            var block = this.currblockcontain.getChildAt(i);
            var nextposx = block.posx;
            var nextposy = block.posy;
            if (type == KEYCODE.DOWN) {
                nextposy += 1;
            }
            else if (type == KEYCODE.LEFT) {
                nextposx -= 1;
            }
            else if (type == KEYCODE.RIGHT) {
                nextposx += 1;
            }
            else if (type == KEYCODE.UP) {
            }
            if (nextposx >= GameConfig.BCOL || nextposx < 0 || nextposy >= GameConfig.BROW || (this.gamedata[nextposy][nextposx] != 0 && !this.checkincontain(nextposx, nextposy))) {
                bcan = false;
                break;
            }
        }
        return bcan;
    };
    p.checkChange = function () {
        if (GameData._i().GamePause) {
            return;
        }
        var bcan = true;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.tetri.spritedata[this.currblocktype][j][i] == 1) {
                    if (this.offblock[0] + i < 0 || this.offblock[0] + i >= GameConfig.BCOL || this.offblock[1] + j >= GameConfig.BROW || (this.gamedata[this.offblock[1] + j][this.offblock[0] + i] != 0 && !this.checkincontain(this.offblock[0] + i, this.offblock[1] + j))) {
                        bcan = false;
                        break;
                    }
                }
            }
        }
        return bcan;
    };
    p.checkincontain = function (nextposx, nextposy) {
        var bIn = false;
        for (var i = 0; i < this.currblockcontain.numChildren; i++) {
            var block = this.currblockcontain.getChildAt(i);
            if (block.posx == nextposx && block.posy == nextposy) {
                bIn = true;
                break;
            }
        }
        return bIn;
    };
    p.removeline = function () {
        var _this = this;
        var canreli = [];
        for (var i = GameConfig.BROW - 1; i >= 0; i--) {
            var bcan = true;
            for (var j = 0; j < GameConfig.BCOL; j++) {
                if (this.gamedata[i][j] == 0) {
                    bcan = false;
                    break;
                }
            }
            if (bcan) {
                canreli.push(i);
            }
        }
        var wantremove = [];
        for (var i = 0; i < canreli.length; i++) {
            for (var j = 0; j < this.blockcontaint.numChildren; j++) {
                var block = this.blockcontaint.getChildAt(j);
                if (block.posy == canreli[i]) {
                    wantremove.push(block);
                }
            }
        }
        var once = true;
        var _loop_1 = function(i) {
            this_1.gamedata[wantremove[i].posy][wantremove[i].posx] = 0;
            egret.Tween.get(wantremove[i]).to({ alpha: 0 }, 200).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200).call(function () {
                _this.blockcontaint.removeChild(wantremove[i]);
                if (once) {
                    once = false;
                    var scoretype = [10, 30, 60, 90];
                    _this.curscore += scoretype[canreli.length - 1];
                    _this.curscoreT.setText('分数:' + _this.curscore);
                    //往下掉
                    var upposy = GameConfig.BROW - 1;
                    for (var i_3 = 0; i_3 < canreli.length; i_3++) {
                        upposy = GameUtil.MIN(upposy, canreli[i_3]);
                    }
                    for (var i_4 = upposy - 1; i_4 >= 0; i_4--) {
                        for (var j = 0; j < GameConfig.BCOL; j++) {
                            var block = _this.getchildbypos(j, i_4);
                            if (block) {
                                _this.gamedata[i_4][j] = 0;
                                block.setposition(j, i_4 + canreli.length);
                                _this.gamedata[block.posy][block.posx] = 1;
                            }
                        }
                    }
                    //生成新方块
                    _this.creaettetri();
                    _this.createnextblock();
                    _this.checkgameover();
                }
            }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < wantremove.length; i++) {
            _loop_1(i);
        }
        if (wantremove.length <= 0) {
            //生成新方块
            this.creaettetri();
            this.createnextblock();
            this.checkgameover();
        }
    };
    p.getchildbypos = function (posx, posy) {
        for (var i = 0; i < this.blockcontaint.numChildren; i++) {
            var block = this.blockcontaint.getChildAt(i);
            if (block.posy == posy && block.posx == posx) {
                return block;
            }
        }
        return null;
    };
    /**游戏定时器 */
    p.gameinterval = function () {
        var _this = this;
        GameUtil.trace('interval');
        this.timecon = new Timercontrol(1000);
        this.timecon.init(this, this.down);
        this.timecon.start();
        this.intervalarr.push(egret.setInterval(function () {
            if (GameData._i().GamePause) {
                return;
            }
            _this.gametime++;
            _this.gametimeT.setText('时间:' + _this.gametime + '秒');
        }, this, 1000));
        //this.gameover();
    };
    p.checkgameover = function () {
        var bgameover = false;
        for (var i = 0; i < this.currblockcontain.numChildren; i++) {
            var block = this.currblockcontain.getChildAt(i);
            if (this.getchildbypos(block.posx, block.posy) != null) {
                bgameover = true;
                break;
            }
        }
        if (bgameover) {
            for (var i = 0; i < this.currblockcontain.numChildren; i++) {
                var block = this.currblockcontain.getChildAt(i);
                GameUtil.gray(block);
            }
            this.gameover();
        }
    };
    p.touchbegin = function (evt) {
        if (GameData._i().GamePause) {
            return;
        }
        this.point.x = evt.localX;
        this.point.y = evt.localY;
    };
    p.touchend = function (evt) {
        if (GameData._i().GamePause) {
            return;
        }
        var endpoint = { x: evt.localX, y: evt.localY };
        if (endpoint.x - this.point.x > 100) {
        }
    };
    p.touchtap = function (e) {
        var _this = this;
        console.log('tap');
        if (this.touchcount < 1) {
            this.touchcount++;
        }
        else {
            this.pause();
        }
        egret.setTimeout(function () {
            _this.touchcount = 0;
        }, this, 500);
    };
    /**游戏结束 */
    p.gameover = function () {
        var _this = this;
        GameUtil.trace('gameover');
        this.timecon.stop();
        GameData._i().GamePause = true;
        GameData._i().GameOver = true;
        this.clearinter();
        var gameovercontaint = new egret.DisplayObjectContainer;
        this.addChild(gameovercontaint);
        gameovercontaint.addChild(GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 0.6));
        var posx = this.mStageW / 2;
        var posy = 200;
        var gametitletext = new GameUtil.MyTextField(posx, posy, 100, 0.5, 0.5);
        gametitletext.setText(GameConfig.GAMENAME);
        gametitletext.italic = true;
        gametitletext.textColor = 0x75bfea;
        gameovercontaint.addChild(gametitletext);
        // var text = new GameUtil.MyTextField(posx, posy + 200, 70, 0.5, 0.5);
        // text.setText('分数:' + (this.passtext - 1));
        // text.textColor = 0xff0000;
        // gameovercontaint.addChild(text);
        var btnname = '';
        var fun = function () {
            _this.removeChild(gameovercontaint);
            _this.restart();
        };
        var btn = new GameUtil.Menu(this, btnname, btnname, fun, [0]);
        btn.setScaleMode();
        btn.addButtonShap(GameUtil.createRect(0, 0, 300, 60, 1, 0x3399fe, 40, 50), -150, -30);
        btn.addButtonText('重新开始', 30);
        gameovercontaint.addChild(btn);
        btn.x = posx;
        btn.y = this.mStageH / 2;
        //this.gametime.stop();
        //egret.Tween.removeAllTweens();
    };
    /**
     *下一关
     */
    p.nextlevelgame = function () {
    };
    /**重置游戏数据 */
    p.reset = function () {
        this.gameinterval();
        this.restart();
    };
    /**清除定时器 */
    p.clearinter = function () {
        GameUtil.clearinterval(this.intervalarr);
        // for (var i: number = 0; i < this.enemyContain.numChildren; i++) {
        //     var enemysp: EnemySprite = <EnemySprite>this.enemyContain.getChildAt(i);
        //     GameUtil.clearinterval(enemysp.intervalarr);
        // }
    };
    p.exitgame = function () {
        GameUtil.GameScene.runscene(new StartGameScene());
    };
    p.restartask = function () {
        var _this = this;
        var askcon = new egret.DisplayObjectContainer();
        this.addChild(askcon);
        askcon.touchEnabled = true;
        var shap = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 0.6);
        askcon.addChild(shap);
        var bgname = 'restartbg_png';
        var gameoverbg = new MyBitmap(RES.getRes(bgname), this.mStageW / 2, this.mStageH / 2);
        askcon.addChild(gameoverbg);
        var bgtext = new MyBitmap(RES.getRes('restarttext_png'), 330, 80, gameoverbg);
        askcon.addChild(bgtext);
        var btname = ['yesbtn_png', 'nobtn_png'];
        var btnfun = [this.restart,];
        for (var i = 0; i < 2; i++) {
            var btn = new GameUtil.Menu(this, btname[i], btname[i], function (id) {
                askcon.parent.removeChild(askcon);
                if (id == 0) {
                    _this.restart();
                }
            }, [i]);
            askcon.addChild(btn);
            GameUtil.relativepos(btn, gameoverbg, 175 + 290 * i, 260);
        }
    };
    p.restart = function () {
        GameData._i().gamescore = 0;
        this.curscore = 0;
        this.curscoreT.setText('分数:' + this.curscore);
        this.gametime = 0;
        this.gametimeT.setText('时间:' + this.gametime + '秒');
        this.timecon.start();
        this.hightscore = 2;
        console.log('restart');
        this.blockcontaint.removeChildren();
        this.currblockcontain.removeChildren();
        this.timecon.start();
        GameData._i().GamePause = false;
        GameData._i().GameOver = false;
        for (var i = 0; i < GameConfig.BROW; i++) {
            for (var j = 0; j < GameConfig.BCOL; j++) {
                this.gamedata[i][j] = 0;
            }
        }
        this.creaettetri();
        this.createnextblock();
        //this.restart();
    };
    return GameScene;
}(GameUtil.BassPanel));
egret.registerClass(GameScene,'GameScene');
//# sourceMappingURL=GameScene.js.map