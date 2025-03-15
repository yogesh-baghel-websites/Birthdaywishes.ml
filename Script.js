function generateCard() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    
    if (name === "" || age === "") {
        alert("Please enter both name and age!");
        return;
    }

    document.getElementById("wish").innerHTML = `🎉 Happy ${age}th Birthday, ${name}! 🎂`;
    document.getElementById("card").classList.remove("hidden");
}
