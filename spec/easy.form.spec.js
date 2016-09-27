describe("jquery.easy.form", function () {

    var instance;
    var div;

    beforeEach(function() {
      div = $('<div>');

      instance = new EasyForm(div,
        {
          'token':'gregre151514415',
          'secret':'51a266c2844ccd5cac83d88de88d82d05358aa51',
  				'modal': true,
          'fields':{ 'estado':['PR','SC','SP','RS','PE','BA'], 'nivel':['Iniciante','Intermediário','Avançado','Ninja'] }
        }
      );
    });

    it("Check if form was built", function () {
      expect(instance.form).not.toBeNull();
    });

    it("Check if token and secret", function() {
      expect(instance.settings.token).not.toBeNull();
      expect(instance.settings.secret).not.toBeNull();
    });

    it("Check if modal was instancied", function () {
      expect(instance.settings.modal).toBe(true);
    });

    it("Check if custom fields are defined", function() {
      expect(instance.settings.fields).toBeDefined();
    });
});
