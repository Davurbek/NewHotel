// // var element = document.getElementsByTagName("h1");
// // console.log(element);
// // element[0].innerHTML = "<p>Bu paragraphg. Men innerHTMLdan keldim</p>";

// // element[1].innerText = "<p>Bu paragraphg. Men innerTextdan keldim</p>";

var myHs = document.getElementsByClassName("davron");

// console.log(myHs);

// // myHs[0].style.fontSize = "35px";
// // myHs[0].style.background = "#000000";
// // myHs[0].style.color = "#ffffff";

// // myHs[1].style.fontSize = "35px";
// // myHs[1].style.background = "#000000";
// // myHs[1].style.color = "#ffffff";

for (let i = 0; i < myHs.length; i++) {
  console.log("ining qiymati: " + i);
  myHs[i].style.fontSize = "35px";
  myHs[i].style.background = "#000000";
  myHs[i].style.color = "#ffffff";
}

// // document.getElementById("demo")
// // document.getElementById("demo")
// // document.getElementById("demo").style.color = "#ffffff";

