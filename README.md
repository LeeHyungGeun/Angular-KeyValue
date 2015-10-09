# Angular-KeyValue

Set key value of your database as you want.

### Angular-KeyValue
Angular-KeyValue is a AngularJs Library that helps you inject your item to view model as your favourite key name.

### Why Angular-KeyValue
You should get databases from many DB system: SQL, Oracle, Cubrid, and MongoDB, etc. However, key value of its used not to match with your viewmodel.

### Installation and dependencies
It is a factory of AngularJS: [AngularJS](http://angularjs.org/)

#### 1. Include JS
```html
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.js"></script>
```

#### 2. HTML
```html
<input type="text" ng-model="data.item" />
```

#### 3. Angular-KeyValue
```javascript
Angular
.module('app', ['AKVModule'])
.controller('controller', Controller);
Controller.$inject = ['$scope', 'AKV'];
function Controller ($scoe, AKV) {
  var data = {
    item: {
      id: "0",
      value: "item1"
    }
  };
  var setting = {
    item: {
      id: "value",
      value: "label"
    }
  };
  AKV.init(data, setting);
  $scope.data = data;
}
```

### API

`initialize` - set the key value;

```javascript
AKV.init(data, setting);
```

### Warning - array type

You should put key value in every object of array.

### Developer information
email: lhg4031@gmail.com

