(function($){

  $.fn.easyForm = function(options) {
    var defaults = {
      "modal": false
    };
    var settings = $.extend(defaults,options);

    var fields = {"nome":"", "email":""};
    var $this = $(this);
    var form = "";

    return this.each( function() {
      if(typeof settings.fields != "undefined") {
        if(Object.keys(settings.fields).length > 0) {
          for(var key in settings.fields) {
            fields[key] = settings.fields[key];
          }
        }
      }
      for(var key in fields) {
        if(fields[key] == "") {
          form += "<div class='form-group'><label for='"+key+"'>"+key.toUpperCase()+"</label><input type='text' name='"+key+"' id='"+key+"' class='form-control' value=''></div>";
        }
        else {
          form += "<div class='form-group'><label for='"+key+"'>"+key.toUpperCase()+"</label><select name='"+key+"' id='"+key+"' class='form-control' value=''><option>Selecione</option></select></div>";
        }
      }

      if(!settings.modal) {
        $this.append("<div class='container'><form role='form'>"+form+"<button type='submit' class='btn btn-default btn-success btn-block'>Baixar</button></form></div></div></div></div></div></form></div'>");
      }
      else {
        $this.append("<div class='container'><button type='button' class='btn btn-default btn-lg' id='btn-modal'>Baixe agora nosso material</button><div class='modal fade' id='modal-form' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4><span class='glyphicon       glyphicon-download-alt'></span> Baixe agora nosso material</h4></div><div class='modal-body'><form role='form'>"+form+"            <button type='submit' class='btn btn-default btn-success btn-block'>Baixar</button></form></div></div></div></div></div>");

        $("#btn-modal").click(function(){
          $("#modal-form").modal();
        });
      }

    });

  };
})(jQuery);
