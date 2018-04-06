
var desc = document.querySelectorAll('.frm-control')[0];
var type = document.querySelectorAll('.frm-control')[1];
var amount = document.querySelectorAll('.frm-control')[2];
var button = document.querySelectorAll('.frm-control')[3];
var label, labelText, tr, td, typeText, amountText;
var conf, td1, td2, td3, td4, garbagecan;
var tBody = document.querySelector('tBody');
var gcan = 'exit';
var italics;
var deleteButton;
var totalcredits;


button.addEventListener('click', function buttons(evt) {
    // This captures the values
    desc = document.querySelectorAll('.frm-control')[0].value;
    type = document.querySelectorAll('.frm-control')[1].value;
    
    amount = document.querySelectorAll('.frm-control')[2].value;
    var numbers = new Number(amount);
    
    // create the elements i need
    tr = document.createElement('tr');
    td1 = document.createElement('td');
    td2 = document.createElement('td');
    td3 = document.createElement('td');
    td4 = document.createElement('td');
    italics = document.createElement('i');
    labelText = document.createTextNode(desc);
    typeText = document.createTextNode(type);
    amountText = document.createTextNode(numbers);
    garbagecan = document.createTextNode(gcan);
    //totalcredits = document.createTextNode(amountText);

    //remove text first
    // var totalCredit = document.querySelector('.credits');
    // var parTotalCredit = totalCredit.parentNode;
    // parTotalCredit.removeChild(totalCredit);

    //text node for number
    // totalcredits = document.createTextNode(numbers);
    // parTotalCredit.appendChild(amountText);

    // add classes
    if (type === 'debit'){
        tr.classList.add('debit');
    }
    if (type === 'credit') {
        tr.classList.add('credit');
    }
    td1.appendChild(labelText);
    td2.appendChild(typeText);
    td3.appendChild(amountText);
    td3.classList.add('amount');

    //tools
    italics.classList.add('delete');
    italics.classList.add('fa');
    italics.classList.add('fa-trash-o');
    td4.appendChild(italics);
    td4.classList.add('tools');
    
    //append to body now
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tBody.appendChild(tr);

    //replace the totals headings
    //
    
    evt.preventDefault();
});

deleteButton = document.querySelector('.transactions');
deleteButton.addEventListener('click', function deleteMe(evt) {
    var targetTodo = evt.target.parentNode;
    var todoList = targetTodo.parentNode;
    var up = todoList.parentNode;
    if (evt.target.classList.contains('delete')) {
        conf = confirm('Would you Like to remove?');
        if (conf == true) {
            up.removeChild(todoList);
        } else {
            console.log('OK Thanks, I wont delete this thing anymore');
        }
    }
});