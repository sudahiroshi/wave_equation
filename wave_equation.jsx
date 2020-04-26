import "js/web.jsx";
import "vcanvas.jsx";
import "nylon.client.jsx";
import "vbTimer.jsx";

final class wave_equation {
	var vc1: VCanvas;
	var vc2: VCanvas;
	var vc1b: VCanvas;
	var vc2b: VCanvas;
	var vc3: VCanvas;
	var vc3b: VCanvas;
	var timer1: vbTimer;

	var t = 1;

	var sl1 = 1;
	var sl2 = 1;

	static function main( canvas1Id: string, canvas2Id: string, canvas3Id: string ) : void {
		var elm1 = dom.id(canvas1Id) as HTMLCanvasElement;
		var vc1 = new VCanvas( elm1 );
		var elm1b = dom.id(canvas1Id + "b") as HTMLCanvasElement;
		var vc1b = new VCanvas( elm1b );

		var elm2 = dom.id(canvas2Id) as HTMLCanvasElement;
		var vc2 = new VCanvas( elm2 );
		var elm2b = dom.id(canvas2Id + "b") as HTMLCanvasElement;
		var vc2b = new VCanvas( elm2b );

		var elm3 = dom.id(canvas3Id) as HTMLCanvasElement;
		var vc3 = new VCanvas( elm3 );
		var elm3b = dom.id(canvas3Id + "b") as HTMLCanvasElement;
		var vc3b = new VCanvas( elm3b );

		var we = new wave_equation( vc1, vc1b, vc2, vc2b, vc3, vc3b );
		we.init();
	}
	function constructor( vc1: VCanvas, vc1b: VCanvas, vc2: VCanvas, vc2b: VCanvas, vc3: VCanvas, vc3b: VCanvas ) {

		this.vc1 = vc1;
		this.vc1b = vc1b;
		this.vc2 = vc2;
		this.vc2b = vc2b;
		this.vc3 = vc3;
		this.vc3b = vc3b;
		this.vc1.scale( -111, -40, 560, 80 );
		this.vc2.scale( -112, -50, 590, 95 );
		this.vc3.scale( -112, -45, 590, 135.246 );

		this.timer1 = new vbTimer();
		this.timer1.interval = 20;
		this.timer1.timer = (): void -> {
			this.animation();
		};

		var nl = new nylon();
		nl.on( "start", ( dummy: Map.<variant> ): void -> {
			this.init();
		});
		nl.on( "stop", ( dummy: Map.<variant> ): void -> {
			this.timer1.disable();
		});
	}
	function init(): void {
		this.vc1b.beginPath();
		this.vc1b.cls();
		this.vc1b.print( 490, 10, "Miida Laboratory, Chiba Institute of Technology" );
		this.vc1.stroke();

		this.timer1.enable();
	}

	function animation(): void {
		var freq = 0.7 + this.sl1;
		var speed = ( 15.0 - 6.0 * this.sl2 / 2.0 ) / 10.0;

		var m = 2.0 * Math.PI * freq * this.t / 100.0;
		var mc = Math.cos( m );
		var ms = -Math.sin( m );
		var nx = 15.0 / freq * mc;
		var ny = 17.0 / freq * ms;

		var p1 = this.vc1;
		p1.beginPath();
		p1.forecolor( 100, 200, 200 );
		p1.drawWidth( 3 );
		p1.cls();
		p1.circle( -75, 0, 22 );
		p1.circle( -75, 0, 3 );

		p1.circle( nx - 75, -ny, 2 );	// クランク
		p1.stroke();

		p1.beginPath();
		p1.forecolor( 10, 10, 100 );
		p1.line( -75, 0, nx - 75, -ny );	// アーム
		p1.line( nx - 75, -ny, nx, 0 );
		p1.stroke();

		p1.beginPath();
		p1.forecolor( 100, 200, 200 );
		p1.rect( nx - 2, -19, nx + 2, 19 );	// ピストン
		p1.fill();

		p1.beginPath();
		p1.forecolor( 0, 0, 0 );
		p1.drawWidth( 10 );
		p1.line( -20, -29, 400, -29 );
		p1.line( -20, 30, 400, 30 );
		p1.stroke();

		var calc = function( x: number ) : number {
			return x + 5 + 15 / freq * Math.cos( m - x * freq / 30 * speed );
		};
		p1.beginPath();
		p1.forecolor( 0, 0, 0 );
		p1.drawWidth( 2 );
		for( var x=0; x<400; x+=10 ) {
			var xx = calc(x);
			p1.line( xx, -19, xx, 19 );
		}
		p1.stroke();

		p1.beginPath();
		p1.forecolor( 200, 50, 50 );
		p1.line( calc(190), -19, calc(190), 19 );
		p1.line( calc(220), -19, calc(220), 19 );
		p1.stroke();
		var xa = calc( 190 );
		var dxa = calc( 170 );
		var xb = calc( 220 );
		var dxb = calc( 240 );

		// ニュートンの式
		var pict1 = this.vc2;
		pict1.beginPath();
		pict1.cls();
		pict1.rect( xa, 10, xb, 40 );	// 本来は波線
		pict1.fill();
		var pa = 50 /  ( xa - dxa );
		var pb = 50 / -( xb - dxb );
		
		pict1.beginPath();
		pict1.rect( xa - 30, pa + 20, xa - 10, -pa + 20 );	// 左側圧力
		pict1.rect( xb + 10, pb + 20, xb + 30, -pb + 20 );	// 右側圧力
		pict1.fill();

		pict1.beginPath();
		pict1.print( ( xa + xb ) / 2 - 22, -16, "mass D m" );
		pict1.print( ( xa + xb ) / 2 - 10, -3, "D x" );
		pict1.line( xa, 45, xa, 43 );
		pict1.line( xb, 45, xb, 43 );
		pict1.print( xa - 84, 30, "pressure p1" );
		pict1.print( xb + 5, 30, "p2" );
		pict1.stroke;

		// フックの式
		var pict2 = this.vc3;
		pict2.beginPath();
		pict2.cls();
		pict2.forecolor( 255, 120, 120 );
		pict2.rect( 190, 10, 220, 3 );
		pict2.rect( xa, -41, xb, -10.4 );
		pict2.fill();

		pict2.beginPath();
		pict2.drawWidth( 3 );
		pict2.forecolor( 0, 0, 0 );
		pict2.line( xa, -46, xa, -44 );
		pict2.line( xb, -46, xb, -44 );
		pict2.stroke();

		pict2.beginPath();
		if( ( xb - xa ) > 30){
			pict2.forecolor( 0xcc, 0xcc, 0x33 );
			pict2.rect( xa + 30, -41, xb, -11 );
		}
		else{
			pict2.forecolor( 0x51, 0xbb, 0x40 );
			pict2.rect( xb, -41, xa + 30, -11 );
		}
		pict2.fill();

		pict2.beginPath();
		pict2.drawWidth( 2 );
		pict2.forecolor( 0, 0, 0 );
		if( ( xb - xa ) > 30 )	pict2.print( 180, 10, " expand" );
		else 	pict2.print( 180, 10, "compress" );
		pict2.print( 160, 27, "particle position" );
		pict2.print( 157, 40, "at static pressure" );
		pict2.print( xa - 18, -42, "p" );
		pict2.print( xa - 23, -27, "z1" );
		pict2.print( xb + 5, -42, "p2=p average pressure" );
		pict2.print( xb + 5, -27, "z2 paricle position" );
		pict2.drawWidth( 2 );
		pict2.line( xa, -8, 190, 0 );
		pict2.line( xb, -8, 220, 0 );

		this.t++;
	}
}

class gui {
	static function main( btn1: string, btn2: string, btn3: string, btn4: string ): void {
		var nl2 = new nylon();
		var b1 = dom.id(btn1) as HTMLButtonElement;
		b1.addEventListener( "click", function( e: Event ): void {
			nl2.emit( "start", null );
		});
		var b2 = dom.id(btn2) as HTMLButtonElement;
		b2.addEventListener( "click", function( e: Event ): void {
			nl2.emit( "stop", null );
		});
		var b3 = dom.id(btn3) as HTMLButtonElement;
		b3.addEventListener( "click", function( e: Event ): void {
			nl2.emit( "stop", null );
			nl2.emit( "delta", {"top":0.3}:Map.<variant> );
		});
		var b4 = dom.id(btn4) as HTMLButtonElement;
		b4.addEventListener( "click", function( e: Event ): void {
			nl2.emit( "stop", null );
			nl2.emit( "delta", {"top":0.5}:Map.<variant> );
		});
	}
}


