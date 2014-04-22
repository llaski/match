//Bootstrap

require.config({
    paths : {
        // 'jquery' : 'libs/jquery'
        'jquery' : 'http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min'
    }
});
require(['jquery'], function($$$) {
    console.log($$$("#allContacts"));
});