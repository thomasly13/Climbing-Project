
export function cool() {
    addEventListener("scroll", _reloader);
};

const _reloader = (e) => {
    window.chart.render();

};