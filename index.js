function getFirstSelector(selector){
  return document.querySelector(selector)
}


function nestedTarget(){
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n){
  let h = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < h.length; i++){
   h[i].innerHTML = (i+n).toString()
  }
  
}


function deepestChild(){
  let h = document.getElementById('grand-node').querySelectorAll('div')
  let node
  for(let i = 0; i<h.length-1; i++){
      node = h[i].querySelector('div')
  }
  return node 
  
}



