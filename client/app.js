(function() {
  'use strict';

  const app = angular.module('contactsApp', []);

  app.controller('contactsController', ($scope, $http) => {
    $http.get('http://localhost:3000/api/contacts').then((response) => {
      $scope.contacts = response.data;
    })
    .catch((error) => {
      throw new Error('Can not get any contacts');
    })

    $scope.saveContact = (contact) => {
      $http.post('http://localhost:3000/api/contacts', contact).then((response) => {
        $scope.contacts.push(response.data);
      })
      .catch((error) => {
        throw new Error('Can not post contact');
      })
    }
  });
})();
