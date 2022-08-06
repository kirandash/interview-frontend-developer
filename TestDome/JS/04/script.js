function setup() {
  // Write your code here.
  let removeLink = document.getElementsByClassName('remove');

  for (var i = 0; i < removeLink.length; i++) {
    removeLink[i].addEventListener('click', function () {
      this.parentNode.remove();
    });
  }

}

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();
document.getElementsByClassName("remove")[1].click();
console.log(document.body.innerHTML);