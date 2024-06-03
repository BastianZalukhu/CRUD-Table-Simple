var selectedRow = null;
function onFormSubmit() {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        InsertNewData(formData);
    } else {
        onUpdate(formData);
    }
    resetForm();
};

// Retrieve Data 
function readFormData() {
    formData = {};
    formData["productId"] = document.getElementById("productId").value;
    formData["productName"] = document.getElementById("productName").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

// Insert Data
function InsertNewData(data) {
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productId;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productName;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick = 'onEdit(this)'>Edit</button> <button onClick = 'onDelete(this)' >Delete</button>`
}

// Edit Data 
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("productName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}

function onUpdate(formData) {
    selectedRow.cells[0].innerHTML = formData.productId;
    selectedRow.cells[1].innerHTML = formData.productName;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.price;
}

// Delete Data 
function onDelete(td) {
    if(confirm("Do you want to delete this shit?")) {
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
    }
    resetForm();
}

// Reset Data
function resetForm() {
    document.getElementById("productId").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("price").value = "";
}