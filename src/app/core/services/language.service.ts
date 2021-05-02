import { Injectable } from "@angular/core";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { Observable, ReplaySubject } from "rxjs";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language$ = new ReplaySubject<LangChangeEvent>(1);

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('zh-tw');
    translateService.use('zh-tw');
  }
  getText(key: string): Observable<string | any> {
    return this.translateService.get('reservation.check.select');
  }

  setInitState() {
    this.translateService.addLangs(['zh-tw']);
    this.setLang('zh-tw');
  }

  setLang(lang: string) {
    this.translateService.onLangChange
      .pipe(take(1))
      .subscribe(result => {
        this.language$.next(result);
      });
    this.translateService.use(lang);
  }
}
