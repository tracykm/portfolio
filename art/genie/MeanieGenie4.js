(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.MeanieGenie4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Level1:1,Level2:2,Game:3,Instructions:4,EndScreen:60,Finish:63});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		//this.Demo_Instance.gotoAndStop(1);
	}
	this.frame_57 = function() {
		this.gotoAndStop("Game");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(32).call(this.frame_35).wait(22).call(this.frame_57).wait(6));

	// notices
	this.TriesLeft = new cjs.Text("Tries Left: 2", "24px Muli");
	this.TriesLeft.lineHeight = 26;
	this.TriesLeft.lineWidth = 172;
	this.TriesLeft.setTransform(0,2);

	this.Warning = new lib.warning();
	this.Warning.setTransform(408.2,237.6,1,1,0,0,0,329.5,112);

	this.EndMessage = new lib.endMessage();
	this.EndMessage.setTransform(402,254.1,1,1,0,0,0,-4.4,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Warning},{t:this.TriesLeft}]},3).to({state:[{t:this.Warning},{t:this.TriesLeft},{t:this.EndMessage}]},57).to({state:[]},1).wait(3));

	// Clicker
	this.instance = new lib.cursor();
	this.instance.setTransform(532,552,1,1,0,0,0,14.9,20.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:453.5,y:479.7},9).to({x:452.5,y:479.6},1).to({x:394.9,y:481.7},7).wait(1).to({x:453.5,y:285.1},9).wait(3).to({x:489.1,y:294.1},1).to({x:692.1,y:244.6},6).to({_off:true},17).wait(6));

	// Layer 4
	this.text = new cjs.Text("One of these 9 stones contains the Rama Nujan Jewel. It weighs slightly more but you get 2 tries with the scale.\nCan you find it?", "28px Muli");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 551;
	this.text.setTransform(284.5,30.6);

	this.text_1 = new cjs.Text("Continue", "bold 40px Muli");
	this.text_1.lineHeight = 42;
	this.text_1.setTransform(201.4,271.6);

	this.ContinueBtn = new lib.button();
	this.ContinueBtn.setTransform(291,296,0.83,0.7,0,0,0,144.1,73.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("APyAAQAAEnknDQQkpDSmiAAQmiAAkojSQkojQAAknQAAkmEojRQEojRGiAAQGiAAEpDRQEnDRAAEmg");
	this.shape.setTransform(289,252.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArKH4QkojRAAknQAAkmEojRQEpjQGhgBQGiABEoDQQEoDRAAEmQAAEnkoDRQkoDQmiABQmhgBkpjQg");
	this.shape_1.setTransform(289,252.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("Egs+gnMMBZ9BOZ");
	this.shape_2.setTransform(285.9,251);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(3,1,1).p("EAs/gnXMhZ9BOv");
	this.shape_3.setTransform(430.5,243,1,1,0,0,0,-81.7,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ContinueBtn},{t:this.text_1,p:{x:201.4,y:271.6,text:"Continue",font:"bold 40px Muli",textAlign:"",lineHeight:42,lineWidth:173}},{t:this.text,p:{x:284.5,y:30.6,text:"One of these 9 stones contains the Rama Nujan Jewel. It weighs slightly more but you get 2 tries with the scale.\nCan you find it?",lineWidth:551,font:"28px Muli",lineHeight:46}}]},1).to({state:[{t:this.ContinueBtn},{t:this.text_1,p:{x:201.4,y:271.6,text:"Continue",font:"bold 40px Muli",textAlign:"",lineHeight:42,lineWidth:173}},{t:this.text,p:{x:286.5,y:28.4,text:"Now there are 12 stones and the jewel is either lighter or heavier. You get 3 tries with the scale.\nCan you still find it?",lineWidth:469,font:"30px Muli",lineHeight:46}}]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1,p:{x:284.4,y:206.5,text:"~Instructions~",font:"23px Muli",textAlign:"center",lineHeight:27,lineWidth:144}},{t:this.text,p:{x:284.6,y:241.9,text:"Click on a rock\nthen on the scale.\nPress Weigh.",lineWidth:203,font:"15px Muli",lineHeight:19}}]},1).to({state:[]},54).to({state:[]},3).wait(3));

	// misc
	this.text_2 = new cjs.Text("weigh", "34px Muli");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 50;
	this.text_2.setTransform(689.2,213.5);

	this.instance_1 = new lib.button("synched",1,false);
	this.instance_1.setTransform(691.2,234.5,0.6,0.6,0,0,0,144,73.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},34).to({state:[{t:this.instance_1},{t:this.text_2}]},8).to({state:[]},16).to({state:[]},3).wait(3));

	// buttons/text
	this.text_3 = new cjs.Text("Break a hard problem \ninto easier ones.", "24px Muli");
	this.text_3.lineHeight = 30;
	this.text_3.lineWidth = 261;
	this.text_3.setTransform(16,380.8);

	this.text_4 = new cjs.Text("Meanie Genie", "65px Muli", "#690224");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 67;
	this.text_4.lineWidth = 560;
	this.text_4.setTransform(400.1,56);

	this.text_5 = new cjs.Text("Start", "84px Muli");
	this.text_5.lineHeight = 86;
	this.text_5.setTransform(312.7,203);

	this.Start = new lib.button();
	this.Start.setTransform(404.9,248,1,1,0,0,0,144,73.5);

	this.Back = new lib.button();
	this.Back.setTransform(691.2,451.9,0.1,0.1,0,0,0,144,73.5);
	this.Back.visible = false;

	this.revealJewel = new cjs.Text("reveal jewel", "28px Muli");
	this.revealJewel.textAlign = "center";
	this.revealJewel.lineHeight = 44;
	this.revealJewel.setTransform(687.3,320.3);

	this.Weigh = new lib.button();
	this.Weigh.setTransform(691.2,234.5,0.6,0.6,0,0,0,144,73.4);

	this.Hint = new lib.button();
	this.Hint.setTransform(691.2,339.7,0.6,0.6,0,0,0,144,73.4);

	this.Back_1 = new lib.backButton();
	this.Back_1.setTransform(23.1,29,1,1,0,0,0,39.8,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Start,p:{regY:73.5,scaleX:1,scaleY:1,x:404.9,y:248}},{t:this.text_5,p:{x:312.7,y:203,text:"Start",font:"84px Muli",textAlign:"",lineHeight:86,lineWidth:177}},{t:this.text_4,p:{x:400.1,y:56,text:"Meanie Genie",font:"65px Muli",color:"#690224",lineHeight:67,lineWidth:560}},{t:this.text_3,p:{x:16,y:380.8,text:"Break a hard problem \ninto easier ones.",font:"24px Muli",textAlign:"",lineHeight:30,lineWidth:261}}]}).to({state:[{t:this.Hint},{t:this.Weigh,p:{y:234.5}},{t:this.text_4,p:{x:689.2,y:213.5,text:"weigh",font:"34px Muli",color:"#000000",lineHeight:50,lineWidth:89}},{t:this.revealJewel},{t:this.Back,p:{regY:73.5,scaleX:0.1,scaleY:0.1,y:451.9,visible:false}},{t:this.Start,p:{regY:73.4,scaleX:0.6,scaleY:0.6,x:691.2,y:446.7}},{t:this.text_3,p:{x:690.3,y:425.3,text:"back",font:"34px Muli",textAlign:"center",lineHeight:50,lineWidth:72}}]},1).to({state:[{t:this.Weigh,p:{y:441.7}},{t:this.Back,p:{regY:73.4,scaleX:0.6,scaleY:0.6,y:333.5,visible:true}},{t:this.text_5,p:{x:689.2,y:312.5,text:"weigh",font:"34px Muli",textAlign:"center",lineHeight:50,lineWidth:89}},{t:this.text_4,p:{x:686.3,y:419.3,text:"hint",font:"34px Muli",color:"#000000",lineHeight:50,lineWidth:55}},{t:this.Start,p:{regY:73.4,scaleX:0.6,scaleY:0.6,x:691.2,y:223.2}},{t:this.text_3,p:{x:690.2,y:206.5,text:"instructions",font:"28px Muli",textAlign:"center",lineHeight:44,lineWidth:170}}]},57).to({state:[{t:this.Weigh,p:{y:441.7}},{t:this.Back,p:{regY:73.4,scaleX:0.6,scaleY:0.6,y:333.5,visible:true}},{t:this.text_5,p:{x:689.2,y:312.5,text:"weigh",font:"34px Muli",textAlign:"center",lineHeight:50,lineWidth:89}},{t:this.text_4,p:{x:686.3,y:419.3,text:"hint",font:"34px Muli",color:"#000000",lineHeight:50,lineWidth:55}},{t:this.Start,p:{regY:73.4,scaleX:0.6,scaleY:0.6,x:691.2,y:223.2}},{t:this.text_3,p:{x:690.2,y:206.5,text:"instructions",font:"28px Muli",textAlign:"center",lineHeight:44,lineWidth:170}},{t:this.Back_1}]},4).to({state:[]},1).wait(1));

	// ScreenShot
	this.ScreenShot_2 = new lib.ScreenShotScale();
	this.ScreenShot_2.setTransform(504.2,38.7,0.8,0.8,0,0,0,70.3,37.7);

	this.ScreenShot_1 = new lib.ScreenShotScale();
	this.ScreenShot_1.setTransform(379.1,36.1,0.8,0.8,0,0,0,70.2,37.6);

	this.text_6 = new cjs.Text("Play \nAgain?", "20px Muli");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 22;
	this.text_6.lineWidth = 123;
	this.text_6.setTransform(56.5,446.3);

	this.text_7 = new cjs.Text("You solved the puzzle!", "50px Muli", "#575757");
	this.text_7.lineHeight = 52;
	this.text_7.setTransform(29.5,31,1.46,1.46);

	this.instance_2 = new lib.jewel();
	this.instance_2.setTransform(479.7,212.3,4.829,4.829,13,0,0,15.7,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ScreenShot_1},{t:this.ScreenShot_2}]},3).to({state:[{t:this.instance_2},{t:this.text_7},{t:this.text_6}]},60).wait(1));

	// rocks
	this.instance_3 = new lib.rock("single",1);
	this.instance_3.setTransform(438.6,467.9,1,1,0,0,0,21.2,14.5);

	this.instance_4 = new lib.rock("single",1);
	this.instance_4.setTransform(397.8,467.9,1,1,0,0,0,21.2,14.5);

	this.PlayAgain = new lib.button();
	this.PlayAgain.setTransform(57.6,470.6,0.4,0.4,0,0,0,144,73.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(8,1,1).p("AoEtGQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQksCFs2h+Qj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhg");
	this.shape_4.setTransform(656.7,404.8,0.56,0.56,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3B3B3B").s().p("AxjMxQj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQiaBEkkAAQkUAAmQg9g");
	this.shape_5.setTransform(656.7,404.8,0.56,0.56,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(8,1,1).p("AoEtGQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQksCFs2h+Qj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhg");
	this.shape_6.setTransform(244.7,413.6,0.56,0.56,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3B3B3B").s().p("AxjMxQj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQiaBEkkAAQkUAAmQg9g");
	this.shape_7.setTransform(244.7,413.6,0.56,0.56,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CCCCCC").ss(8,1,1).p("AoEtGQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQksCFs2h+Qj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhg");
	this.shape_8.setTransform(164.3,364.5,0.56,0.56);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3B3B3B").s().p("AxjMxQj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQiaBEkkAAQkUAAmQg9g");
	this.shape_9.setTransform(164.3,364.5,0.56,0.56);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CCCCCC").ss(8,1,1).p("AqQn9QAHgEAIgFQA9ghA7gCQgYAMgWANQgZASgZAWQgEACgCACQgSAMgPARAqQnGIBOgNQAGACAJAGQgvAIguAeAj+iWIAmiBAjHlDIgQAhAhknZIgkA0AiOmXIg0BUAkyA1IAyAGQAIAAAIAAQCIgFB6g8QAOgHAOgHIExikQAVhlgDhmQgBgugJgtICoB/IgKgQAAHBLIAnhfAiJLPIhIhpIAEANIgYAOQgVg5gngtQgIgJgJgJQgLgLgLgLQhNhJhYg0IADgDQAOgUACgVQABgRgIgQQgGgLgDgLQAAgCAEgCIDhh4IIoDhAlWAoIADAHAAFBYIA5AbADJDxQgPg+ggg0QgHgLgKgKAGxG7Qizg1hxCVQgHAIgGAJIjwCfAE3ppQAAgqgvgdQgMgIgNgGQgngQgyAAAFin4IgehZACYq7IgdBPAJahyQgFhggqhXQgFgJgEgJIgTgkAIykxIgjguAJli9QAbCFARCHQABAKgGAKQgkA3hBAUQinAyitAUABaBgIgZARAFvGOIgQADIBRAoABeplIizB6");
	this.shape_10.setTransform(499.8,319.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AhJA8QAAghAZgjQAVgXAWgVQAXgXAbgUQAGABADAEQAjApgcAvQgcArgmAfQgRANgTAKIgIABIgYgkg");
	this.shape_11.setTransform(469.7,314.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#575757").s().p("AiELFQgLAAgOAEIhIhpIADAMIgYAPQgUg5gngtIgRgSIgXgWQhNhKhYgzIADgDQAPgUABgWIABgFQAAgOgIgNQgGgLgCgMIAAAAQAAgBAEgCIDgh5IIoDiIoojiIjgB5QgEACAAABIAAAAQACAMAGALQAIANAAAOIgBAFQgBAWgPAUIgDADQBYAzBNBKIAXAWIARASQAnAtAUA5IAYgPIgDgMIBIBpIgEACQgXgug8gMQgRgDgQABQAAhAgGgNQgQgkhTgxQgxg+hAgpQgUgNgPgFQgHgXAAgQQAAgTAGglIACgMQAwgTBHgpQBTgvAdgcQAKAKAQAAQAVAAALgQIAEgGQAFAXAjAMQALAEBkAXIAFALQAKATAYAAQAMAAAJgGIAvAeQBCApAiAAIAKAAIAAABQAAAJAGALQALATAXAAQARAAALgMIAxApQA3AnAqAJIgPADIBRAnIABACQgvgNgqAAIAAAAIAAAAQh4AAhTBsIgBABIgMARIjwCgIDwigIAMgRIABgBQBThsB4AAIAAAAIAAAAQAqAAAvANIABAEIhXAAQiMgGgxBcQgJAQgrAkIhDA1QhJBEgrAgIgGAFQgGgagXgBgAGcGygAFLGLIAPgDQAOADAMAAQANAAAMgDIAPAqgAFaGIIAAAAgAC/DuQCtgUCmgyQBCgUAjg4QAGgIAAgIIgBgDQgQiHgciGQAcCGAQCHIABADQAAAIgGAIQgjA4hCAUQimAyitAUIgKgDQgPg+ggg0QgHgMgKgJQAKAJAHAMQAgA0APA+IgJAAQgBgXg2ghQAFgJAAgJQAAgkgogDQgegCgIAXQgjgPgogOIgBAAQAEgHABgGIAHgHQAFgGACgHIA2AcIg2gcQACgFAAgFIAAgCIAlhfIExikQAShZAAhZIAAgaQgCgtgIgtICnB/IgJgRIAJARIinh/QAIAtACAtIAAAaQAABZgSBZIkxCkIgaAOQh9A8iHAEIgRAAIgxgGIAxAGIARAAQCHgEB9g8IAagOIglBfQgBgigngDQgjgDgFAgQgEACgDAEQgJABgGAFQgJgFgOgBQgcgCgIATIgBAAQgugDgNAPQgCglgmABQgPABgKAGQgRgLglAQQgFgOgOgXIgBAAIAIgBIAEAHIgEgHQAUgLARgNQAogcAbgtQAdgvgjgqQgDgEgGAAIAliBIglCBQgbAUgZAWQgXAVgUAYIAOgTQAtg2AKgsQANg6AOgrQAogYBSiVQAAgPgCgLQAcgdA6g5QALgLBbgmQBUguADhEIAEABQAYAJBNACIAMASQAWAXAqADQAFANAEAOQAJAhAMA6QALAcAYAWQARAcA7AlIAzAhQAhAiAdAsIANATIANAhIgBANQAAAKAjBuQAnB4AHAiIAOA/QgOAWgQAjQgIAPg1AdIhBAhQg0gChNAOQhQAOg9AYQgYAJgQAIQgCgYgSgGgAAtBrIAZgSgAINlBIAJASQAqBXAFBgQgFhggqhXIgJgSIgTgkIAjAuIgjgugAjrkpIAPgggAjWlJIAzhVgAidmsIAkgzgAhpnxICzh6gAFNn+IgehagADarEQANAFANAJQAvAdAAAqQAAgqgvgdQgNgJgNgFQgngQgygBQAyABAnAQgABmpzIAdhOgAlrAigAqknMIBNgNQAGABAKAHQgwAIgtAegAqkoDIAOgJQA9ghA7gCQgYAMgVANQgaASgZAVIgGAEQgRANgPARg");
	this.shape_12.setTransform(501.9,320.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CCCCCC").ss(8,1,1).p("AJxl5QgLAHgKAIQgXASgSAYQgGAGgEAHQgpA7AABWQgEAEgCAEQgEAEgCAEQgEAGgBAIQgjBBg7B+QgDAGgCAFQgDAFgCAGQgMAUgCARQgrgcg4gUQgNgEgNgFQAGADAFADQgBACgBABQgIAMgFANQgUgNgRgMQgIgGgIgFQgPgKgNgJQgLgEgKgCQgegGgbgCQgGgCgCAAIgCAAQhYgVhYADQgJAAgJABQACgIAAgGQAAg7g1gNQAGgKAKgOQAUgcAhg4QAIgOAJgQQAOgVAOgbQAKgUAMgWIJNhcQAKgPAMgOQAGgGAGgGQAJgKAMgGQAFgEAGgEAJxmaQgBABAAAAIABAAAC/EJQgUgLgZgQQgCAAgCgEQgIgEgKgKQgEgCgEgGQgjgdg7g9QgKgKgJgJQhNgUhGgMQgCAAgBgBIgBAAQAFAAAEAAQAyACA1ADQgEgCgDgDQgIgGgIgFQgDgDgEgCQgQgJgPgHQgNgGgMgGQgEAEgFAGQgRAWgWAHQgdgLgMggQgEglACgCQhAgNhJAFQglAGgdgGQhFAGglhAIgIgSQgGAEgIAEQAAAAgBABQhTA6AGBiQgCADAAAGQAAAMAEAKQAAAKACALQALBZAuBYQArBSBGBWQB+AEBlAAQCJgGBigPQAzgKAogMQAEgBADgBQAwgLAfgUQAEgCAHgGQAKgGAMgJQATgPAagVQgCgbACgYQgnAAgngOg");
	this.shape_13.setTransform(371.6,315.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#575757").s().p("AnAHNQhGhWgrhSQguhYgLhZQgCgLAAgKQgEgKAAgMQAAgGACgDQgGhiBTg6IABgBIAOgIIAIASQAlBABFgGQAdAGAlgGQBJgFBAANQgCACAEAlQAMAgAdALQAWgHARgWIAJgKIAZAMIAfAQIAHAFIAQALIAHAFQg1gDgygCIgJAAIABAAIADABQBGAMBNAUIATATQA7A9AjAdQAEAGAEACQAKAKAIAEQACAEACAAIAtAbQAnAOAnAAQgCAYACAbIgtAkIgWAPIgLAIQgfAUgwALIgHACQgoAMgzAKQhiAPiJAGQhlAAh+gEgAEWBGIgagJIALAGIgCADQgIAMgFANIglgZIgQgLIgcgTQgLgEgKgCQgegGgbgCIgIgCIgCAAQhYgVhYADIgSABQACgIAAgGQAAg7g1gNIAQgYQAUgcAhg4IARgeQAOgVAOgbIAWgqIJNhcQAKgPAMgOIAMgMQAJgKAMgGIALgIIAAA2IgBABIABAAIAAAgIgVAPQgXASgSAYQgGAGgEAHQgpA7AABWIgGAIQgEAEgCAEQgEAGgBAIQgjBBg7B+IgFALIgFALQgMAUgCARQgrgcg4gUg");
	this.shape_14.setTransform(371.6,315.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#CCCCCC").ss(8,1,1).p("AoEtGQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQksCFs2h+Qj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhg");
	this.shape_15.setTransform(564.9,289.8,0.56,0.56,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3B3B3B").s().p("AxjMxQj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQiaBEkkAAQkUAAmQg9g");
	this.shape_16.setTransform(564.9,289.8,0.56,0.56,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CCCCCC").ss(8,1,1).p("AoEtGQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQksCFs2h+Qj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhg");
	this.shape_17.setTransform(564.8,364.6,0.56,0.56);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3B3B3B").s().p("AxjMxQj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQiaBEkkAAQkUAAmQg9g");
	this.shape_18.setTransform(564.8,364.6,0.56,0.56);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CCCCCC").ss(8,1,1).p("AoEtGQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQksCFs2h+Qj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhg");
	this.shape_19.setTransform(504.2,306.4,0.56,0.56);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3B3B3B").s().p("AxjMxQj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQiaBEkkAAQkUAAmQg9g");
	this.shape_20.setTransform(504.2,306.4,0.56,0.56);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CCCCCC").ss(8,1,1).p("AoEtGQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQksCFs2h+Qj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhg");
	this.shape_21.setTransform(424.6,266.1,0.56,0.56,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3B3B3B").s().p("AxjMxQj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQiaBEkkAAQkUAAmQg9g");
	this.shape_22.setTransform(424.6,266.1,0.56,0.56,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#CCCCCC").ss(8,1,1).p("AoEtGQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQksCFs2h+Qj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhg");
	this.shape_23.setTransform(364,306.4,0.56,0.56);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3B3B3B").s().p("AxjMxQj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQiaBEkkAAQkUAAmQg9g");
	this.shape_24.setTransform(364,306.4,0.56,0.56);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#CCCCCC").ss(8,1,1).p("AoEtGQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQksCFs2h+Qj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhg");
	this.shape_25.setTransform(406.6,364.6,0.56,0.56);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3B3B3B").s().p("AxjMxQj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQiaBEkkAAQkUAAmQg9g");
	this.shape_26.setTransform(406.6,364.6,0.56,0.56);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#CCCCCC").ss(8,1,1).p("AoEtGQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQksCFs2h+Qj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhg");
	this.shape_27.setTransform(286.6,370.5,0.56,0.56,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3B3B3B").s().p("AxjMxQj8lmARlYQAHi6CnhVQBZgpAsgYQBLgsAig+QA9hcAVg6QADgUAwgpQBZhLDMjhQD9gfEZgHQIvgNCIB+QAzAwCTB+QCMB+BYBqQEEE2gtExQhEGqgHARQg6BtkXgXQiagOiggfQjogwhfgNQhSgOhBAsQh7BWggANQiaBEkkAAQkUAAmQg9g");
	this.shape_28.setTransform(286.6,370.5,0.56,0.56,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4,p:{startPosition:1,x:397.8,y:467.9}},{t:this.instance_3,p:{startPosition:1,x:438.6,y:467.9}}]},4).to({state:[{t:this.instance_4,p:{startPosition:1,x:397.8,y:467.9}},{t:this.instance_3,p:{startPosition:0,x:438.6,y:467.9}}]},10).to({state:[{t:this.instance_4,p:{startPosition:0,x:397.8,y:467.9}},{t:this.instance_3,p:{startPosition:0,x:438.6,y:467.9}}]},8).to({state:[{t:this.instance_4,p:{startPosition:0,x:412.7,y:265.1}},{t:this.instance_3,p:{startPosition:0,x:453.5,y:265.1}}]},12).to({state:[]},24).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.PlayAgain}]},5).wait(1));

	// images
	this.instance_5 = new lib.smoke();
	this.instance_5.setTransform(405.7,362.3,2.7,2.7,0,0,180,76.2,88.8);

	this.instance_6 = new lib.smoke();
	this.instance_6.setTransform(690.7,388.5,2,2,0,0,0,76.2,88.7);

	this.instance_7 = new lib.smoke();
	this.instance_7.setTransform(133.4,386.4,1.94,1.94,0,0,0,76.2,88.8);

	this.genie = new lib.genie();
	this.genie.setTransform(637.9,208.8,0.5,0.5,0,0,0,60,54.5);

	this.leftScale = new lib.scale();
	this.leftScale.setTransform(274.2,283,1.4,1.4,0,0,0,143.7,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.genie},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[]},1).to({state:[{t:this.leftScale,p:{x:274.2,y:283}}]},2).to({state:[{t:this.leftScale,p:{x:271.8,y:283}}]},1).to({state:[{t:this.leftScale,p:{x:309.6,y:261.8}}]},54).to({state:[]},5).wait(1));

	// sidebar
	this.plate = new lib.plate();
	this.plate.setTransform(701.8,103.8,1.28,1.28,0,0,0,114,34.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#990433").s().p("EgR9AnhMAAAhPBMAj7AAAMAAABPBg");
	this.shape_29.setTransform(688.9,249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.plate}]},1).to({state:[{t:this.shape_29},{t:this.plate}]},57).to({state:[{t:this.shape_29},{t:this.plate}]},4).to({state:[]},1).wait(1));

	// background
	this.instance_8 = new lib.backbackground();
	this.instance_8.setTransform(376.5,-160,1,1,0,0,0,401.1,168);

	this.background = new lib.background();
	this.background.setTransform(301.6,418,1,1,0,0,0,344.9,274.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.background},{t:this.instance_8}]}).to({state:[]},63).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.4,-328,862.1,990.1);


// symbols:
(lib.warning = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{MakeChoice:1,ChooseOne:2,DontWaste:3,Hint1:4,Hint2:5,stoneMarked:6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 2
	this.text = new cjs.Text("You've already used your 2 tries. Make your choice.", "38px Muli");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 550;
	this.text.setTransform(319.5,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text,p:{x:319.5,text:"You've already used your 2 tries. Make your choice.",y:74,lineHeight:40,lineWidth:550}}]},1).to({state:[{t:this.text,p:{x:324.5,text:"You can only choose on stone.",y:74,lineHeight:40,lineWidth:550}}]},1).to({state:[{t:this.text,p:{x:324.5,text:"Put something on the scale before you weigh.",y:74,lineHeight:40,lineWidth:550}}]},1).to({state:[{t:this.text,p:{x:324.5,text:"While you can only make 2 comparisons, you can compare groups of stones at a time. ",y:36,lineHeight:42,lineWidth:550}}]},1).to({state:[{t:this.text,p:{x:324.5,text:"Try all possible combinations, and carefully keep track of what you've learned about each rock.",y:36,lineHeight:42,lineWidth:550}}]},1).to({state:[{t:this.text,p:{x:338.7,text:"The stone with the jewel is now marked *.",y:66,lineHeight:42,lineWidth:515}}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.988)").s().rr(-329.5,-112,659,224,58.4);
	this.shape.setTransform(329.5,112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.tinyScaleSeat = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#690224").s().p("AkFDOIgBAAIgWgBQgSAAgOgMQgOgNgCgSQgDgSALgQIDblAQAHgLALgFQALgGANAAICKADQAMAAALAGQALAGAGAKIDTFIQAKAQgDASQgDASgOAMQgOAMgSAAg");
	this.shape.setTransform(33.4,21.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,43.1);


(lib.smoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990033").s().p("AABEgIgBgrQAAgsARg0IAshwIAAgHQgaAVgYANQgsAbgkAAQhhAAgihgQgLgfgDglIgBggQAAh5BDg6QA6gyBaAHQBTAHBCAvQBDAyAAA9QhsHrgxAAQgvAAgLgpgAAujOQAzA1AGAJQABgDAFAAQADgCAAgNQAAgIgbgSQgbgSgOgCgAgcjbQgfAFgRAIIAjgHQAigGAdgCQgIgBgKAAQgNAAgTADg");
	this.shape.setTransform(78.5,91.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990033").s().p("AB2FlQgEgNACgPIACgPQAIhXAZhfQAXhZAfg6IADgmQABg/gkg7Qg0hXhogGIhtAAQgfARgjAkQgcAbgRAZQAmgfAZgRQAuggAyAAQCIAAA7BtQAdA4ACA9QAAARgLAhQgPAugaAnQhKByh/AAQi1AAg4h2QgRgmgEgvIABgsIAAgKIgJhMQABiABqhWQBkhRCEAAQCPAABcBfQBRBUATCMIgCAFQgEAqgkB0QgbBWgZAnQAFAzgFAuQgJBZgyAAQg3AAgLgogAiDB3QAvARANAAQBVAAAzhPQAQgYALgdIAIgUQAAgugkgoQgkgngtgKQg1gLgpAfQguAjgSBVIACAMIANANIASAAIgCgSQgDgOAAgMQAAgXAQgXQAYglA1AAQA4AAAXA3QAMAbAAAeQgBA0gYAVQgvAriVgSQAIAFAtARgAjWBUIAGAAIgNgMQgHgIgDAAQACAMAPAIgAhAgkQghASADAgIAAAGQAdAEATgOQAOgKAAgJQAAgggQAAQgHAAgJAFg");
	this.shape_1.setTransform(66,85.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990631").s().p("AD8G/IgCgcQAAhGAeiIQAdiIAAgqQABhogUhMIgBgDQgTgvgPgaQg8hsidAAQhzAAhbBmQg4A+gZBCQgDAJgaB5QAECiBsA/IAgAPIAMABQCxAABShmQAKgMAhg1QAIgdAGghQAIgmAAgJQAAg2gYgrQgphJhjAAQheAAgtBSQgcAxAAApQAAAeANAcQAXAzA3AAIAmgBIAZgbQAKgMAAgMQAAgLgIgRQgKgXgPAAQgMAAgMAPQgMAPgTAAQgdAAgIgXIgEgVQABgXATgSQAagXAvAAQBDAAAiA9QATAjAAAiQAAAhgYAmQgmA+hLAAQiCAAgrhfQgOgegDgkIgBgeQAAhCAnhFQBAh1CPAAQCbAAA8BuQAhA8gBBQQABAQgJAuQgKA2gRAvQgBANgNAbQgHAPgIANQgOAYgSAUQhVBiiBAAQgfAAgWgDQgGADgJAAQgNAAgrgIQgrgHgIAAQhPAAgphoQgRgZgNgeQgWgzgKg+QgGgkAAgWIAAgEIAAgIIAAg6QABi1BZhuQBLhbB7gfQBmgaBdAXQAaAGATAIQB1AcBBB8QAnAwAEBCQAaBigBB5QAAAugMA8IgZB0QgFAdgFBkQgMBWgoAAQgeAAgIgbg");
	this.shape_2.setTransform(56.5,79.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990033").s().p("AFOJZIABgHIAIAAIgJARIAAgKgAEeG5IgCgyQAAiSAuiRQAbhUALhNQgKgsgNgsQgRgKgQgXQghg6gYghQhfiEjKAAQibAAhWBvQgVAcgeAxIgMAQQgNA8AABFQAAAdAJA0QAOBUAcBFQAXA7AfAqQASAGAXAaQAfAiAUAAQDoAABni/QAeg4APg5QgOg2gVgxQhMi3h3AAQh2AAg2B+QgfBJAAA+IgBAZQAAAdAKAZQAdBMBpAAQAwAAAYgwIANg0QAAg2hFgOIgygLQgWgJAAgRQAAgNAPgNQAYgUA0AAQBOAAAkBOQATAmACAqQAABAgdAtQgzBMh9AAQiPAAgsh2QgOglgDgtIAAgqQAAhsAmhXQBHinC6AAQDLAABdDyQAjBaAMBdIgLgIIAAACQAAAcgZAvQgeA4giABQgWAmgeAiQiCCWjQAAQgjAAgdgNIgDAEIgIALQhVg0g5hkQhUiUAAi+QAAkJCYiXQCLiKDAATQDIAUCGCyQBKBjAmCDIgHAeQADAUAAAvQAABZgpCFQgoCGAAB+QAAAsgCAJQgIAjgiAAQgoAAgKgvg");
	this.shape_3.setTransform(50.8,81);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990033").s().p("AEEKKIgHhIQAAh3AXhnIABgEIAAgoQAAgqATg3QARgzAYgjIAFgHQAJhHAAhMQAAg3gXh0IgDgHQgghPgZgtQhgi0i1AAQiTAAhhCTQgZAlgkBAQgOAXgNALQgcBcgNBdQAIBmAlByQBHDXCNAYQgCgEAAgEQAAgRAKgDIgFgDQgWgOAAgHQAAgIBHgoQBFgnAEAAQAFAAAFAGQAFAGAGAAQAjAABNhjIAKgNIAIghQAIgqAAgSQAAhGgjhbQg6iXhxAAQhmAAgmBCQgSAgAAArQAAA5AQBBQAaBvA2AAQA6AAAGgyQACgPgDgTIgEgRQAAgYAQgBIACgCQAFgIAKAAQAVAAAHA5QADAcgBAeQAAAhgUAjQgjAzhEAAQh0AAgriLQgOgsgEg1IgCgvQAAhFAnhRQA+iAB7AAQC0AABgDDQAfA/ARBKIAFATQARgEAAAmQAACLiRB9Qg5Ayg/AfQg5AdgnAAQgNAAgJgDIgCAAIgFAAIgwgCIgFAAQgpgCgigGIgqgIIgGgBIAAAAQgVgGgRgIIgOgHQgrgvgdhHQgrhqAAh5QAAgmADglQgDgkAAgkQAAhSAUhgQAbh/A2hgQCWkNE4A2QAZALAWAMQB3AxBQC4QAxBwAcCVQATBrAAA5QAABggrCaIAAABIgVAlIgVAnQgMAxABAbQACAegJA9IgKBFQAAALAKA4QAKA3AAALQAAAWgGAMQgKATgcAAQgpAAgPhGgAA7E5QgtAggxAeIgbAPQAvgJBOg7IAkgdIALgUQgXATgcAVg");
	this.shape_4.setTransform(52.4,58.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#990033").s().p("AiPCBQgFgIAAgNQAAgIAEgHIAIgLQgngLgxgxQgvgtAAgXQAAgbAgAAQAKAAARASIAkAoQA5A3BAAAIAggEQAdgEAVgCQAxgtBbgyQALgGAWgWQAagbAIgGQAmgfAABCIgBADQgQAagNAQQgiAohWBCQhhBNgdAAQhRAAg6gIg");
	this.shape_5.setTransform(43.5,88.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990033").s().p("AEDLCIgEgdQgGgMgDgRQgDgOAAgzQAAg8AOgwQAIgaAJgQIAEgTIAMg7QAHglAIgYQAFgTASgUIACgMIAAgBIABgMIAVi3IAAgBIAAgHIgDg1QgDgjgGgvQgOhjgBgiIgHgnQgKgKgJgPQghhEgUgoQgmhIgxgkQhDgxhnAAQgzAAhoA7IgXAPQgNAFgMAIIgJAGIgEAEIAAAAQgsAlgMBIIgMAhQgjBpAABEIAACkQAAAHgEAGIABALQA9COCfAAQDLAAAAjMQgChLgVhDQgpiFhcAAQhiAAgYBWQgMAsAHAwQAAAgALAgQALAhAAAXQAAACgEAHIgDAFIAFAaQgKAGgJAGQgdgjgQggQgGgYgGggIgLhBIAAgkQAAgsAng/IABgCIACgDIADgGQA4hVBYgBQCWAAA6CHIAJAYQArBNAFBKQAOAwAAApQAABXgrBPQhICJihAAQiQAAhWhLIgFgEQhbgngshmQgjhSAChZQAAh2AehmQAFhQA7iBQA5h+A+gkIACgDQBwiGChAAQDSAAB4DYQAoBIAYBWQAIAeAEAVIATAzQATA2AAAVIAGBDIAFBBQAAA0gHBDIgOB5QgCAQgNAlIgBAeIgHBHIgWAVQgLAwgVBNQgjB7gHAkQgBAWgBAIQgFAXgJATQAJAbAAAdQAAAmgDAaIgFAEQgFADgMAAQgZAAgQhVg");
	this.shape_6.setTransform(52.7,43.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990033").s().p("ACyL5QgEgPgDgOQgEgQgDgVIgDgwIgNgOQANhLAoiVQA3jMANgXQAgg1ARhKQAKgtAJhOIACg/IAAgCQgKgagNgqQgmh+gUgdQg0hLg6gxQhvheh6AAQheAAhZB4Qg/BUgSA9QgdBnAAAtQAHA1ABA6IAEASQBFDnCPAAQBGAAAphfQAQgmAIgnQgFgJAAgGQABgMAEgJQgEgUgNgaQgeg7gyAAQgUAAgZAbIgHAIIgBAAIggAyQgRAAgGgTIgCgVQABgaAggmQAsgzBGAAQBkAAAxB0QAZA7AEA5QAABFgnBEQhBB2iaAAQjEAAhij6QgTgwgOg1IAGgIIgFgXQgHgqAAguQAAhJAWhUQAMjQB7hwQAZg8BMgxQBxhICLADQBCABA3ASQBTAQBCAnQBOAuATA6QBODwAAA9QAAASgFAWQAHAlALBbQARB9AAAYQAAAfgSBEQgRA+gWAVIgOAhIgmBWIgHAQIgcBAQhXDPgQCYIAAACIACAOIACAPIAAAEIAAAZQAAAKgKASQgKARgIAEQgdgPgPgvgAGNiMQAAANgFANQADARACAQQAAAugJAyIgBAQIAQAHQAEgtAAgoQAAgvgDgvIgKgyQADAZAAAagAGIjPIAAgGQAAgFADgGQgHg3gLg3IgDgJIgJAOQgZgogOhIQgRhagLgeIgIgUIgCABQgHAGgGAAQgHAAgMgFQgMgFgHAAIgCAEIgBAIQAAAKAZAxQAlBIARAoIAFAKQA8BTAOBlIAAAAg");
	this.shape_7.setTransform(60.5,24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990033").s().p("AAeF1IgGgeQAAgLAIgcQAJgdAAgLQAAiBhWjoQgth1gshaQAAiqBjCEQAjAvAjBGQAhBAAIAcQAPBoAbBkQAOA2AABgQAFAzgFAsQgJBUgtAAQgjAAgNgbg");
	this.shape_8.setTransform(93.2,-4.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990033").s().p("ABiMtIgChRQAAg2AVgxIAAgFIAKhUIgHgHIAhhCQBfi3APggQASgmAOgjIAJiTQAAhagZh1QgZh6gshpQgnhegqg7IgqgWQgtgYgdgMIgCAAQifAAhlCIQhTBvABByIgPDPIAKAoQA+DkB1AAQAXAAAWhFQAMgjAGgkQABgLgHgWQgEgPgCgLIgkgTQgLgFAAgLQAAgPAKgGQAIgFAVAAQAiAAAZAXQAsAOAPBSQALAygBA0QAAAggnAtQg6A+heAAQjDAAhfkUQgwiJgJiVQAAhEAKg9IAAgRQAAhkA7h7QBCiJBlhLQBfhICXACQAkAAAeAEQA7gBA1AMQBKAPAoAhQA0ArAxBCQAbAmAwBKQAxBFAbCOQAXB2AABsQAABUgqB5QgSAygRAgQgYBOgnBsQhXDygXASQgOAsgZBGIAAABIgFgGQgIAVgMAcQgWAxgPAQQgTBpgTAAQgeAAgIhPg");
	this.shape_9.setTransform(68.3,5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990033").s().p("AB9PmIgCgCQgFguAAgRQAAgdAHgpIgCgHIAAgdQAAhxAiiDQAehyAthcQAjhJAcgZIAQghIgBgKQAAgRANhBQAMg3AHgcQAFgLABgaIgEgbQglj4gMgxQgXhghDiUIgCgEIgRgVIgogyQgYgVgbgRIgIAAQiqAAhjBNQgLAJguArQgSARgOAFIgHAMQgqBKgLAgQgQA2gMAjIABAzIgLCrQAAAaANBaQAMBbAAAfIgBAHQARAwATAwQANAfAwA9IAZAfQAdAJAgACQAOgLAPgYQAeguAMAAQAVAAgBAXQAAA5gPAYQgiA1hqAAQgMAAgLgBQgLADgNAAQjEAAhUk+QgqiggEinQAAjuBXjCQBIiiB2hqQBmhbBYgNIARgCQA9gXBHgIQCEgOBvAvQCDA3BKCBQATAkAeBgQATAgALAoQAMApADAzQApCeAAA7QgOBWgNA6IAAAPQAACAhKDIQg1CSgxAvQgkBggzB0IgCgOQg5DWg6AuQgPA6gLAZQAAAOABAKIgEARIgDACQgEACgNAAQgNAAgGgCg");
	this.shape_10.setTransform(71.3,-21.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(153,0,51,0.698)").s().p("ABeStIAAghQAAhrAnh+QAjhsA1hdQANgXAMgTIgGgMQAnhGAlg5IAHgbQA1jfAbhSQAUg+ANhEQAPhOAAhBIAAgHQgGhJgOhHIgphkQg1hZgUgcQiDi1itAAQj0AAidFeQgTAphHC/QgNBVgDBbQgBAVAUCUIATCRIAAACQAaAsBPB4QAkAlAAARQgBAdgTATQgXAVgpAAQhCAAhJhRQgOgQgNgRIgCgBIgGgKIgDgEIgFgIQgMgRgCgHQhbiVgXhuQgfiPgQhjQgXiPAAhkQAAjiCLj1QB2jTC6inQCsicCEgiQAmgKAcAEQAYgKAcgIQC4gxCzB8QBYBYA0A8QBQBeAbBAQBBCYAOCaQAFA5AADqQAAAmgKBlQgHA9gIA4IACAgQgFAMgDAQQgIBJgDAHIgUA1Qg1DXhPBMIhwDFIgCACQgdA0gXAsQglBKgTAzIgDACIgJAJIgBgEQgaA5hMBiQhtCLgJAAQgfAAgGgeg");
	this.shape_11.setTransform(75.7,-58.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CCCCCC").ss(1,1,1).p("AgHAEIAPgH");
	this.shape_12.setTransform(7.3,-64);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(153,0,51,0.498)").s().p("ABiTBIAEgOQgEgLAAgSQAAgTAfguQAwipAwi3QB/nhAAh7QAAgtgOhOQgXh6gwhlQhijQiuhGQglgHgdAAQgtAAhmAeQjECsiCDrQgbAvghCYQgDBMgYBqQgOBBgSApQAQBLAAAOQAAAbgYAeQgbAighAAQgzAAgmi2QgUgmgQg6QgKglgHglIAAgCIgRALIgCgVQgVibAAi/IAAggIAAgoQAAkvCIkNQBzjjC5ieQBOhCBHgoQAjgbA0gRQCKguDOAgQDQAgCpBdQC6BnA7CKQBuCbAsDFQAjCZAADUQAADbgcCFQghCghoDWQhnDWiXDWQjJEchwAAIgMAAIgjAvQglgRAAg5g");
	this.shape_13.setTransform(95.6,-91.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(153,0,51,0.298)").s().p("ACDULQgFgOAAgRIABgQQAZh3AZiKQAwkFAChuQASgYALglQANgxAAhYQAAlgigi7QiJijjWgBQjKgBiYCHQiMB9gSCvIgPAQQg/A7hCAAQhSAAgQhmQgIg0AIg3QAApjE5lyQCIiiC4heQCthaDAgSQC9gRCxA1QC1A2CLB2QCTB8BQCzQBWDBAADsQAACfg8ElQg8Epg7B9Qh2D+iuEHQjdFOhnAAQg8AAgPgsg");
	this.shape_14.setTransform(109.5,-123.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(102,1,51,0.2)").s().p("AFeVfQhdgCgZgyQgIgRAAgTQAAgKABgHIAxktQAxkzAAgwQAAgOAJiRQgCijgwiDQiYmZo2AAQitAAkHCQQhQAshUA3QhBArgCAAQhMAAgWhHQgLglAEgpQAAhuBBjAQBMjgB7jEQCVjtC8iMQDfimEDgMQLZAQEnFfIABAAQAwATAyAkQAxAjAXAgIA6B4QAhBKAHAxQALA+APCnQAQCzAABHQAACvhZERQhUD/iFEFQiGEGiDCjQiPCxheAAQghAAgTgOg");
	this.shape_15.setTransform(123.7,-150.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,2,0,0.098)").s().p("AJhUtQgphGggiKIgujsQgZiBgYgtIhKioQgzhzg9hKQi4jemsgzIlcAEQgdAIilBBQiEAzgrAAQiXAAgtjSQgWhpAIhlQAAjpBujZQBojNC8imQC2ihDmhjQDphjDugTQD7gTDdBKQDuBQCvC0QGSGdAANIQAAAmgeCwQgoDpg4DFQitJkj5AAQhOAAg1hZg");
	this.shape_16.setTransform(142.6,-207.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(153,0,51,0.549)").s().p("AgrEmQgFgaAEgnQAFgmAAgKQg8AEgVAAQhxAAgshiQgYg1AAhFQAAiQBeheQBVhVB6gPQB6gPBWA9QBeBDAACDQAABOgUAxQgOAhg3BxQgEAJgFAtQgGAxgIAdQgdBlhcAAQhhAAgPhTgAg2gIQgFAJgJAvIgEALQArgPARgrQAMgfgFgbQgkASgNAfgAANkBQAtAvBNAzQApAbAAAlQAAAggPAcIgfA7IAFAHQAXgXASgyQASgxAAgiQAAgxgkgpQgpgthFAAQgRAAgSADg");
	this.shape_17.setTransform(76.2,88.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(153,0,51,0.549)").s().p("AA5GFQgEgUACgaIAEgcIAAgEQgPAIiEAbQi5AAhai6Qgdg8gQhHQgKguAAgVQAAi2CDhzQB2hnCpgMQCpgMB3BTQCDBcAACpQAABagPAzQgMAtg4B5Qg6B8gXBlQgLAZgVAHQgTAGg6AAQhMAAgNg/gAAcjuQAqAIAKAAQB0AAAuBXQAYAvAJBgQAbhDAAgtQAAhLg7hCQhLhViGAIQi1AJg/BUQgSAXgUAyQgTAwgQATIACACQAtgsA9gpQBfhBA6AAQALAAAnAHg");
	this.shape_18.setTransform(65,81.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(153,0,51,0.549)").s().p("ACbHmQgEgVAEgcIAFgdIAAgHQgXAPgcAMQg3AXhNAAQk7AAhojKQgihCgJhUQgDgYAAhDQAAkNCYiaQCIiMDFAGQBMACBFAZIALgCQA4gDBRBEQBRBFA3BjQA/BwAABmQAABegKA2QgGAfgJAYIgBADQgTBegZBTQhLD1hUAAQhcAAgNhBgAkljPQgjBLAACLQAABtAmA8QAKAPAMANIABgQIgKgZQgRgrgDgzIgBgtIABgPIgBgJQAAgeAIgcQAUhnBHhLQBWhdCAgZIAagFQgpgJgtgHQi5Aeg/CKg");
	this.shape_19.setTransform(56.9,76.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(153,0,51,0.549)").s().p("AE6IxQgTAggkAAQgjAAgMgdIgGggIAJhtIAFg/IgPAOQhJBEhZAmQhVAmhQAAQgYAAgVgEIgDABQgKADgrAAQjAAAg/jpQgahgAAiiQAAkOCeisQCNiaDNgUQDLgUCQB4QCeCEAAD0QAABrgNAxQgkCIgMA+QgKA4gGChQgNCHg0AAQgkAAgNgggAlQFFQAPAVASATIAHgKQAFgGAGgEQgegjgWgzQgegEgTgTQARAtAhAsgAh9FGQA6AAA1gdIAGgFQgjARgyAAQgyAAgkgPQgPgBgOgDQAjAkAwAAgAAcmIQAqALAkAPQBZATBDBAQBXBSAXCFIADAKQAEARgBARIACAVQAMg8AAgyQAAgagOg1QgRhFgfg6QhZiqifAAQivAAhyBTIAUgEQAegFAiAAQBGAABRAXgAlojBQgWA7gLA+QAVhHApg9QAhgwAogjQgOgFgIgPIgGgVQgtA5gdBOgAAAjOIAPgBIAUgCQgJgMgJgEg");
	this.shape_20.setTransform(51.6,73.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(153,0,51,0.549)").s().p("ADHKQQgGgdgDgkIgBghQgBiwAqiSQgGgFgFgHQgPgCgKgIQgYBGhLA5QgmAcgsATQgcANgRACIgBgJQgkADgugHQhagOg2g3QgZgQgXgZQAuBGAvA5QAAAPgSAJQgRAKgdAAQgrAAhFhhQg8hVgZhIQgqh2AAiGQAAlGCii7QCQimDTgDQDQgDCUCZQCiCnAAEVQAAB5gSBPQgMA5gxC6QgNA8gWDKQgaCsgwAAIgHgBIgEAFQgRAUgcAAQg2AAgVhcgAjcikQggAsgXAzIgIATIgGAVQAAAVAMAuIAEASIAIASQAaA3AcATQgIgQgIgTQgOgmgHgtIgGgmQAAgXARgnQATgtAggnQA3hGBIgXQgVgPgNgNQhFAfg6BQgAmHCFQgQgpgMguIgCgIQAFApAZA2gAChBPQAEALAHALIADgWIAAgCIgOACgAgwApIALgGIgCgGIgIgNIgDAAQAEAIgCARgAFHk+QA5B2AOB3QAGgwABggQgUiCg5h4Qhxjti+AAQkmAAhrFLQgkBwgJBxQAPg4Aig6QAZgoAegjQANgbAPgZQCBjUDCgOQC+AfBnDSg");
	this.shape_21.setTransform(52.3,54.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(153,0,51,0.549)").s().p("AEMMXQgsgBgcgzQAFg4AfigQAiipAAgiQAAgLAHhVIAAgCQgOi4gHg3QgNhzgyh9QgahBgagkIgegUQgagPgagMIgSACQBhAlA5CkQAYBIAOBWQAKA9AAAiQAABGgQA8QAQATAAAGQAABVhMA/QheBMioAAQkKAAhUjcQgphrAJhvQgPhVAAhfQAAkRCciwQCQikDEAAQDNgBCIC5QCcDTAAGCQAABRgUCMQgTCOgVA4QgMAigzDBQgzCwgbAAQgPAAgNgLgAjvBvQAgA3AVAAQBWAAAphYQAOgbAHgiQAEgTAAgJQAAg2gfgoQgYgdgYAXIgCAoQgEAvAAAWQgHAtgUAXIgGgCIgDAGIAAAEIgDABQgOAWgaACIgQAMQgIgGgGgNQgKgFgIgKQgPgXgFgFIgFAAQAVAsALASgAE3lDIACADIgCgFIAAACgAEwlWQgJgYgJgmQgRhCgKgbQgphwhjgnQi9hNiECAQhPBMgmB1QAZgOATgbQAdgnAFgFQAagbA0gMIARgKQAtgaAogMQAtgTAngFQBPgLAAAzIAAAHQBMA0A2A6QAzA2AVAvIAAAAgAirlsIgHAHQAKgFAMgFIgPADg");
	this.shape_22.setTransform(54,38.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(153,0,51,0.549)").s().p("ACjKrQgGg4ABhDIABg9QAAhWA1ixQA0ixAAhUQAAgXgNgvQgRg+geg1QhWiZiUAAQiGAAhECPQgsBcAABMQAAAwAcBEQAnBiBAAAQBZAAAAhoQAAgdgBgHQgFgXgUgCIhpAeQgqAAgOgfQgHgPAAgVQAAgfAugrQA5g1BSAAQCjAAA1CLQAaBEgGBKQAABMhGBEQhcBZihAAQjdAAh0jtQgmhNgWhaQgPhBAAgbQAAkcCxjLQCji8DggdQDpgfCbCkQCxC7AAF6QAACMiAGxQiDG5gyAAQhLAAgSiwgAhZqqIgaAOIgEADQDtBJB5BiQBlBSAfBwQATBEgCCHQgCCGARBAIADAAIAOhvQAOhxAAgdQAAjShIiYQhejHjAAAQhMAAhZAfgAltkLQgUBAgLAXIAABPIACAAQAMglAnhnQAghTAAgMQAAgNgIgHQgGgFgGAAQgNAegVBAg");
	this.shape_23.setTransform(57.1,19.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(153,0,51,0.549)").s().p("ABKOiQgHgPAAgWQAAjFAZiAQAPhPAohnQAohqAOhGQAZh5AAi2QAAgZgKgvQgPhAgcg2QhRificAAQhwAAg1CmQgbBTgEBaQAAAaAlBfQAnBnAWASIAEgIQADgFAAgNQAAgRgSggQgRggAAgUQAAgYAPgQQASgTAkAAQBqAAAnB/QAUBBgBBEQAABNg1BBQhOBdigAAQjZAAhOk7QgnicAEilQAAlLC1jbQCljIDogVQDtgWChC0QC1DLAAGBQAABlgwDFQgvDBhHDHQhLDUhICAQhRCSg3AAQgqAAgOghgAE6k6QAwCcAECdQAABjgPBPQgDARgtC/IAAACQBKisAiiEQAliTAAiUQAAlAiLipQh8iVi3ASQiyATiACnQiLC3AAEWQAACSAZB3QAxDwB/AAQAMAAATgGIAkgLIAQgFQiVhNg1h0QgihMAAh7QAAgoAKhAQARhjAihRQBpj3DlAAQDaAABgE3g");
	this.shape_24.setTransform(67.9,-0.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(153,0,51,0.549)").s().p("ABMO5IgJhgQAAj9BfkjIBBjIQAdhnAAhGQAAh0griPQhDjZh+AAQidAAhJCwQgsBpAABkQgBB+AQBvQAfDfBTAAIASgPQASgPAUAAQAyAAAMAuQAGAXgEAaQAAAxgbAtQgpBGhXAAQlZAAhxk9QglhngJiBQgCggAAhqQAAl6DQj3QC6jbEQgnQB/gTB2AdQB5AeBdBMQDQCrAAFKQAACtgqDTQguDhhGCFIjKGuQiKEjgjAAQgqAAgQhbgAgXuAQkQBYiJEBQhmC+AADJQAACXArCXQBADjB/AGIBBgCQgzg2gujPQgoivAAhaQAAiYA5iBQBkjjDrAAQC0AABgCyQAzBeASB6IAPBmQAHA+AAAuQgCBjAUAdIAPAVQAGAPAAAeQAAAYgSAtIAAAFQAyhRArjrQAii5AAguQAAjJhLiNQh2jfkUAAQgrAAguAFg");
	this.shape_25.setTransform(69.7,-22.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(153,0,51,0.2)").s().p("ABPTeQgKgRgFgVQgDgNAAgHQAAgQANgdIAAgBIAAgWQAAg8Aeh0IBCjnQBglPAAjCQAEiIgWh4QgtjyiIAAQhfAAiiCEQg7AvgzA1QgtAtgLATQgIANgeCJQggCOAAAeQAAAbAbB4IASBXQAFANADAQQAKAsgBAvQAAAwgIAUQgSAsg7AAQhpAAh7idQhbh1gnhkQgjhagLhsQgIhGAAh5QAAlOCAkeQBqjtCvilQCQiHB/glQAMgNAPgMQBdhKCNgLQCbgMCbBHQCxBQCNCtQAXApBAEYQBDEkAABVQAAA/goDgIACAyQAAC1grBjQgMAdgaAxQgUBcgIAXQhODfiMDtQi7E9iCAAQhGAAgfg2gAGsj3QAwCpgFC8QAACFgCAPQgQBFgaCIQBEhvBBiUQBEj0AAj6IAAgdQgNgjgQgpQg8iSgmg0IhMhlQgvg5g2gjQiRhdkgAJQk7CAh8ELQhUC0AAEMQAADoBRCrIACADQACgYgEg5QAAmDCWjqQCkkBEwAAQEKAABfFNg");
	this.shape_26.setTransform(76.8,-68);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(153,0,51,0.098)").s().p("AAbWrIgCAAQgyAAgJgtIACgpIgBgLIAAgHIgMgZQgOgbAAgHQABh7AnizQAWh0A9jWQBAjmAWhaQAmimABhnQAAgKgPg1QgTg/gYg4QhLirhaAAQitAAi0CHQgaASgXAUIADAEQAJARAAAPQAAAKhMB3QhSCDgRAtQgDAHgEAzQgEA8gHAkQgNBIgcAhIgEgOQATgpAOhBQAYhrADhKQAhiZAbgvQCCjrDEisQBmgeAtAAQAdAAAlAHQCuBGBiDPQAvBmAYB6QAOBOAAAtQAAB5h7HUQgrCFhZEFIAAACIAcghIAIgMIgEAQQgfAuAAATQAAARAEANIgEANQAAA5AkARIAjgwIANABQBvAADJkcQCYjWBnjWQBojWAhigQAciFAAjbQAAjUgjiZQgsjFhuicQg7iJi6hnQiphdjQggQjOggiLAuQg0ARghAaQhIAphOBCQi5CehzDjQiIENAAEuIABAqIgBAeQAADAAVCaIABAVIASgKIAAACQAGAlALAlQAQA7AUAlIAIAiQgJABgHgDQiOgMhSlOQgqirgNiyQAAghACghQgEgyAGgzQAAi4AUhoQAciXBTh5QDEkiJnj6QLGA5EMGFQA0AlA1A1QBGBJAbA3QANAdAjC7QAlDEAAA0QAADYgyDlQgpDDhaELQhKDdkjFJQh6CLhpBYQhtBegwAAQgaAAgVgIQggAWgTgBQgdABgWgKg");
	this.shape_27.setTransform(94.9,-94.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(153,0,51,0.098)").s().p("AB6V5QgIgKgGgLQgKgUgFgXIgDgVIAciQQAciRAAgaIgOjXQgOjXAAhtQgBk5h/hxQgqgkhBgTQhQgYhzAAQgqAAgyAYQgaANgdASQg1AkhiBZQhnBdgsAgQhPA5g5AAQhiAAg+hpQgfgzgWhNQgniFAAh3QAAoDExlRQAZgdAcgbQCdiYDTheQDHhYDcgYQDYgYDMApQDQAqCgBmQCgBnBbCWIAIAOQBjCsAADXQAAD7hLFbIgBAHQhNFjh/FBQiKFdieDKQhmCChkA4QhLAphLAAQg+AAgigpgAjlkPQDWABCJCjQCgC7AAFgQAABYgNAxQgLAlgSAYQgCBugwEFQgZCKgZB3IgBAQQAAARAFAOQAPAsA8AAQBnAADdlOQCukHB2j+QA7h9A8kpQA8klAAifQAAjshWjBQhQiziTh8QiLh2i1g2Qixg1i9ARQjAASitBaQi4BeiICiQk5FyAAJjQgIA3AIA0QAQBmBSAAQBCAAA/g7IAPgQQASiwCMh8QCXiGDIAAIADAAg");
	this.shape_28.setTransform(109,-124.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17}]}).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.9,51.1,60.5,75.5);


(lib.scaleTop = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#690224").s().p("Ay4CvQghgQgMgkQgKghAKgkQgGgJAAgKQgBgMAHgJQAwg8BKgCQA/gDBLAoQCSBLAUAIQBfAlBYgTQBlgWCthmQCwhqBfgYIBQgJIACgJQAPABAPAAQAkAAAagGQAKAEAMACIAEAJQBmAMBFApQAFADADAFQAqATA4AdIBgAyQCZBNB4AXQCcAdCBg7QAygWAYgGQAqgLAjAMQAcAJAXAVQAbAZgBAaQgBAsgzAWQgzAXgggiQgUgVAWgVQAVgVAUAVQADAEAQgHQAPgHgEgEQgXgWgagDQgYgCgfAMQhSAig/AOQhPAShJgGQh6gKiGg9QiOhHhLgjQiHhChcgTIAAAFQghgRguAEQggADgbANIAAgFQgxAGgOAEQgHACgIgBQhNAaiUBWQiTBYhSAaQhWAchUgHQhZgGhMgrIhTgyQg1gfglgJQgQAPgUgJQgcgNgZAXQgWAUgFAfQgBADAAAMQACAJACAEQAGAJAIAEIAOAEQAEABAJAAIAFgBIgJgGQgZgPAQgaQAPgaAZAPQAeATANAaQAPAggcAXQgWARghACIgEAAQgcAAgZgNg");
	this.shape.setTransform(-3.9,-7.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-130,-26.5,252.2,37.7);


(lib.scaleMiddle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#690224").s().p("Ag7AxQgZgdAAgUQAAgUAbgaQAbgcAegJQBVgbAACAQAAAagMATQgQAageAAQg0AAgigog");
	this.shape.setTransform(45,130.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#690224").s().p("AlEPVQiLgegEhLQgDg4CggqQBEgSBEgKQAdAVAtAKQgCAGgBAKIgBAgIABAcQACAWAHAHIACgCQAJAOAZAIQAdAKArAAQAgAAAcgUQAZgTAAgQQAAgIgBAAIgCABQgFgBgFACQgHgiAAgWIAAgOQApgHAdgRIASgMQA/AFA5AKQAdgEAUANIAbAGQBFARAYAnQANAUgCAQQgEA/hLAbQhtAnkxACIgYAAQiwAAhigVgAB1MRIAEgCIgCAAIgCACgAgMN+QgJgDgfgIIgggHIgEABQADgJABgNIAAgbIAAgcIgDgQQApAHAyAAQAeAAAagDIgBAMIADAiIACAkQgTATgHAFgAiULeQgrgagCgWIAAgBIAUgUQAzgoBIgJIAAgGIAlADQAsAFANADIAFAAQAqAJAkARQAQAHALBIIgEAJIgFAEIgHAEIgLADIAGABQgpAWhYAAQhcAAg8gjgAgIJTIgpgBIAGhTIArAAIAfgBIAFBXIgsgCgAhJHlIgKgEQgdgSgDg2QAGgKAJgMQAmgwA4AAQArAAAyAiIAKAHQAHASACAaQABAmgYASQghAJgyAAQgtAAgcgEgAgEFAQgdgCgYAEIggiZIgMACIAAgNIAdgCICUgKIABAkIgNgBIgYCSQgWgFgWgCgAhgCSIAFlgIADAAIAHm2QAGgLADgOQACgKABgzIAKgCIAOhgQAXAHAaAAQALAAAQgGIAHAXIAGAUQAHAeAJAWQgBAIAAAKIABAVQABAPADAOIgHgCIAHHMIADAAIAFFggAgstUQgSgLgLgRQgLgTAAgXQAAggAXgYQAXgXAhAAQAXAAAUAOIALAJQAXAYAAAgQAAAYgNAUQgJANgMAJIgMAHIAAABQgLAEgLAAQgYAAgYgIg");
	this.shape_1.setTransform(46.8,116.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,16.5,93.6,200.5);


(lib.rock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{lastWholeFrame:3,firstJewelFrame:6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(4).call(this.frame_9));

	// number
	this.RockNumber = new cjs.Text("1", "27px Muli", "#CCCCCC");
	this.RockNumber.lineHeight = 29;
	this.RockNumber.lineWidth = 34;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.RockNumber}]}).to({state:[]},4).wait(6));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AlIDvQhKhpAFhlQACg1AxgZIAngTQAWgNAKgSQASgbAGgRQABgGAOgMQAagWA8hCQBKgJBRgCQCkgEAoAlIA6AzQApAlAaAfQBMBbgNBYQgUB9gCAFQgRAghSgHQgtgEgvgJQhEgOgcgEQgYgEgTANQgkAZgJAEQgsAUhWAAQhRAAh1gSg");
	this.shape.setTransform(19.9,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AijB3Qglg0ACgzQABgZAZgNIATgJQALgHAFgJQAJgNADgJQABgDAHgGQANgLAeghQAlgEAngBQBSgCAUASIAdAaQAVASANAQQAmAtgHArIgLBBQgIAQgpgDQgXgCgXgFIgwgJQgMgCgKAHQgSAMgEACQgVAKgrAAQgpAAg6gJg");
	this.shape_1.setTransform(19.9,13.6,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AlIDvQhKhpAFhlQACg1AxgZIARgIQAeAMAMAeQAZA9APAIQAGgDAHgGQAFgFACAAQACgYgQgkQAfAKAaAAQAOAAAHgJQAGgGAAgIQAAgUgngGQg4gIgSgIIgLgOIAGgKQASgbAGgRQABgGAOgMQAagWA8hCQBKgJBRgCQCkgEAoAlIA6AzIAOANIgKAKIgJAGQgHACgJAAQgNABgSgFQgmgJhCA3QAAAIAFAIQAGAKAJADIAXAAQgNARAAAPIACAMQAEALAOAAQAMAAARgZIAUgdIABgBQA1gNAngmIAIgIQANANAKAMQBMBbgNBYQgUB9gCAFQgRAghSgHQgtgEgvgJIg9gMQgyg5gfgfQhDhGg0AGQANA3BeBQIAUARIgFADQgkAZgJAEQgsAUhWAAQhRAAh1gSg");
	this.shape_2.setTransform(19.9,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("Aj5BzQgjgaAQgbQgGgDgKgOQgLgOAAgFQAAgbAaABIAPAHQAfAQAbAJQAsAfAAAlQAAAKgUANQgVANgRAAQgVgIgSgNgACzAZQgaAAgZgSQgXgOAAgMQAAgKAbgcQASgSARgPQAxgtAEABIAcAMQAHAAAUgGQATAAACAVIgHANQgQAEgaASQhEAwAAAgIACAMIADAFIgFAAg");
	this.shape_3.setTransform(16.1,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AijB3Qglg0ACgzQABgZAZgNIAHgDIAUAGQBjAbAcAVQAaAVAQAzIAAACIgCABQgSAMgEACQgVAKgrAAQgpAAg6gJgACKBzQgXgCgXgFIgwgJIgCAAIgMgbQgTgsgdgYQgVgPgsgIQgzgIgOgHIAAAAQAHgGAEgHQAJgNADgJQABgDAHgGQANgLAeghQAlgEAngBQBSgCAUASIAbAYIgaAaQgyAyAAAKQAAAUAPAAQAIAAABgDIABgCQAAgPAygxIAUgTIARASQAmAtgHArIgLBBQgHANgdAAIgNAAg");
	this.shape_4.setTransform(19.9,13.6,2,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AjFBcQgSgZgGgcIAAgDQgGgYAUgRIADgCIACAEQAMAMARgDQAIAAAJgDQAdgGAcAHQAPAEAPAIIANAKQAUAOAKAGIAGAEIAMAEQAJADAKgCIACANIgNAPIgDADQgOALgcAKQgrAOhJAJQgWgTgOgTgABkBTIgEgZQgCgKgHgFQgHgEgHAEIgCABIgOgJQAJgKAGgPQAIgRAKgdIAOgYQAKgNAMgHIAJgGIAcgKIANAJQAuAnABAuIAAA/QgGASgoADQgXACgYAAIgegBgAAEgYIACADIgFAFIgQgRIgFgCIgOgEIgCgBIAAAAQgcgLgbgCIgNAAQAGgMABgHQABgDAGgHQAIgIAPgSIAPgUIC8AAIAEACIgMAHQgZARgZAfIgCACIgBACIglA1IgGAJQgLgLgRgIg");
	this.shape_5.setTransform(19,16.8,2,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AjCB7QgSgWgLgVQgMgWgDgXIAAgGIgBgFIAAgDQgBgXAVgPIAEgCIACAEQAKAPARAAQAIAAAJAAQATgBAQACIABAKQADAIAHADQAGgCAEgGIACgCIAPAHIAHAFIgegBIABAAIACAAQARAEAVAEIAEAGQAPAPAJAHIACADIAFADIABABIALAHQALAEAJgBIAAAOIgRAMIgDACQgHAGgMACQgMAEgOADQgZADgjACIg6gBgAByBPIgDgGQgDgEgFgDQgIgDgGAFIgCADIgPgIQAIgMADgPQAFgUAEgdIADgIIAHgRQAHgNAJgJIACgCIACgCIAGgFIAagPIAOAHQAzAeAJAtIAMA/QgCASgoAKQgWAGgXAEIgeAEIgJgYgAgPAVIADABIgEAHIgVgNIgFgCIgPgCIgCgBIAAAAQgZgFgZABIAAgEQAAgNgNgEIAEgGQAGgIAMgVIAHgMIAGgKICUgYIAGgIIADgCIAFgFIAHgEQAPgJAPAAIgLAHIgNAKIgCABIgIAHIAUgDIAEACQgPACgOALQgGAFgEAGIgDAEQgLAOAAAXIgBACIgBABIgCAEIgaA1QgDAFgBAFQgNgKgRgFg");
	this.shape_6.setTransform(21.8,16.5,2,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AAJAvQgDAAgRgNQgYgOgMgFQgJgDgJgRIgGgSQABhOCNB7QAAAJgFAKQgKAMgNAAQgcgGgGAAg");
	this.shape_7.setTransform(-1,21.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AjCBwQgSgWgLgVQgMgWgDgXIAAgGIgBgFIAAgDQgBgXAVgPIAEgCIACAEQAKARARgBQAIABAJgBQARgCAQADQAIABAMAIIAFABIAPAHIAHAFIgGAAIAGAFIALACIAEAGQAPAPAJAHIACADIAFADIABABIALAHQALAEAJgBIAAAOIgRAMIgDACQgHAGgMACQgMAEgOADQgZADgjACIg6gBgAByBEIgDgGQgDgEgFgDQgIgDgGAFIgCADIgPgIQAIgMADgPQAFgUAEgdIADgIIAHgRQAHgNAJgJIACgCIACgCIAGgFIAagPIAOAHQAzAeAJAtIAMA/QgCASgoAKQgWAGgXAEIgeAEIgJgYgAgPAKIADABIgEAHIgVgNIgFgCIgPgCIgCgBIAAAAQgZgDgZABIAAgEQAAgPgNgEIAEgGQAGgIAMgVIAHgMIAGgKICOgXIAEAAIAVgFIgCABIAUgDIAEACQgPACgOALQgGAFgEAGIgDAEQgLAOAAAXIgBACIgBABIgCAEIgaA1QgDAFgBAFQgNgKgRgFg");
	this.shape_8.setTransform(21.8,17.6,2,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AiTBjIgmgBQgMgQgIgOIgGgPQgDgIgBgJIgBgEIAAgDIAAgCQgBgSAPgJIACgBIACABIABACQAGAKAMgBQAFABAHgBIAFAAQAKgBAJACIAAADIAAAEQADAGAFACQAEgBADgEIABgCIAKAFIAGAEIgUgBIAAAAIAbAGIADADIAIAIIAJAIIACACIADACIABABIAFADIADACQAHACAHAAIAAAJIgMAJIgCACQgGADgIACIgSAFQgSACgYACIgDAAgACBBEIgCgEIgGgFQgFgCgEAEIgBABIgLgFQAFgIACgLQAEgOACgWIADgDIADgIIABgEQAFgKAHgGIABgBIACgBIAEgEIASgKIAKAFQAkAUAGAeIAIAtQgBANgcAHIggAHIgVADIgGgRgAgRABQgIgDgLgDIADABIgDAEIgPgJIgDgBIgLgBIgBgBQgSgEgRABIAAgDQAAgKgJgDIACgEIANgUIAFgJIAEgHIBngRIAEgFIACgCIAEgDIAJACIgBABIgGAGIAEADIgIAFIgHAHIgCADQgHAKAAAQIgBABIgBABIgBADIgCADIgIAWIgEAHIgDAGIgBACIgBADIgEgCg");
	this.shape_9.setTransform(21.4,18.7,2,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgHAAIAMgBIADABIAAAAQgGAAgEACIgFgCg");
	this.shape_10.setTransform(28.9,0.6,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).wait(1));

	// Layer 4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AijB3Qglg0ACgzQABgZAZgNIATgJQALgHAFgJQAJgNADgJQABgDAHgGQANgLAeghQAlgEAngBQBSgCAUASIAdAaQAVASANAQQAmAtgHArIgLBBQgIAQgpgDQgXgCgXgFIgwgJQgMgCgKAHQgSAMgEACQgVAKgrAAQgpAAg6gJg");
	this.shape_11.setTransform(19.9,13.6,2.11,2.169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[]},2).to({state:[]},2).wait(6));

	// Layer 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgTAPIAngd");
	this.shape_12.setTransform(41,11,2,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgagGIA1AN");
	this.shape_13.setTransform(41,10.9,2,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgBgOQACAkABgJ");
	this.shape_14.setTransform(40.8,10.2,2,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgPgjIgPBHIA9g6g");
	this.shape_15.setTransform(40.3,22.5,2,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgeAkIA9g6IgugNg");
	this.shape_16.setTransform(4.9,18.9,2,2,123);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAfgWIgugNIgPBHg");
	this.shape_17.setTransform(15.6,12.5,2,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CCCCCC").ss(3,1,1).p("ABugyQAuAVAAAdQAAAeguAVQgtAVhBAAQhAAAgugVQgtgVAAgeQAAgdAtgVQAugVBAAAQBBAAAtAVg");
	this.shape_18.setTransform(20.9,17.7,2,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990033").s().p("AhuAzQgtgVAAgeQAAgdAtgVQAvgVA/AAQBAAAAuAVQAuAVAAAdQAAAeguAVQguAVhAAAQg/AAgvgVg");
	this.shape_19.setTransform(20.9,17.7,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-14.3,84.3,65.3);


(lib.jewel = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgTAPIAngd");
	this.shape.setTransform(30.3,4.7,1.18,1.18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgagGIA1AN");
	this.shape_1.setTransform(30.3,4.6,1.18,1.18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgBgOQACAkABgJ");
	this.shape_2.setTransform(30.2,4.2,1.18,1.18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgPgjIgPBHIA9g6g");
	this.shape_3.setTransform(29.9,11.4,1.18,1.18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgeAkIA9g6IgugNg");
	this.shape_4.setTransform(9,9.4,1.18,1.18,123);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAfgWIgugNIgPBHg");
	this.shape_5.setTransform(15.3,5.5,1.18,1.18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CCCCCC").ss(3,1,1).p("ABugyQAuAVAAAdQAAAeguAVQgtAVhBAAQhAAAgugVQgtgVAAgeQAAgdAtgVQAugVBAAAQBBAAAtAVg");
	this.shape_6.setTransform(18.5,8.6,1.18,1.18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#990033").s().p("AhuAzQgtgVAAgeQAAgdAtgVQAvgVA/AAQBAAAAuAVQAuAVAAAdQAAAeguAVQguAVhAAAQg/AAgvgVg");
	this.shape_7.setTransform(18.5,8.6,1.18,1.18);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.9,17.2);


(lib.genie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(7).call(this.frame_16).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,6,49,0.169)").s().p("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");
	this.shape.setTransform(89.4,122.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,4,51,0.459)").s().p("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");
	this.shape_1.setTransform(82.2,68.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990433").s().p("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");
	this.shape_2.setTransform(83.5,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990631").s().p("AgdgFIA7AAQgNAMgOgBQgUABgMgMg");
	this.shape_3.setTransform(47.9,208.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990631").s().p("EAGfAloQAthLA+gJQgSAUgUAUQgqArgrAgQAJgSAHgNgEAAtAidQgjiag3htQgIgPg6iAQgohbggglQhBg8hLghQAGgIAAgKQAAgMgIgQQgMgZgXAAQgSAAglAHQggAGgTAGIgBAAQithUisAYQhTAMgxAlQgWAQgMATQg4ADhCABQgVgMgZhBQgVg5AAgSQAAjEBUjtQAXhEA2iSQAviIAeh5QARhHAhijQAniPBGhTQBShfBDghQBdgvCegIIAAAHQAAgNB+B0QB/B1ACAAQAQAAANgQQANgPAAgRQAAgigugzQgrgxg8gnIgOgJQBugHA0g3QAPgPALgUQAIgRAFgRIgEAAQAMgjgGgoIgBgDQAAgQgCgPQBRAnBWgXQBTgWCRhrIA9guIATgQIADAQQATBtBWBUIADADQAkAjA2AlIAbATIBRAyIA2AhQCwBsBMBZQByCKAADHQAAC/haDXQglBUgTAtIgJgLQhjhjibAGQiOAGhvBVIAPgfQAag0BFhhQBGhjAZgxQArhUAAhJQAAhQg5A5QgxAyhLCGQhHCAg1CAQg4CKAAA6IABAmQgcgRgdgPQgagNgwgnQgvgmgngTQiChCkXgGQkPAZiVByQh6BcAABqQAAALAEARQALAjAcAAQAtAAAThAIAQg2QALgeARgPQA3gwBfgiQCNgxDCAAQDDAADfCmQA1AnBVBEQAWBTAmAAQAPAAALgLQBRBMByAeQhfCQh4CbIg3BHQjbitgcgVQnNlakVAAQiSAAgoATQgQAIgEAMQgBAFAAATQAAAOAJATQAOAdAeAAQELAAD2BqQC6BQDACYQBPA+BvBfQgzBHg6BVQiqD6gXBeQgIhBgQhFgApfFGQg3AShFBnQhNBvgwCUQg4CsAACuQAJBeATBbIAAABQgcACggAKQg+ATgoAoQgvAvAAA8QAAAOAHAOQAMAZAdAAQAoAAAWgvIAPgnQAJgWAJgKQA5gDAkgJQAcBQAiAAQAYAAALgZQAHgPAAgNQAAgJglh8Qglh8AAg5QAAjVCKjhQAYgnBHhmQArg+AAgSQAAhHglAAQgJAAgKAEgAAGDtQgUAJggA/QggA+gXBMQgZBSAAA4QgCAUAFASQAJAiAfAAQAKAAA1isQAziqAAgWQAAg5gSAAIgHABgAEShtQgTAUAAAcQAAAWADAIQAIAbAfAAQAQAAANgMIAVgTIENAAQAwARAXgZQAOgQAAgVQAAgSgSgTQgWgXgjgBIkeAAQgtAJgVAXgAHhfMQAhgdAcAAIAGAAQAUAPAQAWQgWAIgWAKQgbgTgggHgAKKd3QAkglAjg9QAuhQAqhiIAuhCIgCAJQgUBjgRA0Qg4C2hsAAIgCAAgALqRlIgEgDQBoAAADADQgZAKgaAAQgaAAgagKgAhoojIgGgHIBZAAQA2gKApgbQAogZAAgXQAAgTgEgGQgFgGAAgCQi9ARg4AQQgUAGgMAHQgOgRgOgUQhpiVgkiHQgEgMABgaQAAgfAGgyQAqgBAfgbQAfgbAAgiQAAghgZgLQgWgKgiAIIgHACQALhrgQg5QgGgXgFgNQALgGALgIIAEAGIAvBNQBFB6AABoQAAAogXBPIgCAIQgZBVAAAgQgDAXADATQAGAnAfAAQA4AAAtgZQAlgVAAgOQAAgTgFgGQgFgGAAgCQgRgEgjgDIgggDIAahnIAFgWQANg5AAgxQAAhFghhcQgehTgrhDQgUgegRgTQAOgZAMggQAPgrAHgsIABgJQBKAeBaASQCJAcDZA5IgEAFQgnA0AVBOQAAALAMATQAYAnAsgLQALgDAHgRIAJgXQgWggAEgtQADglAWgNIAhAJIAOgEQAcASAiA1QAtBFAHAdQALApgEA5QAPAWAAA0IgRBGIgTBFQgRA+gRAsQgOAngOAZIgCAIQgPAygPBCIgIAqIgCABQgzAOhlBNIgMAKgAA61CQgqALgdAeQghAiAAAnQAAAaAGAMQAQAcAzAAQApAAAxgmQAvglAAgbQAAgzghgUQgSgLgYAAQgOAAgRAEgAMO0kQAMicgviyQhCj0i1hpQAAgRgCgRQgCgWgXhTQggh6gUgtIAugFQABAJADAKQAOA1BNBxQBWB/BFAtQAagMAAgcQAAgJgIgcQgQg+gzhMQguhDg0g0IgfgbIApgEIAfAgQBEBLAsBuQATAuAYBbQAjCEAQBRQAZB7ADBoQAFDLhQCgIgPAdQAXiIAEgwgAJ90AQgcgHgGgbQgFgSAFgWQAAgPACgOQgdg/gtgpQgsgmgwgKQg3gwibgdIghgGQgLgcgTgnQgohUgshDQhAhhgyggIAIgCQEUhKC3BhQADAGAHAFIAkASIAAgBQAPAKAOAMQB4BkAsCiQAZBfADBuQANAXAAAmQAAAugGAPQgEALgJAHQgOAKgXAAQgMAAgKgDgAnj5HIgPgWIAKAAQAFgIAQgrQAOgeAUgcIAWALQAEgKACgbQAZAxBJAsQgOAUgRAdQgcA0gdBIQgngygxg7gABH5kQhdgNgigIQgYgGhHgtIiChSQgmgWgcgLQBYhDCNgwQAAADCTDHIBPBpIglgFgAo27uQgjiCB6iuQAgguAjgnQhYCbAcC4Qg8A3gPAwQgMgbgHgagEgF/ggAQBDkLFOhaQEEhGCxBMQh0AeifBOQimBThwBWQh4BaAJAtQhoAshZA/QAChkARhEgEAAGgg1QDEiPDBg3IABAoQADBGANBrIAGAsQi3hDjxA2QgmAJgkAKQArglArggg");
	this.shape_4.setTransform(79.7,-63.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("EgJrAicIAAhEIAAgSIBwAAQgcCWgdAAQgvAAgIhAgAJr1GIACAHQAAAIgEALIACgagABz92QgEgFgCgKIABABQAPAbBGAAIAXgBQgSAGgQABIgLAAQgsAAgOgTgACL/jQAWgVAdgLQgaAPgVAVQgjAjAAAaIgCAFQAAgoAhgegAFN/bIABAJQAAANgKAPQAHgRACgUgAhj/CQgHgKgMgMIgGgHIAMAJQALALAHANIgFgEgEgDbgjbIACACIgJAIIAHgKg");
	this.shape_5.setTransform(66.7,-86.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990631").s().p("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");
	this.shape_6.setTransform(83.7,-119.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF99").s().p("AgCgpIAHgDIgCABQAKAUAAALQAAAYgJAQQgFAMgLAFQAHgsADgqg");
	this.shape_7.setTransform(42.4,-388.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#990631").s().p("EABgAyKIgDgzQAAkGgDgxQgKjOgshKQglhWhWhRQgiggghgZQg4hFhRhUQhEhGhqgXQg9gOh2gBQhjgBgmgMIAEAQQg4gGgxAFQgNhOgWhVIgjh4IAAAAIBOgNIB7gYQGGABEYA2QBKAPBVAWQA/ARAOAAQAZAAAOgWQALgSAAgTQAAgxjRgnQi+gjkSgPQkTgNi9ARQiAALgyAXQlNgciShSQhQgsgYg+QgMgeAAg8QAAiRChmeIB0klQA4iSAIg0QA+l8BxjaQBii+CRhRQByg/CugGQBlgEDPAKQA3AAA8gbIAXABQBcABAuhGQAfguAAgvQAAgbgDgVIAMgEQAogGAhgSIALgGQANgJAIgIIBtg1QD6h8AAghQAAgdgbgDQgPgBgZAHQgwANhrA5IizBeQheAwgoAAIgXgBIgJgBIgHABQhCgFglgUQgVgNgLgFIgBgBQgWgZgUgsQgZg6gehfQgEgNg5hnQg2hpAAgcQAAgQABgLQADhDAJgyQAHggAYhNQAHgYAGgbQgCgHAAgHQAAgSALgMIAHgwIAKANQAJAKALAHIAAAAQAEAJAIAGQATAQAxAAQAXAAAPgIIAEAAQAiAAAWgbIAHgKQgPBpgkBwIgrB/QgTA7AAAZQAABhDOAAQAXAAAPgMQASgQAAgfQAAgjgjgLQhVgbgRgIQBkknAAjwIgGhfIgBgHQAHgPAAgTQAAgfglgwQgjgtgvgiIgGgFIAMgJQAAgTgKgOIAUgVQA9hBAvg/IAZgjQAoAkApAkQFJEWCXAAQAYAAARgQQAQgPAAgRQAAggimhpQADgKAAgLQAAgGg0h/Qg/iXg1htQgeg7gYgqQBBgGBKAAQFjAACZEJQAAAKADAKQAGASAPAIQAhBFARBSQAOBDAAAzQAAA9gfDEIgHAtQgUARgRAqQgMAegaB3QgKAthBCBIgtBZQgeAXAAA/QAAAFAHAMIgHAbQglCTAABjQAAC6BGCNQAoBPA+BBQB7CBD/BpQBFAcCFAyQBxAsA/AjQCsBhAACPQAACNiFF8QhoEmhJCbIhKChQgZAigVAyQgjBWgOBwQgLDaiDCRQg9BEhNAlQhJAkhHAAIgmgBQgHCAgUD6QgUECAABBIAAADQg7A4gjAmQiCCWhqB0QjODgguAAQgWAAgSgOgAwTS1QAaAtBVAUQA8APDoASQDeARB9AjQC+A2BiB3QCECkBYBZIAaAZQAUgYAogIQAggGAoADIgJgJQhIgCgThAQgJgbADgeIiFh/QgfgkglgjQhFhEhXg0QkOimlyAAQhMAAhLgQIhEgTIASgnQAfg9AwgwQCeigEsAAQDYAAH/C5QDjBRDEBSIAMgCQAqgEAogBQAGgOAAgSIgshVQgshWAAg2QAAhiA5hdQAgg0BdhnQBZhjAjg+QA5hhAAhsQAAgugQgKQgNgKgXATQgxApgYBXQgQA3h6CXQjID2AACnQAAA6AJAzQhcgmhMgdQiOg4h9gpQl6h7kAgBQkdABi+CJQhHA0gqA8QgPAVgIASQgnh7AAh7QAAjUC1jhQAtg3BQhcQA4hGAAgoQAAgyhIArQhJAshWBmQhiB2g9CFQhICgAACTQAEB6AVB3QAMBKARAzIgNgBQgzgBhOAvQhKArg3A8Qg6BAAAAsQgCARAFAOQAKAbAlAAQAngBAkg6IAaguQAOgZAIgIQA/g5BUgHQAggDAIgGQAJgFADgNIACADgAOGYJQgPAggHAIQguA3i7AFQA7AeAKAKIBUAAQAxgUAkg7QAVghAag4QgUAGgKAWgABcALQgiAdg0BjQgvBcglBhQgnBnAAAoQgCAVAFARQAKAiAlAAQARAABbjxQBajpAAgPQAAg1gTAAQgIAAgMAKgAoMnnIgBAGQAAAhANAQQALANAcALQBiAoAwAlQAJAHBVBVQBHBIAPAAQAdAAAOgTQAIgLACgNIABgJQAAgahEhGQhChFhSg8QhbhDg5gPQgPgEgLAAQgnAAgCArgAMOm4QgaABAAADQkIAEhUAeQgdAKgIAOQgDAGAAAOQgBAPAIANQAOAZAqAAQGuAABrgZQArgKAHgRIAAggQAAgngygPQiNABgtACgAhgvOQALABAGgFIAIgDQAqgCAMgEQAXgJAAgrQAAgSgrgTQgsgRg3gIIgfgCQgsgcgOATQhkghAABHQAAAbA5AiQBCAnBUAAIAOAAIAIAAgAKc+mQANAqAAAXQAAAkgyByQgyBzAAAkQAAAYADAIQAMAeApAAQAmAAA4ipQAyiWAAgpQAAh+g/g7Qg2gyhTALQhPAJg7A4Qg+A7AABLQgDATAGAWQANAsAuAAQAPAAAQgMQATgQAAgWIgEgXQgDgZAHgVQAWhBBwAAQAYAAARA4gACP99QgzAJgjAfQgnAjAAAxQAAAcAHAKQAQAZA6AAQAyAAA8goQA7gqAAghQAAgtgngTQgXgMgeAAQgQAAgRAEgAO57sQAngYA6g4IAsgsQghCLiBCMIAVibgAja9WQgJgKgLgHIgGAEQgVgPgcgEQgYgDgSAGIgMgEIgMgBQgXAFgUARIgKAJIgEgDQALgZAKggQgEgKAAgJQAAgfAUgOIAIgvIACgIQALgFAHgMQAJgQAAgaQAAgLgLgUIACgBQAYgKAZgOIBABHIAgAiIABAIQANBsAAAQQAAAvgEAwQgHgTgPgQgEAPugi2QAAjKhViXQAMguAKhDQAZifAAg4IgBgZQAvBOAWBiQADAMARB2QAMBSAUERQAODHADA+QgkABhFA5IgbAYQAhkOAAgcgEgGGgkMQgigogsgSIgOgGQgNgmgFgmIBLg6QB3haAqgWIAMgJQA2A3A8A3QgzAghOBLQg1Azg7BBIgLgOgEABHgmtQgegWhGhJQhThTghgeIgWgRQAagSAbgNQBLgnBngTQAXA6BeDHQAwBmAjBBQheg4hjg2gEgHHgqyQAth7BpiAIAHgIQAGABAGADQAHAFAGAIQgEAbgFAXQgPA6g8CLIgjBTQggAmgaAAQgOAAgMgDIgIAHQAah5ADgJgEADOgtfQgNgCgOAAICuhcIE7ilQB9AsBWBRQgLAsAABjQAAAbgZCOIgGAiQjMjdmrAJgEgD4grtQAWhMAShZQAPhHAAgIIgCgOQBSg9BfgoQCchECsAAQCAAABqAVQhcAfh/A9QiaBKh+BOQh9BPAAAWIABAIQhTAkhhA4IALgng");
	this.shape_8.setTransform(78.2,-177.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#990631").s().p("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");
	this.shape_9.setTransform(100.8,-47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},7).wait(1));

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#990631").s().p("Aj4JKQgNgYAAghQAAgYArg1QA8hGAjgqQCHirAAiIQAAgSgdgyQgshFgZgrQhkirAAh0QAAhjArg1QAlgtA5gEQAygDArAcQArAdAAApQAAAfgZAiQgZAjAAAfQAAArAjAxIBNBZQBxCBAACKQAAAiggBcQgjBpgzBhQiPENiWAAQhIAAgbgyg");
	this.shape_10.setTransform(103.8,391.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#990631").s().p("AjPPHQgGgRAAgsQAAgOArhBQA8hYAig1IAOgVQAEgjAXhPQAchfAAgfQAAgfgciFIgNg9Qg9hPg2iAQgbhCgXhJQgDgigWhRQgPg1gGghQAhgkAThjQAOhKAEhPQAfhGAthWIA/h3QAbgKAVANIAGAGQBBhpAogNQAzgRAACNQAAANg8CYQg7CZAABCQAAAvATA1IAAATQAAgHAoBTQA6B5AoBLIAZAuIgEgDQApB9AACFIgBAaIABAIQAAAIgCAJIgEAbQAGAzAAA7QAAAqgMBSQgRB6ghBkQhmEzjRAAQhJAAgVg3g");
	this.shape_11.setTransform(104,355.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#990631").s().p("Ai6RkQgMgYAAghQAshkArh9QBFjEAPh3Ih9iZQjdkTgBgHQAAhzBXAPQBKAMBzBqIAPAPQgZg/gphSQgzhpgZhDQh8hchEkjQgfiDgQieIgKh+QAAiBAjgnQAegiAsAuQAsAsAiBeQAjBnADBvQAAAkAPAvQAMgkAPgmQA8iTBWhxQBUhvA8gJQBDgKAACAQAABOgmCTQgmCTAACTQABCXAiCTQARBFAiBlQgOg2gLg+QgLhHABAHQAAg3AZgxQAYgwAigNQAlgPAdAkQAjArAQBoQAKBJBHCTQBFCLAAAOQAAAsgZAgQgcAkgvAAQhYAAhAiAQAdBVAMAzQAkCKgBCHQABArgaBiQgeBzgtBmQh9EeigAAQhJAAgbgxg");
	this.shape_12.setTransform(102.5,327.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990631").s().p("AAGTVQgGgTAAgvQAAgMAnhIQBEh6AVgoQBPiaAehuQgXAKgbAAQhTAAg9iQIgMgeQg9gphMhtQhvi1gTgOQhWhDhZg6Ih5hIQgyghgTgWQgWgbgBgmQAAg4BCg5QA+g2BGgPQBMgRAYAvQAdA3g6CAQClgSDQEHQBJBeA5BmIAPAaQAvAeAjAxQgKg8gTg3QgQgphIiRQg9h1gchtQgIgfgGgjQgMAEgNAAQhxAAhDiQIgIgTQhaghgMh7QgFg2ALhSQALhdgBgJQAAgeANhCQANhCAAgcQhfgEgihEQgWgpAAhLQAAg2Avg3QAvg3A8gPQBEgQAyAxQA7A5ATCLQAABLgMCiQgNCjAAAWQAAAfAmBMIAUAqIAQAUIAAgQQAAiVBCi6QA7ilBXiEQBWiCA8gUQBDgVAACDQAAAUgjBKIhOCiQhwD6AACjQgBCsAsCZQAdBoBBCLQBMCjATA0QAqB5AAB0QABAhgWBtQgaCNgnB4Qh3FripAAQhKAAgUg7gAE4hhQgihugeiBQgXhmAAgLQgBiCA7hqQA0heBNgqQBMgqA1AiQA7AkgBBxQABBFhYBKIg8AyQgcAaABASQAABKBkDRQBjDOAAA+QABA7gUAjQgZAsg3AAQhpAAhslXg");
	this.shape_13.setTransform(82.5,310.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#990631").s().p("ABYWyQgNgYgBghQABgQAbg6QAvhkANgfQAWg1ARgzQgWAPgdAAQgrAAgshCQgdgsgxhsQg5h8gZgsQgxhWgvgcQiMhXiXhHQiQhBgzgZQhQgngeglQgjgsAAhMQAAh9BDhBQA5g5BZABQBUABA+AzQBCAzAABOQAAA6gGARQgVAyhVAcQFuAfDcEaQBWBrAvB8QAZBBAKA3QAHgxAAguQAAgqhknMIgEgRQAEgOAAgLQAAgYgyiFQgziDAAg5IACiIIAEAQIgDgdIAAgZIAAhlQANjLBMjAQBzkpDniYQg/g+AAhYQAAhNA/gwQA6gtBPACQBTACA3A1QA/A8AABqQgBBEhZBnQg2A9iQCTQiDCQhCCFQhaCyAADGQAAAeAEAqQAPh3BChTQBMhcBxgUQBtgUBQA5QBXA8AAB1QAAAigSAuQgUA3gkApQhhBtiagtQAVBWBGD0QA7DggBBuIAEA0QACAqgFAcQgPBXhWAAQgcAAjEruQAUBeAeB0QAxDJATBbQAgCaAABhQAAAxgLBbQgOB8gZBnQhKExiLAAQhJAAgagxgAIAkQQAYAMARAAQASAAAJgMQgEgQgbAAQgbAAgKAQgAj4ABQgPg4gGhFQgFgqAAgWQAAguAQhzQAPhwAUhfIAAgHQi4gIgyheQgRgegBgoIABgrQABiNBJgxQBDgsBhAqQBhAqBDBmQBIBwAACIQAAAfgYCOQgZCPAAAfQAAAfAZBqQAYBpAAAfQAAA4gKAcQgWA4hCAAQhpAAgti1g");
	this.shape_14.setTransform(80,257);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#990631").s().p("ADnaSQgHgTABgvQgBgiA/iZIAIgTQgcAfg3AAQhbAAgQhFQgGgVADgcIADgaQABkZi/iJQh+hakphAQi1gngtgMQh6gghLgoQjAhnAAjgQAAikBdhmQBThYB8gOQB3gPBXA+QBdBCAAB8QABBWggBDQg4B3iKAAQgmAAgPgJQgPgNgTgKIgNhLQAPgaAsgzQAyg5AKgQQgIgcgIgJQgSgWgpAAQhGAAgfBXQgRAxAAAtQAABsBnAqQA3AXDLAbQDQAdB8AvQDCBKCBCZQAfAlBhDSQBoDcAAAxQAAAUgDAQQAbhOAAgkQAAhPgehxQgsiOgahYQhjlhgBmQQgEjTADhgQAIifAvh3QA7iSCKiSQCYihEQi8IAagyQioAXhFiXQgnhTAAhjQABhvBVg2QBPgxBvASQBwASBMBOQBWBXABCBQAADhh6CRQgtA4hPA9IiOBrQi3CNhTCaQh6DgAAFlQAADMAgCwQAVB4AwCeQA3C3ANA7QAgCJAACKQAAANgNBIQgQBhgWBRQhHEAhnAAQhKAAgUg7gAMH3zIAUAjQAQAVAUAAQAAgVAfgQIASgNQgIgIgxgCIgTAAQgeAAABAEgAHCHGQggiygajTIgSizQABjtBpiIQBch2CMgJQCGgIBiBdQBqBjgBCgQABAcgMAzQgUBRglA6Qh4CxkGhwQgPBzAbB2QATBSA0B5QBCCYANAqQAmBvAABgQAABEgMAjQgXA/hBAAQiQAAhpoygALfkfQAhBJgsApQAtAAAqgjQAnghAAgaQgBgbg3gmQg2glgvgKQAAAUAqBIgAjGDmQgPhCgHhRIgDhGQgBgdAZjMQAZjLAAgfQAAgcgMhJQgNhJAAgzQgEAAgIgLQgHgJgFgLQAHBugWAzQgkBZh9AAQi5AAhAi1QgTg4gFhBIgBgwQAAjHBthIQBkhBCMBBQCQBBBhCgQBrC0AADkQAAAggYDGQgXDGAAAdQAAAkAvCJIAzCMQAABAglAfQgdAYgtAAQhyAAgwjTgAmXuVQgfABgRAdQgTAdABAwQgBAoACAEQACAEAJAIIAGAMQAGgHADgTQAEgWAEgJQAQgkBKAAQAmAAAhAaQAQANANARQhWiKhHAAIgCAAg");
	this.shape_15.setTransform(72.5,226.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990631").s().p("AEydvQgGgWgBgbIABgbQgBgGADgKQg1gXABhJQABghAMgqQAMgjAAgDQAAgpgehkQgihwgyhuQiHkoiVg7IpygNQkigmiYjnQg3hUgdhjQgYhPAAg7QABjMBxiPQBliACUglQCSgkBnBJQByBQAACwIADAgQACAjgFAbQgQBXhVAAQg+AAgWgsQgNgagEhGQgDhHgNgaQgVgqg+AAQhzAAhCCTQghBMgLBRQAAAmAVA9QAZBGApA8QBvCkCrgCIKQAMQExA7CSF6QAXA7ASBAQgHhFgMhMQgUh6gzjzQg0j1gUh3QgfjHgBiYQAAkoCJj9QBfiwDOjYIChimQBYhdA0hFQCJi3AAiyQgBgtgGgSQgXg3hTggIhSAgQgCgGgEABQgGADAAAnQAAAgAdAdQAbAeABAfQgBA5grAbQgfATgmAAQhcAAguh8QgNglgHgrIgFgYQABh6BhhLQBahFB9AEQCBAEBWBTQBiBfAACnQgBDoiIDLQg2BRhXBdQgmAph6B7QjVDVhYCUQhQCHghCXQAghWA1hRQB2i3CthUQCthTB4BBQCEBJAADnQAABwgqByQhIC/igAAQhKAAgUg2QgHgPABgtQAAgmAbgoQAPgXAtgvQArguARgbQAcgsgBgsQAAgngsgkQguglg4AAQiMAAhfEHQgwCFgVCIQAABhA0BvQAeBCBRCEQBRCCAfBFQAyByAABkQABBbgGAWQgSBKhNAAQh7AAgBhgQAAgeANgmQAMghAAgDQAAhXg0hXQgNgYhiiEQg9hSgjhIQAWB0AxDcQA3D8AXB+QAiDMABCNQAACCgrCZQhFDyiKAAQhKAAgUhEgAiVHAQgThOgFheIgBhTQAAhtAzkHQAxkJAAhmQABighMiCQh3jOkMAAQhnAAgcBfQgNAwAGA1QAAA6AgAfQAUAUAxATQAzAUARAPQAgAbAAAzQAAAjgmApQguAxhDAAQi6AAgzjHQgPg+AAhGIACgvQABj6CchjQCNhZDLA/QDLBACMCwQCbDEgBD7QAACFgxD0QgzDyAAB7QABBsBXCDIA8BYQAcArAAAYQAAAtggAeQghAfgwAAQiwAAg8j4g");
	this.shape_16.setTransform(62.5,215.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#990631").s().p("AFcd4QhCifg6h2QjMmjiohgQgZgOimgdQj1gqhjgVQnqhnhdiUQhuiwgQhDQgHgigBgzQAChIAAg1QAAjHCFh+QB2hxCvgVQCqgUB5BPQCGBVAACiQAAAkgeAeQggAfgmAAQgmAAggghIg5hJQhThqiDAAQibAAgrB2QgVA8AKBBQAAEFEJCKQBlA0CrA1QBkAeDUA8QC+A4B7A3QChBKBtBfQArAmAkArQgXh6gPiyQgQixgHjWIgCi2QAAmRCUk+QBsjpDbjsQAmgqCIiKQBmhnAyg+QCUi1AAipQAAgTgLgqQgPg1gXgtQhGiDhwAAQhkAAgfA8QgTAoAEBeQAHBmgKAfQgRA8hNAAQhUAAgRh8QgFgnACgpQADgzAAAUQADjJB3hmQBthdCdAYQCeAZBsCCQB6CRAADYQAAD/iVC/Qg4BIhgBYQhzBkg7A2QhkBZhMBaQBBggBJgMQDBgfCOB6QCZCCAADuQAAB3g6B7QhYDBizAAQgnAAgOgIQgQgOgTgJIgMhLQAZilBfhFIA8gsQAZgaAAgpQABhMg/hTQhMhkhtAAQjYAAhEEaQgiCOAKCRQgBDLBxF6QBADYAOAzQAiCIABBPQgBAYgSAhQgdAxg0AAQh+AAhwo/QgPhPgPhVQAMClAfCpIAiDAQAPBlAABRIADA2QACAugFAgQgQBfhMAEQAqCLABCrIADAzQADAqgFAeQgOBchYAAQgBAAgzh4gAjGKgQgRhDgGhQIgChHQABiFAfiNQAVhfAviMQA3ijAPg1QAeh1AAhdQAAjRhRimQiSkslrAAQjOAAhtDJQg4BlgNBrQAAA6A+BeQA/BeAAAjQAAAkggAeQgfAfglAAQiSAAg3jHQgQg9gGhHIgCgwQAAlKDXivQBfhOB8ggQB6ggCDARQEaAkC/DdQDUD5AAGHQAABdgeCBQgTBLgzCiQgxCdgTBQQgdCEgBBiQAAB8A9BaIArA+QAUAggBAgQAAAkgeAeQggAfgmAAQiRAAg1jSg");
	this.shape_17.setTransform(67.4,194.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#990433").s().p("EAE+AhxQgygJgUgnIgDgGQgIgSgBgWIAAgVQAAg4AShJQgiikgchpQhHkGhziJQiYi1j8AAQgsAAidAZQicAYh1AAQl/AAi0kJQg5hUgchlQgThAAAgaQAAlwCpjNQCPirDlgaQDMgWCmBgQCqBhAACPQAAAagGAOIgLAcIADAHQgCAGgaAAQgZAAgggjQgqgwgdgcQg6g4hOgcQhqBDg2ApQjzC0gBCiQABDOCXBWQBuA+DhAKICzAEQBlACA2AIQAuAHAfANQFZAqDEESIgLhFQg4lDAAilQgBhjAFheQgLhQgBhgIAAhXQAAgXACgbQAJAFALACQATh0BMh9IgBgCQgFgNgBgPIABgQQAAiwCPi6QAxhAA9g8QBehtB6heQAZgTCXhrIAigYQB4hVA/g/QBeheAth6QgjiegYhbQguiqg9hYQhTh1h/AAQgaAAgVAEQhkBWAABHQABAVATBSQATBTABAUQgBAqgFAQQgJAbgbAAQgPAAgOgCQgGACgRAAQgRAAgPgSQg1gcgRhGQgKglACgwIADg1QAAgiANgnQABiHB+hYQAighAngaQDkiYEHCxQB4B5AzCLQApBxAACPQAAFVitDTQgfAlgoAnQgvAtg9AwIgSANIgMgIQg6A1hvBUQi6COg8AyQCYhkB2gSQBZgOAjApQC3AzBfCnQBYCZAADYIACA2QABAugHAlQgJAtgWAcQgFA7gNAqQg2C4ilAAQkKAAgBiTQAAgfAWgSQASgRAdAAQAVAABPAVQBPAUAVAAQAYAAAVhOQAQg8ABgWQgBiUhSh2QhsibjNAAQg6AAgxASQhIA5hDA7QgWAggRApQgvBtgWC4QAIB5ASCYQAMBjAwB3QAXA7BICWQA/CCAaBMQAmByABBhQAABOgFARQgQBChFAAQgiAAhrkSIhfjyQAPBDAXCVQAeC8gBAdIABBWQgBBZgLBHQgSBxgmA4QgHA1gKAwIgIAmQAEBLAABwQAAAsgdAhQgIAIgJAHQgcAVgpAAQgpAAghhCgAgZM8Qhxgbg4kEQgThbgLhtIgGheQABg9BXlaQBYldAAgFQAAiniikyIgKgSQglhFgxhTQhvhmiGAAQj4AAizEDIgJANQg2BSgmBeQghBRAAAcQAABVAtA2QA4BGB3AAQBNAAAgA4QARAeAAAfQAAApghAiQgzAzhrAAQj5AAhajjQgchHgKhWIgDhKQAAiZAth+QA7ilCHh3QBrhdCKgwQCJguCRAEQE7ALDTDfQBfBlA6CEQBVDCAAECQAABogaB1QgQBEgsCJQgqCFgQBJQgbB4AABsQAAAlA0DVIAzDQQAAAbgKAaQgDAIgQAgIADAGQgCAGgaAAQgzAAgng8g");
	this.shape_18.setTransform(61.7,191.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990433").s().p("EAD7AgZQABgXgBgbIgDg2QAAjOgCgZQgKh+g2hvQgbhTgWgrQgohMhWgjQgWgVhEgSQhGgThIgGQgagCgXABQgdgJgigJIgMgCQijghjAgTQhUgJiYgMQiAgMhLgNQjJgkhYhdQhDhIgYh9QgSgdgBgoQAChBAAg0QAAiHAehyQAniZBehyQCJimDcgyQDGgtCfBDQCiBDAACFQAAAWgUAcQgYAhgeAAQgRAAgUgTIglgpQg1g8gyAAQjtAAiPD5QgOAZgMAYQgyBogUBtQAABMAKAjQAUBFBBAvQCwCAIbAAQBRAABQAZIBIAAQDWAACuDtQAsAsAvA0QAlAqAbAhIgTiCQgpkkAAlwIAAhCQgMg3gKhBIgDgZQgEgeAAgIQAAiUA0i4QAuimBEiFIAVgnIAEgJQB1kADvjBIApgfICciaQBphoA6hHQCci9ADiuIgBgQIgDgUIgFgFIhWhtQg6hJgwgkQhCgxhHAAIhgBEQg9AsgnAYIAAABQgCASACAQQAAA/AQApQAvB6AJAZQgCAHgBAOQgEAMgaAAQhkAAhDiKQgXgvgPg3QgMgrAAgSQAAiFBDhaIAMgPQAghRBIgzQB1hUCnAZQCUAWBrBgQBdBAA0B7QA1CAAAClQAAEpihDHQg8BKhoBYQh9BkhAA3QhLA/g/BCQAkgDAmADQDLAPCgCbQCmCgAADHQAAC3gdBuQgQBAgaAuQhCB7h/AAQiVAAhYg+QgpgdgSggQgMgWAAgYQAAgaAFgFIAEAAIAIgKQAIgLAZAAQAZAABHAjQBIAjAJAAQAMAAAMgBQA/giAhhlQAdhYAAhwIgBgaQgchIglg+Qgkg9gmgqQg/gchcgJQgaADgeACQg7AChaBLQgxAogQALIgOAIQgYAtgPAvQgkBsAACpQAABGAIBUQAZEFBkGIQBDEDBCDNQAAAsgYAYQgZAZguAAQijAAhuoRIAOBqQApEnAACzQAAAPAEA0QACA1gFAlQgQBmhSAKQAKAsAIAsIACAqQABApgHAfQgUBihXAAIgQgBQgWAKgeAAQgkAAg0hWgAiqJWQgUhfgKhzIgFhEIgBgkQAAhKBDkfQBDkhAAihQAAjJgph/IgMAAQg8AAgigqIg3heQglg/gzgeQhIgrh6AAQiXAAhzAyQhJAugwBMQg9BfgKBtQAJAOAIAQIADAIQgKAdAAAmIAAAYQABAaAHAUQAKAeAWAQIAAACIAAAUQAdAQAkAQICfBFQBKAlAAAfQAAArgXAVIAqACQgSAIgWAFQgoAihGAAQh6AAhVgyQiRgshDh2QgyhYAAiFQAAgkARgwQgEgaAAgHQAAg7AahPQAlhtBJhVQA9hIBRgwQBahOBzgpQB4grCAAFQEWAKC6DPQDRDsAAGXQAAERhCD3QgQA7gdBkQgVBPAAA1IABAiQAHB3A0CmQAJAeAgBdQATA2AAALQAAAggYAeQghApg7AAQiDAAg+kqg");
	this.shape_19.setTransform(59.3,187.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990433").s().p("EAEuAgrQgVg0AChsQAHh/ACg8QADhngTgtQgohggYgyQgrhXg1g7QiOihksgrIqsgEQkWg7hmhuIgQgTQgigVgXgVQg5gzgGhJIABgrQgOgkgIgyQgLg5gChGIAAg8QAAhuBDhqQAYgoAeghIAbhCQAXgzBCg9QBBhABihBQC3h7D3BSQBaAdBEAwQA+ArAAAZQAAAegVAWQgXAXglAAQgOAAh6goIgegLQgTATgdAWQgwAkiEBgQkHDMAACjQAABNAMApQARA+AxAsQB3BrFxA0IFCADQHggCDsFGQAkAzAeA5QADgxAAgNQAAhLgPh3IgDgTQgjgvgKh3QgEg+AChLIAAgTQgikOgBjPQgFhSgChPQgBiWAchMIAIgRQAHg5AfhIQAmhWA0hAIAFgGQAIgXAIgNQBlijCnihQBehdC6igQCaiLBDhrQBLh2ANiFIgfg4QiAjqg3gzIiCAAQgaAJhyB8IgXAYQAUAnAUAuQA4B7AAAYQAAAVgMAVQgSAeggAAQgrgXgxgjQhghEgfg5QgLgVgFglQgKgMgHgRQgIgSgCgVIgBgNQAAhFAag5IgBgKQAAgwAigoQAYgdAhgRQAhg7BIgiQB8g8CoAoQCxApBzCBQCFCUAADVIgBAeIABAfQAABAgJAaQgFAPgJAMQg7DjjSDgQhdBjiPB3IiSB5QBDgcBEgFQCQgKCEBkQBtBTBLCHQAzBdAMBGQAQAnAAA9QAABQgYBXQgHAYgIAUQgEAzgKArQgyDdi4AAIgTgBIgmABQhvAAhfhXQgggdgYgiQgTgbAAgIQAAgfAUgSQAUgRAfAAQBKgBA9BKQAvABAlACQAdghAGgIQAmg2AWhPQgBgTABgVIACglQAAgZADgXQgOgmgNgzQgMgxgLg5Ig2gsQgfgXgRgWIgJgEIhVgqIiNAAQgXAXgZAGIgLAPQgiAvgTAhIggA9QgQAfhGBwQgqBAgVArIACANQAMDRAjDMQAFAXBnF+QBfFeABA4IACAvQACAggEATQgLA7hGAAQhrAAhLj+QgDCPgJB5QgTEFgtBqQANAiABAVQgBANgKApQgOAzgSAtQg5CDhJAAQhJAAgahEgAiHHMQgSh2gFiNIgCh6QAAhpAYhaQAKgqAphsQAkhfAPhNQAYhzAAiVQAAgrgihGQgnhQhBhFQiti4j8AAIgKAAQgcABgaAEQgUADgSAFQicBohBB+Qg0BkABCFQgBAfAKAWQAhAjA/A2IAiAfIARAEQBcAUAYAMIAIAEQA0ADAmAQQA2AXABAqQAAAlgYAOQgeAThTADQgVANgeAAQjMAAhshXQhTgdgthjQgTgtgKg1QgGghAAgPQAAljDTi7QAWgUAYgRQCXiFDsgFQDdgFC7BlQBVAtAwA5QAyA6ABA5QBwCYAADIQAAEnhLDSQgSA0giBXQgXBGAABDIAOCIQAOCCgDBDQgEBPBABbQAiAyALATQAUAoAAAoQAAAfgMAaQgWAug2AAQiaAAg4l2g");
	this.shape_20.setTransform(54.9,191.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#990433").s().p("EAEfAgpQgbg9gKh/QgIiWgGhGQgKh7gbg1QizlglJg2QhtgRidALIjiAQQoJAAipknQg6hkgPiGQgGguAAh/QAAkjCjitQCHiSDegrQDAglClAzQAaAJAWAJQAaACAUAMQAjAUAAAqQAAAtgiAbQgoAfhSAAQgMAAgJgCIgjAIQiIAhhfBOQg/A1gZA5QgmAmgQAjQg+CEgSAwIgLAhQAKBeBLBHQBPBLCnA5QBOAbCDAmICEgKQDjgQAVAAQH1AADLF9IgBg4QAAhngTh3QgIg1ghiiQg8koAAjqQAAjWBnjpQAii4BmiYQBtiiDjipQA8guB3hTIAAAAQAGgmAmg0QAQgVBUhdQBDhNAgg0QAthLAAhDQAAhlhAhiQhGhtiBgpIhJAyIiMBhQAUA6AzA7IA5BDQAaAhAAAWQAAAbgYATQgZAUgmAAQhzAAhDh4QhJgggZhyQgRhOAJhCQAAirCPhPQAOgLAPgKQBcg3B2AOQBHgIBTAVQCmAsBxCJQB/CYAADPQAACcgQBZQgTBrgnA1QgfA5gxA4QhFBPiIBuQhKA9itCCIAigGQDJgcChCCQA8AxAmA6QCFB5AAC9QAACMglCTQg1DahuAhQhBA8heAAQifAAhShWQg2g5AAgzQAAgkAVggQAXglAiAAQAjAAAnA0QAoAzAZAAQBfAAArhxQAOgkAHgrQAEgYAAgNQACh7gZhuIgNgSQhwiLjgAAQgfAAgkAbQgQAMgVAHQglAvgbBBIgJANQguBLgKArQgdB+gFBcQgBASAACzQAACcAcBdQA8DMAlC+QAhCmBnDhIANAcQgMBKg4AAQgeAAgyh/QhSgLhGiqQAQCmAACYQAABfgWBXQgjCJhMATQACBqgHBnIACAlQAAAlgGAcQgVBYhZAAQhJAAgjhQgAAuMPQgLAFgNAAIgIAAIgFAAIgCgBIgNgCQgJADgLAAQg/AAglj6QgMhNgIhdIgFhKIAAgLQgNgwAAgGQAAhlASgWIAtinQBkl2AAh1QAAhtgyh7QgyhoAAgQIAAgEQgjhDg6gzQiCh0jGACQh5AChkAqIhDBPQh7CYAABYQAACRDHBnQAmAUA8AbQAKgEAMAAIAGABIAJgCIAAADQAQADAMALQAUASAAAdQAAAUgNASQgOAVgaADIACAXQgcAIgqADQgvATgWAAQh1AAhTg4IgIAAQikAAg5irQgSg2gFhBIgCg5QAAiyBIh3QATggAXgaQAuhbBXhDQB+hfCdgMQAbgNAkgIQCRgjC7A+QDLBCCACRQCXCqAADnQAACHghDfQglD2g3A+QgFAtgBAoIgHAQQgbBFAABEQAAARAJBfQAMCAARBrQAbCzAiBUQgPAEgSAAQgkAAgfgWg");
	this.shape_21.setTransform(55.3,196);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#990433").s().p("AFQe9Qgtj7gliPQhEkDh4iIQieizkRAAQgVAAj5AeQj5AegVAAIgUgBIgPABQmLAAihlKQg0hpgViBQgMhHAAg0QAAhAAghKQAKhHAlhJQAqhSA+g5QCokGFcAAQCeAABIAVQBRAXAPA8IgJAhQgTAFglgGQgxgIgOAAQjLAAjGEXQhjCNg7CRQAAAiAYA1QAfBEA5A0QCjCVEwguICiAAIA2AXQAfgOAygDQB+gICtA8QCyA+B3BiQCIBwAAB1IAAAFQARAmAQAqQAmBiAfBrQAFg8ASh2IAOhfQgthqgrjoQgaiGgVihQgQh7AAgNQAAikASi4QAUjSAkiMQArikBZiZQBQiJBehZQBahVA8gCQA5g7B2hvQBthmAxg1QAiglAbgjQAAgVARg9QAShAAAgVQAAgVgNg/QgRhOgZhEQhKjJhqAAQkLAAgHCoIAAAPQASAbAiAkQBVBaBbALQAAACAFACQAEACAAAZQAAA4ghAYQghAZhTAAQiUAAhPiuQgZg3gOhCQgKgtAAgNQAAgoASgzQAWg+AogzQAXgcAagWQATgWAYgSQB+hiCtAiQBeASBOA1QCMBCBYCVQA0BYAaBqQASBHAAAkQAAC6iYDFQg5BKhiBmQh2B3g8A/IhEBHQBjAYBcAvQAtAXAdAVQAzAbAtAlQCnCKAADYQAAAmgQBJQgWBhgmBPQhvDtjEAAQidAAhZhtQgdgkgRgrQgNggAAgNQAAgVACgSQACgSAAgSIAKgKQAIgKAZAAQAYAAAMAaQAGASAOAuQAkBbCJAAIAOgBQAFgJAIgLIAyg9QBJhXAAhSQAAjYhVhrQgbgigmgYQhJgYhaAAQg+AAg2A3QgiAjgzBWIgcAtQgCBGgfC9QghDIAABHQAACvCQHPQBHDnBIDKQAABIgEAUQgPBLg4AAQg/AAhgkiQgIBIgQBWQgwEGhWAAQgxAAgcgYIAMA7QAkC6AABtIACAyQAAAogGAdQgTBZhSAAQhHAAgpizgAhTKKQgRgigKgoIgHgfIAAgCQgKgfgJgjQgXhegOhwQgKhOAAgXQAAhDB2lbQB1ldAAgRQAAgfgahKQgehbgxhPQiOjkjNAAQj3AAhhCWQgxBNAABaQAAAyAJAdIAFAEQArAgArAnIAzAWQArATAoAUIAKABQBRAKAXAYQgFArg+AiQg+AihJAAQh7AAhZgdQingJgyibQgRg0gCg/IACg3QAAgrAOgtQAdjtCyiBQC/iLETAkQEUAkC8C/QDUDUAAE6QAABDgdBjQgSA7guCIQheEbAAD3QAABtAxCJIAWA5QAwAwAAAZQAAArglAaQgkAZg5AAQhjAAg4htg");
	this.shape_22.setTransform(53.3,201);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#990433").s().p("EAGIAgZQgRgkgMhSIgWilQgPhugXhQQhCjoiih8QjRiimGAAQgUAAiFAPQiFAQgUAAIgigBQgtAihRAAQmTAAiSmIQguh9gPiZQgGg/AAhUQAAhtB1iQQBpiACXhnQCYhoBpgNIAWgBQB3gqBiALQAtAGAeAPIAUAEQAvALAjAYQAUAPAJAPQAhAZAAAbQAAAeggARQgyAciDAAIgLAAQiLBQhCApQiiBqhTBfQAFANAAALQAAAUgUBNQgTBMAAAVQAABxAiBBQAYArA0AmIALAIQA7AMBZAEQBjAFEqAAQLXAAEJIAQANAaALAaQgNi9gPg7QhDjsgch0QgyjJAAiGQAAlJBWkgQB1mPD7iqQELi1CDiDQAfgfAZgeIAPgiQAehLAgg+QgGgRAAgWQgBggAJgnIAKgjQgBgXgTgyQgXg4gigzQhdiLhtAAQiIAAglAvQgNAQgBAXQgBAMACARQABA+AsAlQAhAaBDASIAnALQB0hRAABmQAAAbhLBDQgWAUgSAPIAIANQhCAsgdAAQjQAAhlizQgjg+gThLQgNg2AAgkQAAi7CWhjQCJhaDDAQQDFARCGB2QB1BlAaCSQAKATAJAUQAmBZAABTIACAqQAAAogGAfQgIApgUAYQgeC6h5CEQg9BDhqBMQh9BXhAAvIgRAMQBWgCBnAgQCnA0BvBwQB+B/AACgQAACzg2CWQhfELjjAAQgqAAgZgNIggABQikAAhNh9QgXgngNgwIgHgoIAAgBIABAAIgCgTIABgPQAAh4BRBBQAcAUAcAmQAZAiAAAMIgBARQAcApBCAAQBVAAA0hoQAlhGAAgoQACgrgBgkQgBhFgRg0QgwifisAAQjmAAhGGrQgjDXALDeQAAC4AmCTQAcBpA5ByIBUCqQAPAkAJAkIAHANQA9BxAABTQAAAmgUAmQgbAxgsAAIhcinQhAgeg3hRQADA6AAA+IAEBBQACA/gGAwQgVCVhpAAQgHAAgGgCQAFBEAABJIAEAxQADAvgHAkQgUBxhqAAQgqAAgWgsgAifI7QgThNgJhdIgEhSQAAiUAkiPQAZhhA3iGQBDikALgmQAlhtAAhZIgBgiQghhOgahlQgNgqichYQiwhlgrgjQilAWhjCMQg7BTgRBXQAAAvAaAXQASARAwALQBXAUAJADQAgAKAdAPIgHANIgEAHQB8hUAAB7QAAAyg6AwQgwApgvAFIAAAQQhSATh1AAQjIAAhVjQQgbhCgMhPIgGhEQAAg8AahIQAkhjBNhQQCui0FWgkIARANIASABQBqAHCQBaIAhAWIABAAQBZAqBbBEQBTA9AiApQBJCWAXBfQAVBVAACCQAAAXgeByQgiCDgqB6QgzCTgsBWQABAUAAAYIAABMQgCBYgKBJIgHA1QANAeARAeIBABqQAcAvAAAOQAAAsgcAbQgYAXgmAEIgBACQgaApgyAAQiXAAhAj1g");
	this.shape_23.setTransform(52.5,197.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990433").s().p("EAEfAgpQgbg9gKh/QgIiWgGhGQgKh7gbg1QizlglJg2QhtgRidALIjiAQQoJAAipknQg6hkgPiGQgGguAAh/QAAkjCjitQCHiSDegrQDAglClAzQCiAzAABdQAAAXgEABQgHACgBAHQgGADgVABIgzAAIgEAEQhEgDhTAVQiIAhhfBOQg/A1gZA5QgmAmgQAjQg+CEgSAwIgLAhQAKBeBLBHQBPBLCnA5QBOAbCDAmICEgKQDjgQAVAAQH1AADLF9IgBg4QAAhngTh3QgIg1ghiiQg8koAAjqQAAjWBnjpQAii4BmiYQBtiiDjipQA8guB3hTIAAAAQAGgmAmg0QAQgVBUhdQBDhNAgg0QAthLAAhDQAAhlhAhiQhGhtiBgpIhJAyIiMBhQAUA6AzA7IA5BDQAaAhAAAWQAAAbgYATQgZAUgmAAQhzAAhDh4QhJgggZhyQgRhOAJhCQAAirCPhPQAOgLAPgKQBcg3B2AOQBHgIBTAVQCmAsBxCJQB/CYAADPQAACcgQBZQgTBrgnA1QgfA5gxA4QhFBPiIBuQhKA9itCCIAigGQDJgcChCCQA8AxAmA6QCFB5AAC9QAACMglCTQg1DahuAhQhBA8heAAQifAAhShWQg2g5AAgzQAAgkAVggQAXglAiAAQAjAAAnA0QAoAzAZAAQBfAAArhxQAOgkAHgrQAEgYAAgNQACh7gZhuIgNgSQhwiLjgAAQgfAAgkAbQgQAMgVAHQhGBagmCcQgtC3AIC9QAAB7BmF+IAiCFQARATAOAYQAhA6AAA6QAAAEAdByQAdByAAAdQAAB2hHAAQgeAAgyh/QhSgLhGiqQAQCmAACYQAABfgWBXQgjCJhMATQACBqgHBnIACAlQAAAlgGAcQgVBYhZAAQhJAAgjhQgAACLjQh0gKg6kSQgThZgKhrIgGhbQAAhZAYj9QAyg7AoiTQAVhRAQheQAMhKAAgUQAAj1iWiEQiCh0jGACQh5AChkAqIhDBPQh7CYAABYQAACRDHBnQApAVBDAeIAPgHQAUgDAfgMQA2gUAVgFQAxArAAAJQAAA1g6AoQgpAcg4AKIgCABQgdAKgyAEQgvATgWAAQh1AAhTg4IgIAAQikAAg5irQgSg2gFhBIgCg5QAAiyBIh3QATggAXgaQAuhbBXhDQB+hfCdgMQAbgNAkgIQCRgjC7A+QDLBCCACRQCXCqAADnQAACHghDfQglD2g3A+QgHBIAABBQAAB5BCD9QAhB+AhBqQAAAjgRAdQgZAtg5AAQg9AAgyhCg");
	this.shape_24.setTransform(55.3,196);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#990433").s().p("EAD7AgZQABgXgBgbIgDg2QAAjOgCgZQgKh+g2hvQgbhTgWgrQgohMhWgjQgWgVhEgSQhGgThIgGQgagCgXABQgdgJgigJIgMgCQijghjAgTQhUgJiYgMQiAgMhLgNQjJgkhYhdQhDhIgYh9QgSgdgBgoQAChBAAg0QAAk+CjjGQCJimDcgyQDGgtCfBDQCiBDAACFQAAAWgUAcQgYAhgeAAQgRAAgUgTIglgpQg1g8gyAAQjtAAiPD5QhHB+gZCIQAABMAKAjQAUBFBBAvQCwCAIbAAQBRAABQAZIBIAAQDWAACuDtQAsAsAvA0QAlAqAbAhIgTiCQgpkkAAlwIAAhCQgMg3gKhBQgHg1AAgKQAAiUA0i4QAuimBEiFIAVgnIAEgJQB1kADvjBIApgfICciaQBphoA6hHQCci9ADiuIgBgQIgDgUIgFgFIhWhtQg6hJgwgkQhCgxhHAAIhgBEQg9AsgnAYIAAABQgCASACAQQAAA/AQApQAvB6AJAZQgCAHgBAOQgEAMgaAAQhkAAhDiKQgXgvgPg3QgMgrAAgSQAAiFBDhaIAMgPQAghRBIgzQB1hUCnAZQCUAWBrBgQBdBAA0B7QA1CAAAClQAAEpihDHQg8BKhoBYQh9BkhAA3QhLA/g/BCQAkgDAmADQDLAPCgCbQCmCgAADHQAAC3gdBuQg8DpivAAQiVAAhYg+QhHgxAAg6QAAgaAFgFIAEAAIAIgKQAIgLAZAAQAZAABHAjQBIAjAJAAQAMAAAMgBQA/giAhhlQAdhYAAhwIgBgaQgchIglg+Qgkg9gmgqQg/gchcgJQgaADgeACQg7AChaBLQgxAogQALIgOAIQgYAtgPAvQgkBsAACpQAAEgCFIHQBDEDBCDNQAAAsgYAYQgZAZguAAQijAAhuoRIAOBqQApEnAACzQAAAPAEA0QACA1gFAlQgQBmhSAKQAKAsAIAsIACAqQABApgHAfQgUBihXAAIgQgBQgWAKgeAAQgkAAg0hWgAiqJWQgUhfgKhzQgGhIAAggQAAhKBDkfQBDkhAAihQAAjJgph/IgMAAQg8AAgigqIg3heQglg/gzgeQhIgrh6AAQiXAAhzAyQhJAugwBMQhJByAACHQAACRC6BnQAZAOBmAwIARAIQAlgFA6AAQAAADAEAFQAEAFAAAYQAAAugxAdQgYAOgfAHQgoAihGAAQjiAAhlisQgxgwglh8QgUhAgNhMQgKg4AAgKQAAg7AahPQAlhtBJhVQA9hIBRgwQBahOBzgpQB4grCAAFQEWAKC6DPQDRDsAAGXQAAERhCD3QgQA7gdBkQgVBPAAA1QAACBA8C+QAJAeAgBdQATA2AAALQAAAggYAeQghApg7AAQiDAAg+kqg");
	this.shape_25.setTransform(59.3,187.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).wait(1));

	// Layer 3
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(153,4,51,0.498)").s().p("AkvLgQgJgRAAgWIACgWQAAgLB9j7QB9j6AAgzQAAgvgYg7QgKgYgphRQhLiVAAhrQAAhFBHh0QBDhtBQhLQBXhRArAUQAzAWghChQAGCxAaBfQAQA+AlAxQAnA0AKAfQAXBAAAB9QAAA4gNBYQgTCKgqBwQh/FXkcAAQhpAAgag2g");
	this.shape_26.setTransform(101.2,378.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(153,4,51,0.498)").s().p("Al6QpQgKgRABgWIACgWQAAgUB6joQB6joAAggQAAiOgiiIQgXhag0iDQg7iUgRg4QgihzAAhsQAAh9BqikQAng9Aug3QBgi0CWgqQBJguA6gHQBpgMAACFQAAAFgCAGQACAPAAASQAAADg+C+Qg/C+AAAKQAAA6AgBQQASAxAyBwQBkDyAAD+QAAB4gEA5QgLCVgoBzQhKDVijBSQgTAZgaAZQhoBjipAAQh+AAgeg3gAgdqHQgVA/gQBJQgTBTAAArQAACgA4CKQAiBaB/EEQAVgVAEgKQAGgQAAgrQAAg1gfhNQgMgdg5h0QhijOAAiIQAAgJAKhkQAIhHgMgdg");
	this.shape_27.setTransform(101.1,353.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(153,4,51,0.498)").s().p("AjNT1QgSgcgBgrQAAgLAOgzIAEgRQgGgJgEgLQgIgTAAgYIAAgXQAAgkAmhyQAmhygBgkQAAg1g2hfQgTghhmiZQhSh9gmhQQg2hyAAhWQgBgbAYgYQAXgWBIgxQhaiWgnhLQhAiBgBhgQABhqA2iGQAphiA3hPQgDhtABg6QAChpASgnQA1huDRFoQASgFAbggIA3hAQBUhWBtAAQBfAAAYA7QAMAegGAkQAAAehGDRQg9C5gTAvIAACWQD0gTB/F9QA/C9AQDJQgBABgaApQgjA0gZA3QhXC6gBDmQAAAPgYBIQggBfgtBQQiKD7jFAAQh+AAgrhAgAl2pCQABAXBGCGICaEhQDfGlAABqIgMCUQgMCaAAAkQAABNgMBNQATAWgDAlQgCAZgOAvQgNAtAAANQBxiNBTm5QAaiLATiXQAOhxAAgPQAAgkgMgdQgQgigCgLQgPAKgHAOIgIAUQgMAXg6AAQg7AAgnhBQgZgrgbhnQgghwgPgiQgfhCguAAQivAAhKjFIgBAJg");
	this.shape_28.setTransform(100,317);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(153,4,51,0.498)").s().p("AhKUTQgMgSAAgnQAAghBUjCQBSjAAAgMQAAhth5h5QhIhEjJiOQjEiJhNhPQh8h+AAh0QAAgxAngnQARgRBFgxQA7gqAbgkQAng1AAhIQAAhMAciVQAciVAAgWQAAgfgchNQgchNAAgfQAAi4BbhHQBSg/BuAwQBvAxA6B/QBACOgrCuQAXgbA8heQBJhwAmg1QCYjQBoAAQBUAAAdBJQAOAlgCArQAAAegvBwIg1CCQBYAbBGBSQBDBNAABAQAABbiMCEIhiBXQgrAqgBARQABAqAjA8QAXAmA5BWQB0C3AAC8IABAvQgBAkgLAYQgjBLiBgdQAAEOhADmQhpF+jzAAQhzAAgigxgABQDGIAHAAQgHgJgMgfQgOgjgMgUQgrhIhugbgAngiQIgfA5QAFAMAjAsQAkArAeAdIATAAQg0gVgRhGQgLgtAFgxQgCgBgDgBIgEAAQgEAAgGACgAAlnuIATAmQAOgOAKgTQALgTgEgFgAFKoUIAAANQAqgTAqgbQBHguAIgeIAAgMQhCAehhBbgAkAxRQgFAIAAApQAAArAOAbQAKAUAgAgIATAAQAAg4gQg0QgQgzgZgdQgGAKgHAHg");
	this.shape_29.setTransform(86.3,297.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(153,4,51,0.498)").s().p("AA9XQQgng2hDh9QhZiggYgoQg+hmgpgjQiRh+ichaQg0gfishUQhngzgkgpQgxg1ABhdQAAh1BUheQCDiREcAQIA3AVQgIihAvjEQg8gPgxgSIgBgFIAAgOQhpgfgvhdQgXgsgGg1IgCgxQgBhjBuhWQBjhOCOgjQCOgiBiAgQBsAlAABuQAAAVgFAUIACANQA0BMAABvQABAUgDAbIAyhXQBeilBNihQAXgvADhEQABgNgBhtQgBieBFhcQCAipB3gdQBjgYBWBHQBDA3AxBlQAoBTgBAuQAAB7hhCBQgkAuhBBGIhyB7QiRChhGCVQgNAbgKAcQA1gWA8gJQCugbB/BYQCJBfgBC1QABBDgFAbQgIAygfAlQhKBakBBHQAtCoAnB1QAQA+AACWQAAAbgKBGQgMBfgWBQQhBD0h0AAQgWAAgegzQgmBMg8AAQgLAkgOAoQg/CuhXAAQgjAAg2hOgACBMQIgUg5IhEi+QgPAEgOAAQiWAAhch6QApBcCSBvQBWBCBWBgIAAAAgAFxEPQALA+AgCSQAPBEAMBCQAWArAaAvQAGAGAGgMQgSgugVhaIglidQgahlghhAIAFAggAqqEoQghAXgXAkQgUAfAAAOQAAAuBVA2QBRAyBQAIQhBgIgdgxQgSggAAgjQAAgkAUgbQAjgzBZAIQhAg6g8AAQgoAAgmAagABkB9IAAAQQABgnAFgkQgGAiAAAZgALthoQgUApghAYQg3AnhuAWIgNAQIANAVQCAgEA8g3QA0gvgWg/gACliCIAJgQIAAgOQAAAFgJAZgAl8pJQAAAaAIAPQAEAHAFAFIAJADQAMADAxAIQAggCArgHIBMgPQgHgOgMgLQgZgHgQgQQgMgEgPgDQgZgGgaAAQgwAAg0ASgAmupWIgsATIAiASQAKgXAMgUIgMAGgAJYyVQAAAqACAYQAEApAMAYQAqgpAbg0QgFgNgngQQgcgKgKAAQgEAAgBABg");
	this.shape_30.setTransform(80,233.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(153,4,51,0.498)").s().p("ACDdSQgHgTABgvQgBg8AghaIA6iWIgCAAQg3AAg5heQgZgnhRiuQhHiXg5hLQhShvhfgZQoDiIjdiTQjJiGAAixQgBi+CJiFQB7h5CyghQCwgiB9BHQCJBPgBCrQAAAbgsB8QgWA/gbBGIgHAMQF8A0DSCEQgmg0gagyQj5gFhMkOQgZhWgDhlIAChWQABgtAPhkQAPhfAThYQgDgIgmADQhEAFgQAAQj4AAhLi7QgYg7gEhIIABhDQABjBB8hyQB0hqCgAHQCkAGBuB8QB7CMAADvQABCSgXCDQAahKAjhFQCjlCGIk+QhvgxgkhiQgWg5AAhzQABiUB0hvQBuhnCVgRQCbgSBnBcQB0BpABDbQAACzh9CsQhMBnjIC5Qi+CwhNBlQBIgzBTgeQCyhAB7BMQCIBVAADnIAABwQgFBEgiAwQhbCDlYAzQAXBgAsB5IBKDIQBTDpABCyQAAFSijAAQgmAAglgdIgMA7QghCcgvCFQiUGWjeAAQhKAAgUg7gAkYJsQDUBFB3CAQBVBbAzCJQAGAGAHgMQgMgYgahZQgVhIgfgrQhdiEkvhBgAC0ieQgGAfAAB/QABBiA9CWQBACXBjCMQgGhnhUlbQhIkuAGh7Qg1BygKBAgAsrABQhYAqg+BCQhFBKAABBQABBKAdAyQAjA6BWAuQAFgrABh6QgCg7ABgfQACg4ALgkQAfhjB3AAQAnAAAeASQARAKAUASIAGAOQAHAHAAgnQAAhMhFgMQgLgCgNAAQg1AAhJAhgAOEnnIAiAnQAcAiAGAOIAEAQQACAIAAgnQAAgIgcgcQgegdgXgNgAkorwQgxArgQAiIgNATQAcgEAWgVIAjgqQAug5BFAFIgfglQgrATgwApgANo7AQhFALgyA3Qg1A7AABOQAABOBEAQQAfAGDJAAQAoAAAFgdIgChNQAAhvg1g0Qgmgkg1AAQgNAAgOACg");
	this.shape_31.setTransform(70,229.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(153,4,51,0.498)").s().p("AC8eDQAAg1AMhDIAMg7QAAkLjUkZIiQi0IgYgeQijgRl8AAQhZAAhTgpQgsgVguggQhBgchZhGQgUgQhrhcQhbhKgciHQgNhAAAiCQAAjRB5iiQBqiQCgg/QCbg9BwAvQA4AYAeAuIAOALQB5BnAADAIADA2QABAqgFAeQgQBahTAAQgqAAhKg2Qg7gsgSgbQgZAbgJAZQgLAcABAtQAAA+DgBYQA0AUCyA/QCRA0BfAlQgzg7gehVQgkhggKiCQgFg8AAh4QAAgfAZkeQAZkfAAggQAAh0gYhPQguiXh5AAQhaAAgfBCQgNAdAAAtQAABEBLBLIA0A0QAXAcAAAVQAABLg/AdQg0AYh7AAQkMAAhKjaQgYhDAAhOIAEg1QAAleDDiKQCuh7EABTQD8BSCwDoQC3DwAMEnQA0g9BMhGQDQjABkh+QCTi4B8j5QgcAbg2AAQi8AAg+iOQgUgtgEg2IgBgyQAAihB5h5QBxhwCagWQCggWBqBdQB5BrAADiQAAFAiVEYQhGCFiRC2QCUgmBlA5QCMBSAAEAQAAAjgKBBQgPBjgfBSQhdD4jJAAQiRAAgehwQgJghAEgrIAFgjQAAidAphDQg9Amg+BjQgpA+gbBDQgZA+AAAZQAABhAnBdQARAqBFB6QA7BpAbBRQAnB3AACNQAAAygkC2QgvDqhBDIQjIJekVAAQh7AAgBirgAHXZlIAFAoQBAhjAqiOQA3i3AAilQAAiviWkKIg9hiQAIB+AJBYQABAPBIDAQBHC9AAA2IgCAQQACAUAAAUIACA3QgBAlgKAYQgdBFh3gKQAXBRASBwgACxLmIgGgXIgJAAIgdAAIAsAXgAgkrvQAACcgZE0IgZE4QAAArAPBcQAMBJAQBQQADgjAolhQAlk6AAh5QAAhngDgSQgMg6g6hEgAIGEsIAZAAQgXg2gRhTQgQhQAAgwQAAhdAphiIgCgBQhuDRgEDgIAOgBQAmAAA2AZgAt0h0QgXAHgpAbIgTATQAUAABjgyQgJgGgLAAQgHAAgJADgAGHl4QhbB8gNA6IAAAGQAVgkBpiEQBXhuASg1QgpAZhWB2gASfmYQAEgQAAgIQAAghgYgqQgZgsgfgFQA9AqAPBqgArywvQg5BVAACUQAAAxALAlQAMAoAbAkQgUh+Ash+QA+itCkg4IBkgMQg6gLgzAAQigAAhKBtgAPP4cQAGAwgEAgIgBALQAZg1AXg4QgFgRgLgJQgOgLgaAAIAHA3gAQH80QAZAKAbAHQAeAIASAAQgXgOgigIQgVgFgMAAQgHAAgDACg");
	this.shape_32.setTransform(60.1,212.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(153,4,51,0.498)").s().p("EADMAhqQgOgdgKhCIgSiKQgNhdgRhGQgyjMhwiDQiVirkNg/QiigmiJgsQmTgfjSisQhggggxiMQgxhagPhpQgGgqABgrIABgpQAAh6A2h6QAXjMCViAQCYiCDrgUQDcgSCmBUQCwBYAACVQAAAMgDAMQAcAaAAAXQAAAvgkAdQgeAYgiAAQgfAAiQgfQiPgfggAAQglAAgeALQgzApAABeQAABgAuBFIA8AoQBRA0AeAbQAMAKAKALQCYA+EVA0Qgag0gNhCQgLg4AAg2QAAhJB9m3QB9m6AAhLQAAiTgxhgQhrjVk2AAQiDAAhLBnQg3BLglCZIgbB6QgPBFgMAlQgiBng8AAQjaAAhGkAQgVhOgEhcIAAhBQAAk7DyiwQDaieE7ALQE7ALDYCtQDyC/AAE2QAABfgTB0IgrDcQg/E8AAEkQAAA1AmDPIAlDKQAAAqgOAYQgHALgjAkQAgAxCMCbIgPhBQgwjKgsjxQgii+AAgPQAAkmCZk2QBsjdDjkoICzjmQBkiBA4hUQCYjkAAicQAAgcgMgdQgWgygvAAQhkAAgrBGQgdAvgKBpQgMB8gKAdQgXBFhDAAQicAAgMhqQgEghALgqIALgmQAAgfgZhIQgZhHAAggQAAi8CRh8QCIh0C2ACQDAADB+COQCQCjAAErQAACmiBDUQg8BjjfElIgiAuIAuAGQDCAfCFB0QCUCCAAC6QAAAYgcBXQgjBqgxBbQiOESirAAQhUAAgphuQgNgkgHgrQgFgbAAgMQAAguAyhuQAyhwAAgVQgHgEgPgFQgegJgnAAQhMAAg2AxQgkAhgnBKQguBWgRATQgcAlglAJIgBAlQAACDAyFqQAyFqAABWQAACkgYB/QguDth1AAQhUAAhbj4QgYAXgnAAQg2AAhGhZQB8DnAAFjIADBPQACBFgGAyQgQCbhTAAQgdAAgRgjgABcQxQAZAYAWAaIgRgaQgjg3gSgPQgagWhLghQBEAtA4A4gAHujBQgPAkgzDEQg1DMAAAfQAABcBDDxQA/DlAnBIIAFAEQABAAAAgmQAAhaglkdQgmkcAAhxQAAgUAMh4QALhvgEgygAy/CIQgzAqgfA5IgBAaQAACZBHBkQA+BXB9A4QBXAnCTAjQgXgLgVgMQi/gdhei3QgkhFgRhTQgKgyAAgYQAAhbAVhGQgUAMgSAPgAhPEOIgdBQQgPAvAAAnQAAApAUAlIArBFIAMgGQgPhGgHhhQgGhpgDgsgATcnUQA4CoAACXIAAAGQAZgkANgYQAZgsAAgoQAAgagrhFQgshFgggXgAuUzGQhjA4gvBwQgkBUAABgQAAA2ADAVQADAeANAaQASgzAVgzQAphjA0hNQCgjtD0gEQhNgOhEAAQiFAAhfA2gAg2w5IAGgGIhAgeQApAcARAIgAPi/PIB9AAIg/gDIgdAAQghAAAAADg");
	this.shape_33.setTransform(64.9,201.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(153,4,51,0.498)").s().p("EABgAhnIgDgQQgMg7gMh4QgPiXgHg2QgkkAhViAQh1ivjsAAQgpAAhCARIiGAmQjFA2ipAAQlIAAjFktQhFhqgoh9QgghlAAg4QAAnEDLj1QCDifC+gzQiAg7g2i5QgZhVgGhoIgBhdQgBhDALg+QApj+DVi2QB2hlCZg5QCXg4CggEQCkgDCTA2QCbA6ByB0QCoCoA9EFQAOA8AIBBQAWAyAAAUQgBCvgTCUQB+jrDTjHQApgnA0gtQAygqA7gvQCXh3AbgYQBWhKAng7QAwhGAAhJQAAgSgNgxQgQg8gYg0QhEiXhYAAQhOAAgXA2QgOAhADBWQACBXgOAgQgWA2hOAAQhoAAg2iSQgSgugJg4QgHglAAgMQgCg1ABgZQABgsANgbQAIgPANgMQAIjUClhsQCihqDdAuQDnAwCYDAQCuDcAAFRQAACVgdBfQgfBihNBeQgmAvhEBBQgvAug9A1Ii1CdQCuAiB7B7QCrCsAAEhQAAAhgOBKQgTBpghBYQhkEJi2AAQhRAAh4hRQgogcgjgeQgegZAAgDQAAgnAggUQANgIA7gVQAygSAWgXQAggiABg+QgBgkgghJQgphhg2AAQjOAAg6DyQgdB6AMB+QAABCAVBoQAGAfAoCqQBAEUADC3QAJBLgFBNQAABxghBxQg2C7h5AAQhZAAgRi4QgDgigFh2QgDhYgJgiQgPg7hbjBQhWi0AAgSQABgVAFgYQAEgYAAgTQBnAKBaCCQAnA4AaA2QgWhegqidQhblKABhiQAAh0AzizQAyibAAgKQAAgCgghJQg3A/gTAxQgPAogIBYQgNCGgDATQgZCohpAKIgHAjQgmDHgSA2QgJAbgLAUIAAAAQAQAxAoBpQAZBDAAAMQAAAagoAyQBrCZAADhQgBCOhvAAQgKAAgKgCQBJD5AAFKIAAAXQgBA2gKAdQgaBMhSAAQhbAAgjifgABMSXIgEgMIgHgBIALANgA1eB6QhxCnAAEBQgBAqAXBLQAbBeAwBPQCDDgDZAAQCgAACyg0IAugOQhygNhmgnQhJgbglgeQgLAEgMAAQhJAAhajKQgdhBgahLQgVg9AAgGQAAhJA/iIQBKigBlhbQCChxCOAiIAOAEQhRgmhxAAQk3AAiTDXgAiwPlIgYglQhigfiIgfIgPgDIAAAAQABAigQAbIAlgBQCJAAByAqIAAAAgAtXF7QguBCgYBHQABA1A5AiQAvAdBmAVQA4ALCdAYQB7ATBSAPIgBgDQgqiNgTioIgKiOQAAiOBEkfQBEkhAAiIQAAh1g5h+QgihMgvgtQhGhDhjAAQigAAhkBDQg3AlglA6Qg0BRgCBVQAABWBaBwIA+BJQAcAgAAAKQAAAggWATQgRAPgeAGQB8AaBuBJQBfA+A0BUQA4BWAABhQAAAPgYAsQAUAaAUAeIgKAlIgMALQgMAKgZAAQgOAAhbgZIhdgZQh3AAheCEgARYmIQADAhgGAdQCBAYBEBxQAxBQALBxQADAAAGAFIAIAJIAMgjQAJgcAAgZQAAgXgOg0QgThFgfg7QhbiuiZgFQAMAdAEAjgAhiu2QAWAmAQAqQAqBvAACnQAACBgNBMQgWB+gLB7IAIACQAMACANAAQAiiKAXhkQAui8gBhUIAAgWIgqiRQgXgsgggqQgTgYgcgdQghghgtgpQAeAjAXAngAu/k/QAZABAYADIghgPIgHgDIgJAOgEAQQggyQAiAGAfAWQBmA0A8A1QBHA8AEAzQAEA2A0CsQAxCmAAAnQAABoibDCQgcAkgmArQAagYAXgXQDJjMAAi8QAAgogNhLQgShzgkheQhwkijuAAIgTABgAk2yHIACABIgHgFg");
	this.shape_34.setTransform(61.1,187.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(153,4,51,0.498)").s().p("EABzAg6QgGgugIiAQgIh/gJhIQgfj2hih/QiEiqkPAAQikAAimAvIhuAgQg3AOgjAAQlcAAjDkKQhPhtgqiMQglh/AAh9QAAlkDCjgQCFibC7g8QhqhJg+jAQgghggQhyIgKhbQAAiaBxigQBiiMClh5QCWhtCZg7QCXg7BQAUQGnB7C0EUQBoCdAUDGQATAfAGAoQAMA7AJBlQAIBZAAAmQAAAYgDArQB3jcDkjWQA1gyCJh3QBwhiA2g4QCiinAAicQAAheg0hMQgdgsg3guQg0AJgdApQgYAigTBSQgVBWgRAeQggA0hCAAQgXAAgRgGQgMAGgOAAQhNAAgojOQgUhngFhhQAAjrCLhgQA8gpBLgKQAQgKASgHQBWggCQAiIAdAIQA1AEA0AQQAfATAdAVQAdAOAdAPQB6BBAvA6QBPBCAvDNQAlCiAACKQAAAegXBxQghCZgwCBQhzEwioBJIgXAaQBtA2BZBxQChDLAAEfQAACbgqBtQhWDhjrAAQiPAAhZg+Qg7gogQgyQgGgMgEgNQgDgMAAgJQAAgwAagMIADgFQAdgtBAAAQAhAAAwAWIAJgVQARgtAAgSQAAgpgkhMQgxhjhEAAQiZAAgwCXQgYBNAHBRQAAAgA9GNQA8GMAAB+QAADBghCeQhCFBivAAQiIAAAIiPQADgoARhQQAQhLgBgZQgBgjgxiaQgxiZAAgOQAAgvAdghQAfgkAvAAQAvAAAyA1QAhAjAJAVIACAIQACACAAgaQgdivgcjBQg5mCAAh7QAAhPAPhFIgDgGQgFgQgBgVIAAgTQAAl1Cdi/QgEgOAAgQQAAgjBmhRIDfiyQFFkdAAk0QAAgigPhPQgNhCgSg7IgQADQAdBmAABeQAACShSB7Qg8BbiQB9QjjDHgmAlQigCdhqCsQiODlg1CCQgvBxACBcQABAiAdCVQAaCNAACTQAACOhnAAQgIAAgJgCIAJAvIAyD+QAAAegMAWIAHARQA5B5AwEJQAuD7AACdQAAA7gQAuQgbBMg+AAQgJAAgIgEQACAygGAlQgSB1hdAAQhSAAgVipgACaTbQgNhUglgvQg7hIiRgjQiogok4AAQhpAAiegjQidgjhHAAQhwAAgzjUQgQhEgIhSQgFgxAAgaQAAjfCDiFQBthtCygfQBZgPBSAIQiAh8jDAAQkCAAiMErQhGCXgSCaQAAAoAQBPQAYB0AsBgQCIEkERAAQAqAAAsgOQA0gTAigLQCJgsDpAAQGWAADEERgAgciaQgoDfgiDkQAAAuAyD1IAmC3QAWAKAXANQgThPgQhXQgShcAAgMQAAkYAulQQAYifAIhEQAPhxAAhDQAAgMgGhCQgiBRg7FWgAtnGEQg1BNAABOQAABqBjAwQBPAnCZAEQBHACDEgJIBEgCQgMgtgLg1QgVhngOh8QgLhaAAgVQAAgOAPiiQAQioAChPQAEgWAvizQAqiiAAgrQAAgzgThDQgYhSguhEQh8i4joAAQiRAAg7B0QghBAAABKQAABkA7BVQAkA0AEAIQASAhAAAhQAAAkhmBHQCCANBsBEQChBmAbC0QAOAWAAAYQAAAxgnAjIgBABQgOARgQAMIgFgGQhLAmiOgQQhtBmgqA9gATVlWQAhAhASArQANAdAAAOQAAAogXAcQBQBsAACtQAAA5gRA6QAngcAQhBQAJgkAAgsIgBgnQAAgWgShIQgXhbgghPQhgjrh+AAQgiAAgwAIQg0AIgJAJIgYAWQAhgDAfAAQCUAABTBUgAhsvHQBMBzAlBwIARAAIAAhyQAJhOhphwQhqhwhlgWQBgBcBNB3gAuzysQg2BKgKAbIgEAMQANgHAggcQAigcAagQQBbg3CMgCQhCgIgngHQhJgLgegdQgQASgsA8gAMD+CQgVA4gKA8QAuhTA6gzQgOgWAAgWIAAgCIgdALIgGAAQgNAXgLAeg");
	this.shape_35.setTransform(61.5,187);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(153,4,51,0.498)").s().p("ACVeNQg2jcgfg3Qg9hxibhrQjCiFj5gyInkgEQmHiPhriTQgug+gMhSQgGgqAAh3QAAiBALhTQARh7AwhjQB7j6FfiDIFyAAQg5gCghgLQgmgMgwAAQjmAAiIk+QhEifgXihQAAheBsioQB6i8Cnh2QDMiRDUAPQD/ARDtD6QDIBhA5F6QAUCFAEC0IAAEGIAAAnQAPgvAVgtQBVi7DHjhQA+hHCOiCQCHh7BvhZQAtgkAfhGQAjhMAXgYIAIgIQgCgtAAgkQAAhCgSg0QgTg0AAh6QhUggg6AlQgrAbgpBMQgpBWgXAiQgjA2grAEQgZAZgtAAQhIAAgoi8QgUhdgFheQAAi6CshyQCihrDYAQQDlARCVCaQCsCzAAE3QAACbhnDdQhdDGiXDMQg8BQg7BFQARgBALACQEKBOBtClQBLBxAACgQAAAfgMBIQgSBlggBUQhfEAi0AAQi/AAhng0QhRgqAAg2QAAhmCQAAIABAAIAFgPQAZhWAAgYQACg7gBgSQAAgagMgRQgLgPgpggIh2hjQgrBWgtCJQg1ClAABTQAAAxAqEVQAqEVAABbQAAAVgMBvQgQCQgVB6QhCF6hVAAQhDAAgXg4QgHgSgCgWIgBgVQAZkeAAglIgMkjIgNkiQAAjxASi5QAUjZArh5QgkAjgtAAQgyAAgZgdIgBBNQgCBZgJBJQgaDkhIAAQhDAAgYhbQgRAQgRAAQg6AAgaglQgfCegFAhQgSBxAABvQAAA/A5BUQAvBHAHAlQCYCIAADeQAABHgIATQgXA/hdADQA2BZArB3QA0CNAABbQAAAmgZAcQgeAig0AAQhZAAg+jBgABpTwQAbAzAAAjQAAAPgDAOQAdAgAQAfIAIAAQALg9gthGQgPgZgVgXIgHABgAtjQGQgMAMgUAHIFNACQCDAZCCAwQhFg8hBgiQh2gJhjgSIitgCIgQgJQgGAXgQAPgA2hKLQAABZAFAeQAIA0AfAlQA+BIEQB1IADAAQhrgyh9jXQgzhYgwhqIgmhYIAAgJQgMBLAABUgAoagwQBUBiAAAvIAAAEIAAAEQAAA9gzAMIgJABIgSAMQgvAdh9A/QhzA/g5A+QhOBVAABrQAAB3DRA6QAmAKA6ANIC3ABQBUANBZAxIAIABQBiATBSAYIgThHQgti0gXi4QgXjAALh6IAAqYQgjhzhxhhQiIh0jZg7IhTAAQgfAMgHA1QgDAPAAA8QAACUCECpQAgAqA6BDQApAzAAAUQAAAngdAaQgjAghDAAIgHAAQBJABBdBugA1TEmQgnBLgUBaQAOguAsgwQA7hCBTgoQBBgfAxABIALgQQBUh1CEg2IgZAAQlFAAiED8gAmgzCQAAAMgfAcQghAdgxAcQglAVglAPQDxAqCrC7QBpBzBSC8IAALsQgMArAABVQAmjaAGhEQAEgnAAjJQAAkNgTiUQgWjChCh+QhKiMiPhaQg4gjhFgeIABARgAQVkrQApAMAvATQA6AiAaA0QA7ByAKAPQAXAjAABMQAAAogEA1IAEA7QADA5gHAsIgBAHQAqgTAxiWIAviuQAAiAhbhFQgfgXg9gfQhQgpgYgOQg5AOg1ASgAQ5tMQhfBChAAwIhwBsQhRBOggAiQgSAbgPAbQgxBcgxB3QAlgoA0gmIAAgJQDCi8DBjnQBchtBFhhQgyA6hIA3gAvUwrQiuCgAABdQAAA1AwBsQAyBxAoAZQgNhSAAioQgGgrgCgiQgGhAAOgvQAeheBuggQgMgMgHgRQgEgJgCgJQgoAigaAZgATP8SQBvB+AAExQAAA2gGAyQAGARAAAPQAAAagZAsQgQA8gaA0QCbjxAAiVQAAhTgIgtQgJg7gcgwQg4hfjKiUIhqAAQjDATg+A+QgiAjAABRIABAQIAKgMQBvh4CGggQAmgJAjAAQBmAABGBPg");
	this.shape_36.setTransform(61.8,180.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(153,4,51,0.498)").s().p("EABuAgfQgKg5gLh1QgNiQgHg3Qghj4hXh9Qh6ipj8AAQiNAAjXAgQhrAPhTAQQm7AAiillQhPivAAjvQAAk7C/jQQCki2EAg7QCAgdBvAIQiGhHhAi3QgihkgIh5QgGhXAIgvQgSAggMA0QgMAwAAAhQAAAfAdBZIAEAIQBJCNAAAFQAAAYgHAVIAHATQAAA4hVAAIgMgBIgMABQiTAAhHjkQgVhIgMhXIgHhLQAAkkD0jOQBuhcCNg3QCNg2CTgIQFFgQDVDKQCoCiAzEMQBAC4AADtQAAFOgyDHQgeB3gFAcQgQBaAAB5QAABoAzDkIAxDiQAZAxAZA7QBDCfgBBWQABArgVAmQgfA3g/ABQATA4AOA8QAcB9AAB1QAAAVAVCBQAUCBAAAUQAAA2gLAhQgcBMhQAAQhjAAghipgAmdOaIgOAEIACAAQEyAAC6C4QghhagigvQhChUhtAAQh5AAh1AhgA03CGQguBXgYBsQgRBOgBA1QAACkBFCHQBxDfEEAAQAZAABigRIBwgSIAQgBQgjgEgigGQgcAPgkAAQivAAiSjMQgwhDgjhOQgdg9gBgNQABilBwivQCKjTDohGQgRgEgigLQgfgJgaAAQkUAAiJD7gAmxgbQAABYhMA1QgdAUgyAWIhZAmQhzAzg1BBQhNBcAACdQABA1AbAnQASAZArAiIAIAIQBEAIAPAAQA9AACkgSQCwgTBbgDIA5gBQghg+gPgzQgkh3gJiJQgFg5AAi0QAAihAZivQAZivAAggQAAiigyhvQhcjRj4AAQiCAAgqBKQgUAlAFApQAABRA3A5QAkAmBTAsQBeAxAZAUQA3ArAAA6QAAA2glAhQglAhg+AAIgMAAQC5BQAACxgAoSy3QE6AlCJEVQBWCxgBDfQAABRgWChQgXCXgTA7IAABhIAIAEQA/kjAIgsQACgJAAgoQgHg8ABhFIADifIAAgpQgalqjCh6QhvhGi7AAIggAAgAtfyHIgNAMQAIAABsghIAIgCQg2AKg5ANgAJbXeQgShXgOhnQgKhOAAgNQAAhEAzgjQAegUAFgFQAPgPAAgYQAAhOgPhJQgFgSgehvQgzi2AAjpQAAmAB/jRQBrivCsgXQCYgUCABgQAhAZAYAbQhVi0jDgFQhyBEhFAAIgWgBQglAKgZAAQhFAAgdhEQgQAjgQAtQgMAlgsCiQghB3gaAzQglBGgyAAQhXAAgWhHQgHgXAAgdIACgZQAAklCLjlQBhiiDOiyQA3gvBrhZQBbhNAyg4QCKiWAAihQhBjthCAAQhYAAgjA9QgVAogJBfQgJBmgOAhQgaA9hHAAQi0AAhFifQgWgxgIg7IgEgxQAAkaC0iSQCkiFDnAgQDrAgCgC5QC0DPAAFAQAAEIiIErQgUAqhUBWQhPBRhiBRIAUAHQCFAyA5A9QBRA8ApDDQAfCRAACTQAAAVgSBBQgXBTgiBHQhlDUiQAAQhUAAidhfQg8gkgsgjQgqgigBgLQAAgpAkgXQA3gkB+AcQABgSAJg8QAGgxAAgYQAAgUgQgvQgQgwgBgVIAAgGQg7gzgFAAQicAAgsCSQgVBHAJBOQAAA4ARCKIAkEoQA0HEAAFfQAABkgcBaQgwCYhsAAQhQAAg5kSgAVKg3QgGAKgIAIIAFAhIAEAEIAGgOQADgMAAgbIAAgIIgEAGgAM9+9QgsAhgHAqQACgIA/gpQBKgvAoAEIARgIQgagFgXAAQg4AAgoAeg");
	this.shape_37.setTransform(59.1,190.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(153,4,51,0.498)").s().p("ACFe4QgKgxgZijQgRh4gRgrQgphugYgtQg7hkhohHQhWg5i+gNIg4gDQlBBqiiAAQmIAAipluQg4h4gZiTQgQhbAAg9QAAlvC0jlQCWjBD1hBIAygMQh4g/hJiJQgrhQgVhhQgNg7AAgbQAAlJD1jHQBthZCPgvQCLgtCVACQFBAEDYDHQD1DhAAGJQAAAUgQCVQgRCUAAAVQAAAVARAtQANAlADAVQAVg6Aag6QCFknDVjbQCmisCJg2QBNhJAignQBxiEAAhlQAAhOghg+QgxhdhqgMIg+AMQAAADgDACQgFACAAAYQAAAIAjBbQAjBcAAAWQAAA5hSAfQg7AXg7AAQiwAAhakQQgsiHgKh/QAAjzCwhkQBPgtBlgGQBZgEBdAaQBIgBBvA5QBrA2BqBWQBkBQAZAuQA0BbASCKQAMBZAACdQAAAUgMA2IgFAVQgDAsgZBaQglCHg+BzQi3FWk3AAQgqAAgegYQgDgDgggjIgzBaQgnBGgfAsQhgCMhLAAQgNAAgMgBQgVBGhPDjQhMDuABByQAACjAoCeQAcBvA+CRQBOC6ALAhIABAFIAMgLQAoglAAgTQAAg+gQhOIgjiWQgzjeABjvQAAl+B4jLQBjipCkgRQCPgPB5BhQB4BfAAB6QAACUgpCJQhIDzilAAQhdAAhYg7Qg+gogVgjQADDmAWCkQAOBpAfCBQAiCIAKBFQATCBAACwQABBygVBdQgjCrhbAAQgvAAhNkaIgQhFQgGAKgJAKQgfAggvAAQgwAAgyhQQALAtAIAvQAZCPAABrQAAIKi7AAQh7AAg2kHgAvzQyIgBgJQAAgsAOgSQASgYBRguQAAgDgFgEQgIgIgPgGQghAdgRAKQgdATgWAAQiRAAhNjoQgYhJgPhXIgJhMQAAgfAchnQAhh9AwhuQA/iVBHhQQimBHhjCwQg2BkgcB8QgTBVAAA6QAAArASBNQAYBmAqBVQB0DpDSAQgACTKdQAAAxgZAiQgNARgSAKQCCBLBdCdIgZheQgsisgnjJQgeihAAgRQAAgyADgyQggDAAADTgAnQohQAJAOgBAaQABBFh/BMQgnAXgiAQQBEAZAqApIAQAGQBAAYAvApQAzArAAAkQAAAcgOAUIAAAKQAAA8hLAqQgtAah4AvQhuAzg4BBQhKBbgBCOQABA8AiA0QA5BVASAqIIJAAQA9gGA4AFQgQgegFgpQgGguAHhLQAGhOgCgPQgRibg1g6QgagcgHgRQgOgiAAhFQAAgMAZh7QAYh+ABhqQAAj2hJidQg3h4hphPQgggag0gfQg9gkgOgKQhIgygBhAQAAgrAWgcQjCA+hcBbQheBdAACfQAABaAgBDQA/CAChAAQAFAABcgpQBdgqAcAAQA+AAAUAkgAOAi/QgsAlAABEQAAAeBTB3QBQB1AKAAQA1AAAhiBQAYhaAAgvQAAg9gsgnQgogjg6gCIgGAAQg2AAglAggAnczQQA1AIBHAfQAyAWBHAjQgUgThJgtIhOgvIhKAPgAMM+aQgTAOgSAXIgEAMQAkgZAWgYQgDgCgEAAQgEAAgGACgANE+/IgHAIQAkgLAUgFQAfgIAvgJQgZgFgVAAQgzAAgeAeg");
	this.shape_38.setTransform(58.1,191.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(153,4,51,0.498)").s().p("EAC7AgVQgTg8gVhuQgYiBgNhCQg0j3hTh3QguhAg9goQh6gEjFAAQg4AAgmgLQhTAggFAAInSAAQkgAwiolNQg7h0giiRQgahyAAhCQAAgqAhhzQAuifBMiFQDElWFCg3QhfhAg5hxQhDiHAAixQAAk7Dri7QBphUCJgpQCGgoCOAHQE3APDNDUQDsDxAAGdQAACNgYB2QgPBKgkByQgnB2gNA8QgYBtAAB+QAAAVARCnQAQCnAAAVQAABXgHAaQgEAOgGAMQAzAdAjAlQAXAZARAeQAWAMAUAQQggh9gfiQIgeiRQAAnWCmmCQCIlADjjhQCzixCog8QAZgnARgeQA6htAAhmQAAhBghg3QgxhShugXQAAAfgdAgQgdAgAAAQQAAAcAMAYQAGAOAXAjQgCAHACAMQgDAKgaAAQiEgtgngqQgUgUgUgEQgJgCgYABQgpACgkgtQhNhfgQgkQgPgfAAhFQAAkeCzh0QCfhoDpA+QDmA+CiC5QCyDLAAECQAAAlglCKQgxC4hGCbQjaHelBAAQhpAAggg9IgDgGQiTC0AAATQAAAagjBIIhNChQhxD4AADXQAABiBVHIIAbCSQApgmAAgEQgVhlgWh/Qgsj+AAiPQAAjPA5jKQBRkkCmhhQDHh1CvBlQBBAmAwA+QApA2AKAuQANCmA8B6QAeA+AbAjQAABohdBbQhxBti6AAQiWAAhbirQg1hkgTh1IgFgIQgOBVgMCIIgCAeQALAiABAgQAWBSAZBvQAaBzAOBQQAEAZBOFJQBMFOAABJQAAA4gQAtQgPArgbATQgbBlhOAAQhXAAhCiZQgTgtgVhEQgUg+gDgGQgMgVgOgdIgLANQgfAhg4AAIAAAAQgDAqgWAlQgVAjgeAMQAvC6AACJIAAA8QgCBAgKA0QggCjhmAAQhrAAg1imgAyzDJIiVBYQg4AhgRApQgUAwAAB6QAAAkASBRQAXBlAkBSQBoDvCdgyIG1gEQAVgFAfgPQArgUATgHIAKgDQgfgIgsgIIgNgCQieAKgQAAQkjAAhhjCQgfg9gIhMIgChFQAAiJBIilQAnhZAvg/Qg/A3g9AogAnAnPQANAUAAAPQAABHhCA7QgZAXgeAPQAkARAjAVQBDAqArAuQAnArAAAYQAAAxhXAtQg0AciMA6QiBA6g/A6QhXBRAABqQAABRAoAxQAQASCcCIQE7gZDYAZQgOgagMggQgXg/gOhMQgJgyAAgRQAAh9AplWIAoleQAAgggThLQgZhigohTQh2j2jAAAQhaAAg/ArQgrAdgvBCQg4BQgTATQgwAug/AGQAOBTBNA1QBYA8CVAAQAaAAAnggQAmggAhAAQAiAAATAfgAPngzQASAYAQA6QAQA8AOATQAZAhAzgIQAUgkAIgRQANgcAAgaQAAhCgUhFQgYhPgogkQhqhfihD+QAJgDAYgNQAagLAaAAQA4AAAdAngAvXvNQgNAnAAALIAAAIIAhgpQAAgJgIgFQgGgEgDAAIgDABgAlExpQBKAcAXAZIAJAAQgQgQhAgdQhKgjgqAAQAaACBAAZgAUf65QBDBPArBaIAZgIQgqinhShgQiGickOgpIAEAEQAtAhAAAqQgBAcgXApIAPgCQAVgCAaAAQCsAACGCbg");
	this.shape_39.setTransform(55.2,191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_35}]},1).wait(1));

	// Layer 4
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#690324").s().p("ABHMmIgFAAIgZgBIgDAAQgxgEg3gNQhngZh4g5QhLgjg5gmQgagRgNgKIgEAAIAAAAIgrgBIgDgCQgRgJgFgNIgFgMQAEgHABgHQAAgCgHgHIAAgHQAAgeAkgoQAKgMAMgJIAHgQIAag5QimgkibjyQg7hfgwhqIgCgGIgJgJIgagbQgJgJgKgGQASADASAFIgHgSQgrgfgqgPQhoglhXBHQgvAmgeA8QgaA1gBAlQABAoBFBUQBHBXBqBUQCNBwCCA2IgHgBQBSAqAoApIAIgCQAjAjAxAAIAFgBQAHANAAALIgxgDQhkgGhZgNQhwgRhegbQiAglhgg5QhHgqgxgxQhvhwAAiUQAAheAMhRQAMhyArhOIAMgZQAOgbASgXIAJgMQDGj0HbEyIADACIAigBIAFAAIgBgBIgGgQQgHgWAAgVQAAg1AkhHIAOgbQAlhBA4g4QCxivEMAAQBkAACPBMQCBBDCEBvQB+BpBRBnQASAXAOAVQAzBLAAAvIAEgBQBGguC7hLIBDgaQENhpBUAAQAAACADAEQAEAEAAATQAAAQgTASQAHAGAAAMIAAABIAEAAQABABAAATIgCAdQgOCkioCHQiBBomFDKQgTABgFgBIgBAAQgaAcgsAqQgsAsggAcQAcATAiArIAUAcQAfArAAARQAABSicA8Qh6AvivANIgCAAIgHABQhDAFhMAAIgDAAgAj2HoQgJAKgSAVIgQAUQAcAJAeARIBFAcQAzATAyAPIGIAAQAjgcAhgVQhWg2jDAAQg7AAgwgFQhEgHgvgSIgxgUQgZgKgaAAQgTAAgXAYgABeCAQI8AAFMjDQAngWAmgdIgBABQlBCQmsAAQlKAAl/grQiEgPhigSQEqCxGeAAgAl5nlQhYAygWBfQgFASgEAXIgGAyQBIAbA2AQQDqBEJXAAIAqgBIgCgDQg8higog7IgHgJQhMhuhUg5QhvhMiNAAQjxAAhyBCg");
	this.shape_40.setTransform(-67.1,494.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40}]}).to({state:[]},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.7,413.8,289.3,161.3);


(lib.dropScaleArea = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(189,189,189,0.008)").s().p("Aq2ELQkghvAAicQAAibEghvQEhhuGVAAQGXAAEgBuQEgBvAACbQAACckgBvQkgBumXAAQmVAAkhhug");
	this.shape.setTransform(98.3,37.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,196.7,75.6);


(lib.cursor = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.988)").ss(1,1,1).p("AiTAIIgBCpIBshhIA9B7IA1gdIhCh6ICNghIknjdIAABwg");
	this.shape.setTransform(14.9,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgoBQIhsBhIABipIABhiIAAhwIEmDdIiMAhIBDB6Ig2Adg");
	this.shape_1.setTransform(14.9,20.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.8,40.8);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().rr(-165.5,-84.5,331,169,84.5);
	this.shape.setTransform(144,73.5,0.87,0.87);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().rr(-165.5,-84.5,331,169,84.5);
	this.shape_1.setTransform(144,73.5,0.87,0.87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288,147.1);


(lib.background = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Eg+pAM+IAA57MB9TAAAIAAZ7g");
	this.shape.setTransform(360,435.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.1,352.1,802.2,166.1);


(lib.backButton = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AB9iIIj5BuIDyCj");
	this.shape.setTransform(39.5,40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,204,0.298)").ss(1,1,1).p("AEZkYQB0B1AACjQAACkh0B1Qh1B0ikAAQijAAh1h0Qh0h1AAikQAAijB0h1QB1h0CjAAQCkAAB1B0g");
	this.shape_1.setTransform(39.8,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AkXEZQh1h1AAikQAAijB1h1QB0h0CjAAQCkAAB0B0QB1B1AACjQAACkh1B1Qh0B0ikAAQijAAh0h0g");
	this.shape_2.setTransform(39.8,39.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79.5,79.5);


(lib.backbackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDBDBD").s().p("Eg+qAaPMAAAg0dMB9VAAAMAAAA0dg");
	this.shape.setTransform(401.2,250.1,1,1,0,0,0,0.1,82.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,802.2,336);


(lib.arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiIB/IEHjfIAKCeAB/hgIiyge");
	this.shape.setTransform(20.3,12.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.6,0,27.5,25.5);


(lib.ScreenShotScale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{leftFall:0,rightFall:1,even:2});

	// Layer 2
	this.rightNumbers = new cjs.Text("5612345678", "16px Muli", "#FFFFFF");
	this.rightNumbers.textAlign = "center";
	this.rightNumbers.lineHeight = 16;
	this.rightNumbers.lineWidth = 72;
	this.rightNumbers.setTransform(108.8,2.4);

	this.leftNumbers = new cjs.Text("123456", "16px Muli", "#FFFFFF");
	this.leftNumbers.textAlign = "center";
	this.leftNumbers.lineHeight = 16;
	this.leftNumbers.setTransform(34.4,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.leftNumbers,p:{x:34.4,y:21.1,lineWidth:53}},{t:this.rightNumbers,p:{x:108.8,y:2.4,text:"5612345678",lineWidth:72}}]}).to({state:[{t:this.leftNumbers,p:{x:36.5,y:0,lineWidth:67}},{t:this.rightNumbers,p:{x:112,y:24.4,text:"5678",lineWidth:76}}]},1).to({state:[{t:this.leftNumbers,p:{x:34.9,y:12.4,lineWidth:67}},{t:this.rightNumbers,p:{x:109.4,y:12.4,text:"5678",lineWidth:79}}]},1).wait(1));

	// Layer 1
	this.instance = new lib.tinyScaleSeat();
	this.instance.setTransform(106,17.8,1,1,0,0,0,33.4,21.6);

	this.instance_1 = new lib.tinyScaleSeat();
	this.instance_1.setTransform(33.4,36.2,1,1,0,0,0,33.4,21.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#690224").ss(9.9,1,1).p("AiaAAIE1AA");
	this.shape.setTransform(71.2,75.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#690224").ss(9.9,1,1).p("AlEBUIKJin");
	this.shape_1.setTransform(71.2,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#690224").ss(9.9,1,1).p("AAAk6IAAJ1");
	this.shape_2.setTransform(69.7,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0,y:9.6,x:71.2}},{t:this.shape},{t:this.instance_1,p:{x:33.4,y:36.2}},{t:this.instance,p:{x:106,y:17.8}}]}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:35,y:11.1,x:71.2}},{t:this.shape},{t:this.instance_1,p:{x:34.5,y:16.4}},{t:this.instance,p:{x:107.3,y:40}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:15,y:11.1,x:68.2}},{t:this.shape},{t:this.instance_1,p:{x:32,y:27.5}},{t:this.instance,p:{x:107.3,y:28.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.7,149.1,61.5);


(lib.scaleSeat = function() {
	this.initialize();

	// Layer 2
	this.DropArea = new lib.dropScaleArea();
	this.DropArea.setTransform(-2,78.9,1,1,0,0,0,98.3,37.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#690224").s().p("AhFBoQAAgKAlgzIApg5QAag5AMgXQAXgpAAAtQAAAdg6BQQgcArgpA0g");
	this.shape.setTransform(-9.3,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#690224").s().p("AjkHgIgcgBQgsgDhEgTIhvgfQgOgEgGgOQgHgPAJgMQAMgQAQgRIACgFQAbAYBWAeQB2ArA8AAQFDAAB/gUQA4gIAlgWQAVgNAmghIAhgfIAFAAIADAAIAAABIADADQAPACAHAMQAzBTjEAsQh4Abh4ADIhPAAQgmACg1AAQhnAAg+gKgAl7FsQgXgNgkgYIgRgLIABgDIANgBQA0hqAshqQAag+CIjuQAuhPAehFQABAXADANQgeA/grBKQh4DQgfBKQgjBWg4ByQApgTBvgXQBugWA8gDQAKADALAAQAIAAAIgCIALjAQAQkMADi+QADgdAAgWQAAgQgBgEIgDgJQAGAAACAGQAFgCAEADQAEACAAAGQAADKgREqIgNDVIApACQA5AEByADQBjAGBCAZIBaAWIAEADQgHAFgHAHQgpArgHAEQgpAbhIAKQh9ARk0AAQhpAAhig1gAHFEzQgHgDgRgDIgBgBQggg2gSgnQg/iCh9jTIjFlSQgFgIAIgGQAGgGAFAJIDIFZQB8DTBFCHQATAkAmBAIgBAAIgDgBg");
	this.shape_1.setTransform(0.6,51.8,1.27,1.07,0,0,0,0,-0.9);

	this.addChild(this.shape_1,this.shape,this.DropArea);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100.3,0,196.7,116.7);


(lib.scale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"leftFall":1,"rightFall":11,"even":22});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(11).call(this.frame_21).wait(38).call(this.frame_59));

	// Layer 2
	this.instance = new lib.scaleMiddle();
	this.instance.setTransform(147.3,30.7,1,1,0,0,0,46.8,125.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(60));

	// top
	this.instance_1 = new lib.scaleTop("synched",0);
	this.instance_1.setTransform(146.5,-31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:145.8},1).to({rotation:12,x:148},9).to({rotation:0,x:148.1},1).to({rotation:-10.8,x:146.6},10).to({rotation:0,x:148},1).to({rotation:4,x:150.2},9).to({rotation:-2.3,x:148.8},12,cjs.Ease.get(-0.99)).to({rotation:1,x:150.2},8).to({rotation:0,x:149.5},8).wait(1));

	// right scale
	this.scaleSeatRight = new lib.scaleSeat();
	this.scaleSeatRight.setTransform(339.4,15.9,1,1,0,0,0,79,41.6);

	this.timeline.addTween(cjs.Tween.get(this.scaleSeatRight).wait(1).to({x:338.7,y:36.6,mode:"synched",startPosition:0},9).to({x:341.7,y:15.9},1).to({x:340.7,y:-4.9},10).to({x:342.7,y:15.9},1).to({y:22.9},9).to({x:341.7,y:11.4},12,cjs.Ease.get(-0.99)).to({x:342.7,y:17.8},8).to({y:15.9},8).wait(1));

	// left scale
	this.scaleSeatLeft = new lib.scaleSeat();
	this.scaleSeatLeft.setTransform(106.9,15.9,1,1,0,0,0,79,41.6);

	this.timeline.addTween(cjs.Tween.get(this.scaleSeatLeft).wait(1).to({x:109.1,y:-7.7,mode:"synched",startPosition:0},9).to({y:15.9},1).to({y:36},10).to({y:15.9},1).to({y:8.9},9).to({y:20.9},12,cjs.Ease.get(-0.99)).to({y:13.6},8).to({y:15.9},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9270401,-78,9270595.1,200.5);


(lib.plate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22).call(this.frame_22));

	// arrow
	this.instance = new lib.arrow();
	this.instance.setTransform(3.6,68.1,1,1,0,0,0,17,15.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:13.5,y:58.7},7).to({x:3.6,y:68.1},7).to({x:13.5,y:58.7},7).wait(1));

	// Layer 1
	this.text = new cjs.Text("Place the jewel here", "12px Muli", "#BDBDBD");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 175;
	this.text.setTransform(101.8,-14.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(163,104,122,0.008)").s().p("AjmCnQgzhJADhHQACglAigRIAbgNQAQgKAHgMQAMgTAEgMQABgEAKgIQASgQAqguQA0gGA4gCQBzgDAcAaIAoAkQAdAaASAWQA1A/gJA9QgOBYgBADQgMAXg5gFQgggDghgGQgvgKgUgDQgRgDgNAJQgZASgGADQgfAOg8AAQg4AAhTgNg");
	this.shape.setTransform(104.3,34.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("AskKMQhhhHhChQIAAvpQBChRBhhHQExjeGuAAQGsAAExDeQEwDeAAE6QAAA8gLA4QALA4AAA8QAAE6kwDeQkxDfmsAAQmuAAkxjfgAg+DmQg6ACg0AGQgqAugSAQQgKAIgBAEQgDAMgNATQgHAMgPAKIgcANQgiARgBAnQgEBHAzBJQCqAaA9gbQAHgDAZgSQAOgJAQADQASADAvAKQAiAGAfADQA5AFAMgXQACgDAOhYQAIg/g0g/QgTgWgcgaIgpgkQgZgXhdAAIgXAAg");
	this.shape_1.setTransform(111,-6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.1,-94.1,193.8,175.1);


(lib.endMessage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Correct:1,CorrectBut:2,Wrong:3,CorrectLvl2:4,WrongLvl2:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// notices
	this.text = new cjs.Text("You solved the puzzle.", "42px Muli", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 44;
	this.text.lineWidth = 488;
	this.text.setTransform(-0.9,-80.9);

	this.text_1 = new cjs.Text("Next\nLevel", "50px Muli");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 52;
	this.text_1.lineWidth = 222;
	this.text_1.setTransform(166.7,11.4);

	this.text_2 = new cjs.Text("Play Again", "50px Muli");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 52;
	this.text_2.lineWidth = 222;
	this.text_2.setTransform(-183.8,10);

	this.NextLevel = new lib.button();
	this.NextLevel.setTransform(168.7,72.9,1,1,0,0,0,144,73.5);

	this.TryAgain = new lib.button();
	this.TryAgain.setTransform(-178.9,72.9,1,1,0,0,0,144,73.5);

	this.text_3 = new cjs.Text("Solved!", "96px Muli", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 98;
	this.text_3.lineWidth = 604;
	this.text_3.setTransform(-16.8,-187.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("EhCnAqQMAAAhUfMCFPAAAMAAABUfg");
	this.shape.setTransform(-4.4,9.7);

	this.TryAgain_1 = new lib.button();
	this.TryAgain_1.setTransform(-166.4,90.1,1,1,0,0,0,144,73.5);

	this.Finish = new lib.button();
	this.Finish.setTransform(-166.4,90.1,1,1,0,0,0,144,73.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{x:-4.4,y:9.7}},{t:this.text_3,p:{x:-16.8,y:-187.2,text:"Solved!",lineWidth:604}},{t:this.TryAgain,p:{x:-178.9,y:72.9}},{t:this.NextLevel,p:{x:168.7,y:72.9}},{t:this.text_2,p:{x:-183.8,y:10,text:"Play Again",lineWidth:222}},{t:this.text_1,p:{x:166.7,y:11.4,text:"Next\nLevel",font:"50px Muli",color:"#000000",lineHeight:52,lineWidth:222}},{t:this.text,p:{x:-0.9,y:-80.9,text:"You solved the puzzle.",lineWidth:488,font:"42px Muli",color:"#FFFFFF",lineHeight:44}}]},1).to({state:[{t:this.shape,p:{x:-4.4,y:9.7}},{t:this.text_3,p:{x:-17.8,y:-197.2,text:"Correct",lineWidth:604}},{t:this.TryAgain,p:{x:-175.9,y:113.9}},{t:this.NextLevel,p:{x:161.7,y:113.9}},{t:this.text_2,p:{x:-180.8,y:51,text:"Try\nAgain",lineWidth:222}},{t:this.text_1,p:{x:159.7,y:52.4,text:"Next\nLevel",font:"50px Muli",color:"#000000",lineHeight:52,lineWidth:222}},{t:this.text,p:{x:-11,y:-85.9,text:"You found the jewel, but did you solve the puzzle?",lineWidth:488,font:"42px Muli",color:"#FFFFFF",lineHeight:44}}]},1).to({state:[{t:this.shape,p:{x:-4.4,y:9.7}},{t:this.TryAgain,p:{x:-170.9,y:110.3}},{t:this.text_3,p:{x:-9.2,y:-185.2,text:"Wrong",lineWidth:686}},{t:this.text_2,p:{x:-171.9,y:48.8,text:"Try \nAgain",lineWidth:128}},{t:this.NextLevel,p:{x:173.5,y:110.3}},{t:this.text_1,p:{x:171.5,y:48.8,text:"Next\nLevel",font:"50px Muli",color:"#000000",lineHeight:52,lineWidth:222}},{t:this.text,p:{x:2.8,y:-65,text:"Why don't you try again?",lineWidth:594,font:"42px Muli",color:"#FFFFFF",lineHeight:44}}]},1).to({state:[{t:this.shape,p:{x:0,y:0.5}},{t:this.text_3,p:{x:-13.2,y:-206.4,text:"Correct",lineWidth:604}},{t:this.TryAgain,p:{x:-167.3,y:104.7}},{t:this.text_2,p:{x:-176.2,y:43.2,text:"Try\nAgain",lineWidth:222}},{t:this.text_1,p:{x:-6.5,y:-95.1,text:"You found the jewel, but did you solve the puzzle?",font:"42px Muli",color:"#FFFFFF",lineHeight:44,lineWidth:488}},{t:this.NextLevel,p:{x:181,y:104.7}},{t:this.text,p:{x:175.5,y:71.2,text:"Finish",lineWidth:222,font:"50px Muli",color:"#000000",lineHeight:52}}]},1).to({state:[{t:this.Finish},{t:this.shape,p:{x:0,y:0.5}},{t:this.TryAgain_1},{t:this.TryAgain,p:{x:-166.4,y:90.1}},{t:this.text_3,p:{x:-4.7,y:-194.4,text:"Wrong",lineWidth:686}},{t:this.text_2,p:{x:-167.4,y:28.6,text:"Try \nAgain",lineWidth:128}},{t:this.text_1,p:{x:7.3,y:-74.2,text:"Why don't you try again?",font:"42px Muli",color:"#FFFFFF",lineHeight:44,lineWidth:594}},{t:this.NextLevel,p:{x:164.6,y:90.1}},{t:this.text,p:{x:159,y:56.6,text:"Finish",lineWidth:222,font:"50px Muli",color:"#000000",lineHeight:52}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;