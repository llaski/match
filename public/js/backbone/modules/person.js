define(['modules/stuff'], function(stuff){
    return {
        first_name : 'Larry',
        last_name : "L",
        favorties: stuff.likes.join(', ')
    }
});