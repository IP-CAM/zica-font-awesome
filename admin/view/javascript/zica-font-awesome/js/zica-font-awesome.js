/*
 Copyright (C) Jano Sousa 2016-2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
 
var ZicaFont = ZicaFont || {};

ZicaFont.getURLVar = function (key) {
	var value = [];

	var query = String(document.location).split('?');

	if (query[1]) {
		var part = query[1].split('&');

		for (i = 0; i < part.length; i++) {
			var data = part[i].split('=');

			if (data[0] && data[1]) {
				value[data[0]] = data[1];
			}
		}

		if (value[key]) {
			return value[key];
		} else {
			return '';
		}
	}
};


ZicaFont.Zica = function(){

  function iformat(icon) {
    var originalOption = icon.element;
    return $('<span><i class="fa ' + $(originalOption).data('icon') + '"></i> ' + icon.text + '</span>');
}
$('.icons').select2({
    theme: "bootstrap",
    width: "100%",
    templateSelection: iformat,
    templateResult: iformat,
    allowHtml: true,
	"language": {
    "noResults": function(){
    return "Nenhum resultado encontrado";
    }
    }
});
};

$(document).ready(function() {
	ZicaFont.Zica();
	
});
