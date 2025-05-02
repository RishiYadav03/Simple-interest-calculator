import{simpleinterestcalculator} from './utilities/project.js';

document.querySelector('button').onclick = function (){
    // console.log(document.getElementById('simpleinterestcalculatort'));
    // console.log(document.getElementById('simpleinterestcalculatort').value);

    var amount = document.getElementById('AmountInput').value;
    var roi = document.getElementById('ROIInput').value;
    var duration = document.getElementById('durationInput').value;    
    
    var message = '' ;
    var classContent = '';

    if(amount == '' || roi == '' || duration == ''){
        message = 'Invalid Details';
        classContent = 'alert alert-danger';
    }
    else if(amount < 0 || roi < 0 || duration < 0){
        message = 'Values must be a positive number';
        classContent = 'alert alert-danger';
    }
    else{
        amount = Number(amount);
        roi = Number(roi);
        duration = Number(duration);

        var Interest = simpleinterestcalculator(amount, roi, duration);
        var finalAmount = Interest + amount ;

        message = ` 
        Interest : &#8377; ${Interest} <br />
        Final Amount : &#8377; ${finalAmount} <br />
        `;
        classContent = 'alert alert-success'
    }
    document.getElementById('errMsg').innerHTML = message;
    document.getElementById('errMsg').className = classContent;
}