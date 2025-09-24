//your JS code here. If required.
let changeBtn = document.getElementById("change_button");
let resetBtn = document.getElementById("Reset");
let gridContainer = document.getElementById("grid-container");
let gridItem = document.querySelectorAll(".grid-item");
let blockId = document.getElementById("block_id").value;
let color = document.getElementById("colour_id").value;

changeBtn.addEventListener("click", () => {
	gridItem.forEach(item =>{
		item.style.backgroundColor = "transparent";
	})

	if(blockId>= 1 && blockId<=9){
		color.style.backgroundColor = color;
	}else{
		alert("Enter valid number");
	}
})
resetBtn.addEventListener("click", () => {
	item.forEach(item => {
		item.style.backgroundColor = "transparent";
	})
	blockId.value= "";
	color.value="";
})