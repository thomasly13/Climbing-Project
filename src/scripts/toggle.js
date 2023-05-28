export function toggle(){
    const areas = document.querySelectorAll('.areas');
    for (let i = 0; i < areas.length; i++) {
        areas[i].addEventListener("click", toggler)
    }

    const difficulties = document.querySelectorAll('.difficulties');
    for (let i = 0; i < difficulties.length; i++) {
        difficulties[i].addEventListener("click", toggler)
    }
    
    
}


const toggler = (e) => {
    let feature = e.target;
    feature.classList.toggle("off")
};


