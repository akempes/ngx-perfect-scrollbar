import { NgZone } from '@angular/core';
import { SimpleChanges, KeyValueDiffers } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnDestroy, DoCheck, OnChanges, AfterViewInit } from '@angular/core';
import { PerfectScrollbarConfig, PerfectScrollbarConfigInterface } from './perfect-scrollbar.interfaces';
import { Geometry } from './perfect-scrollbar.classes';
export declare class PerfectScrollbarDirective implements OnDestroy, DoCheck, OnChanges, AfterViewInit {
    private defaults;
    private zone;
    elementRef: ElementRef;
    private differs;
    private ro;
    private timeout;
    private scrollTopOffset;
    private configDiff;
    fxShow: boolean;
    fxHide: boolean;
    hidden: boolean;
    disabled: boolean;
    usePSClass: boolean;
    psPosStyle: string;
    runInsideAngular: boolean;
    config: PerfectScrollbarConfigInterface;
    oldConfig: PerfectScrollbarConfigInterface;
    constructor(defaults: PerfectScrollbarConfig, zone: NgZone, elementRef: ElementRef, differs: KeyValueDiffers);
    ngOnDestroy(): void;
    ngDoCheck(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    update(): void;
    geometry(property?: string): Geometry;
    scrollable(direction?: string): boolean;
    scrollTo(x: number, y?: number, speed?: number): void;
    scrollToX(x: number, speed?: number): void;
    scrollToY(y: number, speed?: number): void;
    scrollToTop(offset?: number, speed?: number): void;
    scrollToLeft(offset?: number, speed?: number): void;
    scrollToRight(offset?: number, speed?: number): void;
    scrollToBottom(offset?: number, speed?: number): void;
    animateScrolling(target: string, value: number, speed?: number): void;
}
