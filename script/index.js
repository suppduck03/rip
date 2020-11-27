var assumedNumbers = {
    AGE: 90,
    MONTHS: 12,
    WEEKS: 52,
    DAYS: 365
};




function calculate(){
    var age = parseInt(document.getElementById("age").value);
    var daysLeft = (assumedNumbers.AGE * assumedNumbers.DAYS)-(age * assumedNumbers.DAYS); 
    var weekLeft = (assumedNumbers.AGE * assumedNumbers.WEEKS) - (age * assumedNumbers.WEEKS);
    var monthLeft = (assumedNumbers.AGE * assumedNumbers.MONTHS) - (age * assumedNumbers.MONTHS);
    var startResult = document.getElementById('startResult').innerHTML;
    var resultDiv = document.getElementById('resultDiv');

    if(isNaN(age)){
        resultDiv.style.visibility = 'visible';
        document.getElementById('listTable').innerHTML = '<li><i class="fa fa-warning"></i> Your input is not a number</li>';
        document.getElementById("submitBtn").innerHTML = 'Reset';  

        document.getElementById('submitBtn').onclick = function(){ 
                 document.getElementById('startResult').innerHTML = startResult;                    
            }

        console.log("Your input is not a number!");
    }
    else{
        if(age > assumedNumbers.AGE){
            resultDiv.style.visibility = 'visible';
            document.getElementById('listTable').innerHTML = '<li><i class="fa fa-warning"></i> Your age is greater than 90</li>';
            document.getElementById("submitBtn").innerHTML = 'Reset';  
    
            document.getElementById('submitBtn').onclick = function(){ 
                     document.getElementById('startResult').innerHTML = startResult;                    
                }
    
            console.log("Your age is greater than 90!");
            
        }
        else{
                console.log(`You have ${daysLeft} days, ${weekLeft} weeks, and ${monthLeft} months left.`);
                resultDiv.style.visibility = 'visible';

                document.getElementById('listTable').innerHTML = `<li>You have</li> <li><i class="fas fa-baby"></i> ${daysLeft} days</li> <li><i class="fa fa-wheelchair"></i> ${weekLeft} weeks</li> <li><i class="fa fa-bed"></i> ${monthLeft} months</li> <li>until 90 years old</li><li><i class="fas fa-cross"></i>` 
                
                document.getElementById("submitBtn").innerHTML = 'Reset';                       

                document.getElementById('submitBtn').onclick = function(){  
                    document.getElementById('startResult').innerHTML = startResult;
                        
            }
        }
    }
}
