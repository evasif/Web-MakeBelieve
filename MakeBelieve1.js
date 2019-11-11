(function () {
  //Constructor
  function makeBelieveElement(elements, length) {
    this.elements = elements;
    this.length = length;

    //Parent nodes
    this.parent = function (param) {
      var parent;
      var parents = [];

      //When parameter is not defined with function
      if(param === undefined) {
        for (var i = 0; i < this.elements.length; i++) {
          var currentElement = this.elements[i]
          parent = currentElement.parentElement;
            parents.push(parent);
          }
          return new makeBelieveElement(parents, parents.length);
      }
      //When parameter is defined with function
      else {
        var parentParam = document.querySelectorAll(param);

        for (var i = 0; i < parentParam.length; i++) {
          parents.push(parentParam);
        }
          return new makeBelieveElement(parents, parents.length);
      }
    };

    //Grandparent nodes
    this.grandParent = function (param) {
      var grandParent;
      var grandParents = [];

      //When parameter is not defined with function
      if(param === undefined) {
        for (var i = 0; i < this.elements.length; i++) {
          var currentElement = this.elements[i];
          grandParent = currentElement.parentElement.parentElement;
            grandParents.push(grandParent);
          }
          return new makeBelieveElement(grandParents, grandParents.length);
      }
      //When parameter is defined with function
      else {
        var grandParentParam = document.querySelectorAll(param);

        for (var i = 0; i < grandParentParam.length; i++) {
            var currentElement = this.elements[i];
            var parent = grandParentParam[i].firstElementChild;
            grandParent = currentElement.parentElement.parentElement;

            if(parent != currentElement) {
              grandParents.push(grandParent);
            }
        }
        return new makeBelieveElement(grandParents, grandParents.length);
    }
  };

  this.ancestor = function (param) {
    var ancestor;
    var ancestors = [];

    /*Ancestor of nodes, nodes that are above grandparents and
      all the way up to the root*/
    ancestorParam = document.querySelectorAll(param);
      for(i = 0; i < this.elements.length; i++) {
        var currentElement = this.elements[i];
        ancestor = currentElement.parentElement.parentElement.parentElement;

        while(ancestor != ancestorParam[i]) {
            ancestor = ancestor.parentElement;
        }

        if(ancestor != null) {
          ancestors.push(ancestor);
        }
      }
          return new makeBelieveElement(ancestors, ancestors.length);
  };

  //Shows what comes up in console if function is clicked
  this.onClick = function (param) {
      for(i = 0; i < this.elements.length; i++) {
        var currentElement = this.elements[i];
        currentElement.addEventListener("click", param);
      }
      return this;
    };

    //Replaces text
    this.insertText = function (param) {
      for(i = 0; i < this.elements.length; i++) {
        var currentElement = this.elements[i];
        param = currentElement.textContent;
      }
    };

    this.append = function (param) {
    //  for(i = 0; i < this.elements.length; i++) {
        //var myDiv = document.getElementById(param);
        /*var newElem = document.createElement('p');
        newElem.appendChild(document.createTextNode(param));
        //var currentElement = this.elements[i];
        //currentElement.te(newElem);*/
        var newDiv = document.createElement('div');
        var newContent = document.createTextNode(param);
        newDiv.appendChild(newContent);
        var currentDiv = document.getElementById('div1');
        document.body.insertBefore(newDiv, currentDiv).innerHtml;
//      }
    };

    this.prepend = function(param) {

    };

    //Deletes tags that are specified when calling innerMakeBelieve and delete function
    this.delete = function () {
      for (var i = 0; i < this.elements.length;i++) {
        var currentElement = this.elements[i];
        var parent = this.elements[i].parentElement;
        parent.removeChild(currentElement);
        console.log(parent);
      }
    };

    //Toggle class
    this.toggleClass = function(param) {
      console.log(param);
      for (var i = 0; i < this.elements.length; i++) {
       var currentElement = this.elements[i];
        if(currentElement == this.elements[i]) {
          currentElement.classList.remove(param);
          console.log(param);
        }
        else {
          currentElement.classList.add(param);
          console.log(param);
        }
      }
    };
  };

  var innerMakeBelieve = function (query) {
    var elem = document.querySelectorAll(query);

    if(elem) {
      return new makeBelieveElement(elem, elem.length);
    }
    return {};
  };

  window.__ = innerMakeBelieve;

  //Imitates what ajax does
  __.ajax = function(param) {
    //var rootUrl = param;
    //console.log(param);
      var newHttpRequest = new XMLHttpRequest();
    //  newHttpRequest.open('GET', rootUrl, '/timeout/5000', true);

      newHttpRequest.onreadystatechange = function() {
        newHttpRequest.open('GET', rootUrl, '/file');
        //console.log(newHttpRequest);
        newHttpRequest.send();
        if(newHttpRequest.readyState === XMLHttpRequest.DONE && newHttpRequest.status === 200) {
          console.log(newHttpRequest.responseText);
        }
        else {
          console.log("ERROR");
        }
    };
  };

})();

/*
var ans = __('#child').parent('p');// Returns the <div id="parent"></div>
var ans = __('#child').grandParent('div'); // Returns the <div id="parent"></div>
var ans4 = __('.some-div p').delete(); //Deletes paragraph in div with class some-div
var ans2 = __('#password').onClick(function(evt) {
  console.log(evt.target.value);
});
var ans3 = __('#child').insertText('This is some text');*/
var ans1 = __('#some-para').toggleClass('.black');

/*
var ans2 = __('#child').append("<p> I am appended paragraph </p>");
var ans3 = __('#child').append(document.createElement('p').appendChild(document.createTextNode('I am paragraph')));
*/
var ans = __('#child').ancestor('#ancestor2');
console.log(ans1);
/*
__.ajax({
  url: 'https://serene-island-81305.herokuapp.com/',
  method: 'GET',
  data: {},
  timeout: 10,
  headers: {'Access-Control-Allow-Origin': 'my-form'},
  //headers: {'Authorization': 'my-form'},
  success: function(resp) {
    console.log(resp);
  },
  fail: function(error) {
    console.log(error);
  },
  beforeSend: function(xhr) {
    xhr.setRequestHeader('Content-Type', 'application/json');
  }
});*/
