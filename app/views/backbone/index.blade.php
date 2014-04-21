<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Backbone</title>



    </head>
    <body>
        <!-- <script id="personTemplate" type="text/template">
            <strong><%= name %></strong> (<%= age %>) - <%= occupation %>
        </script>-->

        <!-- <h1>Tasks</h1>
        <form id="addTask" action="">
            <input type="text" placeholder="Title">
            <input type="submit" value="Add Task">
        </form>
        <div class="tasks">
            <script id="taskTemplate" type="text/template">
                <span><%= title %></span> <button class="edit">Edit</button> <button class="delete">Delete</button>
            </script>

        </div> -->

        <h1>Contacts</h1>

        <form id="addContact">
            <div>
                <label for="first_name">First Name:</label>
                <input type="text" id="first_name" name="first_name" />
            </div>
            <div>
                <label for="last_name">Last Name:</label>
                <input type="text" id="last_name" name="last_name" />
            </div>
            <div>
                <label for="email">Email Address:</label>
                <input type="text" id="email" name="email" />
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea name="description" id="description"></textarea>
            </div>
            <div>
                <input type="submit" valye="Add Contact">
            </div>
        </form>
        <script src="/js/backbone/underscore.js"></script>
        <script src="/js/backbone/jquery.js"></script>
        <script src="/js/backbone/backbone.js"></script>
        <script src="/js/backbone/main.js"></script>
        <script src="/js/backbone/models.js"></script>
        <script src="/js/backbone/collections.js"></script>
        <script src="/js/backbone/views.js"></script>
        <script src="/js/backbone/router.js"></script>

        <script>
            new App.Router;
            Backbone.history.start();

            App.contacts = new App.Collections.Contacts;
            App.contacts.fetch().then(function(){
                new App.Views.App({
                    collection: App.contacts
                });
            });

        </script>
    </body>
</html>