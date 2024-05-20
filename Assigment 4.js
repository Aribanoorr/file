<!DOCTYPE html>
<html>
<head>
    <title>Multiplication Table</title>
</head>
<body>
    <h1>Multiplication Table Generator</h1>
    <label for="number">Enter the number:</label>
    <input type="number" id="number">
    <br>
    <label for="length">Enter the length of the table:</label>
    <input type="number" id="length">
    <br><br>
    <button onclick="generateTable()">Generate Table</button>

    <h2>Multiplication Table:</h2>
    <pre id="table"></pre>

    <script>
        function generateTable() {
            const number = document.getElementById('number').value;
            const length = document.getElementById('length').value;

            let table = '';

            for (let i = 1; i <= length; i++) {
                table += `${number} x ${i} = ${number * i}\n`;
            }

            // Display the table
            document.getElementById('table').innerText = table;
        }
    </script>
</body>
</html>
