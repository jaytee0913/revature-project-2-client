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

}
