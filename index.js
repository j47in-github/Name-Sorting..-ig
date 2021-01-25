var names = [];

function submit(){
    // getting the names
    var name1 = document.getElementById("studentNameInput1").value;
    var name2 = document.getElementById("studentNameInput2").value;
    var name3 = document.getElementById("studentNameInput3").value;
    var name4 = document.getElementById("studentNameInput4").value;

    // adding the names
    names.push(name1);
    names.push(name2);
    names.push(name3);
    names.push(name4);

    // showing the output
    console.log(names);
    document.getElementById("displayNames").innerHTML = names;

    // setting the style
    document.getElementById("submit-button").style.display = "none";
    document.getElementById("sort-button").style.display = "inline-block";
}

function sort(){
    // sort the array
    let namesSorted = names.sort();

    // showing the output
    console.log(namesSorted);
    document.getElementById("displayNames").innerHTML = namesSorted;
}