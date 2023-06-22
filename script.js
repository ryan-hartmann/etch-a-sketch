function addRow() {
    var num = document.querySelector('#text').value;
    var cont = document.querySelector('#container');    
    for (i = 0; num > i; i++) {
        const row = document.createElement("span");
        row.setAttribute('id', 'row');
        const hgt = 80 / num;
        row.style.height = hgt + '%';
        row.style.width = '100%';
        row.style.display = 'flex';
        for (j = 0; num > j; j++) {
            const col = document.createElement("div");
            col.setAttribute('id', 'col');
            col.style.border = "solid";
            col.style.borderColor = "black";
            col.style.borderWidth = "thin";
            col.style.flex = '1';
            col.onmouseover = () => {col.style.backgroundColor = "black";};
            row.appendChild(col);
        }
        cont.appendChild(row);
    }
}

function clear() {
    while (document.querySelector('#rows') != TypeError) {
        const rows = document.querySelector('#row');
        rows.remove();
    }
}

const crt = document.querySelector('#create');
crt.onclick = () => {addRow()}

const clr = document.querySelector('#clear');
clr.onclick = () => {clear(), addRow()}