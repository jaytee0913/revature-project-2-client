import { Injectable } from '@angular/core';
import { Tags } from './../models/Tags.model';

@Injectable()
export class NewJobListingService {

    jobTags: Tags = { 
        tagList: []
    };

    //tagsList: Array<string> = [];

    addTag(inputTags: string) {
        this.jobTags.tagList.push(inputTags);
    }

    // updateTags(): Tags {
    //     this.jobTags = {
    //         tagList: this.tagsList
    //     };
    //     return this.jobTags;
    // }

}


// let service = new NewJobListingService;

// service.addTag("one");
// service.addTag("two");
// service.addTag("three");

// console.log(service.jobTags);
