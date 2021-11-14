
// POST REQUEST START
function createNote(){
    const nameField = document.getElementById("name").value
    const emailField = document.getElementById("email").value
    const addressField = document.getElementById("address").value
    const todo = {
        name: nameField,
        email: emailField,
        address: addressField
    };
    
    fetch('http://localhost:5000/user', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
        });

        window.location.reload();
}




const api_url = 
      "http://localhost:5000/users";
  
// Defining async function
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    // if (response) {
    //     hideloader();
    // }
    show(data);
}
// Calling that async function
getapi(api_url);


// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Your Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
        <td>${r._id}</td>
    <td>${r.name} </td>
    <td>${r.email}</td>
    <td>${r.address}</td>
          
</tr>`;
    document.getElementById("employees").innerHTML = tab;
}

}


// deleted


function deleteRow(){
    const deleteUser = document.getElementById("deleteUser").value
    console.log(deleteUser)
    const deleteRow = fetch(`http://localhost:5000/user/${deleteUser}`, {
    method: 'DELETE',
  });
  window.location.reload();
  
}


// Update User

function UpdateUser(){
    const UserIdUpdate = document.getElementById("UserIdUpdate").value
    const nameFieldUpdate = document.getElementById("nameUpdate").value
    const emailFieldUpdate = document.getElementById("emailUpdate").value
    const addressFieldUpdate = document.getElementById("addressUpdate").value
    const Put = {
        name: nameFieldUpdate,
        email: emailFieldUpdate,
        address: addressFieldUpdate,
        UserId: UserIdUpdate
    }
    fetch(`http://localhost:5000/user/${UserIdUpdate}`, {
  method: 'PUT',
  body: JSON.stringify(Put),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  window.location.reload();
}

// Toggle delete content 
function showDeleteContent() {
    var contentDelete = document.getElementById("delete-content");
    if (contentDelete.style.display === "none") {
      contentDelete.style.display = "block";
    } else {
      contentDelete.style.display = "none";
    }
  }

  function showUpdateContent() {
    var contentUpdate = document.getElementById("show-update-content");
    if (contentUpdate.style.display === "none") {
      contentUpdate.style.display = "block";
    } else {
      contentUpdate.style.display = "none";
    }
  }