import { AnimationType, AutoPlayStrategy, AutoplayDirection, ControlsStrategy } from './types';
export declare const defaultProps: {
    activeIndex: number;
    animationDuration: number;
    animationEasingFunction: string;
    animationType: AnimationType;
    autoHeight: boolean;
    autoWidth: boolean;
    autoPlay: boolean;
    autoPlayControls: boolean;
    autoPlayDirection: AutoplayDirection;
    autoPlayInterval: number;
    autoPlayStrategy: AutoPlayStrategy;
    children: undefined;
    controlsStrategy: ControlsStrategy;
    disableButtonsControls: boolean;
    disableDotsControls: boolean;
    disableSlideInfo: boolean;
    infinite: boolean;
    items: undefined;
    mouseTracking: boolean;
    paddingLeft: number;
    paddingRight: number;
    responsive: undefined;
    swipeDelta: number;
    swipeExtraPadding: number;
    touchTracking: boolean;
    touchMoveDefaultEvents: boolean;
    onInitialized: () => undefined;
    onResized: () => undefined;
    onResizeEvent: undefined;
    onSlideChange: () => undefined;
    onSlideChanged: () => undefined;
};