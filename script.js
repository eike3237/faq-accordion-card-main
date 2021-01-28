function showAnswer (id, faq_quest) {

    if (document.getElementById(id).style.display === 'block') {
        document.getElementById(id).style.display = 'none';
        document.getElementById(faq_quest).style.color = 'hsl(237, 12%, 33%)'; /*Terminar de colocar Weight na cor pra dar destaque, alterando somente o primeiro elemento*/
        document.getElementById(faq_quest).style.fontWeight = 400;
    } else {
        document.getElementById(id).style.display = 'block';
        document.getElementById(faq_quest).style.color = 'hsl(238, 29%, 16%)';
        document.getElementById(faq_quest).style.fontWeight = 700;        
    }
}
