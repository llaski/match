<!doctype html>
<html ng-app="contacts">
    <head>
        <meta charset="utf-8">
        <title>Contacts</title>
        <meta name="viewport" content="width=device-width">
        <style>
            * { box-sizing: border-box; }
            body { font: 14px/1.5 sans-serif; color: #222; margin: 3em; }
        </style>
    </head>
    <body>
        <div ng-controller="Contacts">
            <h1>Contacts</h1>
            <div ng-view></div>
        </div>
       <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.7/angular.js"></script>
       <script src="https://code.angularjs.org/1.3.0-beta.7/angular-route.js"></script>
       <script src="/js/angular/contacts.js"></script>
    </body>
</html>