window.onload = function () {
  let teams = [
    { code: "DAL", name: "Dallas", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver", plays: "Denver, CO" },
    { code: "HOU", name: "Houston", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
  ];

  //declare HTML elements we need
  let selectMenu = document.getElementById('teams');
  console.log(`the select menu is ${selectMenu}`);
  let moreInfoBtn = document.getElementById('moreInfo');
  console.log(`the button is ${moreInfoBtn}`)
};
