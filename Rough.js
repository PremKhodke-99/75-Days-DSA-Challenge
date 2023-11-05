// let diva = document.createElement('div');
// diva.className = 'accordian-item';

// diva.innerHTML = `<h2 class="accordion-header">
// <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//   Accordion Item #1
// </button>
// </h2>`


// document.getElementById('root').append(diva)

let div = document.createElement("div");
div.className = "accordion-item";
div.innerHTML = `<h2 class="accordion-header" id="heading">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="true" aria-controls="collapseOne">
Mariana cross 
</button>
</h2>`

document.getElementById('root').append(div)
