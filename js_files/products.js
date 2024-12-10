import { fetchProductData } from "./fetch/fetch.js";

async function displayProjects() {
    try {
        const data = await fetchProductData();
        console.log('Data fetched:', data);
    
        const projectsContainer = document.querySelector('#projects');
    
        if (!projectsContainer) {
            console.error("Container with id 'projects' not found.");
            return;
        }
    
        data.forEach((project) => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
    
            const image = document.createElement('img');
            image.src = project.image;
            image.alt = project.title;
    
            const text = document.createElement('div');
            text.classList.add('text-container');
    
            const productTitle = document.createElement('h2');
            productTitle.textContent = project.title;
    
            const productDescription = document.createElement('p');
            productDescription.textContent = project.description;
    
            const linkContainer = document.createElement('div');
            linkContainer.classList.add('link-container');
    
            const productLink = document.createElement('a');
            if (project.url) {
                productLink.href = project.url;
                productLink.textContent = "REPOSITORY";
                productLink.target = "_blank";
            } else {
                productLink.textContent = "No link available";
            }
    
            const websiteLink = document.createElement('a');
            if (project.url1) {
                websiteLink.href = project.url1;
                websiteLink.textContent = "WEBSITE";
                websiteLink.target = "_blank";
            } else {
                websiteLink.textContent = "No website available";
            }
    
            text.appendChild(productTitle);
            text.appendChild(productDescription);
    
            linkContainer.appendChild(productLink);
            linkContainer.appendChild(websiteLink);
    
            text.appendChild(linkContainer);
    
            productElement.appendChild(image);
            productElement.appendChild(text);
    
            projectsContainer.appendChild(productElement);
        });
    } catch (error) {
        console.error("Error fetching or displaying data:", error);
    }
}

displayProjects();