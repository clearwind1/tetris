/**
 * Create by hardy on 16/12/28
 * 定时器类
 */
class Timercontrol {
    private timer: egret.Timer;
    private tagetobj: any;
    private fun: Function;
    private params: any[];
    private bpause: boolean;
    public constructor(delay: number, repeatCount: number = 0) {
        this.timer = new egret.Timer(delay, repeatCount);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
    }
    /**
     * 初始化
     * @delay 延迟时间
     * @repeatCount 重复次数，0为无限重复（默认0）
     */
    public init(tagetobj: any, fun: Function, params?: any[]) {
        console.log('inittime');
        this.bpause = false;
        this.tagetobj = tagetobj;
        this.fun = fun;
        this.params = params;
    }
    public start()
    {
        this.timer.start();
    }
    public stop()
    {
        this.timer.stop();
    }
    public pause() {
        this.bpause = true;
    }
    public resume() {
        this.bpause = false;
    }
    public setdelay(delay) {
        this.timer.delay = delay;
    }
    /**
     * 回调函数
     */
    private timerFunc(event: egret.Event) {
        //console.log('run');
        if (this.bpause) {
            return;
        }
        if (this.tagetobj) {
            this.fun.apply(this.tagetobj, this.params);
        }
    }
}