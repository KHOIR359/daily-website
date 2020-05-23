import './component/card.js';


fetch('./a.php').then(r => r.json()).then(main);

function main(j){
    j.forEach((e,i) => {
        let excluded = ['.', '..','a.php','index.html', 'index.php'];
        if(excluded.includes(e)){return false}
        const card = document.createElement('oir-card');
        card.setAttribute('img', 'file.png');
        card.setAttribute('title', e);
        card.setAttribute('desc', 'Deskripsi ga tau mau diisi apa yang penting ada isinya');
        card.setAttribute('footer', '');
        document.querySelector('.card-group').innerHTML += card.outerHTML;

    });
}