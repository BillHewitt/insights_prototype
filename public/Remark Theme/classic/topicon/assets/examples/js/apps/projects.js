(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('/apps/projects', ['jquery'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jQuery);
    global.appsProjects = mod.exports;
  }
})(this, function (_jquery) {
  'use strict';

  var _jquery2 = babelHelpers.interopRequireDefault(_jquery);

  // (function(document, window, $) {
  //   'use strict';

  //   window.AppProjects = App.extend({
  //     handleSelective: function() {
  //       var members = [{
  //           id: 'uid_1',
  //           name: 'Herman Beck',
  //           img: '../../../../global/portraits/1.jpg'
  //         }, {
  //           id: 'uid_2',
  //           name: 'Mary Adams',
  //           img: '../../../../global/portraits/2.jpg'
  //         }, {
  //           id: 'uid_3',
  //           name: 'Caleb Richards',
  //           img: '../../../../global/portraits/3.jpg'
  //         }, {
  //           id: 'uid_4',
  //           name: 'June Lane',
  //           img: '../../../../global/portraits/4.jpg'
  //         }],
  //         selected = [{
  //           id: 'uid_1',
  //           name: 'Herman Beck',
  //           img: '../../../../global/portraits/1.jpg'
  //         }, {
  //           id: 'uid_2',
  //           name: 'Caleb Richards',
  //           img: '../../../../global/portraits/2.jpg'
  //         }];

  //       $('.plugin-selective').selective({
  //         namespace: 'addMember',
  //         local: members,
  //         selected: selected,
  //         buildFromHtml: false,
  //         tpl: {
  //           optionValue: function(data) {
  //             return data.id;
  //           },
  //           frame: function() {
  //             return '<div class="' + this.namespace + '">' +
  //               this.options.tpl.items.call(this) +
  //               '<div class="' + this.namespace + '-trigger">' +
  //               this.options.tpl.triggerButton.call(this) +
  //               '<div class="' + this.namespace + '-trigger-dropdown">' +
  //               this.options.tpl.list.call(this) +
  //               '</div>' +
  //               '</div>' +
  //               '</div>'
  //           },
  //           triggerButton: function() {
  //             return '<div class="' + this.namespace + '-trigger-button"><i class="wb-plus"></i></div>';
  //           },
  //           listItem: function(data) {
  //             return '<li class="' + this.namespace + '-list-item"><img class="avatar" src="' + data.img + '">' + data.name + '</li>';
  //           },
  //           item: function(data) {
  //             return '<li class="' + this.namespace + '-item"><img class="avatar" src="' + data.img + '">' +
  //               this.options.tpl.itemRemove.call(this) +
  //               '</li>';
  //           },
  //           itemRemove: function() {
  //             return '<span class="' + this.namespace + '-remove"><i class="wb-minus-circle"></i></span>';
  //           },
  //           option: function(data) {
  //             return '<option value="' + this.options.tpl.optionValue.call(this, data) + '">' + data.name + '</option>';
  //           }
  //         }
  //       });
  //     },

  //     handleProject: function() {
  //       $(document).on('click', '[data-tag=project-delete]', function(e) {
  //         bootbox.dialog({
  //           message: "Do you want to delete the project?",
  //           buttons: {
  //             success: {
  //               label: "Delete",
  //               className: "btn-danger",
  //               callback: function() {
  //                 // $(e.target).closest('.list-group-item').remove();
  //               }
  //             }
  //           }
  //         });
  //       });
  //     },

  //     run: function(next) {
  //       this.handleSelective();
  //       this.handleProject();

  //       next();
  //     }
  //   });

  //   $(document).ready(function() {
  //     AppProjects.run();
  //   });
  // 

  (0, _jquery2.default)(document).ready(function () {
    AppProjects.run();
  });
});