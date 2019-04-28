var update, offset;
var first = true;
function Rock(x,y,type) {
	this.initialize();

	this.rock = new lib.rock();
	this.number = rocks.length+1;
	this.rock.RockNumber.text = rocks.length+1;
	this.rock.setTransform(0,0,1,1);

	this.rock.gotoAndStop(1);

	this.addChild(this.rock);

	this.x = x;
	this.y = y;

	this.onScale = false;

	this.selected = false;

	this.orderOnScale = 0;


	this.type = type;
	if(type!="regular"){
		//this.rock.gotoAndStop(0);
		var num = rocks.length+1;
		//this.rock.RockNumber.text = num+"*";
	}
}

Rock.prototype = p = new createjs.Container();

Rock.prototype.clicked = function() {
	if(this.selected){
		this.selected = false;
		this.rock.gotoAndStop(1);
	}else{
		this.selected = true;
		this.rock.gotoAndStop(0);
	}

}

Rock.prototype.addRocktoScale = function(scale){
	if(scale == right){
		rightScaleRocks.push(this.number);
		rightScale_RealRocks.push(this);
	}else if(scale == left){
		leftScaleRocks.push(this.number);
		leftScale_RealRocks.push(this);
	}

	this.clicked();
	this.onScale = true;
	this.rock.setTransform(0,0,.75,.75);

	scale.addChild(this);
	scale.numRocks ++;

	if(this.type=="special"){
		var weightOffset = .125;
		if(levelType!="plus"){
			var weightOffset = -.125;
		}
		scale.numRocks += weightOffset;
	}
	var numRocks = Math.round(scale.numRocks);
	this.orderOnScale = numRocks;

		rearrangeRocks(scale);


	this.y = 65;
	moved = true;
}

Rock.prototype.removeRockFromScale = function(){
	if(this.parent == right){
		var index = rightScaleRocks.indexOf(this.number);
		if(index>-1){
			rightScaleRocks.splice(index,1);
			rightScale_RealRocks.splice(index,1);
		}
	}else if(this.parent == left){
		var index = leftScaleRocks.indexOf(this.number);
		if(index>-1){
			leftScaleRocks.splice(index,1);
			leftScale_RealRocks.splice(index,1);
		}
	}


	sParent = this.parent;

	sParent.numRocks -= 1;

	if(this.type=="special"){
		sParent.numRocks = sParent.numRocks - .125;
		if(levelType!="plus"){
			sParent.numRocks += .25;
		}
	}
	/* Fix the posistion, now that it's realive to a new parent */
	this.y += sParent.parent.y+sParent.y-100;
	this.x += sParent.parent.x+sParent.x*1.3-300;

	sParent.removeChild(this);
	this.rock.setTransform(0,0,1,1);
	exportRoot.addChildAt(this,stage.getNumChildren()+3);
	
	this.onScale = false;
	this.orderOnScale = 0;
	//alert(sParent.numRocks);
//	this.clicked();

	/*if(left.numRocks==0 && right.numRocks==0){
		scaleEmpty();
	}*/
}

function rearrangeRocks(scale){
	var width = 90;
	var myScaleRocks = [];
	if(scale==left){
		myScaleRocks = leftScale_RealRocks;
	}else{
		myScaleRocks = rightScale_RealRocks;
	}
	var offset = width/myScaleRocks.length;

	for(var i = 0; i < myScaleRocks.length; i++){
		var r = myScaleRocks[i];
		r.x = offset*i-50;
	}
}



Rock.prototype.update = function(){
	var pt = left.globalToLocal(this.x, this.y);
	var pt2 = right.globalToLocal(this.x, this.y);

	var ptPlateTest = plate.globalToLocal(this.x, this.y);

	if(left.hitTest(pt.x,pt.y)){ // if on leftScale
		this.addRocktoScale(left);

	}else if(right.hitTest(pt2.x,pt2.y)){ // if on rgithScale
		this.addRocktoScale(right);

	}else if(plate.hitTest(ptPlateTest.x,ptPlateTest.y)){ // if on plate
		this.break();

	}else{ // if not on anything unclick to remove moving highlight
		this.clicked();
	}
}


Rock.prototype.onMouseOver = function(){
	this.cursor = "pointer";
}


Rock.prototype.break = function(){
	var end = document.getElementById("endScreen");
	if(this.type!="regular"){
		this.rock.gotoAndPlay("firstJewelFrame");
		setTimeout(function(){
			if(level==1){
				if(rightPath==(level+1)){
					endMessage.gotoAndStop("Correct");
				}else{
					endMessage.gotoAndStop("CorrectBut");
				}
			}else{
				endMessage.gotoAndStop("CorrectLvl2");
			}

		},800);
	}else{
		this.rock.gotoAndPlay(2);
		setTimeout(function(){
			if(level==1){
				endMessage.gotoAndStop("Wrong");
			}else{
				endMessage.gotoAndStop("WrongLvl2");
			}
		},800);
	}
}

