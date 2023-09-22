function createDiv(firstName, lastName, msg){
    // Nous allons commencer par cloner la div du 1er commentaire
    let commentList = document.getElementById('comment-list');
    let allDiv = commentList.querySelectorAll('#comment-list > div');
    let oldDiv = allDiv[1]
    let newDiv = oldDiv.cloneNode(true);

    // Maintenant nous allons modifier le titre h3
    let titleElement = newDiv.querySelector('h3');
    titleElement.textContent = firstName + ' ' + lastName;
    // Puis le contenu du message
    let message = newDiv.querySelector('p');
    message.textContent = msg;
    // Pour finir ajoutons la div a l'ensemble des commentaires
    commentList.appendChild(newDiv);
}