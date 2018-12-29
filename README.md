# image-preview-react

# Description
simple preview for image with a input file

[https://github.com/lart2000/image-preview-react](https://github.com/lart2000/image-preview-react)

# Example
```JSX
	import  React,  {  Component,  createElement  }  from  'react';
	import  ImageLoad  from  "image-preview-react";
	
   export  default  class  hola  extends  Component  {
	   constructor(props)  {
		   super(props);
		   this.refButton  =  React.createRef();
		   this.refImage  =  React.createRef();
	   }
	   componentDidMount()  {
		   ImageLoad({ button:  this.refButton, image:  this.refImage  });
	   }
	   render()  {
		   return (
			<div  className="container">
			   <img  src=""  alt=""  ref={this.refImage} />
			   <input  type="file"  name=""  id=""  ref={this.refButton}/>
			</div>
			)
		}
	}
```
