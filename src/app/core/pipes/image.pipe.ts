import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(path: string): string {
    if (path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    } else {
      return 'https://farm5.staticflickr.com/4363/36346283311_74018f6e7d_o.png';
    }
  }
}
