import { fetchProductData } from "./fetch/fetch.js";

async function displayProjects() {
    try {

        const data = await fetchProductData();
        console.log('Data fetched:', data);

        if (data) {
            const projectsContainer = document.querySelector('#projects');

            if (!projectsContainer) {
                console.error("Container with id 'projects' not found.");
                return;
            }
            data.forEach((project) => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');

                const productTitle = document.createElement('h2');
                productTitle.textContent = project.title;

                const image = document.createElement('img');
                image.src = project.image;
                image.alt = project.title;

                const productDescription = document.createElement('p');
                productDescription.textContent = project.description;

                productElement.appendChild(productTitle);
                productElement.appendChild(image);
                productElement.appendChild(productDescription);

                projectsContainer.appendChild(productElement);
            });
        }
    } catch (error) {
        console.error("Error fetching or displaying projects:", error);
    }
}

displayProjects();