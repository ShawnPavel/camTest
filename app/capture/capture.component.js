"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var nav_data_1 = require("../providers/nav-data");
var CaptureComponent = /** @class */ (function () {
    function CaptureComponent(navData, page, routerExtensions, zone) {
        this.navData = navData;
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.zone = zone;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.isLevel = false;
        this.orientation = 'flat';
    }
    CaptureComponent.prototype.ngOnInit = function () {
    };
    CaptureComponent.prototype.ngOnDestroy = function () {
    };
    CaptureComponent.prototype.test = function () {
        if (this.cameraPlus) {
            this.captureTapped();
            // this.cameraPlus.chooseFromLibrary();
        }
    };
    CaptureComponent.prototype.imagesSelectedEvent = function (e) {
        var image = e.data[0];
        this.navData[this.navData.DATA_TYPES.CAPTURED_IMAGE] = image;
        this.routerExtensions.back();
    };
    CaptureComponent.prototype.camLoaded = function (e) {
        console.log('***** cam loaded *****');
        this.cameraPlus = e.object;
        var flashMode = this.cameraPlus.getFlashMode();
        // Turn flash on at startup
        if (flashMode == 'off') {
            this.cameraPlus.toggleFlash();
        }
        // TEST THE ICONS SHOWING/HIDING
        // this.cameraPlus.showCaptureIcon = true;
        // this.cameraPlus.showFlashIcon = true;
        // this.cameraPlus.showGalleryIcon = false;
        // this.cameraPlus.showToggleIcon = false;
    };
    CaptureComponent.prototype.photoCapturedEvent = function (e) {
        console.log('PHOTO CAPTURED EVENT!!!');
        var image = e.data;
        this.navData[this.navData.DATA_TYPES.CAPTURED_IMAGE] = image;
        this.routerExtensions.back();
    };
    CaptureComponent.prototype.toggleCameraEvent = function (e) {
        console.log("camera toggled");
    };
    CaptureComponent.prototype.captureTapped = function () {
        this.cameraPlus.takePicture();
        // this.cameraPlus.takePicture({ saveToGallery: true, confirm: true });
    };
    CaptureComponent = __decorate([
        core_1.Component({
            selector: "ns-capture",
            moduleId: module.id,
            styleUrls: ['./capture.component.css'],
            templateUrl: "./capture.component.html",
        }),
        __metadata("design:paramtypes", [nav_data_1.NavData,
            page_1.Page,
            router_1.RouterExtensions,
            core_1.NgZone])
    ], CaptureComponent);
    return CaptureComponent;
}());
exports.CaptureComponent = CaptureComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXB0dXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RjtBQUM1RixzREFBK0Q7QUFDL0QsaURBQWdEO0FBTWhELGtEQUFnRDtBQVFoRDtJQVNDLDBCQUNTLE9BQWdCLEVBQ2hCLElBQVUsRUFDVixnQkFBa0MsRUFDbEMsSUFBWTtRQUhaLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVhiLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUVkLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxNQUFNLENBQUM7SUFRN0IsQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsc0NBQVcsR0FBWDtJQUNBLENBQUM7SUFFTywrQkFBSSxHQUFaO1FBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLHVDQUF1QztRQUN4QyxDQUFDO0lBQ0YsQ0FBQztJQUVPLDhDQUFtQixHQUEzQixVQUE0QixDQUFNO1FBQ2pDLElBQUksS0FBSyxHQUFnQixDQUFDLENBQUMsSUFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLG9DQUFTLEdBQWpCLFVBQWtCLENBQU07UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLE1BQW9CLENBQUM7UUFFekMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUvQywyQkFBMkI7UUFDM0IsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQixDQUFDO1FBRUQsZ0NBQWdDO1FBQ2hDLDBDQUEwQztRQUMxQyx3Q0FBd0M7UUFDeEMsMkNBQTJDO1FBQzNDLDBDQUEwQztJQUMzQyxDQUFDO0lBRU8sNkNBQWtCLEdBQTFCLFVBQTJCLENBQU07UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksS0FBSyxHQUFlLENBQUMsQ0FBQyxJQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU8sNENBQWlCLEdBQXpCLFVBQTBCLENBQU07UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTyx3Q0FBYSxHQUFyQjtRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsdUVBQXVFO0lBQ3hFLENBQUM7SUFwRVcsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDdEMsV0FBVyxFQUFFLDBCQUEwQjtTQUN2QyxDQUFDO3lDQVdpQixrQkFBTztZQUNWLFdBQUk7WUFDUSx5QkFBZ0I7WUFDNUIsYUFBTTtPQWJULGdCQUFnQixDQXFFNUI7SUFBRCx1QkFBQztDQUFBLEFBckVELElBcUVDO0FBckVZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2UnO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXQnO1xuaW1wb3J0IHsgQWJzb2x1dGVMYXlvdXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0J1xuXG5pbXBvcnQgeyBDYW1lcmFQbHVzIH0gZnJvbSAnQG5zdHVkaW8vbmF0aXZlc2NyaXB0LWNhbWVyYS1wbHVzJztcbmltcG9ydCB7IE5hdkRhdGEgfSBmcm9tICcuLi9wcm92aWRlcnMvbmF2LWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwibnMtY2FwdHVyZVwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzdHlsZVVybHM6IFsnLi9jYXB0dXJlLmNvbXBvbmVudC5jc3MnXSxcblx0dGVtcGxhdGVVcmw6IFwiLi9jYXB0dXJlLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIENhcHR1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cdHByaXZhdGUgY2FtZXJhUGx1czogQ2FtZXJhUGx1cztcblx0cHJpdmF0ZSB4OiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHk6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgejogbnVtYmVyID0gMDtcblxuXHRwcml2YXRlIGlzTGV2ZWwgPSBmYWxzZTtcblx0cHJpdmF0ZSBvcmllbnRhdGlvbiA9ICdmbGF0JztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIG5hdkRhdGE6IE5hdkRhdGEsXG5cdFx0cHJpdmF0ZSBwYWdlOiBQYWdlLFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcblx0XHRwcml2YXRlIHpvbmU6IE5nWm9uZVxuXHQpIHtcblx0fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdH1cblxuXHRwcml2YXRlIHRlc3QoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY2FtZXJhUGx1cykge1xuXHRcdFx0dGhpcy5jYXB0dXJlVGFwcGVkKCk7XG5cdFx0XHQvLyB0aGlzLmNhbWVyYVBsdXMuY2hvb3NlRnJvbUxpYnJhcnkoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGltYWdlc1NlbGVjdGVkRXZlbnQoZTogYW55KTogdm9pZCB7XG5cdFx0bGV0IGltYWdlOiBJbWFnZUFzc2V0ID0gKGUuZGF0YSBhcyBJbWFnZUFzc2V0W10pWzBdO1xuXHRcdHRoaXMubmF2RGF0YVt0aGlzLm5hdkRhdGEuREFUQV9UWVBFUy5DQVBUVVJFRF9JTUFHRV0gPSBpbWFnZTtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYW1Mb2FkZWQoZTogYW55KTogdm9pZCB7XG5cdFx0Y29uc29sZS5sb2coJyoqKioqIGNhbSBsb2FkZWQgKioqKionKTtcblx0XHR0aGlzLmNhbWVyYVBsdXMgPSBlLm9iamVjdCBhcyBDYW1lcmFQbHVzO1xuXG5cdFx0bGV0IGZsYXNoTW9kZSA9IHRoaXMuY2FtZXJhUGx1cy5nZXRGbGFzaE1vZGUoKTtcblxuXHRcdC8vIFR1cm4gZmxhc2ggb24gYXQgc3RhcnR1cFxuXHRcdGlmIChmbGFzaE1vZGUgPT0gJ29mZicpIHtcblx0XHRcdHRoaXMuY2FtZXJhUGx1cy50b2dnbGVGbGFzaCgpO1xuXHRcdH1cblxuXHRcdC8vIFRFU1QgVEhFIElDT05TIFNIT1dJTkcvSElESU5HXG5cdFx0Ly8gdGhpcy5jYW1lcmFQbHVzLnNob3dDYXB0dXJlSWNvbiA9IHRydWU7XG5cdFx0Ly8gdGhpcy5jYW1lcmFQbHVzLnNob3dGbGFzaEljb24gPSB0cnVlO1xuXHRcdC8vIHRoaXMuY2FtZXJhUGx1cy5zaG93R2FsbGVyeUljb24gPSBmYWxzZTtcblx0XHQvLyB0aGlzLmNhbWVyYVBsdXMuc2hvd1RvZ2dsZUljb24gPSBmYWxzZTtcblx0fVxuXG5cdHByaXZhdGUgcGhvdG9DYXB0dXJlZEV2ZW50KGU6IGFueSk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKCdQSE9UTyBDQVBUVVJFRCBFVkVOVCEhIScpO1xuXHRcdGxldCBpbWFnZTogSW1hZ2VBc3NldCA9IGUuZGF0YSBhcyBJbWFnZUFzc2V0O1xuXHRcdHRoaXMubmF2RGF0YVt0aGlzLm5hdkRhdGEuREFUQV9UWVBFUy5DQVBUVVJFRF9JTUFHRV0gPSBpbWFnZTtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b2dnbGVDYW1lcmFFdmVudChlOiBhbnkpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZyhcImNhbWVyYSB0b2dnbGVkXCIpO1xuXHR9XG5cblx0cHJpdmF0ZSBjYXB0dXJlVGFwcGVkKCk6IHZvaWQge1xuXHRcdHRoaXMuY2FtZXJhUGx1cy50YWtlUGljdHVyZSgpO1xuXHRcdC8vIHRoaXMuY2FtZXJhUGx1cy50YWtlUGljdHVyZSh7IHNhdmVUb0dhbGxlcnk6IHRydWUsIGNvbmZpcm06IHRydWUgfSk7XG5cdH1cbn0iXX0=