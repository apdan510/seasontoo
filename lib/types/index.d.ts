export interface Props {
    activeIndex?: number;
    animationDuration?: number;
    animationEasingFunction?: string;
    animationType?: 'slide' | 'fadeout' | AnimationType;
    autoHeight?: boolean;
    autoPlay?: boolean;
    autoPlayControls?: boolean;
    autoPlayDirection?: 'rtl' | 'ltr' | AutoplayDirection;
    autoPlayInterval?: number;
    autoPlayStrategy?: 'default' | 'all' | 'action' | 'none' | AutoPlayStrategy;
    autoWidth?: boolean;
    children?: any;
    controlsStrategy?: 'default' | 'responsive' | ControlsStrategy;
    disableButtonsControls?: boolean;
    disableDotsControls?: boolean;
    disableSlideInfo?: boolean;
    infinite?: boolean;
    items?: any[];
    mouseTracking?: boolean;
    paddingLeft?: number;
    paddingRight?: number;
    preservePosition?: boolean;
    responsive?: Responsive;
    renderKey?: number;
    swipeDelta?: number;
    swipeExtraPadding?: number;
    touchMoveDefaultEvents?: boolean;
    touchTracking?: boolean;
    onInitialized?: (e: EventObject) => void;
    onResizeEvent?: (e: Event, prevProps: RootElement, nextProps: RootElement) => boolean;
    onResized?: (e: EventObject) => void;
    onSlideChange?: (e: EventObject) => void;
    onSlideChanged?: (e: EventObject) => void;
    renderSlideInfo?: (e: SlideInfo) => any;
    renderDotsItem?: (e: DotsItem) => any;
    renderPrevButton?: ({ isDisabled }: {
        isDisabled: any;
    }) => any;
    renderNextButton?: ({ isDisabled }: {
        isDisabled: any;
    }) => any;
    renderPlayPauseButton?: ({ isPlaying }: {
        isPlaying: any;
    }) => any;
}
export interface State {
    activeIndex: number;
    animationDuration?: number;
    autoWidth: boolean;
    clones: any[];
    infinite?: boolean;
    initialStageHeight: number;
    isAutoPlaying: boolean;
    isAutoPlayCanceledOnAction: boolean;
    isStageContentPartial: boolean;
    itemsCount: number;
    itemsInSlide: number;
    itemsOffset: number;
    fadeoutAnimationIndex: number | null;
    fadeoutAnimationPosition: number | null;
    fadeoutAnimationProcessing: boolean;
    stageContentWidth: number;
    stageWidth: number;
    swipeLimitMin: number;
    swipeLimitMax: number;
    swipeAllowedPositionMax: number;
    swipeShiftValue: number;
    transition: string;
    transformationSet: TransformationSetItem[];
    translate3d: number;
}
export declare type Style = {
    transition: string;
    transform?: string;
};
export declare type Transition = {
    animationDuration?: number;
    animationEasingFunction?: string;
};
export declare type Responsive = {
    [key: string]: {
        items: number;
    };
};
export declare type EventObject = {
    item: number;
    slide: number;
    itemsInSlide: number;
    isPrevSlideDisabled: boolean;
    isNextSlideDisabled: boolean;
};
export declare type RootElement = {
    width?: number;
    height?: number;
};
export declare type TransformationSetItem = {
    width: number;
    position: number;
};
export declare type SlideTo = {
    activeIndex: number;
    fadeoutAnimationIndex?: number | null;
    fadeoutAnimationPosition?: number | null;
};
export declare type SlideInfo = {
    item: number;
    itemsCount: number;
};
export declare type DotsItem = {
    isActive: boolean;
    activeIndex: number;
};
export declare enum AnimationType {
    FADEOUT = "fadeout",
    SLIDE = "slide"
}
export declare enum AutoPlayStrategy {
    DEFAULT = "default",
    ALL = "all",
    ACTION = "action",
    NONE = "none"
}
export declare enum ControlsStrategy {
    DEFAULT = "default",
    RESPONSIVE = "responsive"
}
export declare enum AutoplayDirection {
    RTL = "rtl",
    LTR = "ltr"
}
