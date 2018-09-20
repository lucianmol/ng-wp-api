import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { NgWpConfig } from './ng-wp-config';

export const CONFIG = new InjectionToken<NgWpConfig>('config');

@NgModule({
	imports: [HttpClientModule],
	exports: [],
	providers: []
})
export class NgWpApiModule {
	public static forRoot(config: NgWpConfig): ModuleWithProviders {
		return {
			ngModule: NgWpApiModule,
			providers: [
				{
					provide: CONFIG,
					useValue: config
				}
			]
		};
	}
}
