function skillsMember() {
  const member = document.querySelector(".member");
  const memberSkills = document.querySelector(".member-skills");
  const memberSkillsClose = document.querySelector(".member-skills-close");

  member.addEventListener("click", () => {
    memberSkills.classList.add("active");
  });

  memberSkillsClose.addEventListener("click", () => {
    memberSkills.classList.remove("active");
  });
}