var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HttpError = (function (_super) {
    __extends(HttpError, _super);
    function HttpError(msg) {
        var _this = _super.call(this) || this;
        _this.msg = msg;
        return _this;
    }
    return HttpError;
}(Error));
export { HttpError };
//# sourceMappingURL=HttpError.js.map