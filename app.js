
var data = [];

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
                <button class="btn btn-primary" onclick="editTodo(${i})">Edit</button>
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

const editTodo = index => {

    var title = prompt('Enter Title', data[index].title);
    var description = prompt('Enter Description', data[index].description);

    if (title === "") {
        title = prompt('Enter Title', data[index].title);
        return
    }
    if (description === "") {
        description = prompt('Enter Description', data[index].description);
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
                <button class="btn btn-primary" onclick="editTodo(${i})">Edit</button>
                <button class="btn btn-danger" onclick="deleteTodo(${i})">Delete</button>
            </td>
        </tr>

        `
    ))
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
                            <button class="btn btn-primary" onclick="editTodo(${i})">Edit</button>
                            <button class="btn btn-danger" onclick="deleteTodo(${i})">Delete</button>
                        </td>
                    </tr>
            
                    `
                ))
            }
        });
}