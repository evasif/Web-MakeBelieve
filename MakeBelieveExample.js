(function () {
  function mElem(elem, length) {
    this.elem = elem.length == 1 ? elem[0] : elem;
    this.length = length;
  }

  mElem.prototype.nextSibling = function() {
    var nextSibling = [];
    for(var i = 0; i < this.length; i++) {
      var nextSibling = this.elem[i].nextElementSibling;
      if(nextSibling) {
        nextSibling.push(new mElem(nextSibling, 1));
      }
    }
    return nextSibling;
  };

  mElem.prototype.previousSibling = function() {
    if(this.elem.previousSibling) {
      return new mElem(this.elem.previousSibling, 1);
    }
    return {};
  };

  var innerMakeBelieve = function(query) {
    var elem = document.querySelectorAll(query);
    if(elem) {
      return new mElem(elem, elem.length);
    }
    return {};
  };

  //var element = __('querySelector');
  window.__ = innerMakeBelieve;
})();
