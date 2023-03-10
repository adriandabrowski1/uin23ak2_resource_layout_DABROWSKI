// const buttons = document.querySelectorAll(".category-button")
// const resourceContainer = document.getElementById("resource-container")

// buttons.forEach(button => {
//   button.addEventListener("click", function() {
//     const buttonId = this.id
//     const resource = resources.find(res => res.category.toLowerCase() === buttonId.toLowerCase())
//     resourceContainer.innerHTML = `<h2>${resource.category}</h2>
//                                   <p>${resource.text}</p>
//                                   <h3>Sources:</h3>
//                                   <ul>
//                                     ${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join("")}
//                                   </ul>`
//   })
// })

function html(){
    main.innerHTML = `<h2>${resources[0].category}</h2><p>${resources[0].text}</p><ul>`
    resources[0].sources.map(li => {
        main.innerHTML += `<li><a href=${li.url}>${li.title}</a></li>`
    })
    main.innerHTML += `</ul>` 
}
function css(){
    main.innerHTML = `<h2>${resources[1].category}</h2><p>${resources[1].text}</p><ul>`
    resources[1].sources.map(li => {
        main.innerHTML += `<li><a href=${li.url}>${li.title}</a></li>`
    })
    main.innerHTML += `</ul>` 
}
function javascript(){
    main.innerHTML = `<h2>${resources[2].category}</h2><p>${resources[2].text}</p><ul>`
    resources[2].sources.map(li => {
        main.innerHTML += `<li><a href=${li.url}>${li.title}</a></li>`
    })
    main.innerHTML += `</ul>` 
}
function react(){
    main.innerHTML = `<h2>${resources[3].category}</h2><p>${resources[3].text}</p><ul>`
    resources[3].sources.map(li => {
        main.innerHTML += `<li><a href=${li.url}>${li.title}</a></li>`
    })
    main.innerHTML += `</ul>` 
}
function headless(){
    main.innerHTML = `<h2>${resources[4].category}</h2><p>${resources[4].text}</p><ul>`
    resources[4].sources.map(li => {
        main.innerHTML += `<li><a href=${li.url}>${li.title}</a></li>`
    })
    main.innerHTML += `</ul>` 
}


const resources = [
    {
        category: "HTML",
        text: "HTML st??r for HyperText Markup Language, og er et strukturspr??k som brukes for ?? lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS st??r for Cascading StyleSheets, og brukes for ?? sette stilregler p?? HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspr??k basert p?? EcmaScript. JavaScript kj??rer direkte i nettleseren, og brukes ofte til ?? manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for ?? lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som st??r for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-sp??rringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]