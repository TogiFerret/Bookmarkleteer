var active = false;
function checkGo() {
if (active === true) {
  //Library functions here

  function buildBML(input_JS_string){
    /* This function takes in the js code to put in the bookmarklet and returns the string with the bookmarklet code */
    return "javascript:(function(){" + input_JS_string + "})();"
  };
  function buildBMLobj(bookmarklet_content,link_name,class){
    /* This function returns the HTML code for a link that a user can drag into the bookmarks bar that has a class that is specified*/
    return "<a href='"+bookmarklet_content+"' class='"+class+"'>"+link_name+"</a>"

  };
};
};
function _initBML_() {
  active = true;
  checkGo();
};
function _killBML_(){
active = false;
checkGo();
};
