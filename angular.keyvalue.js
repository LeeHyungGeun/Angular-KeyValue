angular
.module('AKVModule', [])
.factory('AKV', AKV);

function AKV ( ) {
  /**
   * @param {object} data
   * @param {object} setting
   *
   */
  function init ( data, setting ) {
    setKeyValue(data, setting);


    // recursive function is into all child data.
    function setKeyValue ( data, setting ) {
      var cloneData = {};
      for (var property in setting ) {
        if (setting.hasOwnProperty(property)) {
          if (typeof setting[property] == 'object') {
            setKeyValue(data[property], setting[property]);
          }
          else {
            cloneData[setting[property]] = data[property];
          }
        }
      }
      renameKeyValues(data, cloneData);
    }// setKeyValue

    // change key name of the object.
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
  }// init

  return {
    init: init
  };
}// AKV
