var loop=document.querySelectorAll(".loop");

var box=document.querySelectorAll(".box");




box[0].style.zIndex=3;




for(var i=0;i<circle.length;i++){

	circle[i].addEventListener('click',function(){

		for(var j=0;j<circle.length;j++){

			circle[j].style.background= "rgba(150,150,150,0.5)";

			box[j].style.zIndex=2;

		}

		var idNo=this.id;

		this.style.background="rgba(30,30,30,0.9)";

		box[idNo].style.zIndex=3;

	})

} 
