<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Advanced Backbone</title>
        <link rel="stylesheet" href="/css/backbone-ui.css">
    </head>
    <body>

        <div id="main">

        </div>

        <script src="/js/backbone/underscore.js"></script>
        <script src="/js/backbone/libs/jquery.js"></script>
        <script src="/js/backbone/backbone.js"></script>
        <script src="/js/backbone/laconic.js"></script>
        <script src="/js/backbone/moment.js"></script>
        <script src="/js/backbone/backbone-ui.js"></script>
        <script src="/js/backbone/backbone.stickit.js"></script>


        <script id="personView" type="text/template">
            <h2><%= person.name %></h2>
            <ul>
                <li>Age: <%= person.age %></li>
                <li>Twitter: <%= twitterLink(person.twitter) %></li>
            </ul>
        </script>
        <script id="peopleView" type="text/template">
            <h1>People</h1>
        </script>
        <script id="showUserView" type="text/template">
            <h2><%= name %></h2>
            <ul>
                <li>Twitter: <%= twitterLink(twitter) %></li>
            </ul>
        </script>
        <script id="editUserView" type="text/template">
            <h2>Editing</h2>
            <p>Name: <input type="text" name="name" id="name" value="<%= name %>"></p>
            <p>Twitter: <input type="text" name="twitter" id="twitter" value="<%= twitter %>"></p>
            <p><button>Update</button></p>
        </script>
        <script src="/js/advanced-backbone/templates.js"></script>
        <script src="/js/advanced-backbone/app.js"></script>
        <script>
            //ds = new DocumentsCollection({{ $documents }});
            // console.log(ds.pluck('id'));
            // console.log(ds.pluck('text'));
        </script>
    </body>
</html>