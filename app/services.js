
'use strict';

angular.module('myApp.service', [])

.factory('produtoService',[function(){
    return {
      getProdutos: () => {
        let produtos;
        $.ajax({
           async:false,
           url: "/data/data.json",
           success: function (data) {
               if (data) {
                 produtos = data;
               }
           }
       });
       return produtos;
      }
    }
}]);
