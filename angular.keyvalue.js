angular
.module('AKVModule', [])
.factory('AKV', AKV);

function AKV ( ) {
  function init ( data, setting ) {
    setKeyValue(data, setting);

    function setKeyValue ( data, setting ) {
      // var cloneData = angular.copy(data);
      var cloneData = {};
      for (var property in setting ) {
        if (setting.hasOwnProperty(property)) {
          if (typeof setting[property] == 'object') {
            setKeyValue(data[property], setting[property]);
          }
          else {
            cloneData[setting[property]] = data[property];
            //renameKeyValue(data, property, setting[property], cloneData);
          }
        }
      }
      renameKeyValues(data, cloneData);
    }// setKeyValue

    function renameKeyValues ( originalData, newData ) {
      for (var property in newData) {
        originalData[property] = newData[property];
      }
      for (var property in originalData) {
        if(originalData[property] !== newData[property] && !angular.isObject(originalData[property])) {
          delete originalData[property];
        }
      }
    }// renameKeyValues

    function renameKeyValue ( obj, oldName, newName ) {
      if (obj[oldName] == obj[newName]) {
        return obj;
      }

      if (obj.hasOwnProperty(oldName)) {
        obj[newName] = obj[oldName];
        delete obj[oldName];
      }
    }// renameKeyValue
  }// init

  return {
    init: init
  };
}// AKV
