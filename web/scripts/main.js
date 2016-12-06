var btn_press = document.getElementById("btn_press");
var btn_click = document.getElementById("btn_click");

function playAudio(btn,type) {
    if(btn === "btn_press"){
        btn_press.play();
    }else if (btn === "btn_click") {

        btn_click.play();

        if (type === "chapter") {
            window.location.href = "/level.jsp";
        } else if (type === "customize") {
            window.location.href = "/customize.jsp";
        } else if (type === "quit") {
            window.location.href = "/index.html";
        } else if (type === "game"){
            window.location.href = "/Game.jsp";
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

