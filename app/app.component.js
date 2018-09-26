"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    // Your TypeScript logic goes here
    function AppComponent() {
        console.log('Hello World');
        console.dir({
            type: "Apple",
            color: "Red"
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ActionBar title=\"My App\" class=\"action-bar\"></ActionBar>\n    <!-- Your UI components go here -->\n    <Image src=\"~/images/apple.jpg\"></Image>\n  ",
            styles: ["\n  @keyframes spin {\n      from { transform: rotate(0); } to { transform: rotate(360);}\n    }\n    Image {\n      animation-name: spin; animation-duration : 15s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }\n  "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFxQjFDO0lBQ0Usa0NBQWtDO0lBQ2xDO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ1YsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFSVSxZQUFZO1FBbkJ4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLGtLQUlUO1lBQ0QsTUFBTSxFQUFFLENBQUMsdVFBU1I7YUFDQTtTQUNGLENBQUM7O09BQ1csWUFBWSxDQVN4QjtJQUFELG1CQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IEFwcFwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxuICAgIDwhLS0gWW91ciBVSSBjb21wb25lbnRzIGdvIGhlcmUgLS0+XG4gICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2FwcGxlLmpwZ1wiPjwvSW1hZ2U+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfSB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MCk7fVxuICAgIH1cbiAgICBJbWFnZSB7XG4gICAgICBhbmltYXRpb24tbmFtZTogc3BpbjsgYW5pbWF0aW9uLWR1cmF0aW9uIDogMTVzO1xuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgfVxuICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvIFdvcmxkJyk7XG4gICAgY29uc29sZS5kaXIoe1xuICAgICAgdHlwZTogXCJBcHBsZVwiLFxuICAgICAgY29sb3I6IFwiUmVkXCJcbiAgICB9KVxuICB9XG59XG4iXX0=