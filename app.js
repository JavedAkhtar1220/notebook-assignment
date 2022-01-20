
let data = [];
let index;

const addTodo = () => {

    const title = document.getElementById('title').value;
    const description = document.getElementById("description").value;

    if (title === "") {
        alert("Enter title");
        return
    }

    if (description === "") {
        alert("Enter Description");
        return;
    }

    const payload = {
        title,
        description
    }

    data.unshift(payload);

    document.getElementById("tbody").innerHTML = "";
    data.map((v, i) => (
        document.getElementById("tbody").innerHTML +=
        `
        <tr>
            <td>${i + 1}</td>
            <td>${v.title}</td>
            <td>${v.description}</td>
            <td>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal(${i})">Edit</button>
                <button class="btn btn-danger" onclick="deleteTodo(${i})">Delete</button>
            </td>
        </tr>

        `
    ))

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

}

const deleteAllTodos = () => {

    if (data.length > 0) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will able te recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    data = [];
                    document.getElementById("tbody").innerHTML = "";
                }
            });
    } else {
        alert("Insert some data to perform this action");
    }

}

const openModal = i => {

    index = i;

    document.getElementById("uTitle").value = data[i].title;
    document.getElementById("uDescription").value = data[i].description;

}


const updateRecord = () => {

    var title = document.getElementById("uTitle").value;
    var description = document.getElementById("uDescription").value;


    if (title === "") {
        alert("Enter title");
        return
    }
    if (description === "") {
        alert("Enter Description");
        return
    }

    var payload = {
        title,
        description
    }

    data.splice(index, 1, payload);

    document.getElementById("tbody").innerHTML = "";
    data.map((v, i) => (
        document.getElementById("tbody").innerHTML +=
        `
        <tr>
            <td>${i + 1}</td>
            <td>${v.title}</td>
            <td>${v.description}</td>
            <td>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal(${i})">Edit</button>
                <button class="btn btn-danger" onclick="deleteTodo(${i})">Delete</button>
            </td>
        </tr>

        `
    ))

    swal("Record Updated!");
    document.getElementById("closeBtn").click();

}

const deleteTodo = index => {

    swal({
        title: "Are you sure?",
        text: "Once deleted, you will able te recover!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                data.splice(index, 1);

                document.getElementById("tbody").innerHTML = "";
                data.map((v, i) => (
                    document.getElementById("tbody").innerHTML +=
                    `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${v.title}</td>
                        <td>${v.description}</td>
                        <td>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="openModal(${i})">Edit</button>
                            <button class="btn btn-danger" onclick="deleteTodo(${i})">Delete</button>
                        </td>
                    </tr>
            
                    `
                ))
            }
        });
}