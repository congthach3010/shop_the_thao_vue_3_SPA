// import 
(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // Register as an anonymous AMD module:
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS:
    factory(require('jquery'));
  } else {
    // Browser globals:
    factory(window.jQuery);
  }
})(function ($) {
  'use strict';

  // Helper variable to create unique names for the transport iframes:
  var counter = 0,
    jsonAPI = $,
    jsonParse = 'parseJSON';

  if ('JSON' in window && 'parse' in JSON) {
    jsonAPI = JSON;
    jsonParse = 'parse';
  }

  $.ajaxTransport('iframe', function (options) {
    if (options.async) {
      var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',
        form,
        iframe,
        addParamChar;

      return {
        send: function (_, completeCallback) {
          form = $('<form style="display:none;"></form>');
          form.prop('accept-charset', options.formAcceptCharset);
          addParamChar = /\?/.test(options.url) ? '&' : '?';

          // XDomainRequest only supports GET and POST:
          if (options.type === 'DELETE' || options.type === 'PUT' || options.type === 'PATCH') {
            options.url = options.url + addParamChar + '_method=' + options.type;
            options.type = 'POST';
          }

          counter += 1;
          iframe = $(
            '<iframe src="' +
              initialIframeSrc +
              '" name="iframe-transport-' +
              counter +
              '"></iframe>'
          ).on('load', function () {
            var fileInputClones,
              paramNames = $.isArray(options.paramName)
                ? options.paramName
                : [options.paramName];

            iframe.off('load').on('load', function () {
              var response;
              try {
                response = iframe.contents();
                if (!response.length || !response[0].firstChild) {
                  throw new Error();
                }
              } catch (e) {
                response = undefined;
              }
              completeCallback(200, 'success', { iframe: response });
              $('<iframe src="' + initialIframeSrc + '"></iframe>').appendTo(form);
              window.setTimeout(function () {
                form.remove();
              }, 0);
            });

            form
              .prop('target', iframe.prop('name'))
              .prop('action', options.url)
              .prop('method', options.type);

            if (options.formData) {
              $.each(options.formData, function (index, field) {
                $('<input type="hidden"/>')
                  .prop('name', field.name)
                  .val(field.value)
                  .appendTo(form);
              });
            }

            if (options.fileInput && options.fileInput.length && options.type === 'POST') {
              fileInputClones = options.fileInput.clone();

              // Insert a clone for each file input field:
              options.fileInput.after(function (index) {
                return fileInputClones[index];
              });

              if (options.paramName) {
                options.fileInput.each(function (index) {
                  $(this).prop('name', paramNames[index] || options.paramName);
                });
              }

              form
                .append(options.fileInput)
                .prop('enctype', 'multipart/form-data')
                // enctype must be set as encoding for IE:
                .prop('encoding', 'multipart/form-data');

              // Remove the HTML5 form attribute from the input(s):
              options.fileInput.removeAttr('form');
            }

            form.submit();

            if (fileInputClones && fileInputClones.length) {
              options.fileInput.each(function (index, input) {
                var clone = $(fileInputClones[index]);
                // Restore the original name and form properties:
                $(input)
                  .prop('name', clone.prop('name'))
                  .attr('form', clone.attr('form'));
                clone.replaceWith(input);
              });
            }
          });

          form.append(iframe).appendTo(document.body);
        },
        abort: function () {
          if (iframe) {
            // javascript:false as iframe src aborts the request
            // and prevents warning popups on HTTPS in IE6.
            iframe.off('load').prop('src', initialIframeSrc);
          }
          if (form) {
            form.remove();
          }
        }
      };
    }
  });

  $.ajaxSetup({
    converters: {
      'iframe text': function (iframe) {
        return iframe && $(iframe[0].body).text();
      },
      'iframe json': function (iframe) {
        return iframe && jsonAPI[jsonParse]($(iframe[0].body).text());
      },
      'iframe html': function (iframe) {
        return iframe && $(iframe[0].body).html();
      },
      'iframe xml': function (iframe) {
        var xmlDoc = iframe && iframe[0];
        return xmlDoc && $.isXMLDoc(xmlDoc)
          ? xmlDoc
          : $.parseXML(
              (xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml) ||
                $(xmlDoc.body).html()
            );
      },
      'iframe script': function (iframe) {
        return iframe && $.globalEval($(iframe[0].body).text());
      }
    }
  });
});
