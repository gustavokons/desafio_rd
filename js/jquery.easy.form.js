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
          form += "<div class='form-group'><label for='"+key+"'>"+key.toUpperCase()+"</label><select name='"+key+"' id='"+key+"' class='form-control' value=''><option value=''>Selecione</option>";
          for(i = 0; i < fields[key].length ; i++) {
            form += "<option>"+fields[key][i]+"</option>";
          }
          form += "</select></div>";
        }
      }

      if(!settings.modal) {
        $this.append("<div class='container'><form role='form'>"+form+"<button type='button' id='btn-submit-form' class='btn btn-default btn-success btn-block'>Baixar</button></form></div></div></div></div></div></form></div'>");
      }
      else {
        $this.append("<div class='container'><button type='button' class='btn btn-default btn-lg' id='btn-modal'>Baixe agora nosso material</button><div class='modal fade' id='modal-form' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button><h4><span class='glyphicon       glyphicon-download-alt'></span> Baixe agora nosso material</h4></div><div class='modal-body'><form role='form'>"+form+"           <button type='button' id='btn-submit-form' class='btn btn-default btn-success btn-block'>Baixar</button></form></div></div></div></div></div>");

        $("#btn-modal").on("click", function(){
          $("#modal-form").modal();
        });
      }

      $("#btn-submit-form").on("click", function(){
        if($("#nome").val() != "" && $("#email").val() != "") {
          $.ajax({
            url: "./api/teste",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify({ token:settings.token, secret:settings.secret, nome:$("#nome").val(), email:$("#email").val() }),
            method: "POST",
            error: function(jqXHR) {
              if(jqXHR.status == 500) {
                $("#btn-submit-form").after("<div class='alert alert-danger' role='alert'>Token or Secret API invalid!</div>");
              }
            },
            success: function(result){
              $("#btn-submit-form").after("<div class='alert alert-success' role='alert'>"+result.data.email+" inserted leads database</div>");
            }
          });
        }
        else {
          $("#btn-submit-form").after("<div class='alert alert-danger' role='alert'>Os campos Nome e E-mail são obrigatórios!</div>");
        }
      });

    });

  };
})(jQuery);
