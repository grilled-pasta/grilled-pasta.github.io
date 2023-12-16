import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent, RouterLink, RouterModule],
  template: `
    <main>
      <header class="brand-name">
        <a [routerLink]="['/']">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </a>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "homes";
}
