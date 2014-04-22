<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Backbone</title>

        <style>
            form {
                margin-bottom: 32px;
            }

            .module {
                margin: 20px 0;
            }
        </style>

        <!--<script src="/js/backbone/require.js" data-main="/js/backbone/main"></script>-->
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

        <form id="addContact" class="module" class="module">
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

        <table id="allContacts" class="module">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Description</th>
                </tr>
            </thead>
        </table>

        <script id="allContactsTemplate" type="text/template">
            <td><%= first_name %></td>
            <td><%= last_name %></td>
            <td><%= email %></td>
            <td><%= description %></td>
            <td><a href="#contacts/<%= id %>/edit" class="edit">Edit</a></td>
            <td><a href="#contacts/<%= id %>" class="delete">Delete</a></td>
        </script>

        <div id="editContactSection" class="module">

        </div>
        <script id="editContactTemplate" type="text/template">
            <h2>Edit Contact: <%= first_name %> <%= last_name %></h2>
            <form id="editContact">
                <div>
                    <label for="edit_first_name">First Name:</label>
                    <input type="text" id="edit_first_name" name="edit_first_name" value="<%= first_name %>" />
                </div>
                <div>
                    <label for="edit_last_name">Last Name:</label>
                    <input type="text" id="edit_last_name" name="edit_last_name" value="<%= last_name %>" />
                </div>
                <div>
                    <label for="edit_email">Email Address:</label>
                    <input type="text" id="edit_email" name="edit_email" value="<%= email %>" />
                </div>
                <div>
                    <label for="edit_description">Description:</label>
                    <textarea name="edit_description" id="edit_description"><%= description %></textarea>
                </div>
                <div>
                    <input type="submit" valye="Edit Contact">
                    <button type="button" class="cancel">Cancel</button>
                </div>
            </form>
        </script>

        <script src="/js/backbone/underscore.js"></script>
        <script src="/js/backbone/libs/jquery.js"></script>
        <script src="/js/backbone/backbone.js"></script>
        <script src="/js/backbone/app.js"></script>
        <script src="/js/backbone/models.js"></script>
        <script src="/js/backbone/collections.js"></script>
        <script src="/js/backbone/views.js"></script>
        <script src="/js/backbone/router.js"></script>

        <script>
            new App.Router;
            Backbone.history.start();

            App.contacts = new App.Collections.Contacts();
            App.contacts.sort();

            App.contacts.fetch().then(function(){
                new App.Views.App({
                    collection: App.contacts
                });
            });

        </script>
    </body>
</html>