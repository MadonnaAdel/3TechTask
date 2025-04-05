const cardsData = [
    {
        imageSrc: "./images/recommended-like-svgrepo-com.svg fill.svg",
        imageAlt: "recommended-like",
        text: "ضمان"
    },
    {
        imageSrc: "./images/shipped-truck-svgrepo-com.svg fill.svg",
        imageAlt: "shipped-truck",
        text: "توصيل مجاني"
    },
    {
        imageSrc: "./images/coupon-svgrepo-com.svg.svg",
        imageAlt: "coupon-svgrepo-com",
        text: "أسعار مميزة"
    }
];

const categoriesData = [
    {
        title: "نباتات داخلية",
        description: "لإضافة الأناقة والراحة إلى منزلك أو مكتبك.",
        imageSrc: "./images/1.png",
        arrowSrc: "./images/Arrow.svg"
    },
    {
        title: "نباتات خارجية",
        description: "مثالية للحدائق والشرفات.",
        imageSrc: "./images/2.png",
        arrowSrc: "./images/Arrow.svg"
    },
    {
        title: "نخيل",
        description: "مثالية للحدائق والشرفات.",
        imageSrc: "./images/3.png",
        arrowSrc: "./images/Arrow.svg"
    },
    {
        title: "ورود",
        description: "مثالية للحدائق والشرفات.",
        imageSrc: "./images/4.png",
        arrowSrc: "./images/Arrow.svg"
    }
];



const createCards=()=> {
    const container = document.querySelector('.cardsContainer');
    
    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'text-center bg-light rounded-3 py-2 px-4 shadow-sm landing-card';
        
        cardElement.innerHTML = `
            <img src="${card.imageSrc}" alt="${card.imageAlt}">
            <p class="mb-0 text-black fs-6 text-nowrap">${card.text}</p>
        `;
        
        container.appendChild(cardElement);
    });
}

window.addEventListener('DOMContentLoaded', createCards);



const  createCategoryCards =() =>{
    const container = document.querySelector('.categoriesContainer');
    
    categoriesData.forEach((category, index) => {
        const colElement = document.createElement('div');
        colElement.className = 'col-6 col-md-3 mb-4';
        
        colElement.innerHTML = `
            <div class="category-card h-100 p-4">
                <div class="arrow">
                    <img src="${category.arrowSrc}" alt="Arrow">
                </div>
                <div class="mt-4">
                    <h5 class="border border-2 border-bottom border-top-0 border-end-0 border-start-0 pb-3 d-inline">
                        ${category.title}
                    </h5>
                    <p class="my-4 fs-5 fw-normal">${category.description}</p>
                </div>
                <img src="${category.imageSrc}" class="card-img-top" alt="صورة ${index + 1}">
            </div>
        `;
        
        container.appendChild(colElement);
    });
}

window.addEventListener('DOMContentLoaded', createCategoryCards);

