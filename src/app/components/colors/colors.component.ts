import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { HttpClient } from '@angular/common/http';
import { ColorResponseModel } from '../../models/colorResponseModel';
import { ColorService } from '../../services/color.service';


@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.css'
})
export class ColorsComponent implements OnInit {
  colors: Color[] = [];
  dataLoaded = false;
  selectedColorId: number | null = null;

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
      if (this.colors.length > 0) {
        this.selectedColorId = this.colors[0].id
      }
      this.dataLoaded = true
    });
  }

  selectColor(colorId: number): void {
    this.selectedColorId = colorId;

  }
}
