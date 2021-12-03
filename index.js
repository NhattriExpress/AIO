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
var exec = "https://script.google.com/macros/s/AKfycbw8MfEDiLd4GRkWVHDxaiqZlmKSbhDOHpcGX2Xc0FpanBUtxMY/exec";


    window.addEventListener("load",function() {
	    
        var str = window.location.href;
	var action = str.split("?")[1];
	if (action){
	   str = "?action=" + action;
	} else {
	   str = "?embedIframe";
	}	
	
	    
	    //document.getElementById("myFrame").src = "https://script.google.com/macros/s/AKfycby7xOajlwfyrlDp0vR-3mxXC5O95s5uPbh3cz8C/exec" + str;
	    var ifr = document.getElementById("myFrame");
	    //ifr.contentWindow.location.replace("https://script.google.com/macros/s/AKfycbw8MfEDiLd4GRkWVHDxaiqZlmKSbhDOHpcGX2Xc0FpanBUtxMY/exec" + str); 
	    ifr.src = "https://script.google.com/macros/s/AKfycbw8MfEDiLd4GRkWVHDxaiqZlmKSbhDOHpcGX2Xc0FpanBUtxMY/exec" + str;
		//alert(document.getElementById("myFrame").localStorage.getItem("QQQ"));
        });


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

/*
function authSuccess(email){
        console.log(email);
        // Hide auth prompt overlay
        document.querySelector('.loggedOut').style.display = 'none';
    }
    document.querySelectorAll('.authButton').forEach(function(elem){
        elem.addEventListener('click',function(evt){
            var currentUrl = document.location.href;
            var authPage = 'https://script.google.com/macros/s/AKfycbw8MfEDiLd4GRkWVHDxaiqZlmKSbhDOHpcGX2Xc0FpanBUtxMY/exec?auth=true&redirect=' + encodeURIComponent(currentUrl);
            window.open('authPage','_blank');
        });
    });




	  //peer_id.value = "Q";
	  //your_id.value = "T";
	  //receiveLooptest();
	  
    // Receive-loop
	  
	  async function receiveLoop(btn) {
      your_id.disabled = peer_id.disabled = btn.disabled = true;
      while(loop==true) {
        try {
          // Get peer's response
          const res = await fetch(`https://ppng.io/${peer_id.value}-${your_id.value}`);
          // Create talk element
          const talk = document.createElement('div');
          // Set peer's message
          talk.innerText = await res.text();
          var str = await res.text();
          str = CryptoJS.AES.decrypt(str, "22041976");
          str = str.toString(CryptoJS.enc.Utf8)

          talk.innerText = str;
          // Add peer's message
          talks.appendChild(talk);
            
          //sendMessage('' + str);  
            
        } catch(err) {
          console.error(err);
        }
      }
    }

    // Send your message
    function send() {
      // Send your message
      var str = CryptoJS.AES.encrypt(message.value, "22041976");
      fetch(`https://ppng.io/${your_id.value}-${peer_id.value}`, {
        'method': 'POST',
        body: str
        //body: message.value
      });
      // Create talk element
      const talk = document.createElement('div');
      talk.innerText = message.value;
      talk.classList.add('me');
      talks.appendChild(talk);
      // Empty your message
        //alert(message.value);
      message.value = '';
    }
    */


//lắng nghe thông tin từ nội dung trong iframe để xử lý url của iframe hay thao tác khác
window.addEventListener("storage", myFunction);

function myFunction(event) {
  var str = localStorage.getItem("mytime");
  localStorage.removeItem("mytime");
  
  var arr = str.split("|");
  if (arr[1] == "c") {
    document.getElementById("myFrame").src = arr[2];
  }

}

function changeValue() {
  localStorage.setItem("mytime", Date.now() + "|" + "p" + "|" + document.getElementById("fname").value);
}
