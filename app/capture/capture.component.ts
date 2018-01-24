import { Component, OnDestroy, OnInit, ViewChild, ElementRef, NgZone } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page';
import { Image } from 'tns-core-modules/ui/image';
import { ImageAsset } from 'tns-core-modules/image-asset';
import { AbsoluteLayout } from 'tns-core-modules/ui/layouts/absolute-layout'

import { CameraPlus } from '@nstudio/nativescript-camera-plus';
import { NavData } from '../providers/nav-data';

@Component({
	selector: "ns-capture",
	moduleId: module.id,
	styleUrls: ['./capture.component.css'],
	templateUrl: "./capture.component.html",
})
export class CaptureComponent implements OnInit, OnDestroy {
	private cameraPlus: CameraPlus;
	private x: number = 0;
	private y: number = 0;
	private z: number = 0;

	private isLevel = false;
	private orientation = 'flat';

	constructor(
		private navData: NavData,
		private page: Page,
		private routerExtensions: RouterExtensions,
		private zone: NgZone
	) {
	}

	ngOnInit(): void {
	}

	ngOnDestroy() {
	}

	private test(): void {
		if (this.cameraPlus) {
			this.captureTapped();
			// this.cameraPlus.chooseFromLibrary();
		}
	}

	private imagesSelectedEvent(e: any): void {
		let image: ImageAsset = (e.data as ImageAsset[])[0];
		this.navData[this.navData.DATA_TYPES.CAPTURED_IMAGE] = image;
		this.routerExtensions.back();
	}

	private camLoaded(e: any): void {
		console.log('***** cam loaded *****');
		this.cameraPlus = e.object as CameraPlus;

		let flashMode = this.cameraPlus.getFlashMode();

		// Turn flash on at startup
		if (flashMode == 'off') {
			this.cameraPlus.toggleFlash();
		}

		// TEST THE ICONS SHOWING/HIDING
		// this.cameraPlus.showCaptureIcon = true;
		// this.cameraPlus.showFlashIcon = true;
		// this.cameraPlus.showGalleryIcon = false;
		// this.cameraPlus.showToggleIcon = false;
	}

	private photoCapturedEvent(e: any): void {
		console.log('PHOTO CAPTURED EVENT!!!');
		let image: ImageAsset = e.data as ImageAsset;
		this.navData[this.navData.DATA_TYPES.CAPTURED_IMAGE] = image;
		this.routerExtensions.back();
	}

	private toggleCameraEvent(e: any): void {
		console.log("camera toggled");
	}

	private captureTapped(): void {
		this.cameraPlus.takePicture();
		// this.cameraPlus.takePicture({ saveToGallery: true, confirm: true });
	}
}