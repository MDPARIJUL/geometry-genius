function calculateTriangleArea(){
    // get base value
    const triangleBaseInput =  document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const triangleBase =  parseFloat(triangleBaseText);

    // get height value
    const triangleHeightInput =  document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleHeightText);
    // console.log(triangleHeight)

    // calculate triangle area 
    const area =0.5 * triangleBase * triangleHeight;
    const triangleAreaInput = document.getElementById('triangle-area');
    triangleAreaInput.innerText = area;
    // console.log(area)
}