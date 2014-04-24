<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
        <link
            rel="stylesheet"
            type="text/css"
            href="{{ asset("css/bootstrap.min.css") }}"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="{{ asset("css/bootstrap-theme.min.css") }}"
        />
        <title>Laravel 4 Chat</title>
    </head>
    <body>
        <script type="text/x-handlebars">
            @{{outlet}}
        </script>
        <script
            type="text/x-handlebars"
            data-template-name="index"
        >
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Laravel 4 Chat</h1>
                        <table class="table table-striped">
                            @{{#each}}
                                <tr>
                                    <td>
                                        @{{user}}
                                    </td>
                                    <td>
                                        @{{text}}
                                    </td>
                                </tr>
                            @{{/each}}
                        </table>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                            />
                            <span class="input-group-btn">
                                <button class="btn btn-default">
                                    Send
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </script>
        <script
            type="text/javascript"
            src="{{ asset("js/libs/jquery-1.10.2.js") }}"
        ></script>
        <script
            type="text/javascript"
            src="{{ asset("js/libs/handlebars-1.1.2.js") }}"
        ></script>
        <script
            type="text/javascript"
            src="{{ asset("js/libs/ember-1.5.1.js") }}"
        ></script>
        <script
            type="text/javascript"
            src="{{ asset("js/libs/ember-data.js") }}"
        ></script>
        <script
            type="text/javascript"
            src="{{ asset("js/bootstrap.min.js") }}"
        ></script>
        <script
            type="text/javascript"
            src="{{ asset("js/app.js") }}"
        ></script>
    </body>
</html>