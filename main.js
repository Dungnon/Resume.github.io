// POST data to the API when the form is submitted
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function (event) {
        event.preventDefault(); 

        const name = document.querySelector('#name').value; 
        const id = document.querySelector('#id').value; 

        fetch("https://206.189.146.138/api/students", { 
            method: "POST", 
            body: JSON.stringify({ 
                id: id, 
                name: name
            }), 
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            } 
        })
        .then(response => response.json()) 
        .then(json => {
            console.log(json); // แสดงผลลัพธ์จาก API ใน console
            alert(`Data submitted: ${json.name} with ID ${json.id}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }; 
}); 
