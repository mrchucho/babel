var OrthographicSymbols = [
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '~', '.', ' '
];

function pageHeader() {
  var header = document.createElement('p');
  header.setAttribute('class', 'header');
  header.innerHTML = '1';
  return header;
}

function page() {
  var page = document.createElement('div');
  page.setAttribute('class', 'page');
  for(l = 0; l < 40; l++) {
    var line = '';
    for(letter = 0; letter < 80; letter++) {
      line += OrthographicSymbols[Math.floor(Math.random() * OrthographicSymbols.length)];
    }
    var node = document.createElement('P');
    node.appendChild(document.createTextNode(line));
    page.appendChild(node);
  }
  return page;
}
// page number
// if 1, no prev
// back to shelf
// if 410, no next
function pageFooter() {
  var footer = document.createElement('div');
  footer.setAttribute('class', 'footer');

  var prev = document.createElement('A');
  prev.setAttribute('href', 'page.html#');
  prev.innerHTML = 'prev';
  footer.appendChild(prev);

  var back = document.createElement('A');
  back.setAttribute('href', 'shelf.html');
  back.innerHTML = 'back';
  footer.appendChild(back);

  var next = document.createElement('A');
  next.setAttribute('href', 'page.html#');
  next.innerHTML = 'next';
  footer.appendChild(next);

  return footer;
}
function wall() {
  var wall = document.createElement('table');
  for(s = 0; s < 5; s++) {
    var shelf = document.createElement('tr');
    for(b = 0; b < 32; b++) {
      var book = document.createElement('td');
      var linkToBook = document.createElement('a');
      linkToBook.setAttribute('href', 'page.html#' + s + ',' + b);
      linkToBook.innerHTML = 
        "<span class='rotate book'>" + letter() + "</span>" +
        "<span class='rotate book'>" + letter() + "</span>" +
        "<span class='rotate book'>" + letter() + "</span>" +
        "<span class='rotate book'>" + letter() + "</span>" +
        "<span class='rotate book'>" + letter() + "</span>";

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
