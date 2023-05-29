

export function toggle(){
    const areas = document.querySelectorAll('.areas');
    for (let i = 0; i < areas.length; i++) {
        areas[i].addEventListener("click", hide)
    }

    const difficulties = document.querySelectorAll('.difficulties');
    for (let i = 0; i < difficulties.length; i++) {
        difficulties[i].addEventListener("click", hide)

    }

    
    
}


const hide = (e) => {
    let feature = e.target;
    feature.classList.toggle("off")
};



const toggler = (e) => {    
    
};


