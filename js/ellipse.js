function calculateEllipseArea(){
    // console.log('clicked')
    const major =  getInputValueById('ellipse-major');
    const minor = getInputValueById('ellipse-minor');
    const ellipseArea = 3.1416 * major * minor;
    setInnerTextById('ellipse', ellipseArea);
}

document.getElementById('ellipse-card').addEventListener('mouseover', function(){
    document.getElementById('ellipse-card').style.backgroundColor = 'orange'
})