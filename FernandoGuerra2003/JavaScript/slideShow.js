var myImage=document.getElementById("Potato");

var imageArray=["apple.jpg","pear.jpg","tomato.jpg","Steve.jpg","banana.jpg"];

var imageIndex=0;

function changeImage () {
	Potato.setAttribute("src", imageArray [ imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length) {
		imageIndex=0;

	}

}

var intervalHandle = setInterval(changeImage,2000);

Potato.onclick=function() {
	clearInterval(intervalHandle);

};

