import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { DataService } from "../Data.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  // Default Constructor
  constructor(private data: DataService, private http: HttpClient) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.data.isLoading.emit(true);

    if (request.url.startsWith('books')) {

      request = request.clone({
        url: request.url.replace('books', `${environment.apiConfig.books}`),
        setParams: {
          'langRestrict': 'en'
        },
        setHeaders: {
          'Content-Type': 'application/json',
        }
      });

      return next.handle(request);
    }
  }
}