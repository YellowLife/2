var btn_press = document.getElementById("btn_press");
var btn_click = document.getElementById("btn_click");

/*btn audit function*/
function playAudio(btn,type) {
    /*play btn audit when press*/
    if(btn === "btn_press"){
        btn_press.play();

        /*work for btn click*/
    }else if (btn === "btn_click") {

        /*play btn audit when click*/
        btn_click.play();

        /*url transition*/
        if (type === "chapter") {
            window.location.replace("/level.jsp");

        } else if (type === "customize") {
            window.location.replace( "/customize.jsp");
        } else if (type === "quit") {
            window.location.replace("/index.html");
        } else if (type === "game"){
            var level = document.getElementById("level").getAttribute("value");
            window.sessionStorage.setItem("level",level);
            window.location.replace("/Game.jsp");
        } else if(type==="guestbtn"){

        }
    }
}

function start() {
    gapi.load('auth2', function() {
        auth2 = gapi.auth2.init({
            client_id: '988977465903-4kmoa98jvcbi98ool9runutkohh6u52h.apps.googleusercontent.com',
        });
    });
}
function signInCallback(authResult) {

    if (authResult['code']) {
        //add new
        document.getElementById("guestbtn").style.display="none";
        document.getElementById('signinButton').innerHTML = "Enter and Play";
        // get user information and send it is url
        var profile = auth2.currentUser.get().getBasicProfile();
        var info = "id="+ profile.getId()+"&name="+profile.getName();

        // Send the code to the server
        $.ajax({
            type: 'POST',
            url: '/LoginServlet',
            data: info,
            contentType: 'application/html',
            success: function(result) {
                window.location.href = "/LoginServlet?"+info;
                // Handle or verify the server response.

            },
            processData: false,
            data: authResult['code']
        });
    } else {
        // There was an error.
    }
}

function levelButtonControl() {
    if(document.getElementById("userId").getAttribute("value") === "Guest"){
        var child = document.getElementById("savebtn");
        child.parentNode.removeChild(child);
        document.getElementById("level-button-container").style.top="55%";
    }
}

function loadJsonData() {
    var dataFile = "./scripts/gameDataSet.json";
    /*loadData from json file*/
    loadData(dataFile);
    function loadData(jsonFile) {
        $.getJSON(jsonFile, function (json) {
            window.localStorage.setItem("MyData", JSON.stringify(json));
        });
    }
}