var array = [1, 2, 3, 4, 5, 6];

const init = () => {
    array.forEach((item) => {
        item = (item % 2 == 0) ? document.write(item): item
    })
}
init();