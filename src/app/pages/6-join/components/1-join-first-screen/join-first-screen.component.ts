import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-join-first-screen',
    templateUrl: './join-first-screen.component.html',
    styleUrl: './join-first-screen.component.scss',
})
export class JoinFirstScreenComponent {
    currentCrumbsTitle = 'crumbs_title_join';
}
