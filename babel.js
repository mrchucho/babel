var OrthographicSymbols = [
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '~', '.', ' '
];

// parse args
var args = document.location.search.split(',').map(function(e) {
  return parseInt(e.replace(/[^\d]/, ''));
});
var Hexagon = args[0] || 0;
var Wall    = args[1];
var Shelf   = args[3];
var Book    = args[4];
var Page    = args[5];

function pageHeader() {
  var header = document.createElement('p');
  header.setAttribute('class', 'header');
  header.innerHTML = Page || '~';
  return header;
}

function page() {
  var page = document.createElement('div');
  page.setAttribute('class', 'page');
  for(l = 0; l < 40; l++) {
    var line = '';
    for(ll = 0; ll < 80; ll++) {
      line += letter();
    }
    var node = document.createElement('P');
    node.appendChild(document.createTextNode(line));
    page.appendChild(node);
  }
  return page;
}

function pageFooter() {
  var footer = document.createElement('div');
  footer.setAttribute('class', 'footer');

  var prev = document.createElement('A');
  if(Page > 1) {
    prev.setAttribute('href', 'page.html?' + [Hexagon, Shelf, Book, Page-1].join(','));
  }
  prev.innerHTML = 'prev';
  footer.appendChild(prev);

  var back = document.createElement('A');
  back.setAttribute('href', 'shelf.html?' + [Hexagon, Shelf, Book].join(','));
  back.innerHTML = 'back';
  footer.appendChild(back);

  var next = document.createElement('A');
  if(Page < 410) {
    next.setAttribute('href', 'page.html?' + [Hexagon, Shelf, Book, Page+1].join(','));
  }
  next.innerHTML = 'next';
  footer.appendChild(next);

  return footer;
}

function wall() {
  var wall = document.createElement('TABLE');
  for(s = 0; s < 5; s++) {
    var shelf = document.createElement('TR');
    for(b = 0; b < 32; b++) {
      var book = document.createElement('TD');
      var linkToBook = document.createElement('A');
      linkToBook.setAttribute('class', 'spine');
      linkToBook.setAttribute('href', 'page.html?' + [Hexagon, s, b, 1].join(','));
      for(i = 0; i < 5; i++) {
        var spine = document.createElement('SPAN');
        spine.setAttribute('class',
          ['book', 'rotate90n'].join(' '));
        spine.innerHTML = letter();
        linkToBook.appendChild(spine);
      }
      book.appendChild(linkToBook);
      shelf.appendChild(book);
    }
    wall.appendChild(shelf);
  }
  return wall;
}

function letter() {
  return OrthographicSymbols[Math.floor(Math.random() * OrthographicSymbols.length)];
}
