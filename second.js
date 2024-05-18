window.onload = function showDataStorage() {
    let usersDataFromStorage = JSON.parse(localStorage.users)
    const newCard = document.getElementById('newCard')
    
    for (let i = 0; i < usersDataFromStorage.length; i++) {
        let userSelected = usersDataFromStorage[i];
        let container = document.createElement('div')
        container.innerHTML = 
        `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${userSelected.userName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${userSelected.userEmail}</h6>
        </div>
        </div>
        `
        /* appendCard(card); */

        newCard.append(container);
    } 
    
}
