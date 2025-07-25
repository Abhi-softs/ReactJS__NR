
// 2. Showing Hello World through JS

let root = document.createElement('div');
root.setAttribute('id', 'root');

// root.innerHTML = `<h1 style='color:blue'>Hello JS</h1>`;

let header1 = document.createElement('h1');
header1.innerText='Showing Hello World through JS';
header1.style.color='red';
// Append <h1> to <div>
root.appendChild(header1);

document.body.append(root);



/*

=> Above JS code converts as below HTML   
    <div id='root'>
        <h1 style='color:blue'>Hello JS</h1>
    </div>
*/ 
