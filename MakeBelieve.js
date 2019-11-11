
(function(window, undefined) {

    function _(selector) {
        if (!(this instanceof _)) {
            return new _(selector);
        }
    };

    _.fn = _.prototype;
    window._ = _;

})(window);

// Keyword
var test = function() {
  console.log(_("TEST"));
}
