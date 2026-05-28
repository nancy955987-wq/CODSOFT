// JOB SEARCH FUNCTION

function searchJobs(){

  const input = document.getElementById("searchInput").value.toLowerCase();

  const cards = document.querySelectorAll(".job-card");

  cards.forEach(card => {

    const jobTitle = card.querySelector("h2").innerText.toLowerCase();

    if(jobTitle.includes(input)){
      card.style.display = "block";
    }
    else{
      card.style.display = "none";
    }

  });

}


// AUTO SEARCH WHILE TYPING

document.getElementById("searchInput").addEventListener("keyup", searchJobs);


// APPLY BUTTON FUNCTION

const applyButtons = document.querySelectorAll(".apply-job-btn");

applyButtons.forEach(button => {

  button.addEventListener("click", () => {

    const jobCard = button.parentElement;

    const jobName = jobCard.querySelector("h2").innerText;

    document.querySelector(".apply-card input").value = jobName;

    document.getElementById("apply").scrollIntoView({
      behavior:"smooth"
    });

  });

});


// SUBMIT APPLICATION NOTIFICATION

function showNotification(){

  const notification = document.getElementById("notification");

  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);

}