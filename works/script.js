var divs = ["Div1", "Div2", "Div3", "Div4", "Div5", "Div6", "Div7", "Div8", "Div9", "Div10", "Div11", "Div12"];
    var visibleDivId = null;
    function divVisibility(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
      hideNonVisibleDivs();
    }

    function hideNonVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }

    function myFunction() {
        var i, divId, div;

        for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId).style.display="none";
        }   
    }

    window.onload = function(){
      var canvas = document.getElementById("about");
      var ctx = canvas.getContext("2d");   
  }
  
  function four() {
      for(i=0; i < customElements.length; i++) {
          elements[i].style.flex = "33%";
      }
  }

