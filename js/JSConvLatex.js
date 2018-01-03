// Text Conversion
function conv_code() {
	var txt = document.getElementById("code_a").value;
	var obj_b = document.getElementById("code_b");
    var code = document.getElementById("code_type").value;
	
	switch (code) {
		case "Latex":    
            txt = txt.replace(/\n\n/g, "LineBreak");
            txt = txt.replace(/\n/g, "\\\\ \n");
            txt = txt.replace(/LineBreak/g, "\n\n\\vspace{1em} \n");
            break;
        case "Blog":
            aux = "<p style=\"text-align: center;\"> \n";
            txt = aux + txt;
            txt = txt.replace(/\n\n/g, "\n</p> \n<p style=\"text-align: center;\"> \n");
            txt += "\n</p>";
            break;
		default:
			txt = "Please, select other code type"
			break;        
    }
	obj_b.value = txt;
}
function reset_code() {
	var obj_a = document.getElementById("code_a");
	var obj_b = document.getElementById("code_b");
	obj_a.value = "";
	obj_b.value = "";
}




