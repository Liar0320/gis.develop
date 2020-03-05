import * as angular from 'angular';
import aolModule from './components/index';

angular.module('app', [aolModule.name]).run([
  '$log',
  '$rootScope',
  ($log: angular.ILogService, $rootScope: any) => {
    $log.log('项目启动');
    $rootScope.map = {
      center: [120, 30],
      zoom: 11,
    };
    $rootScope.property = JSON.stringify($rootScope.map);
    $rootScope.reset = () => {
      angular.extend($rootScope.map, JSON.parse($rootScope.property));
    };
  },
]);