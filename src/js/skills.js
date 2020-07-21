
function initSkills() {
  addSkillHeader("WEB");
  addSkill("HTML", 100, "--color-html");
  addSkill("CSS", 90, "--color-css");
  addSkill("ES6", 100, "--color-js");
  addSkill("WebAPIs", 65, "--color-js");
  addSkill("Node", 100, "--color-node");
  addSkill("PHP", 90, "--color-php");

  addSkillHeader("Weitere Sprachen");
  addSkill("Java", 80, "--color-java");
  addSkill("Lua", 60, "--color-lua");
  addSkill("Ruby", 40, "--color-ruby");
  addSkill("C#", 70, "--color-csharp");
  addSkill("C++", 25, "--color-cplusplus");
  addSkill("C", 25, "--color-c");

  addSkillHeader("Frameworks");
  addSkill("Symfony", 85, "--color-symfony");
  addSkill("Laravel", 45, "--color-laravel");
  addSkill("YII", 30, "--color-yii");
  addSkill("ExpressJS", 90, "--color-node");
  addSkill("Vue", 25, "--color-vue");
  addSkill("Angular", 30, "--color-angular");
  addSkill("RubyOnRails", 40, "--color-ror");

  addSkillHeader("Administration");
  addSkill("Linux", 60);
  addSkill("FreeBSD", 40, "--color-freebsd");
  addSkill("Bash", 80, "--color-bash");
  addSkill("NGINX", 60, "--color-nginx");
  addSkill("Apache", 70, "--color-apache");
  addSkill("Batch", 65, "--color-batch");

  addSkillHeader("Tools");
  addSkill("Git", 80, "--color-git");
  addSkill("Github", 95, "--color-github");
  addSkill("Gitlab", 95, "--color-gitlab");
  addSkill("Bitbukkit", 70, "--color-bitbukkit");

  addSkillHeader("Weiteres");
  addSkill("LaTeX", 80);
  addSkill("Markdown", 95);
}


function addSkill(name, percent, color) {
  let skillElement = document.createElement("div");
  skillElement.classList.add("skillbar");

  let skillDiv = document.createElement("div");
  skillDiv.style.width = percent + "%";
  skillDiv.style.maxWidth = percent + "%";
  if(color != null) {
    let dataColor = getComputedStyle(document.getElementById("skills")).getPropertyValue(color);
    if(dataColor != null && dataColor != "") {
      skillDiv.style.backgroundColor = "var(" + color + ")";

      dataColor = parseInt(dataColor.split("#")[1], 16);
      let red = (dataColor >> 16) & 0xff;
      let green = (dataColor >> 8) & 0xff;
      let blue = (dataColor >> 0) & 0xff;
      let brightness = Math.round(0.2126 * red + 0.7152 * green + 0.0722 * blue);

      if(brightness < 150) {
        skillDiv.style.color = "#FFF";
      }else {
        skillDiv.style.color = "#000";
      }
    }
  }
  skillElement.appendChild(skillDiv);

  let skillSpan = document.createElement("span");
  skillSpan.innerHTML = name + " ↠ " + percent + "%";
  skillDiv.appendChild(skillSpan);

  document.getElementById("skilllist").appendChild(skillElement);
}


function addSkillHeader(name) {
  let header = document.createElement("h2");
  header.innerHTML = name;
  document.getElementById("skilllist").appendChild(header);
}
