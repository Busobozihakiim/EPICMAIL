function loadmail (show, hide){
    document.getElementById(hide).style.display = "none"
    document.getElementById(show).style.display = "block"
    document.getElementById("reply").style.display = "none"
        
}
function revealmail(event, selectedTab){
    tabcontent = document.getElementsByClassName("mailcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("folders");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(selectedTab).style.display = "block";
    event.currentTarget.className += " active";
    
}
function message_pad() {
    document.getElementById("reply").style.display = "block"
    }
function send() {
    document.getElementById("area").style.display = "none"
    document.getElementById("mailInbox").style.display = "block"
    }
function delete_mail(from, to) {
    document.getElementById(from).style.display = "none"
    alert("Message will be deleted")
    document.getElementById(to).style.display = "block"
    }
function backToFolder(folder, hide){
    document.getElementById(folder).style.display = "block"
    document.getElementById(hide).style.display = "none"
}