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
var t = window.location.hash;
	choose_type = function(t) {
        $(".input-choose-type").hide(), $("#show_" + t).show()
    }, choose_type($("#input-choose-type").val()), $("#input-choose-type").change(function() {
        var t = $(this).val();
        choose_type(t)
    });

$('.btn-outline-secondary').click(function(e) {
        $('.btn-outline-secondary').not(this).removeClass('active')
    		.siblings('input').prop('checked',false);
    	$(this).addClass('active')
            .siblings('input').prop('checked',true);
    });

};

$(document).ready(function() {
	ZicaFont.ZicaFont();
	
});
