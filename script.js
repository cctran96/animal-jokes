document.addEventListener('DOMContentLoaded', function(){
    const chicken = document.querySelector('#chicken')
    const panda = document.querySelector('#panda')
    const polarBear = document.querySelector('#polar-bear')
    const donkey = document.querySelector('#donkey')
    const dog = document.querySelector('#dog')
    const cat = document.querySelector('#cat')
    const animal = document.querySelector('#animal')

    function createTable(image, joke, punchline) {
        const table = document.createElement('table')
        const td = document.createElement('tr')
        const td2  = document.createElement('tr')
        const td3 = document.createElement('tr')
        const img = document.createElement('img')
        animal.appendChild(table).appendChild(td2)
        table.appendChild(td)
        table.appendChild(td3)

        img.src = image
        img.style.width = 400
        img.style.height = 400
        img.style.padding = 20
        td.appendChild(img)
        td2.innerText = joke
        td3.innerText = punchline
    }
    
 

    fetch("http://localhost:3000/animal")
    .then(resp => resp.json())
    .then(object => {

        chicken.addEventListener('click', function() {
            animal.innerHTML = ""
            createTable('https://cdn.mos.cms.futurecdn.net/BX7vjSt8KMtcBHyisvcSPK-1200-80.jpg',
            object[0]['joke'], object[0]['punchline'])

        })

        panda.addEventListener('click', function() {
            animal.innerHTML = ""
            createTable('https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg',
            object[1]['joke'], object[1]['punchline'])

        })

        polarBear.addEventListener('click', function() {
            animal.innerHTML = ""
            createTable('https://i2.wp.com/churchillwild.com/wp-content/uploads/2019/03/janet-the-polar-bear-nanuk-polar-bear-lodge-george-turner-photo.jpg?resize=740%2C740&ssl=1',
            object[2]['joke'], object[2]['punchline'])
        })

        donkey.addEventListener('click', function() {
            animal.innerHTML = ""
            createTable('https://i.redd.it/1ne3yvexjpw21.jpg',
            object[3]['joke'], object[3]['punchline'])
        })

        dog.addEventListener('click', function() {
            animal.innerHTML = ""
            createTable('https://miro.medium.com/max/1200/1*hv0vLmFSpmMOHGCym3xEeg.jpeg',
            object[4]['joke'], object[4]['punchline'])
        })

        cat.addEventListener('click', function() {
            animal.innerHTML = ""
            createTable('https://media1.popsugar-assets.com/files/thumbor/YX-2J4ndcYxiFDtqpJ0Ed8NkMfM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/08/878/n/1922507/9ed5cdef48c5ef69_thumb_temp_image32304521407524949/i/Funny-Cat-GIFs.jpg',
            object[5]['joke'], object[5]['punchline'])
        })
    })
})