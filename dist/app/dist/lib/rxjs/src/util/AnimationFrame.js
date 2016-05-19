System.register(['./root'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var root_1;
    var RequestAnimationFrameDefinition, AnimationFrame;
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            }],
        execute: function() {
            RequestAnimationFrameDefinition = (function () {
                function RequestAnimationFrameDefinition(root) {
                    if (root.requestAnimationFrame) {
                        this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
                        this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
                    }
                    else if (root.mozRequestAnimationFrame) {
                        this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
                        this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
                    }
                    else if (root.webkitRequestAnimationFrame) {
                        this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
                        this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
                    }
                    else if (root.msRequestAnimationFrame) {
                        this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
                        this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
                    }
                    else if (root.oRequestAnimationFrame) {
                        this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
                        this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
                    }
                    else {
                        this.cancelAnimationFrame = root.clearTimeout.bind(root);
                        this.requestAnimationFrame = function (cb) { return root.setTimeout(cb, 1000 / 60); };
                    }
                }
                return RequestAnimationFrameDefinition;
            }());
            exports_1("RequestAnimationFrameDefinition", RequestAnimationFrameDefinition);
            exports_1("AnimationFrame", AnimationFrame = new RequestAnimationFrameDefinition(root_1.root));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3V0aWwvQW5pbWF0aW9uRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozt5Q0E0QmEsY0FBYzs7Ozs7OztZQTFCM0I7Z0JBR0UseUNBQVksSUFBUztvQkFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2pFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyRSxDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO3dCQUN6QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hFLENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7d0JBQzVDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN2RSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0UsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQzt3QkFDeEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ25FLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2RSxDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbEUsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RFLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN6RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsVUFBUyxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkYsQ0FBQztnQkFDSCxDQUFDO2dCQUNILHNDQUFDO1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtZQXhCRCw2RUF3QkMsQ0FBQTtZQUVZLDRCQUFBLGNBQWMsR0FBRyxJQUFJLCtCQUErQixDQUFDLFdBQUksQ0FBQyxDQUFBLENBQUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvdXRpbC9BbmltYXRpb25GcmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvb3QgfSBmcm9tICcuL3Jvb3QnO1xuXG5leHBvcnQgY2xhc3MgUmVxdWVzdEFuaW1hdGlvbkZyYW1lRGVmaW5pdGlvbiB7XG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lOiAoaGFuZGxlOiBudW1iZXIpID0+IHZvaWQ7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZTogKGNiOiAoKSA9PiB2b2lkKSA9PiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHJvb3Q6IGFueSkge1xuICAgIGlmIChyb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgdGhpcy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHJvb3QuY2FuY2VsQW5pbWF0aW9uRnJhbWUuYmluZChyb290KTtcbiAgICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcm9vdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChyb290KTtcbiAgICB9IGVsc2UgaWYgKHJvb3QubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICB0aGlzLmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gcm9vdC5tb3pDYW5jZWxBbmltYXRpb25GcmFtZS5iaW5kKHJvb3QpO1xuICAgICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByb290Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHJvb3QpO1xuICAgIH0gZWxzZSBpZiAocm9vdC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIHRoaXMuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSByb290LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lLmJpbmQocm9vdCk7XG4gICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJvb3Qud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQocm9vdCk7XG4gICAgfSBlbHNlIGlmIChyb290Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICB0aGlzLmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gcm9vdC5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lLmJpbmQocm9vdCk7XG4gICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJvb3QubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChyb290KTtcbiAgICB9IGVsc2UgaWYgKHJvb3Qub1JlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgdGhpcy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHJvb3Qub0NhbmNlbEFuaW1hdGlvbkZyYW1lLmJpbmQocm9vdCk7XG4gICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJvb3Qub1JlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHJvb3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gcm9vdC5jbGVhclRpbWVvdXQuYmluZChyb290KTtcbiAgICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2IpIHsgcmV0dXJuIHJvb3Quc2V0VGltZW91dChjYiwgMTAwMCAvIDYwKTsgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEFuaW1hdGlvbkZyYW1lID0gbmV3IFJlcXVlc3RBbmltYXRpb25GcmFtZURlZmluaXRpb24ocm9vdCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
