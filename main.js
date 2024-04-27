
var i=0;
var delClass=[];
var task=document.getElementById("add");

task.addEventListener("click",()=>{
    i++;
    var des=document.getElementById("task").value;
    var day=document.getElementById("date").value;
    
    var myDiv = document.getElementById("entered");

    var newTag1 = document.createElement("p");

    var newTag2 = document.createElement("p");

    var newTag3=document.createElement("button");

    delClass[i]="del"+(i+1);

    newTag1.innerHTML = des;

    newTag1.classList.add("en-p");
    newTag1.classList.add(delClass[i]);
    
    newTag2.innerHTML = day;
    
    newTag2.classList.add("en-p");
    newTag1.classList.add(delClass[i]);

    newTag3.innerHTML="Delete";
  
    newTag3.classList.add("en-but");
    newTag1.classList.add(delClass[i]);

    myDiv.appendChild(newTag1);
    
    myDiv.appendChild(newTag2);

    myDiv.appendChild(newTag3);

    document.getElementById("task").value="";
    document.getElementById("date").value="";

    newTag3.addEventListener("click", () => {
        newTag1.remove();
        newTag2.remove();
        newTag3.remove();
    });
});



