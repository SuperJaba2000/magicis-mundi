function loadJsonMod(files){
	
        let reader = new FileReader();
        reader.readAsText(files.files[0]);
	
        reader.onload = function(){
		var mod = JSON.parse(reader.result);
		
		console.info("Load mod '"+mod.displayName+"' data:  \n\n" + reader.result);
		
		var tag = document.createElement('script');
                tag.id = mod.name;

                tag.innerHTML = ("const "+mod.name+" = "+reader.result);
		document.body.append(tag);
		
		return mod;
        }
}

class Mod{
	
}

function loadMod(file){
	var reader = new FileReader();
	
	reader.readAsText(file);
	
	reader.onload = function(){
		var tag = document.createElement('script');
                tag.id = mod.name;

                tag.innerHTML = (reader.result);
		document.body.append(tag);
	}
}