# Zica-font-awesome

> Esta modificação foi desenvolvida para trabalhar junto com a fontawesome, e tem o objetivo de facilitar o desenvolvimento de módulos, onde podemos selecionnar os icones em um campo do tipo select, utilizando o plugin select2.



[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/sincromaster/zica-font-awesome/blob/master/LICENSE)



### Exemplo
<img src="https://github.com/sincromaster/zica-font-awesome/blob/master/zica-font.png" alt="Zica-font-awesome">


### Usando
admin/controller/extension/module/seu-modulo.php
```
 $css_path = 'view/javascript/font-awesome/css/font-awesome.css';
 require_once(DIR_SYSTEM . 'library/zica-font-awesome/src/zica-font-awesome.php');
```

```
 if (isset($this->request->post['module_social'])) {
            $data['zica_font'] = $this->request->post['module_social'];
        } elseif ($this->config->get('module_social')) {
            $data['zica_font'] = $this->config->get('module_social');
        } else {
            $data['zica_font'] = array();
        }
```

admin\view\template\extension\module/seu-modulo.twig

```
<table id="zica-font" class="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th class="text-left">{{ entry_icon }}</th>
				  <th class="text-left">{{ entry_title }}</th>
				  <th class="text-left">{{ entry_description }}</th>
                  <th class="text-right">{{ entry_sort_order }}</th>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {% set zica_row = 0 %}
                {% for zica in zica_font %}
                  <tr id="zica-font-row{{ zica_row }}">
                    <td class="text-left" style="width:20%;" >
                     <select name="module_social[{{ zica_row }}][icon]" id="input-icon" class="form-control icons">
					{% for key,font in fontawesomes %} 
                      {% if key == zica.icon %}
                        <option value="{{ key }}" data-icon="{{ key }}" selected="selected">{{ font }}</option>
                      {% else %}
                        <option value="{{ key }}" data-icon="{{ key }}">{{ font }}</option>
                      {% endif %}
                    {% endfor %}
                  </select>
				  
               </td>
				 <td class="text-left">
                        <input type="text" name="module_social[{{ zica_row }}][title]" value="{{ zica.title }}" placeholder=" {{ entry_title }}" id="input-height" class="form-control" />
                       
					  </td>
					   <td class="text-left">
                        <textarea name="module_social[{{ zica_row }}][description]" rows="8" placeholder="{{ entry_description }}" id="input-zica-font-description}" data-toggle="ckeditor" data-lang="{{ ckeditor }}" class="form-control">{{ zica.description }}</textarea>
                         
						   </td>
                    <td class="text-right" style="width:10%;"><input type="text" name="module_social[{{ zica_row }}][sort_order]" value="{{ zica.sort_order }}" placeholder="{{ entry_sort_order }}" id="input-sort-order" class="form-control"/></td>
                    <td class="text-right"><button type="button" onclick="$('#social-row{{ zica_row }}').remove();" data-toggle="tooltip" title="{{ button_remove }}" class="btn btn-danger"><i class="fas fa-minus-circle"></i></button></td>
                  </tr>
                  {% set zica_row = zica_row + 1 %}
                {% endfor %}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3"></td>
                  <td class="text-right"><button type="button" onclick="addZicaFont();" data-toggle="tooltip" title="{{ button_filter_add }}" class="btn btn-primary"><i class="fa fa-plus-circle"></i></button></td>
                </tr>
              </tfoot>
            </table>
	    
	   ```

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2-bootstrap-theme/0.1.0-beta.10/select2-bootstrap.min.css"/>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js"></script>
<script src="view/javascript/zica-font-awesome/js/zica-font-awesome.js" type="text/javascript"></script>
 ```


```

<script type="text/javascript"><!--
var zica_row = {{ zica_row }};

function addZicaFont() {
	html = '<tr id="zica-font-row' + zica_row + '">';
	html += '  <td class="text-left" style="width:20%;">';
    html += ' <select name="module_social[' + zica_row + '][icon]" id="test" class="form-control icons">';
					{% for key,font in fontawesomes %} 
                      {% if font == zica.icon %}
    html += ' <option value="{{ key }}" data-icon="{{ key }}" selected="selected">{{ font }}</option>';
                      {% else %}
    html += ' <option value="{{ key }}" data-icon="{{ key }}">{{ font }}</option>';
                      {% endif %}
                    {% endfor %}
    html += ' </select>';
   	html += '  </td>';
	html += '<td class="text-left">';
    html += '<input type="text" name="module_social[' + zica_row + '][title]" value="" placeholder=" {{ entry_title }}" id="input-height" class="form-control" />';
	html += '</td>';
	html += ' <td class="text-left">';
    html += '<textarea name="module_social[' + zica_row + '][description]" rows="8" placeholder="{{ entry_description }}" id="input-zica-font-description}" data-toggle="ckeditor" data-lang="{{ ckeditor }}" class="form-control"></textarea>';
  	html += ' </td>';
    html += '<td class="text-right " style="width:10%;"><input type="text" name="module_social[' + zica_row + '][sort_order]" value="" placeholder="{{ entry_sort_order }}" id="input-sort-order" class="form-control"/></td>';
	html += '  <td class="text-right"><button type="button" onclick="$(\'#zica-font-row' + zica_row + '\').remove();" data-toggle="tooltip" title="{{ button_remove }}" class="btn btn-danger"><i class="fa fa-minus-circle"></i></button></td>';
	html += '</tr>';
	$('#zica-font tbody').append(html);
	ZicaFont.Zica();
	zica_row++;
}
//--></script>
```
