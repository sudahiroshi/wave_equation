var JSX = {};
(function () {

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
}

/*
 * global functions called by JSX
 * (enamed so that they do not conflict with local variable names)
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
var $__jsx_isNaN = isNaN;
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
/**
 * class wave_equation extends Object
 * @constructor
 */
function wave_equation() {
}

wave_equation.prototype = new Object;
/**
 * @constructor
 * @param {VCanvas} vc1
 * @param {VCanvas} vc1b
 * @param {VCanvas} vc2
 * @param {VCanvas} vc2b
 * @param {VCanvas} vc3
 * @param {VCanvas} vc3b
 */
function wave_equation$LVCanvas$LVCanvas$LVCanvas$LVCanvas$LVCanvas$LVCanvas$(vc1, vc1b, vc2, vc2b, vc3, vc3b) {
	var $this = this;
	/** @type {nylon} */
	var nl;
	this.timer1 = null;
	this.t = 1;
	this.sl1 = 1;
	this.sl2 = 1;
	this.vc1 = vc1;
	this.vc1b = vc1b;
	this.vc2 = vc2;
	this.vc2b = vc2b;
	this.vc3 = vc3;
	this.vc3b = vc3b;
	this.vc1.scale$NNNN(- 111, - 40, 560, 80);
	this.vc2.scale$NNNN(- 112, - 50, 590, 95);
	this.vc3.scale$NNNN(- 112, - 45, 590, 135.246);
	this.timer1 = new vbTimer$();
	this.timer1.interval = 20;
	this.timer1.timer = (function () {
		$this.animation$();
	});
	nl = new nylon$();
	nl.on$SF$HXV$("start", (function (dummy) {
		$this.init$();
	}));
	nl.on$SF$HXV$("stop", (function (dummy) {
		$this.timer1.disable$();
	}));
};

wave_equation$LVCanvas$LVCanvas$LVCanvas$LVCanvas$LVCanvas$LVCanvas$.prototype = new wave_equation;

/**
 * @param {!string} canvas1Id
 * @param {!string} canvas2Id
 * @param {!string} canvas3Id
 */
wave_equation.main$SSS = function (canvas1Id, canvas2Id, canvas3Id) {
	/** @type {HTMLCanvasElement} */
	var elm1;
	/** @type {VCanvas} */
	var vc1;
	/** @type {HTMLCanvasElement} */
	var elm1b;
	/** @type {VCanvas} */
	var vc1b;
	/** @type {HTMLCanvasElement} */
	var elm2;
	/** @type {VCanvas} */
	var vc2;
	/** @type {HTMLCanvasElement} */
	var elm2b;
	/** @type {VCanvas} */
	var vc2b;
	/** @type {HTMLCanvasElement} */
	var elm3;
	/** @type {VCanvas} */
	var vc3;
	/** @type {HTMLCanvasElement} */
	var elm3b;
	/** @type {VCanvas} */
	var vc3b;
	/** @type {wave_equation} */
	var we;
	elm1 = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })(dom$id$S(canvas1Id));
	vc1 = new VCanvas$LHTMLCanvasElement$(elm1);
	elm1b = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })(dom$id$S(canvas1Id + "b"));
	vc1b = new VCanvas$LHTMLCanvasElement$(elm1b);
	elm2 = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })(dom$id$S(canvas2Id));
	vc2 = new VCanvas$LHTMLCanvasElement$(elm2);
	elm2b = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })(dom$id$S(canvas2Id + "b"));
	vc2b = new VCanvas$LHTMLCanvasElement$(elm2b);
	elm3 = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })(dom$id$S(canvas3Id));
	vc3 = new VCanvas$LHTMLCanvasElement$(elm3);
	elm3b = (function (o) { return o instanceof HTMLCanvasElement ? o : null; })(dom$id$S(canvas3Id + "b"));
	vc3b = new VCanvas$LHTMLCanvasElement$(elm3b);
	we = new wave_equation$LVCanvas$LVCanvas$LVCanvas$LVCanvas$LVCanvas$LVCanvas$(vc1, vc1b, vc2, vc2b, vc3, vc3b);
	we.init$();
};

var wave_equation$main$SSS = wave_equation.main$SSS;

/**
 */
wave_equation.prototype.init$ = function () {
	this.vc1b.beginPath$();
	this.vc1b.cls$();
	this.vc1b.print$NNS(490, 10, "Miida Laboratory, Chiba Institute of Technology");
	this.vc1.stroke$();
	this.timer1.enable$();
};

/**
 */
wave_equation.prototype.animation$ = function () {
	var $this = this;
	/** @type {!number} */
	var freq;
	/** @type {!number} */
	var speed;
	/** @type {!number} */
	var m;
	/** @type {!number} */
	var mc;
	/** @type {!number} */
	var ms;
	/** @type {!number} */
	var nx;
	/** @type {!number} */
	var ny;
	/** @type {VCanvas} */
	var p1;
	var calc;
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var xx;
	/** @type {!number} */
	var xa;
	/** @type {!number} */
	var dxa;
	/** @type {!number} */
	var xb;
	/** @type {!number} */
	var dxb;
	/** @type {VCanvas} */
	var pict1;
	/** @type {!number} */
	var pa;
	/** @type {!number} */
	var pb;
	/** @type {VCanvas} */
	var pict2;
	freq = 0.7 + this.sl1;
	speed = (15.0 - 6.0 * this.sl2 / 2.0) / 10.0;
	m = 2.0 * Math.PI * freq * this.t / 100.0;
	mc = Math.cos(m);
	ms = - Math.sin(m);
	nx = 15.0 / freq * mc;
	ny = 17.0 / freq * ms;
	p1 = this.vc1;
	p1.beginPath$();
	p1.forecolor$NNN(100, 200, 200);
	p1.drawWidth$N(3);
	p1.cls$();
	p1.circle$NNN(- 75, 0, 22);
	p1.circle$NNN(- 75, 0, 3);
	p1.circle$NNN(nx - 75, - ny, 2);
	p1.stroke$();
	p1.beginPath$();
	p1.forecolor$NNN(10, 10, 100);
	p1.line$NNNN(- 75, 0, nx - 75, - ny);
	p1.line$NNNN(nx - 75, - ny, nx, 0);
	p1.stroke$();
	p1.beginPath$();
	p1.forecolor$NNN(100, 200, 200);
	p1.rect$NNNN(nx - 2, - 19, nx + 2, 19);
	p1.fill$();
	p1.beginPath$();
	p1.forecolor$NNN(0, 0, 0);
	p1.drawWidth$N(10);
	p1.line$NNNN(- 20, - 29, 400, - 29);
	p1.line$NNNN(- 20, 30, 400, 30);
	p1.stroke$();
	calc = (function (x) {
		return x + 5 + 15 / freq * Math.cos(m - x * freq / 30 * speed);
	});
	p1.beginPath$();
	p1.forecolor$NNN(0, 0, 0);
	p1.drawWidth$N(2);
	for (x = 0; x < 400; x += 10) {
		xx = calc(x);
		p1.line$NNNN(xx, - 19, xx, 19);
	}
	p1.stroke$();
	p1.beginPath$();
	p1.forecolor$NNN(200, 50, 50);
	p1.line$NNNN(calc(190), - 19, calc(190), 19);
	p1.line$NNNN(calc(220), - 19, calc(220), 19);
	p1.stroke$();
	xa = calc(190);
	dxa = calc(170);
	xb = calc(220);
	dxb = calc(240);
	pict1 = this.vc2;
	pict1.beginPath$();
	pict1.cls$();
	pict1.rect$NNNN(xa, 10, xb, 40);
	pict1.fill$();
	pa = 50 / (xa - dxa);
	pb = 50 / - (xb - dxb);
	pict1.beginPath$();
	pict1.rect$NNNN(xa - 30, pa + 20, xa - 10, - pa + 20);
	pict1.rect$NNNN(xb + 10, pb + 20, xb + 30, - pb + 20);
	pict1.fill$();
	pict1.beginPath$();
	pict1.print$NNS((xa + xb) / 2 - 22, - 16, "mass D m");
	pict1.print$NNS((xa + xb) / 2 - 10, - 3, "D x");
	pict1.line$NNNN(xa, 45, xa, 43);
	pict1.line$NNNN(xb, 45, xb, 43);
	pict1.print$NNS(xa - 84, 30, "pressure p1");
	pict1.print$NNS(xb + 5, 30, "p2");
	pict1.stroke$;
	pict2 = this.vc3;
	pict2.beginPath$();
	pict2.cls$();
	pict2.forecolor$NNN(255, 120, 120);
	pict2.rect$NNNN(190, 10, 220, 3);
	pict2.rect$NNNN(xa, - 41, xb, - 10.4);
	pict2.fill$();
	pict2.beginPath$();
	pict2.drawWidth$N(3);
	pict2.forecolor$NNN(0, 0, 0);
	pict2.line$NNNN(xa, - 46, xa, - 44);
	pict2.line$NNNN(xb, - 46, xb, - 44);
	pict2.stroke$();
	pict2.beginPath$();
	if (xb - xa > 30) {
		pict2.forecolor$NNN(0xcc, 0xcc, 0x33);
		pict2.rect$NNNN(xa + 30, - 41, xb, - 11);
	} else {
		pict2.forecolor$NNN(0x51, 0xbb, 0x40);
		pict2.rect$NNNN(xb, - 41, xa + 30, - 11);
	}
	pict2.fill$();
	pict2.beginPath$();
	pict2.drawWidth$N(2);
	pict2.forecolor$NNN(0, 0, 0);
	if (xb - xa > 30) {
		pict2.print$NNS(180, 10, " expand");
	} else {
		pict2.print$NNS(180, 10, "compress");
	}
	pict2.print$NNS(160, 27, "particle position");
	pict2.print$NNS(157, 40, "at static pressure");
	pict2.print$NNS(xa - 18, - 42, "p");
	pict2.print$NNS(xa - 23, - 27, "z1");
	pict2.print$NNS(xb + 5, - 42, "p2=p average pressure");
	pict2.print$NNS(xb + 5, - 27, "z2 paricle position");
	pict2.drawWidth$N(2);
	pict2.line$NNNN(xa, - 8, 190, 0);
	pict2.line$NNNN(xb, - 8, 220, 0);
	this.t++;
};

/**
 * class gui extends Object
 * @constructor
 */
function gui() {
}

gui.prototype = new Object;
/**
 * @constructor
 */
function gui$() {
};

gui$.prototype = new gui;

/**
 * @param {!string} btn1
 * @param {!string} btn2
 * @param {!string} btn3
 * @param {!string} btn4
 */
gui.main$SSSS = function (btn1, btn2, btn3, btn4) {
	/** @type {nylon} */
	var nl2;
	/** @type {HTMLButtonElement} */
	var b1;
	/** @type {HTMLButtonElement} */
	var b2;
	/** @type {HTMLButtonElement} */
	var b3;
	/** @type {HTMLButtonElement} */
	var b4;
	nl2 = new nylon$();
	b1 = (function (o) { return o instanceof HTMLButtonElement ? o : null; })(dom$id$S(btn1));
	b1.addEventListener("click", (function (e) {
		nl2.emit$SHX("start", null);
	}));
	b2 = (function (o) { return o instanceof HTMLButtonElement ? o : null; })(dom$id$S(btn2));
	b2.addEventListener("click", (function (e) {
		nl2.emit$SHX("stop", null);
	}));
	b3 = (function (o) { return o instanceof HTMLButtonElement ? o : null; })(dom$id$S(btn3));
	b3.addEventListener("click", (function (e) {
		nl2.emit$SHX("stop", null);
		nl2.emit$SHX("delta", { "top": 0.3 });
	}));
	b4 = (function (o) { return o instanceof HTMLButtonElement ? o : null; })(dom$id$S(btn4));
	b4.addEventListener("click", (function (e) {
		nl2.emit$SHX("stop", null);
		nl2.emit$SHX("delta", { "top": 0.5 });
	}));
};

var gui$main$SSSS = gui.main$SSSS;

/**
 * class dom extends Object
 * @constructor
 */
function dom() {
}

dom.prototype = new Object;
/**
 * @constructor
 */
function dom$() {
};

dom$.prototype = new dom;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.id$S = function (id) {
	return (function (o) { return o instanceof HTMLElement ? o : null; })(dom.document.getElementById(id));
};

var dom$id$S = dom.id$S;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.getElementById$S = function (id) {
	return (function (o) { return o instanceof HTMLElement ? o : null; })(dom.document.getElementById(id));
};

var dom$getElementById$S = dom.getElementById$S;

/**
 * @param {!string} tag
 * @return {HTMLElement}
 */
dom.createElement$S = function (tag) {
	return (function (v) {
		if (! (v == null || v instanceof HTMLElement)) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/js/web.jsx:45] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(dom.document.createElement(tag)));
};

var dom$createElement$S = dom.createElement$S;

/**
 * class VCanvas extends Object
 * @constructor
 */
function VCanvas() {
}

VCanvas.prototype = new Object;
/**
 * @constructor
 * @param {HTMLCanvasElement} canvas
 */
function VCanvas$LHTMLCanvasElement$(canvas) {
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var width;
	/** @type {!number} */
	var height;
	this.scaleWidth = 0;
	this.scaleHeight = 0;
	this.scaleTop = 0;
	this.scaleLeft = 0;
	this._scalable = false;
	this._dir_x = 1;
	this._dir_y = 1;
	this._color = [ 0, 0, 0, 1 ];
	this.context = (function (o) { return o instanceof CanvasRenderingContext2D ? o : null; })(canvas.getContext("2d"));
	this.canvas = canvas;
	x = canvas.offsetLeft;
	y = canvas.offsetTop;
	width = canvas.width;
	height = canvas.height;
};

VCanvas$LHTMLCanvasElement$.prototype = new VCanvas;

/**
 * @param {!number} left
 * @param {!number} top
 * @param {!number} width
 * @param {!number} height
 */
VCanvas.prototype.scale$NNNN = function (left, top, width, height) {
	this.scaleLeft = left;
	this.scaleTop = top;
	this.scaleWidth = width;
	this.scaleHeight = height;
	this._scalable = true;
	if (this.scaleWidth < 0) {
		this.scaleWidth = - this.scaleWidth;
		this._dir_x = - 1;
	} else {
		this._dir_x = 1;
	}
	if (this.scaleHeight < 0) {
		this.scaleHeight = - this.scaleHeight;
		this._dir_y = - 1;
	} else {
		this._dir_y = 1;
	}
};

/**
 * @param {!number} r
 * @param {!number} g
 * @param {!number} b
 */
VCanvas.prototype.forecolor$NNN = function (r, g, b) {
	this._color = [ r, g, b, 1 ];
	this.context.fillStyle = 'rgba(' + this._color.join(',').toString() + ')';
	this.context.strokeStyle = 'rgba(' + this._color.join(',').toString() + ')';
};

/**
 * @param {!number} r
 * @param {!number} g
 * @param {!number} b
 * @param {!number} a
 */
VCanvas.prototype.forecolor$NNNN = function (r, g, b, a) {
	this._color = [ r, g, b, a ];
	this.context.fillStyle = 'rgba(' + this._color.join(',').toString() + ')';
	this.context.strokeStyle = 'rgba(' + this._color.join(',').toString() + ')';
};

/**
 * @param {!number} x1
 * @param {!number} y1
 * @param {!number} x2
 * @param {!number} y2
 */
VCanvas.prototype.line$NNNN = function (x1, y1, x2, y2) {
	/** @type {!number} */
	var xx1;
	/** @type {!number} */
	var xx2;
	/** @type {!number} */
	var yy1;
	/** @type {!number} */
	var yy2;
	if (this._scalable) {
		xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		xx2 = (x2 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
		yy2 = (y2 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx1 = x1;
		xx2 = x2;
		yy1 = y1;
		yy2 = y2;
	}
	this.context.moveTo(xx1, yy1);
	this.context.lineTo(xx2, yy2);
};

/**
 * @param {!number} x1
 * @param {!number} y1
 */
VCanvas.prototype.lineStart$NN = function (x1, y1) {
	/** @type {!number} */
	var xx1;
	/** @type {!number} */
	var yy1;
	if (this._scalable) {
		xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx1 = x1;
		yy1 = y1;
	}
	this.context.moveTo(xx1, yy1);
};

/**
 * @param {!number} x1
 * @param {!number} y1
 */
VCanvas.prototype.line$NN = function (x1, y1) {
	/** @type {!number} */
	var xx1;
	/** @type {!number} */
	var yy1;
	if (this._scalable) {
		xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx1 = x1;
		yy1 = y1;
	}
	this.context.lineTo(xx1, yy1);
};

/**
 */
VCanvas.prototype.cls$ = function () {
	this.context.beginPath();
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.context.fill();
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!string} str
 */
VCanvas.prototype.print$NNS = function (x, y, str) {
	/** @type {!number} */
	var xx;
	/** @type {!number} */
	var yy;
	if (this._scalable) {
		xx = (x - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy = (y - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx = x;
		yy = y;
	}
	this.context.fillText(str, xx, yy);
};

/**
 * @param {!number} x
 * @param {!number} y
 */
VCanvas.prototype.pset$NN = function (x, y) {
	/** @type {!number} */
	var xx;
	/** @type {!number} */
	var yy;
	if (this._scalable) {
		xx = (x - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
		yy = (y - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	} else {
		xx = x;
		yy = y;
	}
	this.context.moveTo(xx, yy);
	this.context.lineTo(xx + 1, yy + 1);
};

/**
 * @param {!number} x
 * @param {!number} y
 * @param {!number} radius
 */
VCanvas.prototype.circle$NNN = function (x, y, radius) {
	/** @type {!number} */
	var xx;
	/** @type {!number} */
	var yy;
	/** @type {!number} */
	var rr;
	xx = (x - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
	yy = (y - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	rr = (radius - this.scaleLeft) * this.canvas.width / this.scaleWidth;
	this.context.arc(xx, yy, radius, 0, Math.PI * 2, false);
};

/**
 * @param {!number} x1
 * @param {!number} y1
 * @param {!number} x2
 * @param {!number} y2
 */
VCanvas.prototype.rect$NNNN = function (x1, y1, x2, y2) {
	/** @type {!number} */
	var xx1;
	/** @type {!number} */
	var yy1;
	/** @type {!number} */
	var xx2;
	/** @type {!number} */
	var yy2;
	xx1 = (x1 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
	yy1 = (y1 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	xx2 = (x2 - this.scaleLeft) * this.canvas.width / this.scaleWidth * this._dir_x;
	yy2 = (y2 - this.scaleTop) * this.canvas.height / this.scaleHeight * this._dir_y;
	this.context.fillRect(xx1, yy1, xx2 - xx1, yy2 - yy1);
};

/**
 */
VCanvas.prototype.beginPath$ = function () {
	this.context.beginPath();
};

/**
 */
VCanvas.prototype.fill$ = function () {
	this.context.fill();
};

/**
 */
VCanvas.prototype.stroke$ = function () {
	this.context.stroke();
};

/**
 * @param {!number} width
 */
VCanvas.prototype.lineWidth$N = function (width) {
	this.context.lineWidth = width;
};

/**
 * @param {!number} width
 */
VCanvas.prototype.drawWidth$N = function (width) {
	this.context.lineWidth = width;
};

/**
 * class nylonfunc extends Object
 * @constructor
 */
function nylonfunc() {
}

nylonfunc.prototype = new Object;
/**
 * @constructor
 * @param {nylon} object
 */
function nylonfunc$F$HXV$Lnylon$(func, object) {
	this.fn = func;
	this.obj = object;
};

nylonfunc$F$HXV$Lnylon$.prototype = new nylonfunc;

/**
 * class nylon extends Object
 * @constructor
 */
function nylon() {
}

nylon.prototype = new Object;
/**
 * @constructor
 */
function nylon$() {
	if (js.global.map == null) {
		js.global.map = {  };
	}
};

nylon$.prototype = new nylon;

/**
 * @param {!string} keyword
 */
nylon.prototype.on$SF$HXV$ = function (keyword, fn) {
	if (nylon.map[keyword] == null) {
		console.log("map - keyword is null");
		nylon.map[keyword] = [ new nylonfunc$F$HXV$Lnylon$(fn, this) ];
	} else {
		nylon.map[keyword].push(new nylonfunc$F$HXV$Lnylon$(fn, this));
	}
};

/**
 * @param {!string} keyword
 * @param {Object.<string, undefined|*>} params
 */
nylon.prototype.emit$SHX = function (keyword, params) {
	/** @type {Array.<undefined|!string>} */
	var keys;
	console.log(nylon.map[keyword]);
	keys = keyword.split("|");
	this.emit$ASHX(keys, params);
};

/**
 * @param {Array.<undefined|!string>} keys
 * @param {Object.<string, undefined|*>} params
 */
nylon.prototype.emit$ASHX = function (keys, params) {
	var $this = this;
	keys.forEach((function (key) {
		if (nylon.map[key] == null) {
			console.log("Invarid keyword!");
		} else {
			nylon.map[key].forEach((function (element) {
				if (element.obj != $this) {
					element.fn(params);
				}
			}));
		}
	}));
};

/**
 * @param {!string} keyword
 */
nylon.prototype.off$SF$HXV$ = function (keyword, fn) {
	/** @type {Array.<undefined|nylonfunc>} */
	var arr;
	/** @type {!number} */
	var i;
	if (nylon.map[keyword] == null) {
		console.log("map - keyword is null");
	} else {
		arr = nylon.map[keyword];
		for (i = arr.length - 1; i >= 0; i--) {
			console.log(i);
			if (arr[i].obj == this && arr[i].fn == fn) {
				arr.splice(i, 1);
			}
		}
		if (nylon.map[keyword].length === 0) {
			nylon.map[keyword] = null;
		}
	}
};

/**
 * class _Main extends Object
 * @constructor
 */
function _Main() {
}

_Main.prototype = new Object;
/**
 * @constructor
 */
function _Main$() {
};

_Main$.prototype = new _Main;

/**
 * @param {Array.<undefined|!string>} arts
 */
_Main.main$AS = function (arts) {
	var f;
	var g;
	/** @type {nylon} */
	var a;
	/** @type {nylon} */
	var b;
	f = (function (x) {
		console.log("f was executed");
	});
	g = (function (x) {
		console.log("g was executed");
	});
	a = new nylon$();
	console.log("check A");
	a.on$SF$HXV$("test", f);
	a.on$SF$HXV$("test2", f);
	console.log(nylon.map);
	console.log("check B");
	a.on$SF$HXV$("test", g);
	console.log(nylon.map);
	a.emit$SHX("test", {  });
	b = new nylon$();
	console.log("check C");
	b.emit$SHX("test", null);
	b.emit$SHX("test2", null);
	a.off$SF$HXV$("test", f);
	console.log("check D");
	console.log(nylon.map);
	console.log("check E");
	b.emit$SHX("test|test2", null);
	console.log(nylon.map);
};

var _Main$main$AS = _Main.main$AS;

/**
 * class vbTimer extends Object
 * @constructor
 */
function vbTimer() {
}

vbTimer.prototype = new Object;
/**
 * @constructor
 */
function vbTimer$() {
	this.interval = 1000;
	this.enabled = false;
	this.timer = null;
	this._tHandle = null;
};

vbTimer$.prototype = new vbTimer;

/**
 */
vbTimer.prototype.enable$ = function () {
	if (this.timer != null && this.enabled === false) {
		this._tHandle = Timer$setInterval$F$V$N(this.timer, this.interval);
		this.enabled = true;
	}
};

/**
 */
vbTimer.prototype.disable$ = function () {
	if (this.enabled === true) {
		Timer$clearInterval$LTimerHandle$(this._tHandle);
		this.enabled = false;
	}
};

/**
 * class js extends Object
 * @constructor
 */
function js() {
}

js.prototype = new Object;
/**
 * @constructor
 */
function js$() {
};

js$.prototype = new js;

/**
 * class Timer extends Object
 * @constructor
 */
function Timer() {
}

Timer.prototype = new Object;
/**
 * @constructor
 */
function Timer$() {
};

Timer$.prototype = new Timer;

/**
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setTimeout$F$V$N = function (callback, intervalMS) {
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:34] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.setTimeout))(callback, intervalMS);
};

var Timer$setTimeout$F$V$N = Timer.setTimeout$F$V$N;

/**
 * @param {TimerHandle} timer
 */
Timer.clearTimeout$LTimerHandle$ = function (timer) {
	(function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:38] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.clearTimeout))(timer);
};

var Timer$clearTimeout$LTimerHandle$ = Timer.clearTimeout$LTimerHandle$;

/**
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setInterval$F$V$N = function (callback, intervalMS) {
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:42] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.setInterval))(callback, intervalMS);
};

var Timer$setInterval$F$V$N = Timer.setInterval$F$V$N;

/**
 * @param {TimerHandle} timer
 */
Timer.clearInterval$LTimerHandle$ = function (timer) {
	(function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:46] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.clearInterval))(timer);
};

var Timer$clearInterval$LTimerHandle$ = Timer.clearInterval$LTimerHandle$;

/**
 * @return {TimerHandle}
 */
Timer.requestAnimationFrame$F$NV$ = function (callback) {
	return Timer._requestAnimationFrame(callback);
};

var Timer$requestAnimationFrame$F$NV$ = Timer.requestAnimationFrame$F$NV$;

/**
 * @param {TimerHandle} timer
 */
Timer.cancelAnimationFrame$LTimerHandle$ = function (timer) {
	Timer._cancelAnimationFrame(timer);
};

var Timer$cancelAnimationFrame$LTimerHandle$ = Timer.cancelAnimationFrame$LTimerHandle$;

/**
 * @param {!boolean} enable
 */
Timer.useNativeRAF$B = function (enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

var Timer$useNativeRAF$B = Timer.useNativeRAF$B;

/**
 * @param {!boolean} useNativeImpl
 */
Timer._getRequestAnimationFrameImpl$B = function (useNativeImpl) {
	/** @type {!number} */
	var lastTime;
	if (useNativeImpl) {
		if (js.global.requestAnimationFrame) {
			return (function (callback) {
				return (function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:72] detected invalid cast, value is not a function or null");
					}
					return v;
				}(js.global.requestAnimationFrame))(callback);
			});
		} else {
			if (js.global.webkitRequestAnimationFrame) {
				return (function (callback) {
					return (function (v) {
						if (! (v == null || typeof v === "function")) {
							debugger;
							throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:78] detected invalid cast, value is not a function or null");
						}
						return v;
					}(js.global.webkitRequestAnimationFrame))(callback);
				});
			} else {
				if (js.global.mozRequestAnimationFrame) {
					return (function (callback) {
						return (function (v) {
							if (! (v == null || typeof v === "function")) {
								debugger;
								throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:84] detected invalid cast, value is not a function or null");
							}
							return v;
						}(js.global.mozRequestAnimationFrame))(callback);
					});
				} else {
					if (js.global.oRequestAnimationFrame) {
						return (function (callback) {
							return (function (v) {
								if (! (v == null || typeof v === "function")) {
									debugger;
									throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:90] detected invalid cast, value is not a function or null");
								}
								return v;
							}(js.global.oRequestAnimationFrame))(callback);
						});
					} else {
						if (js.global.msRequestAnimationFrame) {
							return (function (callback) {
								return (function (v) {
									if (! (v == null || typeof v === "function")) {
										debugger;
										throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:96] detected invalid cast, value is not a function or null");
									}
									return v;
								}(js.global.msRequestAnimationFrame))(callback);
							});
						}
					}
				}
			}
		}
	}
	lastTime = 0;
	return (function (callback) {
		/** @type {!number} */
		var now;
		/** @type {!number} */
		var timeToCall;
		now = Date.now();
		timeToCall = Math.max(0, 16 - (now - lastTime));
		lastTime = now + timeToCall;
		return Timer$setTimeout$F$V$N((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

var Timer$_getRequestAnimationFrameImpl$B = Timer._getRequestAnimationFrameImpl$B;

/**
 * @param {!boolean} useNativeImpl
 */
Timer._getCancelAnimationFrameImpl$B = function (useNativeImpl) {
	if (useNativeImpl) {
		if (js.global.cancelAnimationFrame) {
			return (function (timer) {
				(function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:119] detected invalid cast, value is not a function or null");
					}
					return v;
				}(js.global.cancelAnimationFrame))(timer);
			});
		} else {
			if (js.global.webkitCancelAnimationFrame) {
				return (function (timer) {
					(function (v) {
						if (! (v == null || typeof v === "function")) {
							debugger;
							throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:125] detected invalid cast, value is not a function or null");
						}
						return v;
					}(js.global.webkitCancelAnimationFrame))(timer);
				});
			} else {
				if (js.global.mozCancelAnimationFrame) {
					return (function (timer) {
						(function (v) {
							if (! (v == null || typeof v === "function")) {
								debugger;
								throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:131] detected invalid cast, value is not a function or null");
							}
							return v;
						}(js.global.mozCancelAnimationFrame))(timer);
					});
				} else {
					if (js.global.oCancelAnimationFrame) {
						return (function (timer) {
							(function (v) {
								if (! (v == null || typeof v === "function")) {
									debugger;
									throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:137] detected invalid cast, value is not a function or null");
								}
								return v;
							}(js.global.oCancelAnimationFrame))(timer);
						});
					} else {
						if (js.global.msCancelAnimationFrame) {
							return (function (timer) {
								(function (v) {
									if (! (v == null || typeof v === "function")) {
										debugger;
										throw new Error("[/Users/suda/JSX/lib/js/timer.jsx:143] detected invalid cast, value is not a function or null");
									}
									return v;
								}(js.global.msCancelAnimationFrame))(timer);
							});
						}
					}
				}
			}
		}
	}
	return Timer$clearTimeout$LTimerHandle$;
};

var Timer$_getCancelAnimationFrameImpl$B = Timer._getCancelAnimationFrameImpl$B;

/**
 * class TimerHandle extends Object
 * @constructor
 */
function TimerHandle() {
}

TimerHandle.prototype = new Object;
/**
 * @constructor
 */
function TimerHandle$() {
};

TimerHandle$.prototype = new TimerHandle;

$__jsx_lazy_init(dom, "window", function () {
	return js.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return (function (v) {
		if (! (v == null || v instanceof HTMLDocument)) {
			debugger;
			throw new Error("[/Users/suda/JSX/lib/js/js/web.jsx:23] detected invalid cast, value is not an instance of the designated type or null");
		}
		return v;
	}(js.global.document));
});
$__jsx_lazy_init(nylon, "map", function () {
	return (function (o) { return o instanceof Object ? o : null; })(js.global.map);
});
js.global = (function () { return this; })();

$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});
var $__jsx_classMap = {
	"wave_equation.jsx": {
		wave_equation: wave_equation,
		wave_equation$LVCanvas$LVCanvas$LVCanvas$LVCanvas$LVCanvas$LVCanvas$: wave_equation$LVCanvas$LVCanvas$LVCanvas$LVCanvas$LVCanvas$LVCanvas$,
		gui: gui,
		gui$: gui$
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		dom$: dom$
	},
	"vcanvas.jsx": {
		VCanvas: VCanvas,
		VCanvas$LHTMLCanvasElement$: VCanvas$LHTMLCanvasElement$
	},
	"nylon.client.jsx": {
		nylonfunc: nylonfunc,
		nylonfunc$F$HXV$Lnylon$: nylonfunc$F$HXV$Lnylon$,
		nylon: nylon,
		nylon$: nylon$,
		_Main: _Main,
		_Main$: _Main$
	},
	"vbTimer.jsx": {
		vbTimer: vbTimer,
		vbTimer$: vbTimer$
	},
	"system:lib/js/js.jsx": {
		js: js,
		js$: js$
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer$,
		TimerHandle: TimerHandle,
		TimerHandle$: TimerHandle$
	}
};


})();

//@ sourceMappingURL=wave_equation.jsx.js.mapping
