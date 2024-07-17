const checkList = document.querySelectorAll('input');

let lastCheckedItem;

checkList.forEach(inputItem =>{
  inputItem.addEventListener('click',function(event){
    if(event.shiftKey && this.checked){
      let itemsBetween = false;

      checkList.forEach(item => {
        if(item === this || item === lastCheckedItem){
          itemsBetween = !itemsBetween;
        }
        if(itemsBetween){
          item.checked = true;
        }
      });
    }
    lastCheckedItem = this;
  });
});