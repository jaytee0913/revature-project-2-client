import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';
import { Company } from '../models/company.model';


@Injectable({
  providedIn: 'root'
})
export class JobListingService {

  constructor(private httpClient: HttpClient) {}
  
  // POST request to create new job listing
  createJob(job: any): Observable<Job> {
    const url = `http://localhost:8080/jobs`;
    return this.httpClient.post<Job>(url, job);
  }

    // GET request for all jobs by company
    getJobsByCompany(id: Number): Observable<any> {
      const url = `http://localhost:8080/business/job/${id}`;
      return this.httpClient.get<Array<Job>>(url);
    }

    // UPDATE request to delete for a job id
    deleteJobListing(id: Number): Observable<any>{
      const url = `http://localhost:8080/jobs/updateActive/${id}`;
      return this.httpClient.put<Job>(url, id);
    }

    // GET request for all jobs by company
    getJobs(): Observable<Array<Job>>{
      const url = `http://localhost:8080/jobs`;
      return this.httpClient.get<Array<Job>>(url);
    }

    // POST request to favorite job
    addToFavorites(favJob): Observable<Job> {
      const url = `http://localhost:8080/students/addFav`;
      return this.httpClient.post<Job>(url, favJob);
    } 

    // GET request for student favorite jobs
    getFavJobs(id: Number): Observable<Array<Job>> {
      const url = `http://localhost:8080/students/favJobs/${id}`;
      return this.httpClient.get<Array<Job>>(url);
    }

    // DELETE favorite job
    rmFav(student_id: Number, job_id: Number): Observable<String> {
      const url = `http://localhost:8080/students/removeFav/studentId=${student_id}&jobId=${job_id}`;
      return this.httpClient.delete<String>(url);
    }
}

  // // GET request for all jobs
  // getReimbById(currStatus: number): Observable<any> {
  //   const user_id = this.cookie.get("user_id");
  //   const url = `http://localhost:8080/WalkerReimbursements/emp?i=${user_id}&s=${currStatus}`;
  //   return this.httpClient.get(url);
  // }

  // // GET request for all jobs by type
  // getAllReimbs(currStatus: number): Observable<any>{
  //   const url = `http://localhost:8080/WalkerReimbursements/fm?s=${currStatus}`;
  //   return this.httpClient.get(url);
  // }

  // GET request for all jobs by major



  // GET request for all companies by event


 
//    // POST request to the delete job listing
//   updateReimb(ur: any): Observable<any> {
//     console.log(ur);
//     const url = `http://localhost:8080/WalkerReimbursements/update`;
//     return this.httpClient.post(url, ur);
//   }
// }
