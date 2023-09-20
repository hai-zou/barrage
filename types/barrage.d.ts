import './barrage.css';
import { BarrageOptions, BarrageItem, BarrageConfig } from './interface';
export declare class Barrage {
    static defaultConfig: BarrageConfig;
    private $container;
    private $curtain;
    private data;
    private config;
    private trackList;
    private timer;
    private _listeners;
    constructor(options: BarrageOptions);
    private _render;
    addData(item: BarrageItem | BarrageItem[]): void;
    private distributeBarrage;
    play(): void;
    pause(): void;
    continue(): void;
    private stopPut;
    on(eventName: string, callback: Function): Barrage;
    off(eventName: string, callback: Function): Barrage;
    private emit;
    destroy(): void;
}
