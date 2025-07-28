import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ColaboradorService } from './colaborador';

describe('ColaboradorService', () => {
let service: ColaboradorService;

beforeEach(() => {
TestBed.configureTestingModule({
imports: [HttpClientTestingModule],
providers: [ColaboradorService]
});
service = TestBed.inject(ColaboradorService);
});

it('should be created', () => {
expect(service).toBeTruthy();
});
});