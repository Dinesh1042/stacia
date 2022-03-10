import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../Models/product';

const products: Product[] = [
  {
    type: 'Residential Solar',
    url: 'residential-solar',
    title:
      'Once you got a solar panel on a roof energy is free. Once we convert our entire electricity.',
    description:
      'We have extensive experience in designing of residential solar system. We provide variety of services in this sector ranging from sales to interconnection. Our teams has in depth knowledge of AHJ and Utility requirements and are acquainted with various codes and compliances.',
    image: 'assets/product-images/residential-solar.jpeg',
    methods: [
      {
        icon: 'assets/icons/easel-fill.svg',
        title: 'Proposal Drawing',
        description: 'We provide the customized proposal design service.',
        image: 'assets/product-images/residential-solar.jpeg',
        info: [
          'Single/Three Line Diagram',
          'Preliminary Solar Assessment (PSA)',
          'Initial Roof and Array Sketch',
          'Shading Analysis',
          'Calculation of ROI',
          'PR estimate using industry leading software like Aurora, Helioscope, PVSyst, etc',
        ],
      },
      {
        icon: 'assets/icons/boxes.svg',
        title: 'Permit Package',
        description: 'We provide you with the complete design packages.',
        image: 'assets/product-images/residential-solar.jpeg',
        info: [
          'Single/Three Line Diagram',
          'Preliminary Solar Assessment (PSA)',
          'Initial Roof and Array Sketch',
          'Shading Analysis',
          'Calculation of ROI',
          'PR estimate using industry leading software like Aurora, Helioscope, PVSyst, etc',
        ],
      },
      {
        icon: 'assets/icons/award-fill.svg',
        title: 'Stamping',
        description: 'We provide the stamping as per the requirements.',
        image: 'assets/product-images/residential-solar.jpeg',
        info: [
          'Single/Three Line Diagram',
          'Preliminary Solar Assessment (PSA)',
          'Initial Roof and Array Sketch',
          'Shading Analysis',
          'Calculation of ROI',
          'PR estimate using industry leading software like Aurora, Helioscope, PVSyst, etc',
        ],
      },
    ],
  },
  {
    type: 'Commercial Solar',
    url: 'commercial-solar',
    title:
      'Our solar system is actually a wild frontier, teeming with different, diverse places planets and moons, millions of objects of ice and rocks.',
    description:
      'Experience in designing systems from 20kw up to several hundred kW in this sector. We provide detailed commercial design sets compatible to the codes.',
    image: 'assets/product-images/commercial-solar.jpeg',
    methods: [
      {
        icon: 'assets/icons/easel-fill.svg',
        title: 'Proposal Drawing',
        description: 'We provide the customized proposal design service.',
        image: 'assets/product-images/commercial-solar.jpeg',
        info: [
          'Single/Three Line Diagram',
          'Preliminary Solar Assessment (PSA)',
          'Initial Roof and Array Sketch',
          'Shading Analysis',
          'Calculation of ROI',
          'PR estimate using industry leading software like Aurora, Helioscope, PVSyst, etc',
        ],
      },
      {
        icon: 'assets/icons/boxes.svg',
        title: 'Permit Package',
        description: 'We provide you with the complete design packages.',
        image: 'assets/product-images/commercial-solar.jpeg',
        info: [
          'Single/Three Line Diagram',
          'Preliminary Solar Assessment (PSA)',
          'Initial Roof and Array Sketch',
          'Shading Analysis',
          'Calculation of ROI',
          'PR estimate using industry leading software like Aurora, Helioscope, PVSyst, etc',
        ],
      },
      {
        icon: 'assets/icons/award-fill.svg',
        title: 'Stamping',
        description: 'We provide the stamping as per the requirements.',
        image: 'assets/product-images/commercial-solar.jpeg',
        info: [
          'Single/Three Line Diagram',
          'Preliminary Solar Assessment (PSA)',
          'Initial Roof and Array Sketch',
          'Shading Analysis',
          'Calculation of ROI',
          'PR estimate using industry leading software like Aurora, Helioscope, PVSyst, etc',
        ],
      },
    ],
  },
  {
    type: 'Energy Storage System',
    url: 'energy-storage-system',
    title: 'Put good Energy in and get good energy back.',
    description:
      'Backup systems with AC coupled batteries like Telsa Powerwall 2.0 with solarEdge or micro-inventor. Backup system with DC coupled batteries like LG chem with SolarEdge - Store Edge inventors and also SolarEdge backup interface. Backup system with Enphase  Ensemble system with encharge.',
    image: 'assets/product-images/energy-storage-system.jpg',
    methods: [
      {
        icon: 'assets/icons/easel-fill.svg',
        title: 'Proposal Drawing',
        description: 'We provide the customized proposal design service.',
        image: 'assets/product-images/energy-storage-system.jpg',
        info: [
          'Single/Three Line Diagram',
          'Preliminary Solar Assessment (PSA)',
          'Initial Roof and Array Sketch',
          'Shading Analysis',
          'Calculation of ROI',
          'PR estimate using industry leading software like Aurora, Helioscope, PVSyst, etc',
        ],
      },
      {
        icon: 'assets/icons/boxes.svg',
        title: 'Permit Package',
        description: 'We provide you with the complete design packages.',
        image: 'assets/product-images/energy-storage-system.jpg',
        info: [
          'Single/Three Line Diagram',
          'Preliminary Solar Assessment (PSA)',
          'Initial Roof and Array Sketch',
          'Shading Analysis',
          'Calculation of ROI',
          'PR estimate using industry leading software like Aurora, Helioscope, PVSyst, etc',
        ],
      },
      {
        icon: 'assets/icons/award-fill.svg',
        title: 'Stamping',
        description: 'We provide the stamping as per the requirements.',
        image: 'assets/product-images/energy-storage-system.jpg',
        info: [
          'Single/Three Line Diagram',
          'Preliminary Solar Assessment (PSA)',
          'Initial Roof and Array Sketch',
          'Shading Analysis',
          'Calculation of ROI',
          'PR estimate using industry leading software like Aurora, Helioscope, PVSyst, etc',
        ],
      },
    ],
  },
  {
    type: 'EV Charging Stations',
    url: 'ev-charging-stations',
    title:
      'The time is right for electric cars - In fact the time is critical.',
    description:
      'Our team of engineers is experienced in generating EV-charger plan-sets that supports safe and efficient installations. We currently designing residential EV-charger plan-sets and our engineers are currently studying to create EV-charging stations design also.',
    image: 'assets/product-images/ev-charging.jpeg',
    methods: [
      {
        icon: 'assets/icons/easel-fill.svg',
        title: 'Collaborate with us',
        description:
          'We provide the customized design service for EV charging stations.',
        image: 'assets/product-images/ev-charging.jpeg',
        info: [
          'Single/Three Line Diagram',
          'Preliminary Solar Assessment (PSA)',
          'Initial Roof and Array Sketch',
          'Shading Analysis',
          'Calculation of ROI',
          'PR estimate using industry leading software like Aurora, Helioscope, PVSyst, etc',
        ],
      },
    ],
  },
  {
    type: 'Generator Plan Set',
    url: 'generator-plan-set',
    title:
      'The time is right for electric cars - In fact the time is critical.',
    description:
      'Our team of engineers is experienced in generating EV-charger plan-sets that supports safe and efficient installations. We currently designing residential EV-charger plan-sets and our engineers are currently studying to create EV-charging stations design also.',
    image: 'assets/product-images/generator-plan-set.png',
    methods: [
      {
        icon: 'assets/icons/easel-fill.svg',
        title: 'Proposal Drawing',
        description: 'We provide the customized proposal design service.',
        image: 'assets/product-images/generator-plan-set.png',
        info: [
          'Single/Three Line Diagram',
          'Preliminary Solar Assessment (PSA)',
          'Initial Roof and Array Sketch',
          'Shading Analysis',
          'Calculation of ROI',
          'PR estimate using industry leading software like Aurora, Helioscope, PVSyst, etc',
        ],
      },
      {
        icon: 'assets/icons/boxes.svg',
        title: 'Permit Package',
        description: 'We provide you with the complete design packages.',
        image: 'assets/product-images/generator-plan-set.png',
        info: [
          'Single/Three Line Diagram',
          'Preliminary Solar Assessment (PSA)',
          'Initial Roof and Array Sketch',
          'Shading Analysis',
          'Calculation of ROI',
          'PR estimate using industry leading software like Aurora, Helioscope, PVSyst, etc',
        ],
      },
      {
        icon: 'assets/icons/award-fill.svg',
        title: 'Stamping',
        description: 'We provide the stamping as per the requirements.',
        image: 'assets/product-images/generator-plan-set.png',
        info: [
          'Single/Three Line Diagram',
          'Preliminary Solar Assessment (PSA)',
          'Initial Roof and Array Sketch',
          'Shading Analysis',
          'Calculation of ROI',
          'PR estimate using industry leading software like Aurora, Helioscope, PVSyst, etc',
        ],
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getAllProducts(): Observable<Product[]> {
    return of(products);
  }
}
