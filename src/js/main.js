
addEventListener("load", function(){

  document.getElementById("skillBtn").addEventListener("click", () => {
    setTimeout(function(){
      window.location = "#skills";
    }, 300);
  });

  document.getElementById("personalBtn").addEventListener("click", () => {
    setTimeout(function(){
      window.location = "#personal";
    }, 300);
  });

  document.getElementById("vitaBtn").addEventListener("click", () => {
    setTimeout(function(){
      window.location = "#vita";
    }, 300);
  });


  for(let btn of document.getElementsByClassName("backBtn")) {
    btn.addEventListener("click", () => {
      window.location = "#main";
    });
  }

  if(window.location.hash.split("#")[1] != null) {
    hideAll();
    switcher(window.location.hash.split("#")[1]);
    if(window.location.hash.split("#")[1] == "skills") {
      if(document.getElementById("skilllist").childNodes.length < 1) {
        initSkills();
      }
    }
  }

  addEventListener("hashchange", () => {
    hideAll();
    if(window.location.hash == "") {
      window.location.hash = "#main";
    }
    switcher(window.location.hash.split("#")[1]);

    if(window.location.hash == "#skills") {
      if(document.getElementById("skilllist").childNodes.length < 1) {
        initSkills();
      }
    }
  });
});
