import {Component, bootstrap, View} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})
@View({
    template: '<h1>My name is  {{ name }}</h1>'
})

class AppComponent {
    name: string;

    constructor() {
        this.name = 'Nam';
    }
}

bootstrap(AppComponent);