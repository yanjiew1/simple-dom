import type BrowserWindow from '../window/BrowserWindow.js';
import Event from './Event.js';
import type IUIEventInit from './IUIEventInit.js';

/**
 *
 */
export default class UIEvent extends Event {
	public static NONE = 0;
	public static CAPTURING_PHASE = 1;
	public static AT_TARGET = 2;
	public static BUBBLING_PHASE = 3;
	public readonly detail: number;
	public readonly layerX: number = 0;
	public readonly layerY: number = 0;
	public readonly pageX: number = 0;
	public readonly pageY: number = 0;
	public readonly view: BrowserWindow | null;
	public readonly which: number = 0;

	/**
	 * Constructor.
	 *
	 * @param type Event type.
	 * @param [eventInit] Event init.
	 */
	constructor(type: string, eventInit: IUIEventInit | null = null) {
		super(type, eventInit);

		this.detail = eventInit?.detail ?? 0;
		this.view = eventInit?.view ?? null;
	}

	/**
	 * Init UI event.
	 *
	 * @deprecated
	 * @param type Type.
	 * @param [bubbles=false] "true" if it bubbles.
	 * @param [cancelable=false] "true" if it cancelable.
	 */
	public initUIEvent(
		type: string,
		bubbles = false,
		cancelable = false,
		view: BrowserWindow | null = null,
		detail = 0 
	): void {
		this.initEvent(type, bubbles, cancelable);
		Object.assign(this, { view, detail });
	}
}
