function calculateArea() {
    let base = parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);
    let output = document.getElementById('output');

    if (!isNaN(base) && !isNaN(height)) {
        let area = (base * height) / 2;
        let result = "The total area of the triangle  is " + area;
        output.innerText = result;
    } else {
        output.innerText = 'Please enter valid base and height.';
    }
}

document.getElementById('base').addEventListener('input', calculateArea);
document.getElementById('height').addEventListener('input', calculateArea);
