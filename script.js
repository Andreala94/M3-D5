let saveIcons = document.getElementsByClassName("save");

console.log(saveIcons);

for( let save of saveIcons){
  save.addEventListener("mouseover", (event) => {
    event.target.name="bookmark";
  });
}

for( let save of saveIcons){
    save.addEventListener("mouseleave", (event) => {
      event.target.name="bookmark-outline";
    });
  }
  //mouseover card show

  