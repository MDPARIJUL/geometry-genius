document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleLengthElement =  document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthElement.value;
    const rectangleLengthNumber =  parseFloat(rectangleLengthText);
    console.log(rectangleLengthNumber)

    const rectangleWidhtElement =  document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidhtElement.value;
    const rectangleWidthNumber = parseFloat(rectangleWidthText);
    console.log(rectangleWidthNumber);

    const triangleArea =  rectangleLengthNumber * rectangleWidthNumber;
    // console.log(triangleArea)
    document.getElementById('rectangle-area').innerText = triangleArea;

})