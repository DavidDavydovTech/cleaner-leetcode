'use strict';
(() => {
  document.arrive('.fa-check', (el) => {
    console.log(el.parentNode);
  });
  document.arrive('.fa-lock', (el) => {
    const isLockedQuestion = false;
    const containingDiv = el.parentNode.parentNode.parentNode;
    let cDivChildren = [...containingDiv.childNodes];
    cDivChildren = cDivChildren.filter(e => e.tagName === 'A');
    if (cDivChildren.length > 0) {
      // console.log(`${cDivChildren[0].href}`.match(/(?<=(?<=http|https):\/\/leetcode\.com)\/problems\//i))
      const isValid = `${cDivChildren[0].href}`.match(/(?<=(?<=http|https):\/\/leetcode\.com)\/problems\//i).length > 0;
      if(isValid) {
        containingDiv.parentNode.parentNode.hidden = true;
      }
    }
  });
})();