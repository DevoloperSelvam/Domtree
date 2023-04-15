

function lablecreate(tagname,attrename,attrevalue,content) {
    var ele= document.createElement(tagname);
    ele.setAttribute(attrename,attrevalue);
    ele.innerHTML=content;
    return ele;
}

function linebreaks(tagname) {
    var ele = document.createElement(tagname);
    return ele;
}
function inputelement(tagname,attrename,attrevalue,attrename1,attrevalue1) {
    var ele= document.createElement(tagname);
    ele.setAttribute(attrename,attrevalue);
    ele.setAttribute(attrename1,attrevalue1);
    return ele;
}

var firstname =lablecreate ("lable","for","firstname","Firstname");
var br1 =linebreaks("br")
var  firstname1=inputelement("input","type","firstname","id","firstname");
var br2= linebreaks("br")
var middlename =lablecreate("lable","for","middlename","Middlename");
var br3= linebreaks("br")
var  middlename1=inputelement("input","type","middlename","id","middlename");
var br4 =linebreaks("br")
var  lastname= lablecreate("lable","for","lastname","Lastname");
var br5 =linebreaks("br")
var lastname1= inputelement ("input","type","lastname","id","lastname");
var br6=linebreaks("br")
var email =lablecreate ("lable","for","email","Email");
var br7 =linebreaks("br")
var email1 =inputelement ("input","type","email","id","email");
var br8=linebreaks("br")
var  password= lablecreate("lable","for","password","Password");
var br9=linebreaks("br")
var password1=inputelement("input","type","password","id","password");
var br10=linebreaks("br")

document.body.append(firstname,br1,firstname1,br2,middlename,br3,middlename1,br4,lastname,br5,lastname1,br6,email,br7,email1,br8,password,br9,password1,br10);




