document.getElementById('button').addEventListener('click', addRow);

function addRow(){
var row = document.createElement('tr');
addCellWithCheckbox(row,'checkmark-button');
addCellWithParagraph(row,);
addCellWithDelateButton(row,'remove-button');
table.appendChild(row);
}

function addCellWithDelateButton(row, newClass) {
  var newCell = document.createElement('td');
  var button = document.createElement('button');
  button.innerText = 'X';
  button.addEventListener('click', function(){
  table.removeChild(row);
  })
  button.classList.add(newClass);
  newCell.appendChild(button);
  row.appendChild(newCell);
}

function addCellWithParagraph(row, newClas) {
  var newCell = document.createElement('td');
  var text = document.createElement('p');
  text.classList.add(newClas);
  var product = document.getElementById('product').value;
  text.innerHTML = product;
  newCell.appendChild(text);
  row.appendChild(newCell);
}

function addCellWithCheckbox(row) {
  var newCell = document.createElement('td');
  var button = document.createElement('button');
  button.classList.add('checkmark-button');
  button.addEventListener('click', function(){
  var paragraph = row.querySelector('p');
  paragraph.classList.add('deletion');
  button.classList.add('full');
  })
  newCell.appendChild(button);
  row.appendChild(newCell)
  table.appendChild(row);
}










