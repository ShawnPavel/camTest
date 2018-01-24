"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var moment = require("moment");
var nav_data_1 = require("../providers/nav-data");
var image_source_1 = require("image-source");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(navData, page, routerExtensions, zone) {
        var _this = this;
        this.navData = navData;
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.zone = zone;
        this.imageAsset = null;
        this.imageSource = null;
        this.navTime = null;
        this.busy = false;
        // Get the navigated to event
        this.page.on(page_1.Page.navigatedToEvent, function () {
            _this.onNavigatedToEvent();
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.captureNewImage = function () {
        var _this = this;
        var now = moment();
        var diff = now.diff(this.navTime, 'seconds');
        if (this.navTime === null || diff > 5) {
            this.busy = false;
            this.navToCapture();
        }
        else {
            this.busy = true;
            setTimeout(function () { _this.captureNewImage(); }, 5000 - (diff * 1000));
        }
    };
    DashboardComponent.prototype.navToCapture = function () {
        this.routerExtensions.navigate(['/capture'], { clearHistory: false });
    };
    DashboardComponent.prototype.onNavigatedToEvent = function () {
        this.navTime = moment();
        this.loadImage();
    };
    DashboardComponent.prototype.loadImage = function () {
        var _this = this;
        // Get the imageasset from navData and present it
        this.imageAsset = this.navData[this.navData.DATA_TYPES.CAPTURED_IMAGE];
        if (this.imageAsset) {
            this.imageSource = new image_source_1.ImageSource();
            this.imageSource.fromAsset(this.imageAsset).then(function (imgSrc) {
                if (imgSrc) {
                    _this.zone.run(function () {
                        _this.imageSource = imgSrc;
                    });
                }
                else {
                    alert('Image source is bad.');
                }
            }, function (err) {
                console.log('Error getting image source: ');
                console.error(err);
                alert('Error getting image source from asset');
            });
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "ns-dashboard",
            moduleId: module.id,
            styleUrls: ['./dashboard.component.css'],
            templateUrl: "./dashboard.component.html",
        }),
        __metadata("design:paramtypes", [nav_data_1.NavData,
            page_1.Page,
            router_1.RouterExtensions,
            core_1.NgZone])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEQ7QUFDMUQsc0RBQStEO0FBQy9ELGdDQUErQjtBQUMvQiwrQkFBaUM7QUFDakMsa0RBQWdEO0FBRWhELDZDQUEyQztBQVEzQztJQU1DLDRCQUNTLE9BQWdCLEVBQ2hCLElBQVUsRUFDVixnQkFBa0MsRUFDbEMsSUFBWTtRQUpyQixpQkFVQztRQVRRLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVRkLGVBQVUsR0FBZSxJQUFJLENBQUM7UUFDOUIsZ0JBQVcsR0FBZ0IsSUFBSSxDQUFDO1FBQ2hDLFlBQU8sR0FBa0IsSUFBSSxDQUFDO1FBQzlCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFRNUIsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNuQyxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVPLDRDQUFlLEdBQXZCO1FBQUEsaUJBVUM7UUFUQSxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDNUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLFVBQVUsQ0FBQyxjQUFRLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDO0lBQ0YsQ0FBQztJQUVPLHlDQUFZLEdBQXBCO1FBQ08sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLCtDQUFrQixHQUExQjtRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTyxzQ0FBUyxHQUFqQjtRQUFBLGlCQXdCQztRQXZCQSxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXZFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUM7WUFFckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDL0MsVUFBQyxNQUFNO2dCQUNOLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ1osS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ2IsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFBO2dCQUNILENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQy9CLENBQUM7WUFDRixDQUFDLEVBQ0QsVUFBQyxHQUFHO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtnQkFDM0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUNELENBQUE7UUFDRixDQUFDO0lBQ0YsQ0FBQztJQWxFVyxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxXQUFXLEVBQUUsNEJBQTRCO1NBQ3pDLENBQUM7eUNBUWlCLGtCQUFPO1lBQ1YsV0FBSTtZQUNRLHlCQUFnQjtZQUM1QixhQUFNO09BVlQsa0JBQWtCLENBbUU5QjtJQUFELHlCQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgTmF2RGF0YSB9IGZyb20gJy4uL3Byb3ZpZGVycy9uYXYtZGF0YSc7XG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSAnaW1hZ2UtYXNzZXQnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UgfSBmcm9tICdpbWFnZS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwibnMtZGFzaGJvYXJkXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHN0eWxlVXJsczogWycuL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzJ10sXG5cdHRlbXBsYXRlVXJsOiBcIi4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHB1YmxpYyBpbWFnZUFzc2V0OiBJbWFnZUFzc2V0ID0gbnVsbDtcblx0cHVibGljIGltYWdlU291cmNlOiBJbWFnZVNvdXJjZSA9IG51bGw7XG5cdHB1YmxpYyBuYXZUaW1lOiBtb21lbnQuTW9tZW50ID0gbnVsbDtcblx0cHVibGljIGJ1c3k6IGJvb2xlYW4gPSBmYWxzZTtcblx0XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgbmF2RGF0YTogTmF2RGF0YSxcblx0XHRwcml2YXRlIHBhZ2U6IFBhZ2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuXHRcdHByaXZhdGUgem9uZTogTmdab25lXG5cdCkge1xuXHRcdC8vIEdldCB0aGUgbmF2aWdhdGVkIHRvIGV2ZW50XG5cdFx0dGhpcy5wYWdlLm9uKFBhZ2UubmF2aWdhdGVkVG9FdmVudCwgKCkgPT4ge1xuXHRcdFx0dGhpcy5vbk5hdmlnYXRlZFRvRXZlbnQoKTtcblx0XHR9KTtcblx0fVxuXHRcblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdH1cblxuXHRwcml2YXRlIGNhcHR1cmVOZXdJbWFnZSgpOiB2b2lkIHtcblx0XHRsZXQgbm93ID0gbW9tZW50KCk7XG5cdFx0bGV0IGRpZmYgPSBub3cuZGlmZih0aGlzLm5hdlRpbWUsICdzZWNvbmRzJylcblx0XHRpZiAodGhpcy5uYXZUaW1lID09PSBudWxsIHx8IGRpZmYgPiA1KSB7XG5cdFx0XHR0aGlzLmJ1c3kgPSBmYWxzZTtcblx0XHRcdHRoaXMubmF2VG9DYXB0dXJlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYnVzeSA9IHRydWU7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jYXB0dXJlTmV3SW1hZ2UoKTsgfSwgNTAwMCAtIChkaWZmICogMTAwMCkpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgbmF2VG9DYXB0dXJlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvY2FwdHVyZSddLCB7IGNsZWFySGlzdG9yeTogZmFsc2UgfSk7XG5cdH1cblxuXHRwcml2YXRlIG9uTmF2aWdhdGVkVG9FdmVudCgpOiB2b2lkIHtcblx0XHR0aGlzLm5hdlRpbWUgPSBtb21lbnQoKTtcblx0XHR0aGlzLmxvYWRJbWFnZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBsb2FkSW1hZ2UoKTogdm9pZCB7XG5cdFx0Ly8gR2V0IHRoZSBpbWFnZWFzc2V0IGZyb20gbmF2RGF0YSBhbmQgcHJlc2VudCBpdFxuXHRcdHRoaXMuaW1hZ2VBc3NldCA9IHRoaXMubmF2RGF0YVt0aGlzLm5hdkRhdGEuREFUQV9UWVBFUy5DQVBUVVJFRF9JTUFHRV07XG5cdFx0XG5cdFx0aWYgKHRoaXMuaW1hZ2VBc3NldCkge1xuXHRcdFx0dGhpcy5pbWFnZVNvdXJjZSA9IG5ldyBJbWFnZVNvdXJjZSgpO1xuXG5cdFx0XHR0aGlzLmltYWdlU291cmNlLmZyb21Bc3NldCh0aGlzLmltYWdlQXNzZXQpLnRoZW4oXG5cdFx0XHRcdChpbWdTcmMpID0+IHtcblx0XHRcdFx0XHRpZiAoaW1nU3JjKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnpvbmUucnVuKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0dGhpcy5pbWFnZVNvdXJjZSA9IGltZ1NyYztcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGFsZXJ0KCdJbWFnZSBzb3VyY2UgaXMgYmFkLicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0KGVycikgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBnZXR0aW5nIGltYWdlIHNvdXJjZTogJylcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdFx0YWxlcnQoJ0Vycm9yIGdldHRpbmcgaW1hZ2Ugc291cmNlIGZyb20gYXNzZXQnKTtcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdH1cblx0fVxufSJdfQ==