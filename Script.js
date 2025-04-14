document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const inputValue = document.getElementById('inputField').value; // Captures the input value
    document.getElementById('output').innerText = `You entered: ${inputValue}`; // Displays the value in the output div
});
document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('inputField').value = ''; // Clears the input field
    document.getElementById('output').innerText = ''; // Clears the output div
});