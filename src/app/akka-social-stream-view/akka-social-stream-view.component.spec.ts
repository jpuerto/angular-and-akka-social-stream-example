import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkkaSocialStreamViewComponent } from './akka-social-stream-view.component';

describe('AkkaSocialStreamViewComponent', () => {
  let component: AkkaSocialStreamViewComponent;
  let fixture: ComponentFixture<AkkaSocialStreamViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkkaSocialStreamViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkkaSocialStreamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
