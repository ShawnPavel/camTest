import { Injectable } from '@angular/core';

@Injectable()
export class NavData {
	public DATA_TYPES = {
		CAPTURED_IMAGE: 'CAPTURED_IMAGE',
	};

	private storage: any;
	public get Storage(): any {
		if (this.storage == null) {
			this.storage = {};
		}
		return this.storage;
	}
	public set Storage(v: any) {
		this.storage = v;
	}
	
	public constructor() { }
}