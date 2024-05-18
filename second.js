window.onload = function showDataStorage() {
    const userDataFromStorage = JSON.parse(localStorage.getItem('userData'))
    const newCard = document.getElementById('newCard')
    newCard.innerHTML = 
    `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${userDataFromStorage.userName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${userDataFromStorage.userEmail}</h6>
    </div>
    </div>
    `
}

