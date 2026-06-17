/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'waec'
  | 'training'
  | 'projects'
  | 'partners'
  | 'gallery'
  | 'blog'
  | 'downloads'
  | 'contact'
  | 'admin';

export interface ServicePillar {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  details: string[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  duration: string;
  targetAudience: string;
  curriculum: string[];
}

export interface ProjectEvent {
  id: string;
  title: string;
  category: 'cultural' | 'sports' | 'youth' | 'academic' | 'corporate';
  location: string;
  description: string;
  year: string;
}

export interface Partnership {
  id: string;
  name: string;
  role: string;
  description: string;
  logoPlaceholder: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'training' | 'festivals' | 'youth' | 'school';
  location: string;
  description: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: 'Ed-Tech' | 'Cybersecurity' | 'Corporate Leadership' | 'Cultural Heritage';
  author: string;
  date: string;
  summary: string;
  content: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: 'Corporate' | 'Educational' | 'Schedules';
  fileSize: string;
  description: string;
  filePath: string;
}

export interface InquirySubmission {
  id: string;
  timestamp: string;
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  serviceCategory: string;
  message: string;
  status: 'New' | 'Contacted' | 'Closed';
}
