document.addEventListener('DOMContentLoaded',()=>{
    let dataFoto = [
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
        {
            nama: 'Foto Masjid',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/al-aqsa-1233827_1280.jpg'
        },
        {
            nama: 'Foto Kota',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/skyscrapers-246224_1280.jpg'
        },
        {
            nama: 'Foto Transportasi',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/transport-7661822_1280.jpg'
        },
        {
            nama: 'Foto Burung',
            des: 'Lorem, ipsum dolor.',
            foto: './assets/zoo-8378189_1280.jpg'
        },
    ]

    const container = document.getElementById('container')
    const NavbarFoto = document.getElementById('fotoNav')
    const NavbarHome = document.getElementById('home')

    const FooterFoto = document.getElementById('footerFoto')
    const FooterHome = document.getElementById('footerHome')

    const IntroWebsite = document.getElementById('Intro')
    const SubIntro = document.getElementById('SubIn')

    const Tentang = document.getElementById('Ten')
    const LinkTentang = document.getElementById('linkTen')

    const TampilanFoto = document.getElementById('TampilanFoto')
    const TampilanFotoSebelumnya = document.getElementById('TampilanFotos')

    const Dokumentasi = document.querySelector('.dokumentasi')



    // Ketika klik nav Foto
    NavbarFoto.addEventListener('click', ()=>{
        NavbarFoto.classList.add('aktif')
        NavbarHome.classList.remove('aktif')

        IntroWebsite.innerHTML = ` Galery Menampilkan<span class="intro-desain"> Foto </span>  `
        SubIntro.innerHTML = ` Galery menampilkan beberapa foto yang bisa kamu lihat beberapa foto yang keren `

        Tentang.style.display = 'none'
        LinkTentang.style.display = 'none'

        TampilanFoto.innerHTML = ''; 
        TampilanFotoSebelumnya.innerHTML = ''
        Dokumentasi.style.display = 'none'
        dataFoto.forEach((foto, i) => {
            const fotoDiv = document.createElement('div');
            fotoDiv.className = 'foto-keren animasi-sc';
            fotoDiv.innerHTML = `
                <img src="${foto.foto}" alt="${foto.des}">
                <div class="kata-kata">
                    <h1>${foto.nama}</h1>
                    <p>${foto.des}</p>
                </div>
            `;
            TampilanFoto.appendChild(fotoDiv);
        });


    })
    
    // ketika klik nav Home 
    NavbarHome.addEventListener('click', ()=>{
        NavbarFoto.classList.remove('aktif')
        NavbarHome.classList.add('aktif')
        IntroWebsite.innerHTML = ` Galery Amazi<span class="intro-desain">ng</span>  `

        Tentang.style.display = 'flex'
        LinkTentang.style.display = 'block'
        TampilanFoto.innerHTML = ''
        Dokumentasi.style.display = 'block'

        TampilanFotoSebelumnya.innerHTML = `
        <div class="foto-keren animasi-sc">
            <img src="./assets/al-aqsa-1233827_1280.jpg" alt="Masjid">
            <div class="kata-kata">
                <h1>Foto Masjid</h1>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
        
        <div class="foto-keren animasi-sc">
            <img src="./assets/skyscrapers-246224_1280.jpg" alt="Masjid">
            <div class="kata-kata">
                <h1>Foto Kota</h1>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
        
        <div class="foto-keren animasi-sc">
            <img src="./assets/transport-7661822_1280.jpg" alt="Masjid">
            <div class="kata-kata">
                <h1>Foto Transportasi</h1>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
        `


    })
    // Ketika klik nav Foto
    FooterFoto.addEventListener('click', ()=>{
        NavbarFoto.classList.add('aktif')
        NavbarHome.classList.remove('aktif')

        IntroWebsite.innerHTML = ` Galery Menampilkan<span class="intro-desain"> Foto </span>  `
        SubIntro.innerHTML = ` Galery menampilkan beberapa foto yang bisa kamu lihat beberapa foto yang keren `

        Tentang.style.display = 'none'
        LinkTentang.style.display = 'none'

        TampilanFoto.innerHTML = ''; 
        TampilanFotoSebelumnya.innerHTML = ''
        Dokumentasi.style.display = 'none'
        dataFoto.forEach((foto, i) => {
            const fotoDiv = document.createElement('div');
            fotoDiv.className = 'foto-keren animasi-sc';
            fotoDiv.innerHTML = `
                <img src="${foto.foto}" alt="${foto.des}">
                <div class="kata-kata">
                    <h1>${foto.nama}</h1>
                    <p>${foto.des}</p>
                </div>
            `;
            TampilanFoto.appendChild(fotoDiv);
        });


    })
    
    // ketika klik nav Home 
    FooterHome.addEventListener('click', ()=>{
        NavbarFoto.classList.remove('aktif')
        NavbarHome.classList.add('aktif')
        IntroWebsite.innerHTML = ` Galery Amazi<span class="intro-desain">ng</span>  `

        Tentang.style.display = 'flex'
        LinkTentang.style.display = 'block'
        TampilanFoto.innerHTML = ''
        Dokumentasi.style.display = 'block'

        TampilanFotoSebelumnya.innerHTML = `
        <div class="foto-keren animasi-sc">
            <img src="./assets/al-aqsa-1233827_1280.jpg" alt="Masjid">
            <div class="kata-kata">
                <h1>Foto Masjid</h1>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
        
        <div class="foto-keren animasi-sc">
            <img src="./assets/skyscrapers-246224_1280.jpg" alt="Masjid">
            <div class="kata-kata">
                <h1>Foto Kota</h1>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
        
        <div class="foto-keren animasi-sc">
            <img src="./assets/transport-7661822_1280.jpg" alt="Masjid">
            <div class="kata-kata">
                <h1>Foto Transportasi</h1>
                <p>Lorem, ipsum dolor.</p>
            </div>
        </div>
        `


    })

})