import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { Injectable } from '@angular/core';
import { Tag } from '../models/tag/tag';



@Component({
    selector: 'new-job-listing',
    templateUrl: './new-job-listing.component.html',
    styleUrls: ['./new-job-listing.component.css']
})

@Injectable()
export class NewJobListingService {
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];


    tags: Tag[] = [];

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        // Add our tag
        if ((value || '').trim()) {
            this.tags.push({ tagName: value.trim() });
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    remove(tag: Tag): void {
        const index = this.tags.indexOf(tag);

        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    }
}
// import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';
// import {Component} from '@angular/core';
// import {MatChipInputEvent} from '@angular/material';

// export interface Fruit {
//   name: string;
// }

/**
 * @title Chips with input
 */
// @Component({
//   selector: 'chips-input-example',
//   templateUrl: 'chips-input-example.html',
//   styleUrls: ['chips-input-example.css'],
// })
// export class ChipsInputExample {
//   visible = true;
//   selectable = true;
//   removable = true;
//   addOnBlur = true;
//   readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];
//   fruits: Fruit[] = [
//     {name: 'Lemon'},
//     {name: 'Lime'},
//     {name: 'Apple'},
//   ];

//   add(event: MatChipInputEvent): void {
//     const input = event.input;
//     const value = event.value;

//     // Add our fruit
//     if ((value || '').trim()) {
//       this.fruits.push({name: value.trim()});
//     }

//     // Reset the input value
//     if (input) {
//       input.value = '';
//     }
//   }

//   remove(fruit: Fruit): void {
//     const index = this.fruits.indexOf(fruit);

//     if (index >= 0) {
//       this.fruits.splice(index, 1);
//     }
//   }
// }


    // addTags(inputTags: [string, string, string, string, string]) {
    //     let i: number;
    //     for (i = 0; i < 5; i++) {
    //         this.jobTags.tagList[i] = inputTags[i];
    //     }
    // }





    //tagsList: Array<string> = [];

    // updateTags(): Tags {
    //     this.jobTags = {
    //         tagList: this.tagsList
    //     };
    //     return this.jobTags;
    // }

//}


// let service = new NewJobListingService;

// service.addTags(["a", "b", "c", "d", "e"]);

// console.log(service.jobTags);
