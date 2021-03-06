import { ElementRef, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { Confirmation } from '../common/confirmation';
import { ConfirmationService } from '../common/confirmationservice';
import { Subscription } from 'rxjs/Subscription';
export declare class ConfirmDialog implements AfterViewInit, OnDestroy {
    el: ElementRef;
    domHandler: DomHandler;
    renderer: Renderer2;
    private confirmationService;
    header: string;
    icon: string;
    message: string;
    acceptIcon: string;
    acceptLabel: string;
    acceptVisible: boolean;
    rejectIcon: string;
    rejectLabel: string;
    rejectVisible: boolean;
    width: any;
    height: any;
    closeOnEscape: boolean;
    rtl: boolean;
    closable: boolean;
    responsive: boolean;
    appendTo: any;
    key: string;
    footer: any;
    confirmation: Confirmation;
    _visible: boolean;
    documentEscapeListener: any;
    documentResponsiveListener: any;
    mask: any;
    contentContainer: any;
    positionInitialized: boolean;
    subscription: Subscription;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer2, confirmationService: ConfirmationService);
    visible: boolean;
    ngAfterViewInit(): void;
    center(): void;
    enableModality(): void;
    disableModality(): void;
    close(event: Event): void;
    hide(): void;
    moveOnTop(): void;
    ngOnDestroy(): void;
    accept(): void;
    reject(): void;
}
export declare class ConfirmDialogModule {
}
