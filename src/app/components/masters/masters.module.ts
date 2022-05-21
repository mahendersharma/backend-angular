import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { CategoryComponent } from './category/category.component';
import { BrandlogoComponent } from './brandlogo/brandlogo.component';
import { TagComponent } from './tag/tag.component';
import { ColorComponent } from './color/color.component';
import { SizeComponent } from './size/size.component';
import { UsertypeComponent } from './usertype/usertype.component';


@NgModule({
  declarations: [
    CategoryComponent,
    BrandlogoComponent,
    TagComponent,
    ColorComponent,
    SizeComponent,
    UsertypeComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule
  ]
})
export class MastersModule { }
