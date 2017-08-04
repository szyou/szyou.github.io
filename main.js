var links = ["https://pic.pimg.tw/gaeabooks/1470219983-4115526200_n.jpg",

"http://pic.pimg.tw/bookspring/1407213783-552453531.jpg",

"https://www.myacg.com.tw/goods_images/goods_pic1_71316590_20160425201559.jpg",

"http://pics18.yamedia.tw/40/userfile/g/guilt/blog/1511bab6c8c655.jpg",
"http://pic.eslite.com/Upload/Product/201211/m/634889970550470928.jpg"
];

var titles = ["春秋異聞1", "聖銀幻想曲5", "神使繪卷-番外", "妄想異聞錄-異界篇", "城隍4"];
var index = 0
var autoplay = true;

function nextPic() {
  console.log("nextPic: " + index);
  var img =   document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
}

function prevPic() {
  console.log("nextPic: " + index);
  var img =     document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
  let title = document.getElementById("title");
  title.innerHTML = titles[index % links.length];
  console.log(title);
  if(autoplay) {
    setTimeout(nextPic, 3000);
  }
}

if(autoplay) {
    setTimeout(nextPic, 3000);
}
