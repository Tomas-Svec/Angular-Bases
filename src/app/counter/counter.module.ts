import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [ //Exportar modulos
    CounterComponent
  ]
})
export class CounterModule {}
