function addEvent() {

    let name = document.getElementById("eventName").value;
    let date = document.getElementById("eventDate").value;

    if (name === "" || date === "") {
        alert("Please enter event details");
        return;
    }

    let li = document.createElement("li");

    li.textContent = name + " - " + date;

    document.getElementById("eventList").appendChild(li);

    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";

}