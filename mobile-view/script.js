var loop=document.querySelectorAll(".loop");

var box=document.querySelectorAll(".box");




box[0].style.zIndex=3;




for(var i=0;i<loop.length;i++){

	loop[i].addEventListener('click',function(){

		for(var j=0;j<loop.length;j++){

			loop[j].style.background= "rgba(150,150,150,0.5)";

			box[j].style.zIndex=2;

		}

		var idNo=this.id;

		this.style.background="rgba(30,30,30,0.9)";

		box[idNo].style.zIndex=3;

	})

} 
