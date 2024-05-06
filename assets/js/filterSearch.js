// Search Filter when click on search icon and input Change

let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function (){
  let searchValue = searchInput.value.toLowerCase();
  let allCards = document.querySelectorAll(".propertyGrid__items__card");
  let allCardsTitle = document.querySelectorAll(".propertyGrid__items__card__footer__title");

  for (let i = 0; i < allCards.length; i++) {
    if (allCardsTitle[i].textContent.toLowerCase().indexOf(searchValue) > -1) {
      allCards[i].style.display = "block";
    } else {
      allCards[i].style.display = "none";
    }
  }
});