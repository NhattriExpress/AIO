 //Disable get code
        //DISABLE RIGHT-CLICK
        document.addEventListener("contextmenu", function(e){
            e.preventDefault();
        }, false);

        //DISABLE “VIEW SOURCE” SHORTCUT KEY
        document.addEventListener("keydown", function(e){
        // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
        // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
        // THIS WILL ONLY DISABLE CONTROL AND F12
            if (e.ctrlKey || e.keyCode==123) {
                e.stopPropagation();
                e.preventDefault();
            }
        });

function preventPullToRefresh(element) {
	var prevent = false;
	document.querySelector(element).addEventListener('touchstart', function(e){
	if (e.touches.length !== 1) { 
		return; 
	}

                

                var scrollY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
                prevent = (scrollY === 0);
		    });

			document.querySelector(element).addEventListener('touchmove', function(e){

                if (prevent) {
                   
                    prevent = false;
                    e.preventDefault();
                }
			});
		  }

        
        //Disable get code

document.addEventListener("touchstart", function(e){

        if(e.touches.length > 1){
                //the event is multi-touch
                //you can then prevent the behavior
                e.preventDefault();
        } 
    },{passive: false});
      
    preventPullToRefresh('html'); // pass #id or html tag into the method

function Lock(IDName,status) {
	document.getElementById(IDName).style.display = status;
}



var wi = window.innerWidth;
var hi = window.innerHeight;



var eventMethod = window.addEventListener
			? "addEventListener"
			: "attachEvent";
	var eventer = window[eventMethod];
	var messageEvent = eventMethod === "attachEvent"
		? "onmessage"
		: "message";

	eventer(messageEvent, function (e) {
		
		//if (e.origin !== 'https://meomaymap.github.io') return;
		
		if (e.data === "myevent" || e.message === "myevent") 
			alert('Message from iframe just came!');

			//alert(e.message);
		
		//console.log(e);
	});




//window.addEventListener("storage", myFunction);

//function myFunction(event) {
//  alert(localStorage.getItem("QQQ"));
//}


let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


