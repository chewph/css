import { EventEmitter, AfterContentInit, ElementRef, ChangeDetectorRef, QueryList, OnInit, Renderer2 } from '@angular/core';
import { TreeNode } from '../common/treenode';
import { Header, Footer, Column } from '../common/shared';
import { Subscription } from 'rxjs/Subscription';
import { DomHandler } from '../dom/domhandler';
export declare class UITreeRow implements OnInit {
    treeTable: TreeTable;
    node: TreeNode;
    parentNode: TreeNode;
    level: number;
    labelExpand: string;
    labelCollapse: string;
    constructor(treeTable: TreeTable);
    ngOnInit(): void;
    toggle(event: Event): void;
    isLeaf(): boolean;
    isSelected(): boolean;
    onRowClick(event: MouseEvent): void;
    onRowRightClick(event: MouseEvent): void;
    onRowTouchEnd(): void;
    resolveFieldData(data: any, field: string): any;
}
export declare class TreeTable implements AfterContentInit {
    el: ElementRef;
    domHandler: DomHandler;
    changeDetector: ChangeDetectorRef;
    renderer: Renderer2;
    value: TreeNode[];
    selectionMode: string;
    selection: any;
    style: any;
    styleClass: string;
    labelExpand: string;
    labelCollapse: string;
    metaKeySelection: boolean;
    contextMenu: any;
    toggleColumnIndex: number;
    selectionChange: EventEmitter<any>;
    onNodeSelect: EventEmitter<any>;
    onNodeUnselect: EventEmitter<any>;
    onNodeExpand: EventEmitter<any>;
    onNodeCollapse: EventEmitter<any>;
    onContextMenuSelect: EventEmitter<any>;
    header: Header;
    footer: Footer;
    cols: QueryList<Column>;
    tableViewChild: ElementRef;
    rowTouched: boolean;
    columns: Column[];
    columnsSubscription: Subscription;
    constructor(el: ElementRef, domHandler: DomHandler, changeDetector: ChangeDetectorRef, renderer: Renderer2);
    ngAfterContentInit(): void;
    initColumns(): void;
    onRowClick(event: MouseEvent, node: TreeNode): void;
    onRowTouchEnd(): void;
    onRowRightClick(event: MouseEvent, node: TreeNode): void;
    findIndexInSelection(node: TreeNode): number;
    propagateSelectionUp(node: TreeNode, select: boolean): void;
    propagateSelectionDown(node: TreeNode, select: boolean): void;
    isSelected(node: TreeNode): boolean;
    isSingleSelectionMode(): boolean;
    isMultipleSelectionMode(): boolean;
    isCheckboxSelectionMode(): boolean;
    hasFooter(): boolean;
}
export declare class TreeTableModule {
}