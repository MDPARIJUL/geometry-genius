function calculatePerallelogramArea(){
    // console.log('called')
    const perallelogramBase =  getInputValueById('parallelogram-base')
    const perallelogramHeight = getInputValueById('perallelogram-height');
    const perallelogramArea =  perallelogramBase * perallelogramHeight;
    setInnerTextById('perallelogram-span', perallelogramArea)
}


function getInputValueById(id){
    // console.log(id)
    const inputElement = document.getElementById(id);
    console.log(inputElement)
    const inputElementValue = inputElement.value;
    // console.log(inputElementValue)
    const inputNumber = parseFloat(inputElementValue);
    return inputNumber
}

function setInnerTextById(displayId, area ){
    const perallelogramSpan =  document.getElementById(displayId);
    perallelogramSpan.innerText = area;
}