"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavData = /** @class */ (function () {
    function NavData() {
        this.DATA_TYPES = {
            CAPTURED_IMAGE: 'CAPTURED_IMAGE',
        };
    }
    Object.defineProperty(NavData.prototype, "Storage", {
        get: function () {
            if (this.storage == null) {
                this.storage = {};
            }
            return this.storage;
        },
        set: function (v) {
            this.storage = v;
        },
        enumerable: true,
        configurable: true
    });
    NavData = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], NavData);
    return NavData;
}());
exports.NavData = NavData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXYtZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQWdCQztRQWZPLGVBQVUsR0FBRztZQUNuQixjQUFjLEVBQUUsZ0JBQWdCO1NBQ2hDLENBQUM7SUFhcUIsQ0FBQztJQVZ4QixzQkFBVyw0QkFBTzthQUFsQjtZQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbkIsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JCLENBQUM7YUFDRCxVQUFtQixDQUFNO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUM7OztPQUhBO0lBWFcsT0FBTztRQURuQixpQkFBVSxFQUFFOztPQUNBLE9BQU8sQ0FpQm5CO0lBQUQsY0FBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2RGF0YSB7XG5cdHB1YmxpYyBEQVRBX1RZUEVTID0ge1xuXHRcdENBUFRVUkVEX0lNQUdFOiAnQ0FQVFVSRURfSU1BR0UnLFxuXHR9O1xuXG5cdHByaXZhdGUgc3RvcmFnZTogYW55O1xuXHRwdWJsaWMgZ2V0IFN0b3JhZ2UoKTogYW55IHtcblx0XHRpZiAodGhpcy5zdG9yYWdlID09IG51bGwpIHtcblx0XHRcdHRoaXMuc3RvcmFnZSA9IHt9O1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zdG9yYWdlO1xuXHR9XG5cdHB1YmxpYyBzZXQgU3RvcmFnZSh2OiBhbnkpIHtcblx0XHR0aGlzLnN0b3JhZ2UgPSB2O1xuXHR9XG5cdFxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7IH1cbn0iXX0=