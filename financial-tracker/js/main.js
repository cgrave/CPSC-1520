
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
var numbers;
var newnumbers;
var help;
var num2;

button.addEventListener('click', function buttons(evt) {
    // This captures the values
    desc = document.querySelectorAll('.frm-control')[0].value;
    type = document.querySelectorAll('.frm-control')[1].value;
    
    amount = document.querySelectorAll('.frm-control')[2].value;
    var e = document.querySelector('.debits').childNodes[0];
    newnumbers = new Number(amount);
    
    // get number from textnode num2 = num1;
    //HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    var textNumber = new Number(e);
    var num1 = newnumbers;
    
    var num3 = textNumber + num1;

    var addedNums = newnumbers.valueOf();// + numbers.valueOf();


    var totalNums = addedNums.toString();
    //  totalNums ='$' + totalNums; 
    totalNums = totalNums; 
    var total = document.createTextNode(totalNums);
    var tcSpan = document.createElement('span');
    tcSpan.appendChild(total);
    console.log(num3.valueOf());
    
    
    // create the elements i need
    tr = document.createElement('tr');
    td1 = document.createElement('td');
    td2 = document.createElement('td');
    td3 = document.createElement('td');
    td4 = document.createElement('td');
    italics = document.createElement('i');
    labelText = document.createTextNode(desc);
    typeText = document.createTextNode(type);
    amountText = document.createTextNode(amount);
    garbagecan = document.createTextNode(gcan);
    //totalcredits = document.createTextNode(amountText);

    

    //type cannot be empty
    if(type == ''){
        var err = document.querySelector('.error');
        var errSpan = document.createElement('span');
        //create text node
        var error = document.createTextNode('please select type');
        errSpan.appendChild(error);
        err.appendChild(errSpan);
        //use a replace here for something
        
    } else {
        if (type === 'debit') {
            tr.classList.add('debit');

            //select text first from credits

            var totalDebit = document.querySelector('.debits');
            var parTotalDebit = totalDebit.parentNode;

            //add class to new span
            tcSpan.classList.add('total');
            tcSpan.classList.add('debits');
            parTotalDebit.replaceChild(tcSpan, totalDebit);
            
        }
        if (type === 'credit') {
            tr.classList.add('credit');

            //select text first from credits

            var totalCredit = document.querySelector('.credits');
            var parTotalCredit = totalCredit.parentNode;

            //add class to new span
            tcSpan.classList.add('total');
            tcSpan.classList.add('credits');
            parTotalCredit.replaceChild(tcSpan, totalCredit);
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

        
    }
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
