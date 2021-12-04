//lắng nghe thông tin từ nội dung trong iframe để xử lý url của iframe hay thao tác khác
window.addEventListener("storage", myFunction);

function myFunction(event) {
  var str = localStorage.getItem("mytime");
  localStorage.removeItem("mytime");
  
  var arr = str.split("|");
  if (arr[1] == "c") {
    //document.getElementById("myFrame").src = arr[2];
    
    document.getElementById("myFrame").contentWindow.location.replace(arr[2]);
  }

}

function changeValue() {
  localStorage.setItem("mytime", Date.now() + "|" + "p" + "|" + "giatri truyen tai day");
}
