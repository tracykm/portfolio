
function checkSolution(fall){
	var log = document.getElementById("log");

	var leftNum = leftScaleRocks.length;
	var rightNum = rightScaleRocks.length;


	// CHECK IF ON RIGHT PATH
	if(leftNum==rightNum && rightPath>-1){  // check they are even and haven't already failed
		var bothSideNum = leftNum;

		// *** *** *** LEVEL 1 *** *** *** 
		if(level==1){

			// *** TRY 1 ***
			if(tries==1){
				if(bothSideNum==3){
					rightPath++;
					if(fall=="left"){
						possGroup = leftScaleRocks.slice(0);
					}else if(fall=="right"){
						possGroup = rightScaleRocks.slice(0);
					}else{
						// hardcode full rock list in because var rocks= [] is not just numbers
						if(level==1){
							possGroup = [1,2,3,4,5,6,7,8,9];
						}else if(level==2){
							possGroup = [1,2,3,4,5,6,7,8,9,10,11,12];
						}
						for(var i=0; i<bothSideNum; i++){
							var index = possGroup.indexOf(leftScaleRocks[i]);
							possGroup.splice(index,1);
							var index = possGroup.indexOf(rightScaleRocks[i]);
							possGroup.splice(index,1);
						}

					}
					//log.innerHTML = possGroup;

					
				}else{
					rightPath=-10;
				}

			// *** TRY 2 ***
			}
			if(tries==2){
				if(leftNum==1){
					if(possGroup.indexOf(leftScaleRocks[0])!=-1 && possGroup.indexOf(rightScaleRocks[0])!=-1){

					rightPath++;
					}
				}else{
					rightPath=-10;
				}
			}
		}

		// *** *** *** LEVEL 2 *** *** *** 
		if(level==2){

			// *** TRY 1 ***
			if(tries==1){
				if(bothSideNum==4){
					rightPath++;
					if(fall=="left"){
						for(var i=0; i<bothSideNum; i++){
							leftScaleRocks[i].possWeight="heavy";
						}
						for(var i=0; i<bothSideNum; i++){
							rightScaleRocks[i].possWeight="light";
						}

					}else if(fall=="right"){
						for(var i=0; i<bothSideNum; i++){
							rightScaleRocks[i].possWeight="heavy";
						}
						for(var i=0; i<bothSideNum; i++){
							leftScaleRocks[i].possWeight="light";
						}
					}else{
						if(level==1){
							possGroup = [1,2,3,4,5,6,7,8,9];
						}else if(level==2){
							possGroup = [1,2,3,4,5,6,7,8,9,10,11,12];
						}
						for(var i=0; i<bothSideNum; i++){
							var index = possGroup.indexOf(leftScaleRocks[i]);
							possGroup.splice(index,1);
							var index = possGroup.indexOf(rightScaleRocks[i]);
							possGroup.splice(index,1);
						}
					}
				}
			}
			// *** TRY 2 ***
			if(tries==2){
				if(bothSideNum==3){
					var leftWeight = 0;
					var rightWeight = 0;
					var totalPoss = 0;

					for(var i=0; i<leftNum; i++){
						r = leftScaleRocks[i];
						if(fall == "left")
						{
							if(r.possWeight == "heavy")
							{
								possGroup.push(r);
								totalPoss++;
							}
						}
						if(fall == "right")
						{
							if(r.possWeight == "light")
							{
								possGroup.push(r);
								totalPoss++;
							}
						}
					}

					for(var i=0; i<leftNum; i++){
						r = rightScaleRocks[i];
						if(fall == "right")
						{
							if(r.possWeight == "heavy")
							{
								possGroup.push(r);
								totalPoss++;
							}
						}
						if(fall == "left")
						{
							if(r.possWeight == "light")
							{
								possGroup.push(r);
								totalPoss++;
							}
						}
					}


					if(totalPoss<=3){
						rightPath++;
					}
				}
			}
			if(tries==3){

			}
		}
	}else{
		rightPath=-10;
	}


}