var DisType;
(function (DisType) {
    DisType[DisType["NULL"] = 0] = "NULL";
    DisType[DisType["TopTDown"] = 1] = "TopTDown";
    DisType[DisType["DownTTop"] = 2] = "DownTTop";
    DisType[DisType["LeftTRight"] = 3] = "LeftTRight";
    DisType[DisType["RightTLeft"] = 4] = "RightTLeft";
    DisType[DisType["Alpha"] = 5] = "Alpha";
    DisType[DisType["End"] = 6] = "End";
})(DisType || (DisType = {}));
;
var GameMenus = (function (_super) {
    __extends(GameMenus, _super);
    function GameMenus(showtype) {
        _super.call(this, [showtype]);
    }
    var d = __define,c=GameMenus,p=c.prototype;
    p.init = function (showtype) {
        this.showtype = showtype;
        this.show();
    };
    p.show = function () {
        var posx = this.mStageW / 2;
        var posy = this.mStageH / 2;
        //菜单背景色
        var shap = GameUtil.createRect(posx, posy, this.mStageW * 2 / 3, this.mStageH / 2.5, 0.8, 0x69c898);
        shap.$setAnchorOffsetX(shap.width / 2);
        shap.$setAnchorOffsetY(shap.height / 2);
        this.addChild(shap);
        //菜单背景图
        var menubgimg = new MyBitmap(RES.getRes(''), posx, posy);
        this.addChild(menubgimg);
        var btnfun = [this.startgame, this.howtoplay, this.setting, this.about];
        var btnName = ['开      始', '玩      法', '设      置', '关      于'];
        for (var i = 0; i < 4; i++) {
            var btnname = btnName[i];
            var fun = btnfun[i];
            var btn = new GameUtil.Menu(this, '', '', fun);
            btn.setScaleMode();
            btn.addButtonShap(GameUtil.createRect(0, 0, 300, 60, 1, 0x3399fe, 40, 50), -150, -30);
            btn.addButtonText(btnname, 30);
            this.addChild(btn);
            btn.x = posx;
            btn.y = 50 + posy + (i - 2) * 100;
        }
        do {
            if (this.showtype == DisType.NULL) {
                this.y = 0;
                break;
            }
            else if (this.showtype == DisType.TopTDown) {
                this.y = -this.mStageH;
                egret.Tween.get(this).to({ y: 0 }, 1500, egret.Ease.bounceOut);
                break;
            }
            else if (this.showtype == DisType.DownTTop) {
                this.y = this.mStageH;
                egret.Tween.get(this).to({ y: 0 }, 1500, egret.Ease.bounceOut);
                break;
            }
            else if (this.showtype == DisType.LeftTRight) {
                this.x = -this.mStageW;
                egret.Tween.get(this).to({ x: 0 }, 1500, egret.Ease.bounceOut);
                break;
            }
            else if (this.showtype == DisType.RightTLeft) {
                this.x = this.mStageW;
                egret.Tween.get(this).to({ x: 0 }, 1500, egret.Ease.bounceOut);
                break;
            }
            else if (this.showtype == DisType.Alpha) {
                this.alpha = 0;
                egret.Tween.get(this).to({ alpha: 1 }, 500);
                break;
            }
        } while (false);
    };
    p.startgame = function () {
        GameUtil.GameScene.runscene(new GameScene());
    };
    p.howtoplay = function () {
        this.createMask();
        var posx = this.mStageW / 2;
        var posy = this.mStageH / 2;
        var text = new GameUtil.MyTextField(50, 50, 30, 0, 0);
        text.setText('玩法介绍:\n\n\n经典俄罗斯方块，按钮控制左右移动，旋转，快速到达底部，双击屏幕可暂停/恢复游戏');
        text.textColor = 0xcbeaa0;
        text.width = this.mStageW - 100;
        this.maskscene.addChild(text);
    };
    p.setting = function () {
        this.createMask();
        var posx = this.mStageW / 2;
        var posy = this.mStageH / 2;
        var text = new GameUtil.MyTextField(50, 50, 30, 0, 0);
        text.setText('游戏设置:\n\n\n暂无');
        text.textColor = 0xcbeaa0;
        text.width = this.mStageW - 100;
        this.maskscene.addChild(text);
    };
    p.about = function () {
        this.createMask();
        var posx = this.mStageW / 2;
        var posy = this.mStageH / 2;
        var text = new GameUtil.MyTextField(50, 50, 30, 0, 0);
        text.setText('关于游戏:\n\n\n游戏开发者：HardyMonkey\n时间：2017年9月26日');
        text.textColor = 0xcbeaa0;
        text.width = this.mStageW - 100;
        this.maskscene.addChild(text);
    };
    p.createMask = function () {
        var _this = this;
        this.maskscene = new egret.DisplayObjectContainer();
        this.addChild(this.maskscene);
        this.maskscene.$setTouchEnabled(true);
        var shap = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 1, 0x000000);
        this.maskscene.addChild(shap);
        var posx = this.mStageW / 2;
        var posy = this.mStageH / 2;
        var btnname = '返        回';
        var fun = function () {
            _this.removeChild(_this.maskscene);
        };
        var btn = new GameUtil.Menu(this, '', '', fun);
        btn.setScaleMode();
        btn.addButtonShap(GameUtil.createRect(0, 0, 300, 60, 1, 0x3399fe, 40, 50), -150, -30);
        btn.addButtonText(btnname, 30);
        this.maskscene.addChild(btn);
        btn.x = posx;
        btn.y = this.mStageH - 100;
    };
    return GameMenus;
}(GameUtil.BassPanel));
egret.registerClass(GameMenus,'GameMenus');
//# sourceMappingURL=GameMenus.js.map