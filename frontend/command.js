// POST A REQUEST START
// async function PostApp() {
//     let obj = {
//       name: nameField.value,
//       email: emailField.value,
//       address: addressField.value,
//       userId: userIdField.value
//     }
//     console.log(obj);
  

//   try {
//       let response = await axios.get('http://localhost:5000/users', obj);
//       console.log(response);
//     }
    
//   catch (error) {
//       console.log(error);
//     }
//   }


// Get All Data
//  function getUser() {
//     fetch('http://localhost:5000/users')
//     .then(response => response.json())
//     .then(json => console.log(json))
//   }

// getUser()

// Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }



// const cells = document.querySelectorAll('td');
// console.log(cells)
// function addRowHandlers() {
//     var table = document.getElementById("employees");
//     var rows = table.getElementsByTagName("tr");
//     for (i = 0; i < rows.length; i++) {
//       var currentRow = table.rows[i];
//       var createClickHandler = function(row) {
//         return function() {
//           var cell = row.getElementsByTagName("td")[0];
//           var id = cell.innerHTML;
//           alert("id:" + id);
//         };
//       };
//       currentRow.onclick = createClickHandler(currentRow);
//     }
//   }


const cells = document.querySelectorAll('td');
cells.forEach(cell => {
    cell.addEventListener('click', () =>
      console.log("Row index: " + cell.closest('tr').rowIndex + " | Column index: " + cell.cellIndex));
  });


