function storeSticky(id) {
  var scribble = $("#postit").text();
  localStorage.setItem('userScribble',scribble);
}

function getSticky() {
  if ( localStorage.getItem('userScribble')) {
    var scribble = localStorage.getItem('userScribble');
  }
  else {
    var scribble = 'You can scribble directly on this sticky...and I will also remember your message the next time you visit!';
  }
  document.getElementById('postit').innerHTML = scribble;
}

function clearStorage() {
  clear: localStorage.clear(); 
  return false;
}