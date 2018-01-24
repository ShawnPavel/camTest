import { Component, NgZone, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'ui/page';
import * as moment from 'moment';
import { NavData } from '../providers/nav-data';
import { ImageAsset } from 'image-asset';
import { ImageSource } from 'image-source';

@Component({
	selector: "ns-dashboard",
	moduleId: module.id,
	styleUrls: ['./dashboard.component.css'],
	templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
	public imageAsset: ImageAsset = null;
	public imageSource: ImageSource = null;
	public navTime: moment.Moment = null;
	public busy: boolean = false;
	
	constructor(
		private navData: NavData,
		private page: Page,
		private routerExtensions: RouterExtensions,
		private zone: NgZone
	) {
		// Get the navigated to event
		this.page.on(Page.navigatedToEvent, () => {
			this.onNavigatedToEvent();
		});
	}
	
	ngOnInit(): void {
	}

	private captureNewImage(): void {
		let now = moment();
		let diff = now.diff(this.navTime, 'seconds')
		if (this.navTime === null || diff > 5) {
			this.busy = false;
			this.navToCapture();
		} else {
			this.busy = true;
			setTimeout(() => { this.captureNewImage(); }, 5000 - (diff * 1000));
		}
	}

	private navToCapture(): void {
        this.routerExtensions.navigate(['/capture'], { clearHistory: false });
	}

	private onNavigatedToEvent(): void {
		this.navTime = moment();
		this.loadImage();
	}

	private loadImage(): void {
		// Get the imageasset from navData and present it
		this.imageAsset = this.navData[this.navData.DATA_TYPES.CAPTURED_IMAGE];
		
		if (this.imageAsset) {
			this.imageSource = new ImageSource();

			this.imageSource.fromAsset(this.imageAsset).then(
				(imgSrc) => {
					if (imgSrc) {
						this.zone.run(() => {
							this.imageSource = imgSrc;
						})
					} else {
						alert('Image source is bad.');
					}
				},
				(err) => {
					console.log('Error getting image source: ')
					console.error(err);
					alert('Error getting image source from asset');
				}
			)
		}
	}
}