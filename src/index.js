module.exports = function toReadable (number) { 
    const units = ['', 'one', 'two', 'three', 'four', 'five', 
    'six', 'seven', 'eight', 'nine'] ;  
     
    const teens = ['', '', '', '', '', '', '', '', '', '',   
    'ten', 'eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 
    'sixteen', 'seventeen', 'eighteen', 'nineteen']; 
     
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 
    'sixty', 'seventy', 'eighty', 'ninety']; 
     
    let readableNumber; 
     
    if (number === 0) readableNumber = 'zero'; 
     
    else if ((number > 0) && (number < 10))  
    readableNumber = units[number]; 
     
    else if ((number >= 10) && (number < 20)) 
    readableNumber = teens[number]; 
     
    else if ((number >= 20) && (number < 100)){ 
        tensIndex = +(String (number)[0]); 
        console.log(tensIndex); 
        unitsIndex = +(String (number)[1]); 
        readableNumber = tens[tensIndex] + ' ' + units[unitsIndex]; 
    } 
     
    else if (number >= 100) { 
        strNumber = String(number); 
        hundIndex = +(strNumber[0]); 
        tensUnitsIndex = +(strNumber[1]+strNumber[2]); 
        console.log(tensUnitsIndex); 
        
        if (tensUnitsIndex == 0)
        readableNumber = units[hundIndex] + ' hundred';
        else readableNumber = units[hundIndex] + ' hundred' + ' ' + toReadable(tensUnitsIndex); 
    } 
     
    readableNumber = readableNumber.trim(); 
    return readableNumber; 
    }