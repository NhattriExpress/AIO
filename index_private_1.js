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
	    
		//alert(document.getElementById("myFrame").localStorage.getItem("QQQ"));
      
      //ifr.src = "https://script.google.com/macros/s/AKfycbw8MfEDiLd4GRkWVHDxaiqZlmKSbhDOHpcGX2Xc0FpanBUtxMY/exec" + str;
      ifr.contentWindow.location.replace("https://script.google.com/macros/s/AKfycbw8MfEDiLd4GRkWVHDxaiqZlmKSbhDOHpcGX2Xc0FpanBUtxMY/exec" + str);
        });

//lắng nghe thông tin từ nội dung trong iframe để xử lý url của iframe hay thao tác khác
window.addEventListener("storage", myFunction);

function myFunction(event) {
  var str = localStorage.getItem("mytime");
  localStorage.removeItem("mytime");
  
  var arr = str.split("|");
	alert(window.location.href + "    ---   " + arr[4]);
  if (arr[2] == "2") {
    //document.getElementById("myFrame").src = arr[2];
    if (arr[4] != window.location.href) {
    	document.getElementById("myFrame").contentWindow.location.replace("https://24h.com.vn");
    } else {
    	//set thông báo thành công về lại cho google page biết
    }
  }

}

function changeValue() {
  localStorage.setItem("mytime", Date.now() + "|" + "p" + "|" + "giatri truyen tai day");
}
