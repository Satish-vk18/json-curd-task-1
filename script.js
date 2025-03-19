function addData(){
    var username = document.getElementById("username");
    var phoneno = document.getElementById("phoneno");
    var message = document.getElementById("message");
    var address = document.getElementById("address");
    postData(username,phoneno,message,address)
}

function displayData(){
    var container = document.getElementById("container");
    container.innerHTML = ``;
    fetch("https://crystalline-relieved-fenugreek.glitch.me/users")
        .then(response => response.json())
        .then(data => {
            for( var obj of data){

                //creating item for each object
                var item = document.createElement("div");   // <div> </div>
                item.className = "item m-1 p-2 border border-warning bg-dark text-white rounded rounded-3"  // <div class = "item"> </div>

                //creating paragraphs for the data for each item 
                var usernamePara = document.createElement("p");  // <p> username </p>
                var phonenoPara = document.createElement("p");    // <p> phoneno </p>
                var messagePara = document.createElement("p");    // <p> message </p>
                var addressPara = document.createElement("p");      // <p> address </p>
                
                // accessing data from obj
                var {username, phoneno,message,address} = obj;

                //adding data into paragraph
                usernamePara.innerText = username;
                phonenoPara.innerText = phoneno;
                messagePara.innerText = message;
                addressPara.innerText = address;

                //adding data into item 
                item.appendChild(usernamePara);
                item.appendChild(phonenoPara);
                item.appendChild(messagePara);
                item.appendChild(addressPara);

                // adding data into main container
                container.appendChild(item);

            }
        })
}

function postData(username,phoneno,message,address){
    
    if( username.value == "" || phoneno.value == "" || message.value == "" || address.value == "" ){
        alert("complete all fields")
    }
    else{
        var url = "https://crystalline-relieved-fenugreek.glitch.me/users"
        var options = {
            "method" : "POST",
            "headers" : {
                "Content-Type" : "application/json"
            },
            "body" : JSON.stringify({
                "username" : username.value,
                "phoneno" : phoneno.value,
                "message" : message.value,
                "address" : address.value,
            })
        }
        fetch(url , options)
            .then(response => {
                if(response.ok){
                    displayData();
                    alert("Data Added successfully")
                    console.log("data added")
                    username.value ="";
                    phoneno.value = "";
                    message.value = "";
                    address.value = "";
                    // displayData()
                }
            })
    }
}

displayData();

