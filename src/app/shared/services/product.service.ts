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
    image:
      'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    methods: [
      {
        icon: 'assets/icons/easel-fill.svg',
        title: 'Proposal Drawing',
        description: 'We provide the customized proposal design service.',
        image:
          'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
        image:
          'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
        image:
          'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
    image:
      'https://www.rosssolar.com/wp-content/uploads/2017/08/commercial-top-level.jpg',
    methods: [
      {
        icon: 'assets/icons/easel-fill.svg',
        title: 'Proposal Drawing',
        description: 'We provide the customized proposal design service.',
        image:
          'https://www.rosssolar.com/wp-content/uploads/2017/08/commercial-top-level.jpg',
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
        image:
          'https://www.rosssolar.com/wp-content/uploads/2017/08/commercial-top-level.jpg',
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
        image:
          'https://www.rosssolar.com/wp-content/uploads/2017/08/commercial-top-level.jpg',
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
    image:
      'https://www.ionenergy.co/wp-content/uploads/2021/06/Large-Scale-Energy-Storage-scaled-1.jpg',
    methods: [
      {
        icon: 'assets/icons/easel-fill.svg',
        title: 'Proposal Drawing',
        description: 'We provide the customized proposal design service.',
        image:
          'https://www.ionenergy.co/wp-content/uploads/2021/06/Large-Scale-Energy-Storage-scaled-1.jpg',
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
        image:
          'https://www.ionenergy.co/wp-content/uploads/2021/06/Large-Scale-Energy-Storage-scaled-1.jpg',
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
        image:
          'https://www.ionenergy.co/wp-content/uploads/2021/06/Large-Scale-Energy-Storage-scaled-1.jpg',
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
    image:
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
    methods: [
      {
        icon: 'assets/icons/easel-fill.svg',
        title: 'Collaborate with us',
        description:
          'We provide the customized design service for EV charging stations.',
        image:
          'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
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
    type: 'Generator Plant Set',
    url: 'generator-plant-set',
    title:
      'The time is right for electric cars - In fact the time is critical.',
    description:
      'Our team of engineers is experienced in generating EV-charger plan-sets that supports safe and efficient installations. We currently designing residential EV-charger plan-sets and our engineers are currently studying to create EV-charging stations design also.',
    image:
      'https://www.frost.com/wp-content/uploads/2021/04/3bce7ae5-b1be-4934-8062-3570fc1185fd_Global-Grid-Battery-Energy-Storage-Market_600X350.jpg',
    methods: [
      {
        icon: 'assets/icons/easel-fill.svg',
        title: 'Proposal Drawing',
        description: 'We provide the customized proposal design service.',
        image:
          'https://www.frost.com/wp-content/uploads/2021/04/3bce7ae5-b1be-4934-8062-3570fc1185fd_Global-Grid-Battery-Energy-Storage-Market_600X350.jpg',
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
        image:
          'https://www.frost.com/wp-content/uploads/2021/04/3bce7ae5-b1be-4934-8062-3570fc1185fd_Global-Grid-Battery-Energy-Storage-Market_600X350.jpg',
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
        image:
          'https://www.frost.com/wp-content/uploads/2021/04/3bce7ae5-b1be-4934-8062-3570fc1185fd_Global-Grid-Battery-Energy-Storage-Market_600X350.jpg',
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
