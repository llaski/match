_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var Templates = {};

Templates.Document = [
    "<h2>{{ id }}</h2>",
    "<ul>",
    "<li> Characters {{ characters }} </li>",
    "<li> Words {{ words }} </li>",
    "</ul>"
].join("");

Templates.Documents = [
    "<h1>Documents </h1>"
].join("");

for (var temp in Templates) {
    if (Templates.hasOwnProperty(temp))
        Templates[temp] = _.template(Templates[temp]);
}