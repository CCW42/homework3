document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.querySelector('.back-button');
    const prevPageButton = document.querySelector('.prev-page');
    const nextPageButton = document.querySelector('.next-page');

    backButton.addEventListener('click', function() {
        window.location.href = "index.html";
    });

    prevPageButton.addEventListener('click', function() {
        alert("上一頁");
    });

    nextPageButton.addEventListener('click', function() {
        alert("下一頁");
    });
});