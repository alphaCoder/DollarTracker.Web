import { OnInit } from '@angular/core';
import { SlimLoadingBarService } from './service';
/**
 * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
 */
export declare class SlimLoadingBar implements OnInit {
    private service;
    private progressEl;
    private _progress;
    progress: string;
    color: string;
    height: string;
    show: boolean;
    constructor(service: SlimLoadingBarService);
    ngOnInit(): any;
}
