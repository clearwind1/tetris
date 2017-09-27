
/**
 * 方块类
 */

class Blocksprite extends egret.Sprite {

	public posx: number;
	public posy: number;
	public constructor() {
		super();
		this.init();
	}

	protected init() {
		this.graphics.beginFill(0xe8179c);
		this.graphics.drawRect(0, 0, GameConfig.DICBW, GameConfig.DICBH);
		this.graphics.endFill();
	}
	public setposition(x: number, y: number) {

		this.posx = x;
		this.posy = y;

		var linethick = GameConfig.LINETHICK-1;
        var offx = GameConfig.OFFSTARTX+linethick;
        var offy = GameConfig.OFFSTARTY+linethick;
        var dic = GameConfig.DICBH + GameConfig.LINETHICK;

		this.x = offx + x * dic;
		this.y = offy + y * dic;
	}
}
class Block1{
	public spritedata: number[][][];
	public constructor() {
		// super();
		this.initdata();
	}
	private initdata() {
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
	}
}
class Block2{
	public spritedata: number[][][];
	public constructor() {
		// super();
		this.initdata();
	}
	private initdata() {
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
	}
}
class Block3{
	public spritedata: number[][][];
	public constructor() {
		// super();
		this.initdata();
	}
	private initdata() {
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
	}
}
class Block4{
	public spritedata: number[][][];
	public constructor() {
		// super();
		this.initdata();
	}
	private initdata() {
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
	}
}
class Block5{
	public spritedata: number[][][];
	public constructor() {
		// super();
		this.initdata();
	}
	private initdata() {
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
	}
}
class Block6{
	public spritedata: number[][][];
	public constructor() {
		// super();
		this.initdata();
	}
	private initdata() {
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
	}
}
class Block7{
	public spritedata: number[][][];
	public constructor() {
		// super();
		this.initdata();
	}
	private initdata() {
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
	}
}