/*
* File: verziokezeles.component.ts
* Author: Siegenthaler Alexandra 
* Copyright: 2025, Siegenthaler Alexandra 
* Group: Szoft II/2/E
* Date: 2025-11-21
* Github: Siegenthaler Alexandra
* Licenc: MIT
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-verziokezeles',
  standalone: true,
  imports: [],
  templateUrl: './verziokezeles.component.html',
  styleUrl: './verziokezeles.component.css'
})
export class VerziokezelesComponent {

    szoftverVerziok = [
    { verzio: '3.0.0', datum: '2025-02-10', csapat: 'Alpha', hibak: 5, ujFunkciok: 3 },
    { verzio: '2.5.1', datum: '2024-12-01', csapat: 'Beta', hibak: 12, ujFunkciok: 1 },
    { verzio: '2.4.0', datum: '2024-09-20', csapat: 'Alpha', hibak: 3, ujFunkciok: 4 },
    { verzio: '2.3.5', datum: '2024-07-15', csapat: 'Gamma', hibak: 8, ujFunkciok: 0 },
    { verzio: '2.3.0', datum: '2024-05-30', csapat: 'Alpha', hibak: 6, ujFunkciok: 2 },
    { verzio: '2.2.1', datum: '2024-03-01', csapat: 'Beta', hibak: 15, ujFunkciok: 0 },
    { verzio: '2.2.0', datum: '2024-01-15', csapat: 'Gamma', hibak: 4, ujFunkciok: 1 },
    { verzio: '2.1.5', datum: '2023-11-05', csapat: 'Alpha', hibak: 10, ujFunkciok: 0 }
  ];
verziokezeles: any;

get osszesHibajavitas(): number {
  return this.szoftverVerziok.reduce((osszeg, elem) => osszeg + elem.hibak, 0);
}
}