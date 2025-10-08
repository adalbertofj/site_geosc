import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('site_geosc');
  photos: any[] = [];
  documents: any[] = [];
  links: any[] = [];

  ngOnInit() {
    this.loadPhotos();
    this.loadDocuments();
    this.loadLinks();
    
    // Escutar evento de recarga
    window.addEventListener('reloadPhotos', () => {
      this.loadPhotos();
    });
    
    window.addEventListener('reloadDocuments', () => {
      this.loadDocuments();
    });
    
    window.addEventListener('reloadLinks', () => {
      this.loadLinks();
    });
    
    // Recarregar a cada 5 segundos
    setInterval(() => {
      this.loadPhotos();
      this.loadDocuments();
      this.loadLinks();
    }, 5000);
  }

  loadPhotos() {
    const savedPhotos = localStorage.getItem('escoteiroPhotos');
    if (savedPhotos) {
      const newPhotos = JSON.parse(savedPhotos);
      if (newPhotos.length !== this.photos.length) {
        this.photos = newPhotos;
        console.log('Fotos atualizadas:', this.photos.length);
      }
    }
  }

  loadDocuments() {
    const savedDocs = localStorage.getItem('escoteiroDocuments');
    if (savedDocs) {
      const newDocs = JSON.parse(savedDocs);
      if (newDocs.length !== this.documents.length) {
        this.documents = newDocs;
        console.log('Documentos atualizados:', this.documents.length);
      }
    }
  }

  loadLinks() {
    const savedLinks = localStorage.getItem('escoteiroLinks');
    if (savedLinks) {
      const newLinks = JSON.parse(savedLinks);
      if (newLinks.length !== this.links.length) {
        this.links = newLinks;
        console.log('Links atualizados:', this.links.length);
      }
    }
  }

  getDocIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'estatuto': 'fas fa-file-contract',
      'financeiro': 'fas fa-chart-line',
      'ata': 'fas fa-file-alt',
      'plano': 'fas fa-calendar',
      'codigo': 'fas fa-shield-alt',
      'outros': 'fas fa-file-pdf'
    };
    return icons[type] || 'fas fa-file-pdf';
  }

  getDocColor(type: string): string {
    const colors: { [key: string]: string } = {
      'estatuto': 'text-primary',
      'financeiro': 'text-success',
      'ata': 'text-info',
      'plano': 'text-warning',
      'codigo': 'text-secondary',
      'outros': 'text-danger'
    };
    return colors[type] || 'text-danger';
  }

  downloadDocument(doc?: any) {
    if (doc && doc.fileData) {
      // Download de documento do localStorage
      const link = document.createElement('a');
      link.href = doc.fileData;
      link.download = doc.fileName || (doc.title + '.pdf');
      link.click();
    } else {
      // Documento padrão não disponível
      alert('Documento não disponível. Use a área administrativa para fazer upload de documentos.');
    }
  }
}