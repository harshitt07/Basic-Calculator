function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function findValue() {  
  var str = eval(document.form.textview.value);
  if(str) {
    document.form.textview.value = str;
  }
}

function clearAll() {
  document.form.textview.value = "";
}

function backspace() {
  var str = document.form.textview.value;
  var length = str.length;
  document.form.textview.value = str.substr(0, length - 1);
}