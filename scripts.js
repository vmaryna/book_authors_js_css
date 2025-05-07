let authors = [
    {
        firstName: 'Andreas',
        lastName: 'Neeser'
    },
    {
        firstName: 'Anna',
        lastName: 'Ruchat'
    },
    {
        firstName: 'Arno',
        lastName: 'Camenisch'
    },
    {
        firstName: 'Barbara',
        lastName: 'Schibli'
    },
    {
        firstName: 'Demian',
        lastName: 'Leinhard'
    },
    {
        firstName: 'Flurina',
        lastName: 'Bader'
    },
    {
        firstName: 'Franco',
        lastName: 'Supino'
    },
    {
        firstName: 'Lukas',
        lastName: 'Hartmann'
    },
    {
        firstName: 'Marius',
        lastName: 'Popescu'
    },
    {
        firstName: 'Reto',
        lastName: 'Haenny'
    },
    {
        firstName: 'Sandra',
        lastName: 'Kuenzi'
    },
    {
        firstName: 'Simon',
        lastName: 'Libsig'
    }
];

document.addEventListener('DOMContentLoaded', ()=>{
    const ul = document.querySelector('main ul');
    for (const author of authors) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.setAttribute('src', `img/tile_${author.firstName.toLowerCase()}_${author.lastName.toLowerCase()}.jpg`);
        const p = document.createElement('p');
        p.textContent = `${author.firstName} ${author.lastName}`;
        li.append(img, p);
        ul.appendChild(li);
    }
}); 