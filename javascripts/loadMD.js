var mdFile = new XMLHttpRequest();
mdFile.open("GET", "http://mypath/myFile.md", true);
mdFile.onreadystatechange = function(){
 // Makes sure the document exists and is ready to parse.
 if (mdFile.readyState === 4 && mdFile.status === 200)   
 {
    var mdText = mdFile.responseText; 
    var converter = new showdown.Converter();
    converter.makeHtml(mdText);
    //Do whatever you want to do with the HTML text
 }
}