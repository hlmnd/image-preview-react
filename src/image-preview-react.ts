import * as React from 'react'
export interface I{
	button: React.RefObject<any>,
	image : React.RefObject<any>,
	filter ?: Array<string> // lack of implementation
}
export default function ({button, image}:I){ // function impure
	button.current.addEventListener("change",(e : any)=>{
			let fileReader = new FileReader();
			let file = e.target.files[0];
			fileReader.onload = (e : any) => image.current.src= e.target.result;
			fileReader.readAsDataURL(file);	
	});
}

// function loadImage