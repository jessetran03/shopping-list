$(function() {

    //Add items to shopping list
    $('#js-shopping-list-form').submit(event => {
        // stop default form submission behavior
        event.preventDefault();
        const item = $(event.currentTarget).find('#shopping-list-entry').val();
        $('ul').append(
            `<li><span class="shopping-item">${item}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
        );
    });

    //Delete items from shopping list
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

    //Check items from shopping list
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').children('span').toggleClass('shopping-item__checked');
    });
});