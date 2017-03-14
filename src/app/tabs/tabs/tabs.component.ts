import { TabComponent } from '../tab/tab.component';
import { Component, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit { //AfterContentInit

  private tabs: Array<TabComponent> = [];
  //@ContenChildren(TabComponent)
  //tabs: Querylist<TabComponent>;

  constructor() { }

  
  ngOnInit() {
    
  }
  /*ngAfterContentInit(){
    this.select(this.tabs.first);
  }*/

  addTab(tab : TabComponent){
    if(this.tabs.length === 0){
      tab.selected = true;
      
    }
    this.tabs.push(tab);
  }

  select(tab: TabComponent){
    this.tabs.forEach((tab) => {
      tab.selected = false;
      
    })
    tab.selected = true;
  }


}
