import { BarrageConfig, BarrageItem, TrackOptions } from "./interface";
type Options = TrackOptions & {
    config: BarrageConfig;
};
export declare class Track {
    $trackEle: HTMLElement;
    private data;
    private top;
    private speed;
    private height;
    private config;
    private bulletList;
    constructor(options: Options);
    private createTrack;
    addBullet(item: BarrageItem): void;
    hasPosition(): boolean;
    putInTrack(): void;
    stopAllMove(): void;
    continueMove(): void;
    private destroyBullet;
}
export {};
