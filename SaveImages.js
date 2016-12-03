javascript:(
	function(im){
		var imagem = "";
		tela = window.open('about:blank');
		for(var i=0;i<im.images.length;i++){
			var imagem = imagem + "<a href='"+im.images[i].src + "' download><table style='width:200px;height:200px;float:left;border:1px solid silver;border-radius:5px;padding:5px;margin-left:15px;'><tr><td><center><img src='" + im.images[i].src + "' style='max-width:175px;max-height:175px;' /></center></td></tr></table></a>";
		}
		var rewrite = "<html><head></head><body><hr>" + im.images.length + " imagens foram localizadas.<hr><br />" + imagem + "</body></html>";
		tela.document.write(rewrite);
	}
)(document);