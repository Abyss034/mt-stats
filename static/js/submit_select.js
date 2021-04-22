

const selectElement = document.querySelector('.season');

selectElement.addEventListener('change', (event) => {
    new_url = document.getElementById("season").value;
    //console.log(new_url);
    window.location.assign(new_url);
});



