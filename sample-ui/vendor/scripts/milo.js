window.Milo = Em.Namespace.create({
    revision: 1
});
Milo.Options = Em.Object.create({
    baseUrl: null,
    auth: null
});
Milo.UriTemplate = function (template, options) {
    options = options || {};

    return function () {
        return template;
    }.property().meta(options);
};