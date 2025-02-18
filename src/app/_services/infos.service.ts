import { Injectable } from '@angular/core';
import { Info } from '../_models/Info';

@Injectable({
  providedIn: 'root'
})
export class InfosService {
  infos: Info[] = [
    {
      id: 0,
      exists: false,
      section: 'Experience',
      title: 'LLM Research Intern',
      company: 'Arizona State University',
      time: 'August 2023 - December 2024',
      summary: 'Collaborated with professors and graduate students to fine-tune large language models that generate verification tests for Verilog designs.',
      icon: 'assets/ASU.svg'
    },
    {
      id: 1,
      exists: true,
      section: 'Experience',
      title: 'Undergraduate TA',
      company: 'Arizona State University',
      time: 'August 2023 - December 2024',
      summary: 'Worked with professors and graduate students to create programming assignments for 100+ Data Structures students and joined weekly curriculum and progress meetings.',
      icon: 'assets/ASU.svg'
    },
    {
      id: 2,
      exists: true,
      section: 'Experience',
      title: 'Retail Associate',
      company: 'BassPro LLC.',
      time: 'June 2022 - Present',
      summary: 'Balanced full-time studies while ensuring excellent customer service and collaborating with my team to handle high-demand sales, generating $10,000–$20,000 in weekly revenue in the hunting department.',
      icon: 'assets/bass-pro-shops.svg'
    },
    {
      id: 3,
      exists: false,
      section: 'Education',
      title: 'BSE Computer Systems',
      company: 'Arizona State University',
      time: 'May 2020 - December 2024',
      summary: 'Recognized as a New American University Scholar and FURI Grant Recipient, with a GPA of 3.62 and Dean’s List honors for four semesters.',
      icon: 'assets/ASU.svg'
    }
  ];
  constructor() { }

  GetInfos() {
    return this.infos;
  }

  GetInfoById(id: number) : Info {
    let info = this.infos.find(info => info.id === id);

    if (info === undefined) {
      throw new TypeError('There is no info that matches the id: ' + id);
    }
    return info;
  }
}
