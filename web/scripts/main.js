var btn_press = document.getElementById("btn_press");
var btn_click = document.getElementById("btn_click");

function playAudio(btn,type) {
    if(btn === "btn_press"){
        btn_press.play();
    }else if (btn !== "btn_click") {
    } else {

        btn_click.play();

        if (type === "chapter") {
            window.location.href = "/level.jsp";
        } else if (type === "customize") {
            window.location.href = "/customize.jsp";
        } else if (type === "quit") {
            session.removeAttribute("userInfo");
            window.location.href = "/index.html";
        }

    }
}


