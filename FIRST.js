const bioElement=document.querySelector('.bio');
const descriptionElement=document.querySelector('.description');
const container1Element=document.querySelector('.container1');
const projElement=document.querySelector('.proj');
const skillsElement=document.querySelector('.skills');
const socialElement=document.querySelectorAll('.social a');
setTimeout(() => {
    bioElement.style.animation = 'fadeOut 1s ease-in-out';
    setTimeout(() => {
        bioElement.style.display = 'none';
        descriptionElement.style.display = 'block';
    }, 3000);
}, 2000);
container1Element.addEventListener('mouseover', () => {
    container1Element.classList.add('zoom-in');
});

container1Element.addEventListener('mouseout', () => {
    container1Element.classList.remove('zoom-in');
});
const containerElement = document.querySelectorAll('#container');

containerElement.forEach(container => {
    container.addEventListener('mouseover', () => {
        container.classList.add('zoom-in');
    });

    container.addEventListener('mouseout', () => {
        container.classList.remove('zoom-in');
    });
});
projElement.addEventListener('mouseover', () => {
    projElement.classList.add('zoom-in');
});

projElement.addEventListener('mouseout', () => {
    projElement.classList.remove('zoom-in');
});
const skillElement = document.querySelectorAll('#skill');

skillElement.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.classList.add('zoom-in');
    });

    skill.addEventListener('mouseout', () => {
        skill.classList.remove('zoom-in');
    });
});
socialElement.forEach(social => {
    social.addEventListener('mouseover', () => {
        social.classList.add('zoom-in');
    });

    social.addEventListener('mouseout', () => {
        social.classList.remove('zoom-in');
    });
});
document.getElementById('about').addEventListener('click', function() {
    var element = document.getElementById('about');
    element.classList.toggle('animate');
});


