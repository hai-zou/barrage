export interface BarrageOptions {
    container: HTMLElement;
    data: BarrageItem[];
    config?: BarrageConfig;
}
export interface BarrageItem {
    key: string;
    text: string;
    speed?: number;
    color?: string;
    fontSize?: string;
    createdAt?: string;
}
export interface BarrageConfig {
    fontSize?: string;
    defaultColor?: string;
    useRandomColor?: boolean;
    trackNumber?: number;
    trackHeight?: number;
}
export interface TrackOptions {
    data: BarrageItem[];
    top: number;
    speed: number;
}
export interface Listeners {
    [key: string]: Function[];
}
