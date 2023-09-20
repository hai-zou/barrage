import { BarrageConfig, BarrageItem } from "./interface";
type BulletOptions = BarrageItem & {
    left: number;
    removeBullet: (bulletItem: Bullet) => void;
    config: BarrageConfig;
};
export declare class Bullet {
    $bulletEle: HTMLElement;
    key: string;
    left: number;
    speed: number;
    animation: number;
    removeBullet: (bulletItem: Bullet) => void;
    config: BarrageConfig;
    constructor(options: BulletOptions);
    private createBullet;
    private getBarrageColor;
    private animate;
    move(): void;
    stop(): void;
    destroy(): void;
}
export {};
