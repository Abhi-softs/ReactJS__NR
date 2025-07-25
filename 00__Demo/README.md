# Showing Hello World through HTML & JS ways
<!-- <h1 style="color: blueviolet">
      Showing Hello World through HTML
</h1> -->

# JS ==> DOM methods
let root = document.createElement('div'); 

root.setAttribute('id', 'root'); 

let header1 = document.createElement('h1'); 

header1.innerText='Showing Hello World through JS'; 

header1.style.color='red'; 

==> Append <h1> to <div>

root.appendChild(header1);

document.body.append(root); 

