var oBox = document.getElementById('box');
var oSmall = document.getElementById('small_img');//小图区域
var oBig = document.getElementById('big_img');//大图区域
var oMark = document.getElementsByClassName('mark')[0];//遮罩层
var oFloat = document.getElementsByClassName('float')[0];//移动小方块
var oBigImg = oBig.getElementsByTagName('img')[0];//大图
//给遮罩添加移入事件
oMark.onmouseover = function(){
  oFloat.style.display = 'block';
  oBig.style.display = 'block';
}
//给遮罩添加移出事件
oMark.onmouseout = function(){
  oFloat.style.display = 'none';
  oBig.style.display = 'none';
}
//给遮罩添加移动事件
oMark.onmousemove = function(ev){
  var e = ev || window.event;
  var l = e.clientX - oBox.offsetLeft - oSmall.offsetLeft - oFloat.offsetWidth / 2;
  var t = e.clientY - oBox.offsetTop - oSmall.offsetTop - oFloat.offsetHeight / 2;
  //设置边界
  if(l < 0){
    l = 0;
  }else if(l > oMark.offsetWidth - oFloat.offsetWidth){
    l = oMark.offsetWidth - oFloat.offsetWidth;
  }
  if(t < 0){
    t = 0;
  }else if(t > oMark.offsetHeight - oFloat.offsetHeight){
    t = oMark.offsetHeight - oFloat.offsetHeight;
  }
  oFloat.style.left = l + 'px';
  oFloat.style.top = t + 'px';
  //小图移动比例
  var x = l / (oMark.offsetWidth - oFloat.offsetWidth);
  var y = t / (oMark.offsetHeight - oFloat.offsetHeight);
  //大图活动区域
  oBigImg.style.left = -x * (oBigImg.offsetWidth - oBig.offsetWidth) + 'px';
  oBigImg.style.top = -y * (oBigImg.offsetHeight - oBig.offsetHeight) + 'px';
}