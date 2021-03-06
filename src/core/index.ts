import * as angular from 'angular';

import mapComponent from './map.component';
import viewComponent from './view.component';
import aolFeature from './feature.component';

import {
  aolLayerTile,
  aolLayerVector,
  aolLayerGroup,
  aolLayerWebgl,
} from './layers/index';
import {
  aolSourceXyz,
  aolSourceOsm,
  aolSourceVector,
  aolSourceCluster,
  aolSourceTiledebug,
} from './sources/index';
import {
  aolGeometryLinestring,
  aolGeometryPoint,
  aolGeometryPolygon,
} from './geometry.component';
import {
  aolCoordinate,
  aolCollectionCoordinates,
} from './coordinate.component';
import {
  aolStyle,
  aolStyleStroke,
  aolStyleFill,
  aolStyleCircle,
  aolStyleIcon,
  aolStyleText,
} from './styles';

import { aolOverlay } from './overlay.component';
import {
  aolInteractionDefaults,
  aolInteractionModify,
  aolInteractionSelect,
  aolInteractionDraganddrop,
  aolInteractionMeasure,
} from './interactions';
import { aolInteractionDraw } from './interactions/draw.component';

var aolModule = angular.module('aol', []);
function registerComponent(component: any) {
  aolModule.component(component.name, component);
}

[
  mapComponent,
  viewComponent,
  /**图层组件 */
  aolLayerTile,
  aolLayerVector,
  aolLayerWebgl,
  aolLayerGroup,
  /**数据源组件 */
  aolSourceXyz,
  aolSourceOsm,
  aolSourceVector,
  aolSourceCluster,
  aolSourceTiledebug,
  /**要素组件 */
  aolFeature,
  /**geo组件 */
  aolGeometryLinestring,
  aolGeometryPoint,
  aolGeometryPolygon,
  /**坐标组件 */
  aolCoordinate,
  aolCollectionCoordinates,
  /**样式组件 */
  aolStyle,
  aolStyleStroke,
  aolStyleCircle,
  aolStyleIcon,
  aolStyleText,
  aolStyleFill,
  /**domTOMap */
  aolOverlay,
  /**交互 */
  aolInteractionDefaults,
  aolInteractionDraw,
  aolInteractionModify,
  aolInteractionSelect,
  aolInteractionDraganddrop,
  aolInteractionMeasure,
].forEach(component => {
  registerComponent(component);
});

export default aolModule;
