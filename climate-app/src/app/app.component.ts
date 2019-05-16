import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent
{
    navbarConfig = {
        title: "Climate Base",
        buttons: [
            {
                name: "Climate",
                link: "/climate",
                tooltip: "See the climate and how it is changing."
            },
            {
                name: "Weather",
                link: "/weather",
                tooltip: "Look at the global weather situation."
            },
            {
                name: "Data",
                link: "/data",
                tooltip: "Look at current and past data and some data visualisations."
            },
            {
                name: "Predictions",
                link: "/predictions",
                tooltip: "See our predictions for our future on this planet."
            },
            {
                name: "Taking action",
                link: "/taking_action",
                tooltip: "See how others are taking action and how you can do too."
            }
        ]
    };
}
