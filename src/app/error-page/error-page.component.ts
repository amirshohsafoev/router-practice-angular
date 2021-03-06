import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: "app-error-page",
  templateUrl: "./error-page.component.html",
  styleUrls: ["./error-page.component.css"]
})
export class ErrorPageComponent implements OnInit {
  errorMassage: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.errorMassage = this.rou te.snapshot.data['meassage']
    this.route.data.subscribe((data: Data) => {
      this.errorMassage = data["meassage"];
    });
  }
}
